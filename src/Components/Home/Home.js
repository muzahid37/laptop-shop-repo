import React from 'react';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import './Home.css'

const Home = () => {
    const bannerImg={
        "img":"https://imboldn.com/wp-content/uploads/2020/01/HP-Elite-Dragonfly-main.jpg"
    }
    const {img}=bannerImg;
    return (
        <div>
           <div className="banner">
               <div className="banner_decription">
                   <h2>Buy your fabrite labtob </h2>
                   <p>We are 24 hours ready for number one service. our shop is the most populer shop on this area </p>

               </div>
               <div className="banner-Image">
                   <img src={img} alt="" />
               </div>

           </div>
           <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;