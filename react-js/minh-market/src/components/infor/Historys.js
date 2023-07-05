import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./history.css"
import {historyOrder, searchOrder} from "../../service/HistoryService";
import {toast} from "react-toastify";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

export function Historys() {
    const [listCart, setListCart] = useState([])
    useEffect(() => {
        const username = localStorage.getItem("username")
        const fetchApi = async () => {
            const result = await historyOrder(username);
            setListCart(result)
        }
        fetchApi()
    }, [])
    useEffect(()=>{
        document.title="Lịch sử"
    },[])
    const handleSearch = async () => {
        const username = localStorage.getItem("username")
        const dateStart = document.getElementById("start").value
        const dateEnd = document.getElementById("end").value
        if (dateStart===""||dateEnd===""){
            toast("bạn phải nhập ngày vào để tìm kiếm")
        }else if (dateEnd<dateStart){
            toast("ngày bắt đầu phải ngỏ hơn ngày kết thúc")
        }else {
            const result = await searchOrder(username, dateStart, dateEnd)
            setListCart(result)
        }

    }
    return (
        <>
            <Header/>
            <div className="container" style={{margin: "50px auto"}}>
                <div className="row">
                    <i className="bi bi-list menu d-none" onClick="openNav()"/>
                    <div className="col-3 side-bar">
                        <h2 style={{fontSize: 24, color:"#679210"}} className="text-center mt-3">
                            Quản lý tài khoản
                        </h2>
                        <p className="text-center flex-column">
                            <img
                                src={
                                    "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                                }
                                className="rounded-circle"
                                style={{width: 100, margin: `0 auto`, border: "1px solid"}}
                                height="100px"
                            />
                        </p>
                        <p style={{fontSize: 25}} className="text-center mt-3">
                            {localStorage.getItem("username")}
                        </p>
                        <div className="mt-3">
                            <button
                                type="button"
                                className="log-out btn btn-success"
                                style={{display: "block",backgroundColor:"#679210"}}
                                // onClick={handleLogout}
                            >
                                <i className="bi bi-arrow-right-circle"/>
                                Đăng xuất
                            </button>
                        </div>
                        <hr/>
                        {(
                            <Link
                                to={"/information"}
                                className="mt-2"
                                style={{color: "black"}}
                            >
                                <link href="" style={{fontSize: 14}}/>
                                <i className="bi bi-person-bounding-box"/>
                                Thông tin tài khoản
                            </Link>
                        )}
                        <hr/>
                        <Link
                            to={"/history"}
                            className="mt-2"
                            style={{color: "black"}}
                        >
                            <link style={{fontSize: 14}}/>
                            <i className="bi bi-calculator"/>
                            Lịch sử
                        </Link>
                    </div>
                    <div className=" container mx-auto my-5 col-9">
                        <div style={{marginBottom: 20, color:"#679210"}}>
                            <h2
                                className="d-flex justify-content-center"
                                style={{padding: 16}}
                            >
                                Lịch sử đặt hàng
                            </h2>
                        </div>
                        <div style={{marginTop: 20}}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center">
                                        <form>
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <th style={{float: "right", background: "white"}}>
                                                        <p style={{fontSize: 14}}>
                                                            Từ Ngày :{" "}
                                                            <span style={{color: "red"}}>(*)</span>
                                                        </p>
                                                    </th>
                                                    <th style={{background: "white"}}>
                                                        <input
                                                            id="start"
                                                            style={{width: 300}}
                                                            type="date"
                                                        />
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th style={{float: "right", background: "white"}}>
                                                        <p style={{fontSize: 14}}>
                                                            Đến Ngày :{" "}
                                                            <span style={{color: "red"}}>(*)</span>
                                                        </p>
                                                    </th>
                                                    <th style={{background: "white"}}>
                                                        <input
                                                            id="end"
                                                            style={{width: 300}}
                                                            type="date"
                                                        />
                                                    </th>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <div className="mt-3 text-center">
                                                <button
                                                    style={{backgroundColor:"#679210"}}
                                                    onClick={() => handleSearch()}
                                                    type="button"
                                                    className="log-out btn btn-success"
                                                >
                                                    Tra cứu
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {listCart.length === 0 ? (
                                        <h3 className={"text-danger text-center my-3"}>
                                            Không tìm thấy kết quả{" "}
                                        </h3>
                                    ) : (
                                        <div className="col-md-12">
                                            <div className="mt-3" style={{width: "100%"}}>
                                                <div
                                                    className=" table-responsive px-5 py-3 d-flex justify-content-center flex-column">
                                                    <table className="table table-striped table-hover">
                                                        <thead>
                                                        <tr>
                                                            <th>STT</th>
                                                            <th>Tên</th>
                                                            <th>Số lượng</th>
                                                            <th>Ngày mua hàng</th>
                                                            <th>Mã hoá đơn</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {listCart.map((cart, index) => (
                                                            <tr key={index}>
                                                                <td>{index+1}</td>
                                                                <td>{cart?.nameProduct}</td>
                                                                <td>{cart?.qtt}</td>
                                                                <td>{cart?.dateOrder}</td>
                                                                <td>{cart?.codeOrder}</td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                    {/*<div className="d-grid">*/}
                                                    {/*    <ReactPaginate*/}
                                                    {/*        breakLabel="..."*/}
                                                    {/*        nextLabel=">"*/}
                                                    {/*        onPageChange={handlePageClick}*/}
                                                    {/*        pageCount={pageCount}*/}
                                                    {/*        pageRangeDisplayed={2}*/}
                                                    {/*        marginPagesDisplayed={1}*/}
                                                    {/*        previousLabel="<"*/}
                                                    {/*        containerClassName="pagination"*/}
                                                    {/*        pageClassName="page-item"*/}
                                                    {/*        pageLinkClassName="page-link"*/}
                                                    {/*        nextClassName="page-item"*/}
                                                    {/*        nextLinkClassName="page-link"*/}
                                                    {/*        previousClassName="page-item"*/}
                                                    {/*        previousLinkClassName="page-link"*/}
                                                    {/*        activeClassName="active"*/}
                                                    {/*        disabledClassName="d-none"*/}
                                                    {/*    />*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}