import React from 'react'
import logo from '../react.png';

const Post = () => {

    const posts = [
        {name: "react2", author: 'Muhammad', img: logo , details: 'This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen. '},
        {name: "react2", author: 'Leyan', img: logo , details: 'This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen. '},
        {name: "react2", author: 'Muhammad', img: logo , details: 'This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen. '},
        {name: "react2", author: 'Leyan', img: logo , details: 'This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen. '},
        {name: "react2", author: 'Muhammad', img: logo , details: 'This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen. '},
    ]

  return (
      <>
    {posts.map((post)=>
        <div className="post">
        
    <div className="post-picture">
        <img src={post.img} />
    </div>
    <div className="post-info">
        <h1>{post.title}</h1>
        <span>By: {post.author}</span>
        <p>{post.details} </p>
    </div>
  </div>
        )}
    </>
  )
}

export default Post