import React,{useState,useEffect} from 'react'
import { getAllCategories, getCategory, getPosts } from '../services/api'

function PostCategories({setState,stateObject}) {
  const [categories,setCategories] = useState()
  useEffect(()=> {
    getAllCategories().then(res=> {
      setCategories(res)
    })
  },[])
  const handleCategoriesClick = (id) => {
    getCategory(id).then(res => {
      console.log(res)
      let temp = {...stateObject}
      console.log(temp)
      temp[1].posts = res.category.posts
      setState(temp)
    })
  }

  const getAllPosts = () => {
    getPosts().then(res => {
      let temp = {...stateObject}
      console.log(temp)
      temp[1].posts = res.posts
      setState(temp)
    }).catch(er => {
      console.log(er)
    })
  }

  return (
    <div className="post-categories">
        <h2>Categories</h2>
        <span onClick={getAllPosts}>All</span>
        {categories && categories.categories.map((cat,ind)=> (
          <span onClick={()=> handleCategoriesClick(cat.id)} key={ind}>{cat.categoryName}</span>
        ))}
    </div>
  )
}

export default PostCategories
