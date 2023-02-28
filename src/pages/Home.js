import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts'
import {featuredPost, getPosts} from '../services/api'
import Loader from '../components/Loader'
function Home() {
    const [state, setState] = useState()
    const [loading, setLoading] = useState(true) 
    useEffect(()=> {
        const featuredApi = featuredPost()
        const getPostsApi = getPosts()
        Promise.all([featuredApi,getPostsApi]).then(res => {
            setState(res)
            
        }).catch(error => {
            setLoading(true)
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    },[])
  return (
    <>
        {loading ? <Loader /> :  <>
            <Header data={true} state={state[0].featuredPosts}/>
            <Posts state={state[1].posts} stateObject={state} setState={setState}/>
        </>
        }
    </>
  )
}

export default Home
