import React from 'react'

const RelatedPosts = (props) => {
  return (
	<div className='related-posts'>
		<div id='related-posts-header'>
			<h4>Related Posts</h4>
		</div>
		<div id='related-posts-content'>
	    	<div id="related-post">
	    		<h2>Title</h2>
	    		<h3>post</h3>
		    </div>
		    <div id="related-post">
	    		<h2>Title</h2>
	    		<h3>post</h3>
		    </div>
		    <div id="related-post">
	    		<h2>Title</h2>
	    		<h3>post</h3>
		    </div>
		    <div id="related-post">
	    		<h2>Title</h2>
	    		<h3>post</h3>
		    </div>
	    </div>
    </div>
  )
}

export default RelatedPosts
