import React from 'react';
import "../myStyle/styleHeader2.css";

let url = `${process.env.PUBLIC_URL}/assets/Offers.png`;
let url1 = `${process.env.PUBLIC_URL}/assets/Medications.png`;
let url2 = `${process.env.PUBLIC_URL}/assets/Line 1.png`;
let url3 = `${process.env.PUBLIC_URL}/assets/Vitamins & Supplements.png`;
let url4 = `${process.env.PUBLIC_URL}/assets/Makeup &Beauty.png`;
let url5 = `${process.env.PUBLIC_URL}/assets/Skin Care.png`;
let url6 = `${process.env.PUBLIC_URL}/assets/Hair Care.png`;
let url7 = `${process.env.PUBLIC_URL}/assets/Personal Care.png`;
let url8 = `${process.env.PUBLIC_URL}/assets/Mother & Child Care.png`;
let url9 = `${process.env.PUBLIC_URL}/assets/Medical Devices & Equipments.png`;
let url10 = `${process.env.PUBLIC_URL}/assets/Rectangle 7.png`;
let url11 = `${process.env.PUBLIC_URL}/assets/Vector (25).png`;
let url12 = `${process.env.PUBLIC_URL}/assets/Vector26.png`;
let url13 = `${process.env.PUBLIC_URL}/assets/Vector27.png`;



function Header2() {
    return (
        <div className="container-fluid">

            <div className='col'>
                <div className='row-sm-3; header_2'>



                    <img className='img_text2' src={url} />
                    <img className='img_text2' src={url2} />
                    <img className='img_text2' src={url1} />
                    <img className='img_text2' src={url3} />
                    <img className='img_text2' src={url4} />
                    <img className='img_text2' src={url5} />
                    <img className='img_text2' src={url6} />
                    <img className='img_text2' src={url7} />
                    <img className='img_text2' src={url8} />
                    <img className='img_text2' src={url9} />


                </div>
                <div className='row-sm-3'>
                    <img className='img_center' style={{width:"1200px", marginLeft:"40px", marginTop:"17px"}} src={url10} />
                    <div className='logo_header2'>
                        <div className='icon_header2'>
                            <i>
                                <img src={url13} />
                            </i>
                            <i>
                                <img className='logo1_header2' src={url12} />
                            </i>

                        </div>
                    </div>








                </div>


            </div>

        </div>














    );
}
export default Header2;