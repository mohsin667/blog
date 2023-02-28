import React,{useState,useEffect} from 'react'
import { getAllFeaturedPost } from '../services/api'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Loader from '../components/Loader'

function FeaturedPost() {
  const [post,setPost] = useState()
  const [loading, setLoading] = useState(true) 
  const {id} = useParams()
  useEffect(() => {
    getAllFeaturedPost(id).then(res => {
      setPost(res)
    }).catch(er => {
      setLoading(true)
      console.log(er)
    }).finally(() => setLoading(false))
  },[])
  console.log(post)
  return (
    <>
    {
      loading ? <Loader /> : <div className='blog-post'>
      <Header data={false} />
      <div className="container">
        {
          post && post.featuredpost && <div className='single-post'>
            <h1>{post.featuredpost.title}</h1>
            <div className="inline-text">
              <p>{moment(post.featuredpost.createdTimeAndDate).format("MMM D, YYYY")} {" "}
                {post.featuredpost.categories.map((item,index) => (
                  <span className='categories' key={index}>{item.categoryName} {","}</span>
                ))}
              </p>
            </div>
            <img src={post.featuredpost.coverPicture.url} alt="post-image" />
            <div className='richText'>
              <RichText content={post.featuredpost.descripition.raw.children} />
            </div>
          </div>
        }
      </div>
  </div>
    }
      
    </>
  )
}

export default FeaturedPost
