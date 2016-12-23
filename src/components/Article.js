import React, {PropTypes} from 'react'
import { Link } from 'react-router'

const Article = ({article}) => {
  return (
    <div id='content-article'>
      <Link to={`/magazine/${article.id}`}><h1>{article.title.rendered}</h1></Link>
      <h2 dangerouslySetInnerHTML={{__html: article.content.rendered}} />
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.object
}

export default Article
