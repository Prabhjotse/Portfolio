import React from 'react';
import './footer.css';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => (
    <>
        <div className="footer">
            <div className="top_container">
                <div className="contant">
                    <div className="left_box">

                        <div className="box">
                            <div className="detail">
                                <h3>04</h3>
                                <p>year experience</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="detail">
                                <h3>+123</h3>
                                <p>cliente worldwide</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="detail">
                                <h3>+23</h3>
                                <p>total projects</p>
                            </div>
                        </div>

                    </div>

                    <div className="right_box">
                        <img src="img/icon2.png" alt="icon" />
                        <div className="contant">
                            <div className="detail">
                                <h2>Lets work <span>Together</span></h2>
                            </div>
                            <div className="icon">
                                <AiOutlineDoubleRight />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bottom_container">
                <div className="container">
                    <h2>CT</h2>
                    <div className="nav">
                        <ul>
                            <li><Link to="/" className='link'> Home</Link></li>
                            <li><Link to="/about" className='link'> About</Link></li>
                            <li><Link to="/work" className='link'>Work</Link></li>
                            <li><Link to="/contact" className='link'> Contact</Link></li>



                        </ul>
                    </div>
                </div>
            </div>


        </div>

    </>
)

export default Footer;
