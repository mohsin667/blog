import React from 'react'
import Header from "../components/Header";

function InvalidPage() {
  return (
    <>
      <Header data={false} />
      <div className='not-found'>
          <img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=826&t=st=1677610651~exp=1677611251~hmac=0eea962397f377aa9e772eaa5cb86a8e40d2923a0dc3615acd2e0219b793bdc2" alt="Not Found" />
      </div>
    </>
  )
}

export default InvalidPage

