import React from "react";
import "../myStyle/styleBody6.css"
import "../myStyle/styleBody2.css"


let url = `${process.env.PUBLIC_URL}/assets/Shop by Brands.png`;
let url1 = `${process.env.PUBLIC_URL}/assets/avene_logo 1.png`;
let url2 = `${process.env.PUBLIC_URL}/assets/elancyl_logo 1.png`;
let url3 = `${process.env.PUBLIC_URL}/assets/dr_irena_eris_logo 1.png`;
let url4 = `${process.env.PUBLIC_URL}/assets/a-derma-logo-2020 1.png`;
let url5 = `${process.env.PUBLIC_URL}/assets/gohnson-gohnson_13 1.png`;
let url6 = `${process.env.PUBLIC_URL}/assets/pfizer_6 1.png`;
let url7 = `${process.env.PUBLIC_URL}/assets/Rectangle 11 (4) copy.png`;
let url8 = `${process.env.PUBLIC_URL}/assets/Rectangle 11 copy.png`;
let url9 = `${process.env.PUBLIC_URL}/assets/Rectangle 11 (5).png`;
let url10 = `${process.env.PUBLIC_URL}/assets/Rectangle 11 (6).png`;
let url20 = `${process.env.PUBLIC_URL}/assets/Vector copy.png`;
let url22 = `${process.env.PUBLIC_URL}/assets/Sun Protection face lorem ipsum Sit dolor amet consectetur.png`;
let url23 = `${process.env.PUBLIC_URL}/assets/Rectangle 22.png`;
let url24 = `${process.env.PUBLIC_URL}/assets/To Exchange your Prescription request.png`;

function Body6() {
    return (
        <div className="body6_lay">
            <div className="container-xxl">
                <div className="icon_body6">
                    <img src={url} />
                </div>
                <div className="row">

                    <div className="col-sm-2">
                        <i className="bi bi-chevron-left"></i>
                        <img src={url1} />
                    </div>
                    <div className="col-sm-2">
                        <img src={url2} />
                    </div>
                    <div className="col-sm-2">
                        <img src={url3} />
                    </div>
                    <div className="col-sm-2">
                        <img src={url4} />
                    </div>
                    <div className="col-sm-2">
                        <img src={url5} />
                    </div>
                    <div className="col-sm-2">
                        <img src={url6} />
                        <i className="bi bi-chevron-right"></i>
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="icon1_body6">
                            <div className="icon2_body6">
                                Seasonal highlights
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-3">
                        <div className="icon3_body6">
                            <div className="icon4_body6">
                                Popular
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-3">
                        <div className="icon5_body6">
                            <div className="icon6_body6">
                                New products
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-3">
                        <div className="icon5_body6">
                            <div className="icon6_body6">
                                Recommendation
                            </div>

                        </div>

                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-3">
                        <div className="icon24_body6">
                            <img className="icon25_body6" src={url7} />
                            <div className="icon36_body6">NEW
                            </div>
                        </div>

                        <img className="icon26_body6" src={url20} />
                        <img className="icon27_body6" src={url20} />
                        <img className="icon28_body6" src={url20} />
                        <img className="icon29_body6" src={url20} />
                        <img className="icon30_body6" src={url20} />
                        <h1 className="icon31_body6">40 Reviews</h1>
                        <img className="icon32_body6" src={url22} />
                        <div className="icon34_body6">
                            20.00 SAR
                        </div>
                        <div className="icon35_body6">
                            Louis Windmer
                        </div>



                    </div>
                    {/* 1111--------------------------------- */}
                    <div className="col-sm-3">
                        <div className="icon50_body6">
                            <div className="icon38_1_body6">
                                <div className="icon39_body6">HIT</div>
                                <div className="icon40_body6">
                                    <a>SALE - 30%</a></div>
                                <img src={url8} />


                            </div>
                            <img src={url20} />
                            <img src={url20} />
                            <img src={url20} />
                            <img src={url20} />
                            <img src={url20} />
                            <h1 className="icon31_1_body6">40 Reviews</h1>
                            <img className="icon32_1_body6" src={url22} />
                            <div className="icon33_1_body6">
                                30.00 SAR
                            </div>
                            <div className="icon34_1_body6">
                                20.00 SAR
                            </div>
                            <div className="icon35_body6">
                                Louis Windmer
                            </div>
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="icon51_body6">
                                        Add to Cart

                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="icon52_body6">
                                    <i className="bi bi-heart"></i>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-sm-3">
                        <div className="icon38_body6">
                            <div className="icon36_body6">NEW</div>

                            <img src={url9} />


                        </div>
                        <img className="icon41_body6" src={url20} />
                        <img className="icon42_body6" src={url20} />
                        <img className="icon43_body6" src={url20} />
                        <img className="icon44_body6" src={url20} />
                        <img className="icon45_body6" src={url20} />
                        <h1 className="icon31_body6">40 Reviews</h1>
                        <img className="icon32_body6" src={url22} />
                        <div className="icon34_body6">
                            20.00 SAR
                        </div>
                        <div className="icon35_body6">
                            Louis Windmer
                        </div>


                    </div>
                    <div className="col-sm-3">
                        <div className="icon38_body6">
                            <div className="icon39_body6">HIT</div>
                            <div className="icon40_body6">
                                <a>SALE - 30%</a></div>
                            <img src={url10} />


                        </div>
                        <img className="icon41_body6" src={url20} />
                        <img className="icon42_body6" src={url20} />
                        <img className="icon43_body6" src={url20} />
                        <img className="icon44_body6" src={url20} />
                        <img className="icon45_body6" src={url20} />
                        <h1 className="icon31_body6">40 Reviews</h1>
                        <img className="icon32_body6" src={url22} />
                        <div className="icon33_body6">
                            30.00 SAR
                        </div>
                        <div className="icon34_2_body6">
                            20.00 SAR
                        </div>
                        <div className="icon35_body6">
                            Louis Windmer
                        </div>


                    </div>

                </div>
                <div className="icon46_body6">
                    <i>
                        <img src={url23} />
                    </i>
                    <i>
                        <img className="icon47_body6" src={url24} />
                        <div className="icon48_body6">
                            <h1 className="icon49_body6">Order Now</h1>
                        </div>
                    </i>
                </div>
            </div>

        </div>
    );
}

export default Body6;