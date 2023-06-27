import "./home.css";
import Slider from "react-slick";
import React, {useEffect, useState} from "react";
import {findAll} from "../../service/ProductService";

export function Home() {
    const [listProduct,setListProduct]=useState([]);
    useEffect(()=>{
        const fetchApi=async ()=>{
            const result=await findAll();
            console.log(result)
            setListProduct(result)
        }
        fetchApi()
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Số lượng item hiển thị trên mỗi slide
        slidesToScroll: 3,
    };
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        <>
              <picture>
                  <source
                      media="(min-width: 1200px)"
                      srcSet="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/slider_1.jpg?1685611862057"
                  />
                  <source
                      media="(min-width: 992px)"
                      srcSet="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/slider_1.jpg?1685611862057"
                  />
                  <source
                      media="(min-width: 569px)"
                      srcSet="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/slider_1.jpg?1685611862057"
                  />
                  <source
                      media="(max-width: 567px)"
                      srcSet="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/slider_1.jpg?1685611862057"
                  />
                  <img
                      width="100%"
                      height={580}
                      src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/slider_1.jpg?1685611862057"
                      alt="Slider"
                      className="img-responsive"
                  />
              </picture>

              <div className="bodywrap">
                  <section className="section_danhmuc">
                      <div className="container">
                          <div className="group_title_index">
                              <h3 className="title">
                                  <a style={{textDecoration: "none"}} href="" className="title-name">
                                      Danh mục nổi bật{" "}
                                      <img
                                          src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1685611862057"
                                          data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1685611862057"
                                          alt="title"
                                          data-was-processed="true"
                                      />
                                  </a>
                                  <span className="title-content"/>
                              </h3>
                          </div>
                          <div
                              className="danhmuc-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                              style={{cursor: "grab", display: "flex"}}
                          >
                              <div
                                  className="swiper-wrapper"
                                  style={{transform: "translate3d(0px, 0px, 0px)"}}
                              >
                                  <div
                                      className="swiper-slide swiper-slide-active"
                                      style={{width: 195, marginRight: 20}}
                                  >
                                      <a
                                          className="a-div"
                                          href=""
                                          title="Rau củ"
                                          style={{textDecoration: "none"}}
                                      >
                                          <div className="thumb">
                                              <img
                                                  src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/danhmuc_1.jpg?1685611862057"
                                                  data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/danhmuc_1.jpg?1685611862057"
                                                  alt="Rau củ"
                                                  data-was-processed="true"
                                              />
                                          </div>
                                          <h3 className="title-h3">Rau củ</h3>
                                      </a>
                                  </div>
                              </div>
                              <div
                                  className="swiper-wrapper"
                                  style={{transform: "translate3d(0px, 0px, 0px)"}}
                              >
                                  <div
                                      className="swiper-slide swiper-slide-active"
                                      style={{width: 195, marginRight: 20}}
                                  >
                                      <a
                                          className="a-div"
                                          href=""
                                          title="Rau củ"
                                          style={{textDecoration: "none"}}
                                      >
                                          <div className="thumb">
                                              <img
                                                  src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/danhmuc_1.jpg?1685611862057"
                                                  data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/danhmuc_1.jpg?1685611862057"
                                                  alt="Rau củ"
                                                  data-was-processed="true"
                                              />
                                          </div>
                                          <h3 className="title-h3">Rau củ</h3>
                                      </a>
                                  </div>
                              </div>
                              <div
                                  className="swiper-wrapper"
                                  style={{transform: "translate3d(0px, 0px, 0px)"}}
                              >
                                  <div
                                      className="swiper-slide swiper-slide-active"
                                      style={{width: 195, marginRight: 20}}
                                  >
                                      <a
                                          className="a-div"
                                          href=""
                                          title="Rau củ"
                                          style={{textDecoration: "none"}}
                                      >
                                          <div className="thumb">
                                              <img
                                                  src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/danhmuc_1.jpg?1685611862057"
                                                  data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/danhmuc_1.jpg?1685611862057"
                                                  alt="Rau củ"
                                                  data-was-processed="true"
                                              />
                                          </div>
                                          <h3 className="title-h3">Rau củ</h3>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section className="section_dichvu">
                      <div className="container">
                          <div className="group_title_index">
                              <h3 className="title">
            <span className="title-name">
              Dịch vụ đặc biệt của chúng tôi{" "}
                <img
                    src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/danhmuc_1.jpg?1685611862057"
                    data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/danhmuc_1.jpg?1685611862057"
                    alt="Rau củ"
                    data-was-processed="true"
                />
            </span>
                                  <span className="title-content">
              Những dịch vụ tốt nhất dành cho khách hàng chúng tôi
            </span>
                              </h3>
                          </div>
                          <div className="row">
                              <div className="col-lg-4 col-10 col-sm-8" style={{display: "flex", width: "90%"}}>
                                  <div className="item" style={{marginLeft: "0px"}}>
                                      <img
                                          width={235}
                                          height={158}
                                          className="lazyload loaded"
                                          src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/dichvu_1.jpg?1686556941849"
                                          data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/dichvu_1.jpg?1686556941849"
                                          alt=""
                                          data-was-processed="true"
                                      />
                                      <h3>Rau hữu cơ</h3>
                                      <div className="content">
                                          Được trồng theo phương pháp hiện đại nhất, đạt tiêu chuẩn quốc tế,
                                          vô cùng an toàn khi sử dụng.
                                      </div>
                                      <a style={{textDecoration: "none"}} href="" title="tìm hiểu thêm">
                                          Tìm hiểu thêm
                                      </a>
                                  </div>
                                  <div className="item">
                                      <img
                                          width={235}
                                          height={158}
                                          className="lazyload loaded"
                                          src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/dichvu_3.jpg?1686556941849"
                                          data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/dichvu_3.jpg?1686556941849"
                                          alt=""
                                          data-was-processed="true"
                                      />
                                      <h3>Thanh toán dễ dàng</h3>
                                      <div className="content">
                                          Nhiều hình thức thanh toán làm cho việc đặt hàng của bạn và shop
                                          trở nên dễ dàng và tiện lợi hơn rất nhiều.
                                      </div>
                                      <a style={{textDecoration: "none"}} href="" title="tìm hiểu thêm">
                                          Tìm hiểu thêm
                                      </a>
                                  </div>
                                  <div className="item">
                                      <img
                                          width={235}
                                          height={158}
                                          className="lazyload loaded"
                                          src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/dichvu_2.jpg?1686556941849"
                                          data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/dichvu_2.jpg?1686556941849"
                                          alt=""
                                          data-was-processed="true"
                                      />
                                      <h3>Giao hàng nhanh chóng</h3>
                                      <div className="content">
                                          Giao hàng trong thời gian nhanh nhất để đảm bảo chất lượng tốt
                                          nhất cho những sản phẩm bạn đã đặt
                                      </div>
                                      <a style={{textDecoration: "none"}} href="" title="tìm hiểu thêm">
                                          Tìm hiểu thêm
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section className="section_product section_product1">
                      <div className="container">
                          <div className="row d-flex">
                              <div className="col-lg-4 col-xl-3 col-sm-5 d-none d-sm-block">
                                  <a className="image-effect" href="">
                                      <img
                                          style={{borderRadius: 5, width: "95%"}}
                                          className="lazyload loaded"
                                          src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_product1.png?1686556941849"
                                          data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_product1.png?1686556941849"
                                          alt="Banner"
                                          data-was-processed="true"
                                      />
                                  </a>
                              </div>
                              <div className="col-lg-8 col-sm-7">
                                  <div className="group_title_index">
                                      <h3 className="title">
                                          <a href="" className="title-name" title="Rau củ">
                                              Rau củ{" "}
                                              <img
                                                  src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                  data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                  alt="Rau củ"
                                                  data-was-processed="true"
                                              />
                                          </a>
                                      </h3>
                                  </div>
                                  <div
                                      style={{cursor: "grab"}}
                                      className="product-swiper1 swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                  >
                                      {/*<div*/}
                                      {/*    className="swiper-wrapper"*/}
                                      {/*    style={{transform: "translate3d(0px, 0px, 0px)"}}*/}
                                      {/*>*/}
                                          <Slider {...settings}>
                                              {listProduct.filter(value => value.typeProduct.id===2).map(value => (
                                                  <div
                                                      className="swiper-slide swiper-slide-active"
                                                      style={{width: 221, marginRight: 20}}
                                                  >
                                                      <div
                                                          className="variants product-action"
                                                          encType="multipart/form-data"
                                                          style={{width: "90%"}}
                                                      >
                                                          <div className="product-thumbnail">
                                                              <a
                                                                  className="image_thumb scale_hover"
                                                                  href={`/detail/${value.id}`}
                                                                  title={value.name}
                                                              >
                                                                  {" "}
                                                                  <img
                                                                      className="lazyload image1 loaded"
                                                                      alt="Bưởi da xanh trái 1.7kg trở lên"
                                                                      data-was-processed="true"
                                                                      data-src={value.image}
                                                                      src={value.image}
                                                                  />
                                                              </a>
                                                              <div className="action">
                                                                  <button
                                                                      style={{
                                                                          backgroundColor: "#679210",
                                                                          width: 30,
                                                                          height: 30,
                                                                          border: "none",
                                                                          display: "flex",
                                                                          justifyContent: "center",
                                                                          alignItems: "center"
                                                                      }}
                                                                      className="btn-cart btn-views add_to_cart icon-button"
                                                                      title="Thêm vào giỏ hàng"
                                                                  >
                                                                      <svg
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          viewBox="0 0 576 512"
                                                                      >
                                                                          <path
                                                                              fill="#fff"
                                                                              d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                                                                          />
                                                                      </svg>
                                                                  </button>
                                                                  <a
                                                                      style={{
                                                                          backgroundColor: "#679210",
                                                                          width: 30,
                                                                          height: 30,
                                                                          border: "none",
                                                                          display: "flex",
                                                                          justifyContent: "center",
                                                                          alignItems: "center"
                                                                      }}
                                                                      href=""
                                                                      title="xem chi tiết"
                                                                      className="quick-view btn-views"
                                                                  >
                                                                      <svg
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          viewBox="0 0 512 512"
                                                                      >
                                                                          <path
                                                                              fill="#fff"
                                                                              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                                                          />
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                          <div className="product-info">
                                                              <h3 className="product-name">
                                                                  <a href="" className="line-clamp line-clamp-2">
                                                                      {value.name}
                                                                  </a>
                                                              </h3>
                                                              <div className="price-box">{value.price}đ</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              ))}

                                          </Slider>

                                      {/*</div>*/}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section className="section_3_banner">
                      <div className="container" style={{display: "flex"}}>
                          <div
                              style={{cursor: "grab"}}
                              className="banner-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                          >
                              <div
                                  className="swiper-wrapper"
                                  style={{transform: "translate3d(0px, 0px, 0px)"}}
                              >
                                  <div
                                      className="swiper-slide swiper-slide-active"
                                      style={{width: 410, marginRight: 20}}
                                  >
                                      <a href="" className="image-effect">
                                          <img
                                              style={{maxWidth: "90%"}}
                                              data-was-processed="true"
                                              alt="Banner"
                                              data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/banner_three_1.jpg?1686556941849"
                                              src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/banner_three_1.jpg?1686556941849"
                                              className="lazyload loaded"
                                          />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div
                              style={{cursor: "grab"}}
                              className="banner-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                          >
                              <div
                                  className="swiper-wrapper"
                                  style={{transform: "translate3d(0px, 0px, 0px)"}}
                              >
                                  <div
                                      className="swiper-slide swiper-slide-active"
                                      style={{width: 410, marginRight: 20}}
                                  >
                                      <a href="" className="image-effect">
                                          <img
                                              style={{maxWidth: "90%"}}
                                              data-was-processed="true"
                                              alt="Banner"
                                              data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/banner_three_2.jpg?1686556941849"
                                              src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/banner_three_2.jpg?1686556941849"
                                              className="lazyload loaded"
                                          />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div
                              style={{cursor: "grab"}}
                              className="banner-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                          >
                              <div
                                  className="swiper-wrapper"
                                  style={{transform: "translate3d(0px, 0px, 0px)"}}
                              >
                                  <div
                                      className="swiper-slide swiper-slide-active"
                                      style={{width: 410, marginRight: 20}}
                                  >
                                      <a href="" className="image-effect">
                                          <img
                                              style={{maxWidth: "90%"}}
                                              data-was-processed="true"
                                              alt="Banner"
                                              data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/banner_three_3.jpg?1686556941849"
                                              src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/banner_three_3.jpg?1686556941849"
                                              className="lazyload loaded"
                                          />
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section className="section_product section_product1">
                      <div className="container">
                          <div className="row d-flex">
                              <div className="col-lg-4 col-xl-3 col-sm-5 d-none d-sm-block">
                                  <a className="image-effect" href="">
                                      <img
                                          style={{width: "95%", borderRadius: 5}}
                                          className="lazyload loaded"
                                          src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_product2.png?1686556941849"
                                          data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_product2.png?1686556941849"
                                          alt="Banner"
                                          data-was-processed="true"
                                      />
                                  </a>
                              </div>
                              <div className="col-lg-8 col-sm-7">
                                  <div className="group_title_index">
                                      <h3 className="title">
                                          <a href="" className="title-name" title="Rau củ">
                                              Trái cây
                                              <img
                                                  src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                  data-src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                  alt="Rau củ"
                                                  data-was-processed="true"
                                              />
                                          </a>
                                      </h3>
                                  </div>
                                  <div
                                      style={{cursor: "grab"}}
                                      className="product-swiper1 swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                  >
                                      {/*<div*/}
                                      {/*    className="swiper-wrapper"*/}
                                      {/*    style={{transform: "translate3d(0px, 0px, 0px)"}}*/}
                                      {/*>*/}
                                          <Slider {...settings}>

                                              {listProduct.filter(value => (value.typeProduct.id===1)).map((value,index)=>(
                                                  <div
                                                      className="swiper-slide swiper-slide-active"
                                                      style={{width: 221, marginRight: 20}}
                                                  >
                                                      <div
                                                          className="variants product-action"
                                                          style={{width: "90%"}}
                                                      >
                                                          <div className="product-thumbnail">
                                                              <a
                                                                  className="image_thumb scale_hover"
                                                                  href={`/detail/${value.id}`}
                                                                  title="Bưởi da xanh trái 1.7kg trở lên"
                                                              >
                                                                  {" "}
                                                                  <img
                                                                      className="lazyload image1 loaded"
                                                                      alt={value.name}
                                                                      data-was-processed="true"
                                                                      data-src={value.image}
                                                                      src={value.image}
                                                                  />
                                                              </a>
                                                              <div className="action">
                                                                  <button
                                                                      style={{
                                                                          backgroundColor: "#679210",
                                                                          width: 30,
                                                                          height: 30,
                                                                          border: "none",
                                                                          display: "flex",
                                                                          justifyContent: "center",
                                                                          alignItems: "center"
                                                                      }}
                                                                      className="btn-cart btn-views add_to_cart icon-button"
                                                                      title="Thêm vào giỏ hàng"
                                                                  >
                                                                      <svg
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          viewBox="0 0 576 512"
                                                                      >
                                                                          <path
                                                                              fill="#fff"
                                                                              d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                                                                          />
                                                                      </svg>
                                                                  </button>
                                                                  <a
                                                                      style={{
                                                                          backgroundColor: "#679210",
                                                                          width: 30,
                                                                          height: 30,
                                                                          border: "none",
                                                                          display: "flex",
                                                                          justifyContent: "center",
                                                                          alignItems: "center"
                                                                      }}
                                                                      href=""
                                                                      title="xem chi tiết"
                                                                      className="quick-view btn-views"
                                                                  >
                                                                      <svg
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          viewBox="0 0 512 512"
                                                                      >
                                                                          <path
                                                                              fill="#fff"
                                                                              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                                                          />
                                                                      </svg>
                                                                  </a>
                                                              </div>
                                                          </div>
                                                          <div className="product-info">
                                                              <h3 className="product-name">
                                                                  <a href="" className="line-clamp line-clamp-2">
                                                                      {value.name}
                                                                  </a>
                                                              </h3>
                                                              <div className="price-box">{value.price}đ</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              ))}
                                          </Slider>
                                      {/*</div>*/}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>

        </>
    )
}