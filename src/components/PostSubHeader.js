import React from 'react'

const PostSubHeader = (props) => {
  return (
	<div className='post-sub-header'>
    	<div id="post-sub-header-1">
      		<ul>
	      		<li><h4>article</h4></li>
	      		<li><h4>share</h4></li>
	      	</ul>
	    </div>
    	<div id="post-sub-header-2">
	      	<ul>
		      <li><h1>{props.post.title.rendered}</h1></li>
		     </ul>
	    </div>
    	<div id="post-sub-header-3">
      		<ul>
	      		<li><h4>article</h4></li>
	      		<li><h4>store picks</h4></li>
	     	</ul>
	    </div>
    </div>
  )
}

export default PostSubHeader
