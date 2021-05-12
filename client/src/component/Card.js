import React from 'react';
import "./style/Card.css";
import {FaRegComment,FiThumbsUp} from 'react-icons/all';

function Card(){
    return(
        <>
 
                   <div className="item text-center rounded-0">
                    <div className="card">
                        <div className="card-body">
                            <div className="image">
                                <img src="https://infobeans-intranet.web.app/assets/images/sample-profile-image.jpg" alt="photo"
                                className="img-fluid rounded-circle w-50 m-3 " />
                            </div>
                            <h4 className="name">Faizee Bano</h4>
                            <h3 className="mt-4 date">7th June</h3>
                            <p className="anniversary-date">6th Work Anniversary</p>
                           
                            <div className="d-flex flex-row justify-content-around">
                                <div className="p-2">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <FiThumbsUp />
                                            65
                                        </li>
                                        <li className="list-inline-item">
                                                <FaRegComment />
                                            65
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Card;