import React from 'react';
import "../myStyle/styleHeader1.css";



let url = `${process.env.PUBLIC_URL}/assets/vector.png`;
let url1 = `${process.env.PUBLIC_URL}/assets/vector (1).png`;
let url2 = `${process.env.PUBLIC_URL}/assets/vector (2).png`;
let url3 = `${process.env.PUBLIC_URL}/assets/vector (3).png`;
let url4 = `${process.env.PUBLIC_URL}/assets/vector (4).png`;
let url5 = `${process.env.PUBLIC_URL}/assets/vector (5).png`;
let url6 = `${process.env.PUBLIC_URL}/assets/vector (6).png`;
let url7 = `${process.env.PUBLIC_URL}/assets/vector (7).png`;
let url8 = `${process.env.PUBLIC_URL}/assets/vector (8).png`;
let url9 = `${process.env.PUBLIC_URL}/assets/vector (9).png`;
let url10 = `${process.env.PUBLIC_URL}/assets/vector (10).png`;
let url11 = `${process.env.PUBLIC_URL}/assets/vector (11).png`;
let url12 = `${process.env.PUBLIC_URL}/assets/vector (12).png`;
let url13 = `${process.env.PUBLIC_URL}/assets/vector (13).png`;
let url14 = `${process.env.PUBLIC_URL}/assets/vector (14).png`;
let url15 = `${process.env.PUBLIC_URL}/assets/vector (15).png`;
let url16 = `${process.env.PUBLIC_URL}/assets/vector (16).png`;
let url17 = `${process.env.PUBLIC_URL}/assets/vector (17).png`;
let url18 = `${process.env.PUBLIC_URL}/assets/vector (18).png`;
let url19 = `${process.env.PUBLIC_URL}/assets/vector (19).png`;
let url20 = `${process.env.PUBLIC_URL}/assets/vector (20).png`;
let url21 = `${process.env.PUBLIC_URL}/assets/vector (21).png`;
let url22 = `${process.env.PUBLIC_URL}/assets/vector (22).png`;
let url23 = `${process.env.PUBLIC_URL}/assets/heart.png`;
let url24 = `${process.env.PUBLIC_URL}/assets/vector (24).png`;
let url25 = `${process.env.PUBLIC_URL}/assets/Shopping Cart.png`;
let url26 = `${process.env.PUBLIC_URL}/assets/Wishlist.png`;




function Header1() {
    return (
        <div className='container-fluid; img_vector'>
            <div className='row'>
                <div className='col-sm-3'>
                    <img src={url} />
                    <img className="img_vector1" src={url1} />
                    <img src={url2} />
                    <img src={url3} />
                    <img src={url4} />
                    <img src={url5} />
                    <img src={url6} />
                    <img src={url7} />
                    <img src={url8} />
                    <img src={url9} />
                    <img src={url10} />
                    <img src={url11} />

                </div>
                <div className='col-sm-5'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Seach for a product, brand, category..."
                            aria-describedby="basic-addon5" />
                        <span className="input-group-text" id="basic-addon5"><button><i className="bi bi-search"></i></button></span>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box_header1'>
                        <img className="icon_head1" src={url23} />
                        <img className="icon1_head1" src={url26} />
                    </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className='box1_header1'>
                            <img className="icon_head1" src={url24} />
                            <img className="icon1_head1"src={url25} />

                        </div>
                    </div>

            </div>
            <div className='row'>
                <div className='col-sm-3; img_vector12'>
                    <img src={url12} />
                    <img src={url13} />
                    <img src={url14} />
                    <img src={url15} />
                    <img src={url16} />
                    <img src={url17} />
                    <img src={url18} />
                    <img src={url19} />
                    <img src={url20} />
                    <img src={url21} />




                </div>
            </div>
        </div>






    );

}

export default Header1;

