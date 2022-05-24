import React from "react";
import "../myStyle/styleFooters.css";


let url = `${process.env.PUBLIC_URL}/assets/Who is ORANGE.png`;
let url1 = `${process.env.PUBLIC_URL}/assets/Pharmachies Group.png`;
let url2 = `${process.env.PUBLIC_URL}/assets/Vector copy 5.png`;
let url3 = `${process.env.PUBLIC_URL}/assets/giam-gia-tren-app-store-3-lan-giam-gia-tot-nhat-trong-tuan.png`;
let url4 = `${process.env.PUBLIC_URL}/assets/global-playstore.png`;
let url5 = `${process.env.PUBLIC_URL}/assets/appleppay.svg.png`;
let url6 = `${process.env.PUBLIC_URL}/assets/0001187_cash-on-delivery-with-verification-plugin-for-nopcommerce_300.jpeg`;
let url7 = `${process.env.PUBLIC_URL}/assets/Visa_Inc._logo.svg.png`;
let url8 = `${process.env.PUBLIC_URL}/assets/amex.png`;
let url9 = `${process.env.PUBLIC_URL}/assets/master.jpeg`;
let url10 = `${process.env.PUBLIC_URL}/assets/mada.png`;





function Footers() {
    return (
        <div className="foo_lay">
            <div className="container-xxl">
                <div className="icon1_foo">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="icon2_foo">
                                <li style={{ fontWeight: '500' }}>Who is ORANGE</li>
                                <li>Pharmachies Group</li>
                                <li>Vision</li>
                                <li>Mission</li>
                                <li>Servise points</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className="icon2_foo">
                                <li style={{ fontWeight: '500' }}>Contact us</li>
                                <li><i className="bi bi-telephone"></i> 920006277</li>
                                <li><i className="bi bi-envelope"></i> infor@orangepharmacy.sa</li>
                                <li><img src={url2} />  Free Shhipping</li>
                                <li style={{ fontSize: "8px" }}>Free in Riyadhs</li>
                                <li style={{ marginTop: "33px" }}>
                                    <i style={{ marginRight: "10px" }} className="bi bi-facebook"></i>
                                    <i style={{ marginRight: "10px" }} className="bi bi-twitter"></i>
                                    <i style={{ marginRight: "10px" }} className="bi bi-instagram"></i>
                                    <i className="bi bi-whatsapp"></i>

                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className="icon2_foo">
                                <li style={{ fontWeight: '500' }}>Orange coditions and guaranties</li>
                                <li>Terms and Conditions</li>
                                <li>Privates and Securities</li>
                                <li>Terms or Sale</li>
                                <li>Shipping and returns</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className="icon2_foo">
                                <li style={{ fontWeight: '500' }}>Get the App</li>
                                <li>

                                    <img style={{ width: "135px" }} src={url3} />




                                </li>
                                <li>
                                    <img style={{ width: "135px" }} src={url4} />
                                </li>
                            </ul>
                        </div>


                    </div>


                </div>
                <ul className="icon3_foo">
                    <li><img style={{ width: "44px" }} src={url5} /></li>
                    <li><img style={{ width: "44px" }} src={url6} /></li>
                    <li><img style={{ width: "44px" }} src={url7} /></li>
                    <li><img style={{ width: "44px" }} src={url8} /></li>
                    <li><img style={{ width: "44px" }} src={url9} /></li>
                    <li><img style={{ width: "44px" }} src={url10} /></li>

                </ul>
                <ul className="icon4_foo">
                    <li style={{ fontSize: "8px", fontWeight: "400" }}>© COPYRIGHT 2021 ORANGE · ALL RIGHTS RESERVED</li>
                    <li style={{ fontSize: "8px", fontWeight: "400" }}>Privacy Policy</li>
                    <li style={{ fontSize: "8px", fontWeight: "400" }}>Terms & Conditions</li>
                </ul>


            </div>
        </div>
    );
}

export default Footers;