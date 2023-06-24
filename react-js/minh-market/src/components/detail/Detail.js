import React, {useEffect, useState} from "react";
import "./detail.css"
import {useParams} from "react-router";
import {findAll, findById} from "../../service/ProductService";
import Slider from "react-slick";


export function Detail() {
    const param=useParams()
    const [product,setProduct]=useState({})
    const [listProduct,setListProduct]=useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Số lượng item hiển thị trên mỗi slide
        slidesToScroll: 3,
    };
    useEffect(()=>{
        const fetchApi=async ()=>{
            const result=await findAll();
            setListProduct(result)
            console.log(result)
            const result1=await findById(param.id)
            setProduct(result1)
            console.log(result1)
        }
        fetchApi()
    },[])
    return (
       product && listProduct && <>
            <div className="bodywrap">
                <section className="bread-crumb"
                         style={{"background": "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))"}}>
                    <div className="container">
                        <div className="title-bread-crumb">
                            {product.name}
                        </div>
                    </div>
                </section>
                <section className="product layout-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 ">
                                <div className="details-product">
                                    <div className="row">
                                        <div className="product-detail-left product-images col-12 col-md-6 col-lg-4">
                                            <div className="product-image-block relative">
                                                <div
                                                    className="swiper-container gallery-top swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide swiper-slide-active"
                                                             style={{width: "458px"}}>
                                                            <img
                                                                src={product.image}
                                                                data-image={product.image}
                                                                className="img-responsive mx-auto d-block swiper-lazy swiper-lazy-loaded"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-12 col-md-6 col-lg-4">
                                            <div className="details-pro">
                                                <h1 className="title-product">{product.name}</h1>
                                                <div className="inventory_quantity">
                                                    <div className="thump-break">
                                                        <span className="mb-break inventory">
                                                            <span className="stock-brand-title">Số lượng : </span>
                                                            <span className="a-stock">
                                                                <span className="a-stock">{product.qtt}</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="reviews_details_product ">
                                                    <div
                                                        className="sapo-product-reviews-badge sapo-product-reviews-badge-detail">
                                                    </div>
                                                </div>
                                                <form className="form-inline">
                                                    <div className="price-box clearfix">
                                                        <span className="special-price">
                                                            <span className="price product-price">{product.price}đ</span>
                                                        </span>
                                                    </div>
                                                    <div className="form-product">
                                                        <div className="clearfix form-group">
                                                            <div className="flex-quantity">
                                                                <div className="custom custom-btn-number show">
                                                                    <label className="sl section">Số lượng : </label>
                                                                    <div className="input_number_product form-control">
                                                                        <button
                                                                            className="btn_num num_1 button button_qty">-
                                                                        </button>
                                                                        <input type="text" maxLength="3"
                                                                               className="form-control prd_quantity"/>
                                                                        <button
                                                                            className="btn_num num_2 button button_qty">+
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="btn-mua button_actions clearfix">
                                                                    <button
                                                                        className="btn btn_base normal_button btn_add_cart add_to_cart btn-cart">
                                                                        <span className="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 viewBox="0 0 40 40">
                                                                                <defs></defs>
                                                                                <g>
                                                                                    <path className="cls-1"
                                                                                          d="M35.91,36.17,33.24,10.75a1,1,0,0,0-1-.94h-5V8.67a6.47,6.47,0,1,0-12.93,0V9.81h-5a1.05,1.05,0,0,0-1,.94L5.52,36.17a1,1,0,0,0,.93,1.15H34.87a1,1,0,0,0,1.05-1A.41.41,0,0,0,35.91,36.17ZM16.35,8.67a4.38,4.38,0,1,1,8.75,0V9.81H16.35ZM7.73,35.24l2.45-23.33h4.07v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91H25.1v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91h4.07l2.45,23.33Z"></path>
                                                                                </g>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="text">
                                                                            <span className="txt-main text_1">Thêm vào giỏ hàng</span>
                                                                            <span className="text_2">Giao hàng nhanh chóng</span>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-12 col-lg-4 content-pro">
                                            <div className="product-right">
                                                <div className="chinhsach-pro">
                                                    <div className="title-head">Chính sách cửa hàng <img
                                                        className="lazyload loaded"
                                                        src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                        data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                        alt="title" data-was-processed="true"
                                                    /></div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="item">
                                                                <img width="40" height="40"
                                                                     src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/chinhsach_1.png?1686556941849"
                                                                     alt="Miễn phí vẫn chuyển"/>
                                                                <div className="text">
                                                                    <span className="title">Miễn phí vẫn chuyển</span>
                                                                    <span className="des">Cho tất cả đơn hàng trong nội thành Hồ Chí Minh</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="item">
                                                                <img width="40" height="40"
                                                                     src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/chinhsach_2.png?1686556941849"
                                                                     alt="Miễn phí đổi trả"/>
                                                                <div className="text">
                                                                    <span className="title">Miễn phí đổi - trả</span>
                                                                    <span className="des">Đối với sản phẩm lỗi sản xuất hoặc vận chuyển</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="item">
                                                                <img width="40" height="40"
                                                                     src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/chinhsach_3.png?1686556941849"
                                                                     alt="Hỗ trợ nhanh chóng"/>
                                                                <div className="text">
                                                                    <span className="title">Hỗ trợ nhanh chóng</span>
                                                                    <span className="des">Gọi Hotline: 0961052275 để được hỗ trợ ngay</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="item">
                                                                <img width="40" height="40"
                                                                     src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/chinhsach_4.png?1686556941849"
                                                                     alt="Ưu đãi combo"/>
                                                                <div className="text">
                                                                    <span className="title">Ưu đãi combo</span>
                                                                    <span className="des">Mua theo combo,mùa càng mua nhiều giá càng rẻ</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-12 col-xl-12">
                                            <div className="productRelate product-lq">
                                                <div className="group_title_index">
                                                    <h3 className="title">
                                                        <div className="title-name">
                                                            Sản phẩm liên quan <img className="lazyload loaded"
                                                                                    src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                                                    data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                                                    alt="title"
                                                                                    data-was-processed="true"/>

                                                            {/*<div>*/}
                                                            {/*    <Slider {...settings}>*/}
                                                            {/*        {listProduct.filter(value => (value.typeProduct.id===1)).map((value, index) => (*/}
                                                            {/*            <div>*/}
                                                            {/*                <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)"}}>*/}
                                                            {/*                    <div className="variants product-action">*/}
                                                            {/*                        <div className="product-thumbnail">*/}
                                                            {/*                            <a href="" className="image_thumb scale_hover">*/}
                                                            {/*                                <img width="234" height="234" className="lazyload image1 loaded" src={value.image} data-src={value.image} alt={value.name} data-was-processed="true"/>*/}
                                                            {/*                            </a>*/}
                                                            {/*                        </div>*/}
                                                            {/*                    </div>*/}
                                                            {/*                </div>*/}
                                                            {/*            </div>*/}
                                                            {/*        ))}*/}
                                                            {/*    </Slider>*/}

                                                        </div>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}