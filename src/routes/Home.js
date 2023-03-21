import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import '../styles/home.css'
import mainImg from '../assets/images/mainImg.png'
import mainImg2 from '../assets/images/mainImg2.png'
import piece1 from '../assets/images/piece1.png'
import piece2 from '../assets/images/piece2.png'
import piece3 from '../assets/images/piece3.png'
import piece4 from '../assets/images/piece3.png'

function Home() {
  return (
    <div className="home">
      <h1 className="title">Confidence and style in motion</h1>

      <div className="img-container">

        <div className="img-para">
          <p><span className="img-para-span">Crafted with</span> high-performance fabrics, our active wear provides unparalleled comfort and support.</p>
        </div>

        <div className="main-img">
        <img src={mainImg} alt="My Image" />

        <div className="cta-btn">
        <button class="cta">
          <span class="hover-underline-animation"> Shop now </span>
          <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
          </svg>
        </button>
      </div>
        </div>

        
      </div>

      

      <div className="home-about">
          <p>Crafted withhigh-performance fabrics, our active wear provides unparalleled comfort and support.</p>
        </div>

        <div className="img-container2">

          <div className="home-para1">
            <p>Drawing inspiration from the effortless style of beautiful men and women who are always on the go, our collection of active and basic wear is designed to keep you comfortable, confident, and ready for anything.</p>
          </div>


          <div className="year">2021</div>

          <div className="home-para2">Drawing inspiration from the effortless style of beautiful men and women who are always on the go, our collection of active and basic wear is designed to keep you comfortable, confident, and ready for anything.</div>
          
          <div className="main-img2">
          <img src={mainImg2} alt="My Image" />
          </div>
          
          
        </div>


        <div className="pieces-container">

            <div className="pieces-para">
              <h1>New Pieces</h1>
              <p>Galaxy Collection</p>
            </div>

            

            <div className="piece-container">
            <div className="piece-no">
                001
              </div>
              <div className="piece-img">
                <img src={piece1} alt="piece"/>
              </div>
              <div className="piece-title">
                French girl Sports Bra
              </div>
              <div className="piece-price">
                28USD
              </div>
            </div>

            <div className="piece-container">
            <div className="piece-no">
                002
              </div>
              <div className="piece-img">
                <img src={piece2} alt="piece"/>
              </div>
              <div className="piece-title">
                French girl Sports Bra
              </div>
              <div className="piece-price">
                28USD
              </div>
            </div>

            <div className="piece-container">
            <div className="piece-no">
                003
              </div>
              <div className="piece-img">
                <img src={piece3} alt="piece"/>
              </div>
              <div className="piece-title">
                French girl Sports Bra
              </div>
              <div className="piece-price">
                28USD
              </div>
            </div>

            <div className="piece-container">
            <div className="piece-no">
                004
              </div>
              <div className="piece-img">
                <img src={piece1} alt="piece"/>
              </div>
              <div className="piece-title">
                French girl Sports Bra
              </div>
              <div className="piece-price">
                28USD
              </div>
            </div>

            


        </div>
        
        
    </div>
  );
}

export default Home;
