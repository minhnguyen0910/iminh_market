import React, {useEffect, useState} from "react";
import "./cart.css"
import {deleteCart, findAllCart, pay, saveCart, setQtt} from "../../service/CartService";
import {findByUserName} from "../../service/CustomerService";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";


export function Cart() {
    const [listCart, setListCart] = useState([])
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const [total, setTotalPrice] = useState(0)
    const [customer, setCustomer] = useState({})
    const navigate=useNavigate()
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const handlePay = async () => {
        await pay()
        toast("thanh toán thành công")
        navigate("/")
    }
    const handleDelete = async (idPro, idCus) => {
        let idCart = {
            idProduct: idPro,
            idCustomer: idCus
        }
        toast("xoá thành công")
        const result = await findAllCart(username, token)
        setListCart(result)
        await deleteCart(idCart)
    }
    const totalPrice = (list) => {
        let sum = 0;
        for (let i = 0; i < list.length; i++) {
            sum += list[i].price
        }
        return sum;
    }
    const handlePlus = async (idCart, idProduct, idCustomer) => {
        const cart = listCart.find(value => value.product.id === idProduct)
        let result = document.getElementById(idCart).value
        if (result < cart.product.qtt) {
            const results = +document.getElementById("abc").value
            document.getElementById(idCart).value = ++result;
            document.getElementById(idCart + 1).innerHTML = (VND.format(cart.product.price * result))
            document.getElementById("tongtien").innerHTML = VND.format(results + cart.product.price)
            document.getElementById("abc").value = results + cart.product.price
            await setQtt(idCustomer, idProduct, result, token)
        }
    }

    const handleMinus = async (idCart, idProduct, idCustomer) => {
        const cart = listCart.find(value => value.product.id === idProduct)
        let result = document.getElementById(idCart).value
        if (result < cart.product.qtt && result > 1) {
            const results = +document.getElementById("abc").value
            document.getElementById(idCart).value = --result;
            document.getElementById(idCart + 1).innerHTML = VND.format(cart.product.price * result)
            document.getElementById("tongtien").innerHTML = VND.format(results - cart.product.price)
            document.getElementById("abc").value = results - cart.product.price
            await setQtt(idCustomer, idProduct, result, token)
        }
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await findAllCart(username, token)
            const sum = totalPrice(result)
            const result1 = await findByUserName(username)
            setCustomer(result1)
            setTotalPrice(sum)
            setListCart(result)
        }
        fetchApi()
    }, [])
    useEffect(()=>{
        document.title="Giỏ hàng"
    },[])
    return (
        <>
            <Header/>
            {
                listCart && listCart.length === 0 ? <>
                    <div className="bodywrap">
                        <section className="bread-crumb"
                                 style={{
                                     background: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                                     backgroundImage: "url(https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/breadcrumb.jpg?1686556941849) ,linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))"
                                 }}>
                            <div className="container">
                                <div className="title-bread-crumb">Giỏ hàng</div>
                            </div>
                        </section>
                    </div>
                    <div className="container-fluid  mt-100" style={{marginBottom: "20px"}}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body cart">
                                        <div className="col-sm-12 empty-cart-cls text-center">
                                            <img
                                                src="https://i.imgur.com/dCdflKN.png"
                                                width={130}
                                                height={130}
                                                className="img-fluid mb-4 mr-3"
                                            />
                                            <h3>
                                                <strong>Không có sản phẩm trong giỏ hàng</strong>
                                            </h3>
                                            <h4>Chúc bạn mua sắm vui vẻ :)</h4>
                                            <a
                                                style={{backgroundColor: "#679210", borderColor: "#679210"}}
                                                href="/"
                                                className="btn btn-primary cart-btn-transform m-3"
                                                data-abc="true"
                                            >
                                                tiếp tục mua hàng
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <>
                    <input type="hidden" value={total} id="abc"/>
                    <div className="bodywrap">
                        <section className="bread-crumb"
                                 style={{
                                     background: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                                     backgroundImage: "url(https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/breadcrumb.jpg?1686556941849) ,linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))"
                                 }}>
                            <div className="container">
                                <div className="title-bread-crumb">Giỏ hàng</div>
                            </div>
                        </section>
                        <section className="main-cart-page main-container col1-layout">
                            <div className="main container cartpcstyle">
                                <div className="wrap_background_aside margin-bottom-40"
                                     style={{display: " inline-block", width: "100%", marginBottom: "40px"}}>
                                    <div className="header-cart d-none">
                                        <div className="title-block-page">
                                            <h1>Giỏ hàng của bạn</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-9 col-lg-8 col-12 col-cart-left">
                                            <div className="cart-page d-xl-block d-none">
                                                <div className="drawer__inner">
                                                    <div className="CartPageContainer">
                                                        <div className="cart ajaxcart cartpage">
                                                            <div className="cart-header-info">
                                                                <div>Thông tin sản phẩm</div>
                                                                <div>Đơn giá</div>
                                                                <div>Số lượng</div>
                                                                <div>Thành tiền</div>
                                                            </div>
                                                            {/*cart*/}
                                                            {listCart.map((value, index) => (
                                                                <div
                                                                    className="ajaxcart__inner ajaxcart__inner--has-fixed-footer cart_body items">
                                                                    <div className="ajaxcart__row">
                                                                        <div className="ajaxcart__product cart_product"
                                                                             data-line="1">
                                                                            <a href={`detail/${value.product.id}`}
                                                                               className="ajaxcart__product-image cart_image"
                                                                               title={value.product.name}><img
                                                                                src={value.product.image}
                                                                                alt={value.product.name}
                                                                                data-src={value.product.image}
                                                                            /></a>
                                                                            <div className="grid__item cart_info">
                                                                                <div
                                                                                    className="ajaxcart__product-name-wrapper cart_name">
                                                                                    <a href=""
                                                                                       className="ajaxcart__product-name h4"
                                                                                       title={value.product.name}>{value.product.name}</a>
                                                                                    <span
                                                                                        className="ajaxcart__product-meta variant-title">500gr</span>
                                                                                    <button
                                                                                        onClick={() => handleDelete(value.product.id, value.customer.id)}
                                                                                        className="cart__btn-remove remove-item-cart ajaxifyCart--remove"
                                                                                        data-line="1">Xóa
                                                                                    </button>

                                                                                </div>
                                                                                <div className="grid">
                                                                                    <div
                                                                                        className="grid__item one-half text-right cart_prices">
                                                        <span
                                                            className="cart-price">{VND.format(value.product.price)}</span>

                                                                                    </div>
                                                                                </div>
                                                                                <div className="grid">
                                                                                    <div
                                                                                        className="grid__item one-half cart_select">
                                                                                        <div
                                                                                            className="ajaxcart__qty input-group-btn">
                                                                                            <button type="button"
                                                                                                    onClick={() => handleMinus(value.product.id + "" + value.customer.id, value.product.id, value.customer.id)}
                                                                                                    className="ajaxcart__qty-adjust ajaxcart__qty--minus items-count"
                                                                                                    data-id=""
                                                                                                    data-qty="1"
                                                                                                    data-line="1"
                                                                                                    aria-label="-">
                                                                                                -
                                                                                            </button>
                                                                                            <input type="text"
                                                                                                   name="updates[]"
                                                                                                   id={value.product.id + "" + value.customer.id}
                                                                                                   className="ajaxcart__qty-num number-sidebar"
                                                                                                   maxLength="3"
                                                                                                   value={value.qtt}
                                                                                                   min="0"
                                                                                                   data-id=""
                                                                                                   data-line="1"
                                                                                                   aria-label="quantity"
                                                                                                   pattern="[0-9]*"
                                                                                                   disabled/>
                                                                                            <button type="button"
                                                                                                    onClick={() => handlePlus(value.product.id + "" + value.customer.id, value.product.id, value.customer.id)}
                                                                                                    className="ajaxcart__qty-adjust ajaxcart__qty--plus items-count"
                                                                                                    data-id=""
                                                                                                    data-line="1"
                                                                                                    data-qty="3"
                                                                                                    aria-label="+">
                                                                                                +
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="grid">
                                                                                    <div
                                                                                        className="grid__item one-half text-right cart_prices">
                                                        <span id={value.product.id + "" + value.customer.id + "" + 1}
                                                              className="cart-price">{VND.format(value.price)}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}


                                                            <div
                                                                className="ajaxcart__footer ajaxcart__footer--fixed cart-footer">
                                                                <div className="row">
                                                                    <div
                                                                        className="col-lg-4 col-12 offset-md-8 offset-lg-8 offset-xl-8">
                                                                        <div className="ajaxcart__subtotal">
                                                                            <div className="cart__col-6">Tổng tiền</div>
                                                                            <div className="text-right cart__totle">
                                                                        <span id="tongtien"
                                                                              className="total-price">{VND.format(total)}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cart__btn-proceed-checkout-dt">
                                                                            <button title="Thanh toán"
                                                                                    onClick={() => handlePay()}
                                                                                    className="button btn btn-default cart__btn-proceed-checkout"
                                                                                    id="btn-proceed-checkout">Thanh toán
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-12 col-cart-right">
                                            <form method="post" noValidate="" className="formVAT">
                                                <h4>Thông tin cá nhân</h4>
                                                <div className="r-bill">
                                                    <div className="bill-field">
                                                        <div className="form-group">
                                                            <label>Họ và tên</label>
                                                            <input
                                                                type="text"
                                                                value={customer.name}
                                                                disabled
                                                                className="form-control val-f"
                                                                name="attributes[company_name]"
                                                                placeholder="Tên"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input
                                                                value={customer.email}
                                                                type="text"
                                                                disabled
                                                                className="form-control val-f val-n"
                                                                name="attributes[tax_code]"
                                                                placeholder="email"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Số điện thoại</label>
                                                            <input
                                                                value={customer.phone}
                                                                type="email"
                                                                disabled
                                                                className="form-control val-f val-email"
                                                                name="attributes[invoice_email]"
                                                                placeholder="số điện thoại"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Địa chỉ nơi ở</label>
                                                            <textarea
                                                                type="text"
                                                                disabled
                                                                className="form-control val-f"
                                                                name="attributes[company_address]"
                                                                placeholder="địa chỉ nơi ở"
                                                                defaultValue={"Trung Thành, Yên Thành, Nghệ An"}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            }
            <Footer/>
        </>
    )
}