import React from 'react'

function Footer() {
  return (
    <footer>
        <span dangerouslySetInnerHTML={{"__html":"&copy;"}}/> {" "}
        DevShala {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
