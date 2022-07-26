import React, { Fragment } from 'react';
import {Form} from 'react-bootstrap'
import './../style/footer.css'

export default function Footer(props) {
    return(
        <Fragment> 
            <section className="information">   
                <div className="container-fluid">                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="item">
                            <h4>FOLLOW OUR UPDATES !</h4>
                            <p>Be the First to know about our Fresh Arrivals and much more!</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="item">
                            <Form onSubmit={(e)=>{e.preventDefault()}}>
                                <input  type="email" placeholder="Enter Your Email"  required />
                                <button type="submit">SUBSCRIBE </button>
                            </Form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="info">
                            <h4>INFORMATION</h4>
                            <p>About Us</p>
                            <p>Delivery Information</p>
                            <p>Privacy Policy</p>
                            <p>Terms &amp; Conditions</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info">
                            <h4>SERVICES</h4>
                                <p>Returns</p>
                                <p>Site Map</p>
                                <p>Wish List</p>
                                <p>Order History</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info">
                            <h4>CONTACTS</h4>
                                <p>Warehouse &amp; Offices</p>
                                <p>12345 Street name , country</p>
                                <p>(+020) 123456789</p>
                                <p>email@domain.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col text-left text-uppercase ">
                            &copy; Copyright All Right Reserved design by <span>A.NOUR</span>
                        </div>
                        <div className="col text-right">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="!#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="!#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="!#"><i className="fa fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href="!#"><i className="fa fa-google-plus"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
        </Fragment>
    )
}