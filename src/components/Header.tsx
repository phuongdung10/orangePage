import React from 'react'
import '../myStyle/styleHeader.css'
import { Container } from "react-bootstrap";


let url = `${process.env.PUBLIC_URL}/assets/Info_ 920006277.png`;
let url1 = `${process.env.PUBLIC_URL}/assets/Ellipse 1.png`;
let url2 = `${process.env.PUBLIC_URL}/assets/Ellipse 2.png`;
let url3 = `${process.env.PUBLIC_URL}/assets/About.png`;
let url4 = `${process.env.PUBLIC_URL}/assets/Branches.png`;
let url5 = `${process.env.PUBLIC_URL}/assets/ar 1.png`;
// ---------------------------------------------------------



function Header() {
    return (
        <div className='header_0'>
        <Container className="themed-container" fluid={true}>
            
                <div className='row'>
                    <div className='col-sm-6'>
                        <ul className="icon_he">
                            <li style={{ fontSize: "14px", fontWeight: "400" }}>Info: 920006277</li>
                            <li><img src={url1} /></li>
                            <li style={{ fontSize: "14px", fontWeight: "400" }}>About</li>
                            <li><img src={url1} /></li>
                            <li style={{ fontSize: "14px", fontWeight: "400" }}>Branches</li>
                        </ul>

                    </div>


                    <div className='col-sm-6'>



                        <ul className="icon_he">
                            <li style={{ fontSize: "14px", fontWeight: "400" }}>Delivery Information</li>
                            <li><img src={url1} /></li>
                            <li><i className="bi bi-person"></i></li>
                            <li style={{ fontSize: "14px", fontWeight: "400" }}>Account</li>
                            <li><img src={url1} /></li>
                            <li><img src={url5} /></li>
                            <li style={{ fontSize: "14px", fontWeight: "400" }}>Arabic</li>
                        </ul>

                    </div>
                </div>



        
        </Container>
        </div>

    );


}

export default Header;