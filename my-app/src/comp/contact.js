import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {BsTelephoneInbound} from 'react-icons/bs';

import './contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
            <div className="left_box">
                <h3>Contact info</h3>
                <div className="info">

                    <div className="box">
                        <div className="icon">
                            <HiOutlineMail/>
                        </div>
                        <div className="detail">
                            <h4>mail us</h4>
                            <p>info@lucese2.com</p>
                            <p>info@lucese2.com</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BsTelephoneInbound/>
                        </div>
                        <div className="detail">
                            <h4>contact us</h4>
                            <p>+1 520-555-6541</p>
                            <p>+12 52365-8796-54</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            
                        </div>
                        <div className="detail">
                            <h4>mail us</h4>
                            <p>22 Bakar street, Texes.
                                United states 6523W RE
                            </p>
                            
                        </div>
                    </div>

                </div>
            </div>

            <div className="right_box">
                <img src="img/icon2.png" alt="icon" ></img>
                <h2>Lets work <span>together</span></h2>
                <div className="form">
                    <input type="text"  placeholder='Name' />
                    <input type="text"  placeholder='Name' />
                    <input type="text"  placeholder='Name' />
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
