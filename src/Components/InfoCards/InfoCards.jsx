import React from 'react';
import './InfoCards.css';
import mediaimage1 from "../../assets/media-image1.jpg"
import mediaimage2 from "../../assets/media-image2.jpg"
import mediaimage3 from "../../assets/media-image3.jpg"
import { MdSearch } from 'react-icons/md';
const InfoCards = () => {
  const cardData = [
    {
      title: 'Sustainability',
      description: 'We have been driving an ambitious sustainability agenda for over two decades. Yet, in the face of ever-growing economic, environmental and social challenges, we are evolving our approach.',
      image: mediaimage1, 
    },
    {
      title: 'Careers at Unilever',
      description: 'Visit our dedicated careers site to browse vacancies and find information about what it’s like working for us.',
      image: mediaimage2, 
    },
    {
      title: 'Press & Media',
      description: 'Press releases and media contact information for journalists and commentators.',
      image: mediaimage3, 
    }
  ];

  return (
    <div className="info-cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="info-card">
          <img src={card.image} alt={card.title} className="info-card-image" />
          <h3 className="info-card-title">{card.title}</h3>
          <p className="info-card-description">{card.description}</p>
        </div>
      ))}
      <div className="search-container">
      <h1>Search Unilever Pakistan</h1>
       <div className="search-bar">
        <input type="text" placeholder="Enter keywords to search" />
        <button>
          <MdSearch />
        </button>
      </div>
      </div>
    </div>
    
  );
};

export default InfoCards;
