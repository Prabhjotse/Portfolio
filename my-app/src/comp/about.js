import React from 'react';
import './about.css';

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
            <div className="top_container">
                <div className="left_box">
                    <div className="contant">
                        <div className="img_box">
                            <img src="img/me2.png" alt="me" ></img>
                        </div>
                    
                    </div>
                </div>

                <div className="right_box">
                  <div className="contant">
                    <div className="heading">
                      <img src="img/star-2.png" alt="star" ></img>
                      <h2>Self-Summery</h2>
                      <img src="img/star-2.png" alt="start" ></img>
                    </div>
                    <div className="detail">
                      <img src="img/icon2.png" alt="icon" ></img>
                      <div className="info">
                        <h3>Prabhjot Singh</h3>
                        <p> I am a Frontend-devaloper with focus on building my-skills seats in frontend only.
                           And after my-graducation I become a full time developer and any startup.And wanted to make my 
                           future in tech only and wanted to learn more skills which is requirwd in company or
                            a startup .</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="mid_container">
              <div className="container">

                <div className="exp">
                  <h2>Experience</h2>
                  <div className="box">
                    <p>2022-2024</p>
                    <h3>Frontend-developer & Designer</h3>
                    <p>Bluebase Designs</p>
                  </div>
                  <div className="box">
                    <p>2022-2024</p>
                    <h3>Frontend-developer & Designer</h3>
                    <p>India</p>
                  </div>
                </div>
                <div className="edu">
                  <h2>Education</h2>
                  <div className="box">
                    <p>2021-2022</p>
                    <h3>12th From Mahatama Hansraj School Jhansi</h3>
                    <p>Physics , Chemistry , Maths</p>
                  </div>
                  <div className="box">
                    <p>2019-2020</p>
                    <h3>Frontend-developer & Designer</h3>
                    <p>India</p>
                  </div>
                </div>

              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default About;
