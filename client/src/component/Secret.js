import { render } from '@testing-library/react'
import React , {Component} from 'react'
import {Redirect} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import {FaRegComment,FiThumbsUp} from 'react-icons/all';
import axios from 'axios';
import './style/Card.css'

const options = {
        nav: true,
        items: 4,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    
    }

class Admin extends Component{
  
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null){
            loggedIn= false
        }
        this.state={
            loggedIn,
            dataList:[]
        }
    }

    componentDidMount(){
        axios({
            url: "http://localhost:8000/getdata",
            method:"GET",
        }).then((response)=>{
            console.log('data from database using api',response.data);
            this.setState({
                dataList:response.data
            })
        },(err)=>{
            console.log('err is ',err);
        })
    }
    render(){
     if(this.state.loggedIn === false){
return <Redirect to="/"/>
     }
        return(
<div>
<div className="container">
    <br></br>
<h4 className="heading mt-2 mb-2">Birthdays & Anniversaries of the Month</h4>

            <div className="row">

                {/* <ul>
                    {this.state.dataList.map(dataLists => <li>{dataLists.name}</li>)}
                </ul> */}
                {this.state.dataList.length && (
                <OwlCarousel className='owl-theme' {...options} loop >
                  {this.state.dataList.map((data,each)=>{
                      console.log(data);
                      return ( 
                        <div className="item text-center rounded-0">
                        <div className="card">
                            <div className="">
                                <div className="image">
                                    <img src={data.profilePic} alt="photo" className="image" />
                                </div>
                                <h4 className="name">{data.name}</h4>
                                <h3 className="mt-4 date">{data.dateOfJoining}</h3>
                                <p className="anniversary-date">{data.yearOfCompletion}th Work Anniversary</p>
                               
                                <div className="d-flex flex-row justify-content-around">
                                    <div className="p-2">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <FiThumbsUp />
                                                65
                                            </li>
                                            <li className="list-inline-item">
                                                    <FaRegComment />
                                                {data.like}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      )
                  })}
                </OwlCarousel>)}
            </div>
        </div>
        <footer className="footer text-center">
        &copy; Copyright 2020 InfoBeans. All Rights Reserved.
      </footer>
</div>
        )   
    }
}

// {this.state.latest_stories.length && (
//     <OwlCarousel className="owl-theme" loop margin={10} nav>
//       {this.state.latest_stories.map((story, index) => {
//         console.log(story); //this prints successfully everytime in loop

//         return (
//           <>
//             <div className="item">
//               <h4>{story}</h4>
//             </div>
//           </>
//         );
//       })}
//     </OwlCarousel>
//   )}


export default Admin