import React, {PropTypes} from 'react';
import Article from './Article';

const ArticleList = (props) => {
  return (
    <div className='content-articles'>
      {props.articles.map((article) => 
        <Article key={article.id} article={article} />  
      )}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array
};

export default ArticleList;
