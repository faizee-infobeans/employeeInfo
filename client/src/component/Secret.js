import { render } from '@testing-library/react'
import React , {Component} from 'react'
import {Link , Redirect} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Card from './Card'

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
                items: 4
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
            loggedIn
        }
    }
    render(){
     if(this.state.loggedIn === false){
return <Redirect to="/"/>
     }
        return(
<div>
<div className="container">
<br></br>  
<br></br>
<h4 className="heading">Birthdays & Anniversaries of the Month</h4>
            <div className="row mb-5">
                <OwlCarousel className='owl-theme' {...options} >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </OwlCarousel>
            </div>
        </div>
</div>
        )   
    }
}

export default Admin