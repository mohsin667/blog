import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineLink} from 'react-icons/ai'
import PostCategories from './PostCategories'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'
function Posts({state,stateObject,setState}) {
  return (
    <section>
        <div className="container">
            <br /><br /><br />
            <div className="post-categories-wrapper">
                <div className="post-cards-category">
                    {state.map((item,index) => (
                        <div key={index} className="card">
                            <img src={item.coverPicture.url} alt="post" />
                            <div className="text-span">
                                <br />
                                <div className="card-author-row">
                                    <img src={item.author.avatar.url} alt="author" />
                                    <small>{moment(item.createdTimeAndDate).format("Do of MMM YYYY")}</small>
                                    <small className='author-name'>John Doe</small>
                                </div>
                                <h2>{item.title}</h2>
                                <RichText 
                                    content={item.descripition.raw}
                                    renderers={{
                                        p:({children})=> <p>{children}</p>
                                    }}
                                />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, laborum.</p>
                                <Link to={`post/${item.slug}`}>Read More <AiOutlineLink /></Link>
                            </div>
                        </div>
                    ))}
                    
                </div>
                <PostCategories state={state} stateObject={stateObject} setState={setState}/>
            </div>
        </div>
    </section>
  )
}

export default Posts
