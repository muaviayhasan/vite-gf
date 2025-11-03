import React, { Component } from 'react';
import Slider from 'react-slick';

import {Slider6} from "../../../services/script";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class LogoBlock extends Component {

    

    render (){

        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 6,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 6,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 3,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };

        return (
          <section className="section-b-space">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={2000}
                    autoPlay={true}
                    centerMode={true}
                    keyBoardControl={true}
                    transitionDuration={500}
                    removeArrowOnDeviceType={[
                      "tablet",
                      "mobile",
                      "desktop",
                      "superLargeDesktop"
                    ]}
                  >
                    <div className="logo-block">
                      <a href={null}>
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img1.png`}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="logo-block">
                      <a href={null}>
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img2.jpg`}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="logo-block">
                      <a href={null}>
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img3.jpg`}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="logo-block">
                      <a href={null}>
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img6.jpg`}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="logo-block">
                      <a href={null}>
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img7.jpg`}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="logo-block">
                      <a href={null}>
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img10.jpg`}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="logo-block">
                      <a href={null}>
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img11.jpg`}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="logo-block">
                      <a href={null}>
                        <img
                          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img35.jpg`}
                          alt=""
                        />
                      </a>
                    </div>
                
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img1.png`}
                            alt=""
                          />
                        </a>
                      </div>
                  
                 
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img12.png`}
                            alt=""
                          />
                        </a>
                      </div>
                  
                
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img14.png`}
                            alt=""
                          />
                        </a>
                      </div>
                
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img15.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img17.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img18.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img19.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img20.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img21.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img22.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img23.png`}
                            alt=""
                          />
                        </a>
                      </div>
                  
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img25.png`}
                            alt=""
                          />
                        </a>
                      </div>
                  
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img26.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img27.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img28.png`}
                            alt=""
                          />
                        </a>
                      </div>
                    
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img29.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img30.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                      <div className="logo-block">
                        <a href={null}>
                          <img
                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/brands/brand-img31.png`}
                            alt=""
                          />
                        </a>
                      </div>
                   
                  </Carousel>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default LogoBlock;