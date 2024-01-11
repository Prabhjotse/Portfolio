import React from 'react';
import './work.css';

const Work = () => {
  return (
    <>
      <div className="work">
        <div className="container">
            <div className="left">
                <div className="contant">

                    <div className="box">
                        <div className="img_box">
                            <img src="img/project1.jpeg" alt="project" ></img>
                        </div>
                        <p>Web design</p>
                        <h3>dynamic</h3>
                    </div>

                    <div className="box">
                        <div className="img_box">
                            <img src="img/project2.jpeg" alt="project" ></img>
                        </div>
                        <p>Photography</p>
                        <h3>disel h1</h3>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="heading">
                    <img src="img/star-2.png" alt="star" />
                    <h2>All project</h2>
                    <img src="img/star-2.png" alt="star" />
                </div>
                <div className="contant">

                    <div className="box">
                        <div className="img_box">
                            <img src="img/project3.jpeg" alt="project" ></img>
                        </div>
                        <p>Mobile desihning</p>
                        <h3>seven studio</h3>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="img/project4.jpeg" alt="project" ></img>
                        </div>
                        <p>Mobile desihning</p>
                        <h3>seven studio</h3>
                    </div>

                    <div className="box">
                        <div className="img_box">
                            <img src="img/project5.jpeg" alt="project" ></img>
                        </div>
                        <p>Mobile desihning</p>
                        <h3>seven studio</h3>
                    </div>

                    <div className="box">
                        <div className="img_box">
                            <img src="img/project6.jpeg" alt="project" ></img>
                        </div>
                        <p>Mobile desihning</p>
                        <h3>seven studio</h3>
                    </div>


                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Work;
