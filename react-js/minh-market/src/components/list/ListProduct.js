import React, {useEffect, useState} from "react";
import "./list.css"
import ReactPaginate from "react-paginate";
import {findAll, sortProduct} from "../../service/ProductService";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {saveCart} from "../../service/CartService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";

export function ListProduct() {
    const navigate=useNavigate();
    const [list, setList] = useState([])
    const [listProduct, setListProduct] = useState([])
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const handleAddCart = async (idPro, qtt) => {
        console.log(qtt)
        const userName = localStorage.getItem("username")
        if (userName !== "null" && qtt > 0) {
            const cartDTO = {
                idPro: idPro,
                username: userName,
                qtt: 1
            }
            await saveCart(cartDTO)
            toast("Thêm vào giỏ hàng thành công")
        } else if (qtt === 0) {
            toast("sản phẩm đã hết hàng")
        } else {
            navigate("/login")
        }
    }
    const [pageCount, setPageCount] = useState(0);
    const handlePageClick = (event) => {
        // setSearchAndPage((prev) => ({ ...prev, page: event.selected }));
    };
    const sort = async (code) => {
        const result = await sortProduct(code)
        setListProduct(result)
    }
    useEffect(()=>{
        document.title="Danh sách"
    },[])
    const handleSearch = (name) => {
        const result = list.filter(value => value.name.toLowerCase().search(name.toLowerCase()) !== -1)
        setListProduct(result)
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await findAll()
            console.log(result)
            localStorage.setItem("listProduct", result)
            setListProduct(result)
            setList(result)
        }
        fetchApi()
    }, [])
    return (
        <>
            <Header/>
            <section className="bread-crumb"
                     style={{
                         background: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                         backgroundImage: "url(https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/breadcrumb.jpg?1686556941849) ,linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))"
                     }}>
                <div className="container">
                    <div className="title-bread-crumb">
                        Danh sách sản phẩm
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="block-collection col-lg-12">
                        <h1 className="title-page d-none">
                            <span>Tất cả sản phẩm</span>
                        </h1>
                        <div className="category-products">
                            <div className="sort-cate clearfix margin-bottom-10 hidden-xs">
                                <div className="sort-cate-left hidden-xs">
                                    <h3>
                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            width="12px"
                                            height="12px"
                                            viewBox="0 0 97.761 97.762"
                                            style={{enableBackground: "new 0 0 97.761 97.762"}}
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M42.761,65.596H34.75V2c0-1.105-0.896-2-2-2H16.62c-1.104,0-2,0.895-2,2v63.596H6.609c-0.77,0-1.472,0.443-1.804,1.137
					 c-0.333,0.695-0.237,1.519,0.246,2.117l18.076,26.955c0.38,0.473,0.953,0.746,1.558,0.746s1.178-0.273,1.558-0.746L44.319,68.85
					 c0.482-0.6,0.578-1.422,0.246-2.117C44.233,66.039,43.531,65.596,42.761,65.596z"
                                            />
                                            <path
                                                d="M93.04,95.098L79.71,57.324c-0.282-0.799-1.038-1.334-1.887-1.334h-3.86c-0.107,0-0.213,0.008-0.318,0.024
					 c-0.104-0.018-0.21-0.024-0.318-0.024h-3.76c-0.849,0-1.604,0.535-1.887,1.336L54.403,95.1c-0.215,0.611-0.12,1.289,0.255,1.818
					 s0.983,0.844,1.633,0.844h5.773c0.88,0,1.657-0.574,1.913-1.416l2.536-8.324h14.419l2.536,8.324
					 c0.256,0.842,1.033,1.416,1.913,1.416h5.771c0.649,0,1.258-0.314,1.633-0.844C93.16,96.387,93.255,95.709,93.04,95.098z
					 M68.905,80.066c2.398-7.77,4.021-13.166,4.82-16.041l4.928,16.041H68.905z"
                                            />
                                            <path
                                                d="M87.297,34.053H69.479L88.407,6.848c0.233-0.336,0.358-0.734,0.358-1.143V2.289c0-1.104-0.896-2-2-2H60.694
					 c-1.104,0-2,0.896-2,2v3.844c0,1.105,0.896,2,2,2h16.782L58.522,35.309c-0.233,0.336-0.358,0.734-0.358,1.146v3.441
					 c0,1.105,0.896,2,2,2h27.135c1.104,0,2-0.895,2-2v-3.842C89.297,34.947,88.402,34.053,87.297,34.053z"
                                            />
                                        </svg>
                                        Xếp theo:
                                    </h3>
                                    <ul>
                                        <li className="btn-quick-sort alpha-asc">
                                            <button
                                                onClick={() => sort("1")}
                                                title="Tên A-Z"
                                            >
                                                <i/>
                                                Tên A-Z
                                            </button>
                                        </li>
                                        <li className="btn-quick-sort alpha-desc">
                                            <button
                                                onClick={() => sort("2")}
                                                title="Tên Z-A"
                                            >
                                                <i/>
                                                Tên Z-A
                                            </button>
                                        </li>
                                        <li className="btn-quick-sort price-asc">
                                            <button
                                                onClick={() => sort("3")}
                                                title="Giá thấp đến cao"
                                            >
                                                <i/>
                                                Giá thấp đến cao
                                            </button>
                                        </li>
                                        <li className="btn-quick-sort price-desc">
                                            <button
                                                onClick={() => sort("4")}
                                                title="Giá cao xuống thấp"
                                            >
                                                <i/>
                                                Giá cao xuống thấp
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="col-lg-5  search-header">

                                        <div className="search-smart">
                                            <div style={{marginLeft: "85%", width: "50%"}}
                                                 className="header-search-form input-group search-bar"
                                                 role="search">
                                                <input type="text" name="query" required=""
                                                       placeholder={"tìm kiếm theo tên"}
                                                       onChange={event => handleSearch(event.target.value)}
                                                       id="nameSearch"
                                                       className="input-group-field auto-search search-auto form-control"/>
                                                <input type="hidden" name="type" value="product"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="products-view products-view-grid list_hover_pro">
                                <div className="row row-fix">
                                    {listProduct.length!==0 ? listProduct.map((value, index) => (
                                        <div className="col-6 col-md-4 col-xl-3 col-fix">
                                            <div className="item_product_main">
                                                <div
                                                    className="variants product-action"
                                                >
                                                    <div className="product-thumbnail">
                                                        <a
                                                            className="image_thumb scale_hover"
                                                            href={`/detail/${value.id}`}
                                                            title={value.name}
                                                        >
                                                            <img
                                                                width={234}
                                                                height={234}
                                                                src={value.image}
                                                                className="lazyload image1 loaded"
                                                                data-src={value.image}
                                                                alt={value.name}
                                                                data-was-processed="true"
                                                            />
                                                        </a>
                                                        <input
                                                            className="hidden"
                                                            type="hidden"
                                                            name="variantId"
                                                            defaultValue={87246143}
                                                        />
                                                        <div className="action">
                                                            <button
                                                                className="btn-cart btn-views"
                                                                title="Xem chi tiết"
                                                                type="button"
                                                                onClick={() => handleAddCart(value.id, value.qtt)}
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
                                                                title="Xem nhanh"
                                                                href={`/detail/${value.id}`}
                                                                data-handle={value.name}
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
                                                            <a
                                                                className="line-clamp line-clamp-2"
                                                                href="/kim-chi-cai-thao-cat-lat-bibigo-ong-kim-s-goi"
                                                                title={value.name}
                                                            >
                                                                {value.name}
                                                            </a>
                                                        </h3>
                                                        <div className="price-box">
                                                            {VND.format(value.price)}
                                                            {value.qtt > 0 ? (<span
                                                                className="compare-price">Số lượng : {value.qtt}</span>) : (
                                                                <span className="compare-price">Hết hàng</span>)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )) : <h1 style={{color: "red", textAlign:"center"}}>Không tìm thấy sản phẩm    </h1>}

                                </div>
                            </div>
                            {/*<div className="d-grid">*/}
                            {/*    <ReactPaginate*/}
                            {/*        breakLabel="..."*/}
                            {/*        nextLabel=">"*/}
                            {/*        onPageChange={handlePageClick}*/}
                            {/*        pageCount={pageCount}*/}
                            {/*        previousLabel="< "*/}
                            {/*        containerClassName="pagination"*/}
                            {/*        pageLinkClassName="page-num"*/}
                            {/*        nextLinkClassName="page-next"*/}
                            {/*        previousLinkClassName="page-previous"*/}
                            {/*        activeClassName="active"*/}
                            {/*        disabledClassName="d-none"*/}
                            {/*    />*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}