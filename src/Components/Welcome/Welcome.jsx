import React from "react";
import "./Welcome.css";
import { FaArrowRight } from "react-icons/fa";
import welcomeImage from "../../assets/welcome-image.jpg";

const Welcome = () => {
    return (
        <div className="welcome-section">
            <div className="welcome-content">
                <div className="welcome-text">
                    <h1>
                        <span>Welcome to</span>
                        <span>Unilever</span>
                        <span>Pakistan</span>
                    </h1>
                </div>
                <div className="welcome-image">
                    <img src={welcomeImage} alt="Welcome Illustration" />
                </div>
            </div>
            <h1 className="text">We are Unilever Pakistan</h1>
            <div className="unilever-stats">
           
                <ul>
                    <li>
                        <span>75</span>
                        <span>years</span>
                        <p>of Sustainable Business in Pakistan</p>
                    </li>
                    <li>
                        <span>Over 30</span>
                        <span>brands</span>
                        <p>in our market</p>
                    </li>
                    <li>
                        <span>#1</span>
                        <span>Employer of Choice</span>
                        <p>for the past 13 years</p>
                    </li>
                    <li>
                        <span>In 90%</span>
                        <span>of Pakistani households</span>
                    </li>
                </ul>
            </div>
            <div className="find-more">
              <button>Find more about our company</button>
              <div className="arrow-icon">
              ▶ 
              </div>
            </div>

        </div>
    );
};

export default Welcome;
