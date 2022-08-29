import React from 'react';
import './article.css';

const Article = ({imgUrl,text,date}) => {
  return (
    <div className='gpt3__article'>
    <div className='gpt3__article-image'>
    <img src={imgUrl} alt="blog_image" />
    </div>

    <div className='gpt3__article-text'>   
     <p>{date}</p>
     <h3>{text}</h3>
     <p>Read full article</p>
    </div>
  </div>
  );
};

export default Article;