import React from "react";
import "../myStyle/styleBody7.css";

let url = `${process.env.PUBLIC_URL}/assets/Free shipping.png`;
let url1 = `${process.env.PUBLIC_URL}/assets/Free shipping on all US order or order above $200.png`;
let url2 = `${process.env.PUBLIC_URL}/assets/Vector copy 3.png`;
let url3 = `${process.env.PUBLIC_URL}/assets/Vector (1) copy 2.png`;
let url4 = `${process.env.PUBLIC_URL}/assets/7.png`;
let url5 = `${process.env.PUBLIC_URL}/assets/Contact us 24 hours a day, 7 days a week.png`;
let url6 = `${process.env.PUBLIC_URL}/assets/We ensure secure payment with PEV.png`;
let url7 = `${process.env.PUBLIC_URL}/assets/Payment Secure.png`;
let url8 = `${process.env.PUBLIC_URL}/assets/Vector copy 4.png`;
let url9 = `${process.env.PUBLIC_URL}/assets/Vector (1) copy 3.png`;
let url10 = `${process.env.PUBLIC_URL}/assets/Vector (3) copy.png`;




function Body7() {
    return (
        <div className="container-xxl">
            <div className="body7_lay">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="icon_body7">
                            <div className="icon1_body7">
                                <img className="icon4_body7" src={url2} />

                            </div>
                            <img className="icon2_body7" src={url} />
                            <img className="icon3_body7" src={url1} />
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="icon_body7">
                            <div className="icon1_body7">
                                <img className="icon4_body7" src={url3} />

                            </div>
                            <img className="icon2_body7" src={url4} />
                            <img className="icon3_body7" src={url5} />
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="icon_body7">
                            <div className="icon1_body7">
                                <div className="icon5_body7">
                                    <i>
                                        <img src={url8} />
                                    </i>
                                    <img className="icon6_body7" src={url9} />
                                    <img className="icon7_body7" src={url10} />

                                </div>

                            </div>
                            <img className="icon2_body7" src={url7} />
                            <img className="icon3_body7" src={url6} />
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
}

export default Body7;