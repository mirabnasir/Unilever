import React from 'react';
import './Article.css';
import ArticleImage1 from '../../assets/article-image1.jpg';
import ArticleImage2 from '../../assets/article-image2.jpg';
import ArticleImage3 from '../../assets/article-image3.jpg';
import ArticleImage4 from '../../assets/article-image4.jpg';
import ArticleImage5 from '../../assets/article-image5.jpg';

const Article = () => {
  return (
    <div className="news-container">
      <h2 className="news-header">Latest News</h2>
      <div className="news-main">
        <div className="main-article">
          <img 
            src={ArticleImage1} 
            alt="COP29 Flag" 
            className="main-image" 
          />
          <p className="article-type">News article</p>
          <div className="main-content">
            <h3 className="main-title">
              COP29: five ways business and government can collaborate on climate
            </h3>
            <p className="main-date">9 November 2024</p>
            <p className="main-description">
              Ahead of the UN climate conference (COP29), Unilever has outlined five ways 
              governments can drive a faster transition to net zero. Learn why we believe 
              governments and business must collaborate to scale up climate action successfully.
            </p>
          </div>
        </div>
        <div className="side-articles">
          <div className="side-article">
            <img src={ArticleImage2} alt="Article 1" />
            <p className="article-type">News article</p>
            <h4 className="side-title">
              Unilever boosts investment in packaging R&D to cut virgin plastic
            </h4>
            <p className="side-date">8 November 2024</p>
          </div>
          <div className="side-article">
            <img src={ArticleImage3} alt="Article 2" />
            <p className="article-type">Press release</p>
            <h4 className="side-title">
              Unilever Pakistan's “Sustainability Accelerator” Strategy to lead environmental and social impact
            </h4>
            <p className="side-date">5 November 2024</p>
          </div>
          <div className="side-article">
            <img src={ArticleImage4} alt="Article 3" />
            <p className="article-type">News article</p>
            <h4 className="side-title">
              How Unilever's implementing regenerative agriculture practices across 1 million hectares
            </h4>
            <p className="side-date">23 September 2024</p>
          </div>
          <div className="side-article">
            <img src={ArticleImage5} alt="Article 4" />
            <p className="article-type">News article</p>
            <h4 className="side-title">
              Addressing the climate crisis: a unified approach from business and government
            </h4>
            <p className="side-date">23 September 2024</p>
          </div>
        </div>
      </div>
      <button className="view-all-button">View all news <span>▶</span></button>
    </div>
  );
};

export default Article;
