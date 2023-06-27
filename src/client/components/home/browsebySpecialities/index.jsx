import React, { Component } from 'react';
import { CAT01,CAT02,CAT03,CAT04,CAT05 } from './img.jsx';


    const BrowsebySpecialities =(props)=> {
   
       
        return(
          <section id='ourbranch' className="section section-category" style={{paddingTop:"100px"}}>
          <div className="container">
            <div className="section-header text-center">
              <h2>Our Branches</h2>
              <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT01} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Howrah</h4>
                    <span>21 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT02} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>New Town</h4>
                    <span>18 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT03} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Malda Town</h4>
                    <span>17 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT04} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Hoogly</h4>
                    <span>12 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT05} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Darjeeling</h4>
                    <span>07 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT01} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Jalpaiguri</h4>
                    <span>16 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT04} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Purulia</h4>
                    <span>18 Doctors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="category-box">
                  <div className="category-image">
                    <img src={CAT03} alt="" />
                  </div>
                  <div className="category-content">
                    <h4>Jhargram</h4>
                    <span>22 Doctors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
    }

export default BrowsebySpecialities;