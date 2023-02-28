import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
function FeaturedPosts({state}) {
    // console.log(state)
  return (
    <div className="featured-blogs-wrapper">
            <div className="container">
            <div className="blogs-items">
                {state.map((item,index) => (
                    <div key={index} className="featured-blogs">
                        <Link to={`featured/${item.slug}`}>
                            <div className="text-layer">
                                <div className="badge">
                                    {item.categories.map((category,index) => {
                                        return <span key={`key-${index}`}>{category.categoryName}</span>
                                    })}
                                </div>
                                {index < 1 ? <h1>{item.title}</h1> : <h2>{item.title}</h2>}
                                <div className="authors-row">
                                    <img src={item.author.avatar.url} alt="avatar" />
                                    <span>{item.author.name}, {moment(item.createdTimeAndDate).format("Do of MMM YYYY")}</span>
                                </div>
                            </div>
                            <img src={item.coverPicture.url} alt="post" />
                        </Link>
                    </div>
                ))}
                {/* <div className="featured-blogs">
                    <Link>
                        <div className="text-layer">
                            <div className="badge">
                                <span>Quotes</span>
                                <span>Book</span>
                            </div>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <div className="authors-row">
                                <img src={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="avatar" />
                                <span>John Doe, Fabruary 20, 2023</span>
                            </div>
                        </div>
                        <img src="https://images.pexels.com/photos/977304/pexels-photo-977304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" />
                    </Link>
                </div> */}
                {/* <div className="featured-blogs">
                    <Link>
                        <div className="text-layer">
                            <div className="badge">
                                <span>Quotes</span>
                                <span>Book</span>
                            </div>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <div className="authors-row">
                                <img src={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="avatar" />
                                <span>John Doe, Fabruary 20, 2023</span>
                            </div>
                        </div>
                        <img src="https://images.pexels.com/photos/977304/pexels-photo-977304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" />
                    </Link>
                </div> */}
                </div>
            </div>
        </div>
  )
}

export default FeaturedPosts
