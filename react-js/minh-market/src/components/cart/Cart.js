import React, {useEffect, useState} from "react";
import "./cart.css"
import {findAllCart, pay, setQtt} from "../../service/CartService";

export function Cart() {
    const [listCart, setListCart] = useState([])
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const [total, setTotalPrice] = useState(0)
    const handlePay = async () => {
        window.location.href=await pay()
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
            const results = +document.getElementById("tongtien").innerHTML
            document.getElementById(idCart).value = ++result;
            document.getElementById(idCart + 1).innerHTML = cart.product.price * result
            document.getElementById("tongtien").innerHTML = results + cart.product.price
            await setQtt(idCustomer, idProduct, result, token)
        }
    }

    const handleMinus = async (idCart, idProduct, idCustomer) => {
        const cart = listCart.find(value => value.product.id === idProduct)
        let result = document.getElementById(idCart).value
        if (result < cart.product.qtt && result > 1) {
            document.getElementById(idCart).value = --result;
            document.getElementById(idCart + 1).innerHTML = cart.product.price * result
            const results = +document.getElementById("tongtien").innerHTML
            document.getElementById("tongtien").innerHTML = results - cart.product.price
            await setQtt(idCustomer, idProduct, result, token)
        }
    }
    useEffect(() => {
        const fetchApi = async () => {
            console.log(token)
            const result = await findAllCart(username, token)
            const sum = totalPrice(result)
            setTotalPrice(sum)
            setListCart(result)
        }
        fetchApi()
    }, [])
    return (
        <>
            <div className="bodywrap">
                <section className="bread-crumb"
                         style={{background: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))"}}>
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
                                                                    <a href="/xa-lach-bup-mo-500gr"
                                                                       className="ajaxcart__product-image cart_image"
                                                                       title={value.product.name}><img
                                                                        src={value.product.image}
                                                                        alt={value.product.name}
                                                                        data-src={value.product.image}
                                                                    /></a>
                                                                    <div className="grid__item cart_info">
                                                                        <div
                                                                            className="ajaxcart__product-name-wrapper cart_name">
                                                                            <a href="/xa-lach-bup-mo-500gr"
                                                                               className="ajaxcart__product-name h4"
                                                                               title={value.product.name}>{value.product.name}</a>
                                                                            <span
                                                                                className="ajaxcart__product-meta variant-title">500gr</span>
                                                                            <a className="cart__btn-remove remove-item-cart ajaxifyCart--remove"
                                                                               href="javascript:;" data-line="1">Xóa</a>

                                                                        </div>
                                                                        <div className="grid">
                                                                            <div
                                                                                className="grid__item one-half text-right cart_prices">
                                                                                <span
                                                                                    className="cart-price">{value.product.price}₫</span>

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
                                                                                            data-id="" data-qty="1"
                                                                                            data-line="1"
                                                                                            aria-label="-">
                                                                                        -
                                                                                    </button>
                                                                                    <input type="text" name="updates[]"
                                                                                           id={value.product.id + "" + value.customer.id}
                                                                                           className="ajaxcart__qty-num number-sidebar"
                                                                                           maxLength="3"
                                                                                           value={value.qtt} min="0"
                                                                                           data-id="" data-line="1"
                                                                                           aria-label="quantity"
                                                                                           pattern="[0-9]*"
                                                                                           disabled/>
                                                                                    <button type="button"
                                                                                            onClick={() => handlePlus(value.product.id + "" + value.customer.id, value.product.id, value.customer.id)}
                                                                                            className="ajaxcart__qty-adjust ajaxcart__qty--plus items-count"
                                                                                            data-id="" data-line="1"
                                                                                            data-qty="3" aria-label="+">
                                                                                        +
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="grid">
                                                                            <div
                                                                                className="grid__item one-half text-right cart_prices">
                                                                                <span
                                                                                    id={value.product.id + "" + value.customer.id + "" + 1}
                                                                                    className="cart-price">{value.price}₫</span>
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
                                                                              className="total-price">{total}</span>
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}