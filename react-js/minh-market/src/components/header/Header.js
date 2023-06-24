import React from "react";
import "./header.css"
import {Link} from "react-router-dom";

export function Header() {
    return (
        <>
            <header className="header" style={{minHeight: "150px"}}>
                <div className="container" style={{marginTop: "15px"}}>
                    <div className="row row-header align-items-center">

                        <div className="menu-bar d-lg-none d-flex">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                 class="svg-inline--fa fa-bars fa-w-14">
                                <path fill="#ffffff"
                                      d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
                            </svg>
                        </div>
                        <div className="col-lg-2">
                            <a href="/" className="logo" title="Logo">
                                <img width="220" height="27"
                                     src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/logo.png?1686556941849"
                                     alt="Dola Organic"/>
                            </a>
                        </div>
                        <div className="col-lg-5  search-header">
                            <div className="search-smart">
                                <div className="header-search-form input-group search-bar"
                                     role="search">
                                    <input type="text" name="query" required=""
                                           className="input-group-field auto-search search-auto form-control"/>
                                    <input type="hidden" name="type" value="product"/>
                                    <button type="submit" className="btn icon-fallback-text" aria-label="Tìm kiếm"
                                            title="Tìm kiếm">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="#000"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#000"
                                                  d="M14.1404 13.4673L19.852 19.1789C20.3008 19.6276 19.6276 20.3008 19.1789 19.852L13.4673 14.1404C12.0381 15.4114 10.1552 16.1835 8.09176 16.1835C3.6225 16.1835 0 12.5613 0 8.09176C0 3.6225 3.62219 0 8.09176 0C12.561 0 16.1835 3.62219 16.1835 8.09176C16.1835 10.1551 15.4115 12.038 14.1404 13.4673ZM0.951972 8.09176C0.951972 12.0356 4.14824 15.2316 8.09176 15.2316C12.0356 15.2316 15.2316 12.0353 15.2316 8.09176C15.2316 4.14797 12.0353 0.951972 8.09176 0.951972C4.14797 0.951972 0.951972 4.14824 0.951972 8.09176Z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 header-control">
                            <ul className="ul-control">
                                <li className="header-contact d-lg-flex d-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="#679210"
                                              d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/>
                                    </svg>
                                    <span>
                                        <b>Hotline : </b>
                                        <a href="">1900 6750</a>
                                    </span>
                                </li>
                                <li className="header-account d-lg-flex d-none">
                                     <Link to={localStorage.getItem("username")!==null ? "/cart" : "/login"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 40 40">
                                            <defs></defs>
                                            <g id="ic-user">
                                                <g id="_6-User" data-name="6-User">
                                                    <g id="Group_18" data-name="Group 18">
                                                        <path className="cls-1" id="Path_92" data-name="Path 92"
                                                              d="M20,22.21a6.12,6.12,0,1,0-6.12-6.12h0A6.13,6.13,0,0,0,20,22.21ZM20,12a4.08,4.08,0,1,1-4.08,4.08A4.08,4.08,0,0,1,20,12Z"></path>
                                                        <path id="Path_93" data-name="Path 93" className="cls-1"
                                                              d="M20,4.88A16.31,16.31,0,1,0,36.31,21.19,16.31,16.31,0,0,0,20,4.88Zm0,2A14.25,14.25,0,0,1,31.93,29a15.23,15.23,0,0,0-21.38-2.47A15.66,15.66,0,0,0,8.07,29,14.25,14.25,0,0,1,20,6.92Zm0,28.54A14.24,14.24,0,0,1,9.35,30.65a13.24,13.24,0,0,1,21.3,0A14.24,14.24,0,0,1,20,35.46Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </Link>
                                    <ul>
                                        <li><Link to="/register" href="">Đăng kí</Link></li>
                                        <li><Link to="/login">Đăng nhập</Link></li>
                                    </ul>
                                </li>
                                <li className="header-account d-lg-flex d-none">
                                    <Link to={localStorage.getItem("username")!==null ? "/cart" : "/login"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 40 40">
                                            <defs></defs>
                                            <g id="ic-user">
                                                <g id="_6-User" data-name="6-User">
                                                    <g id="Group_18" data-name="Group 18">
                                                        <path className="cls-1" id="shopping-bag" data-name="Path 92"
                                                              d="M35.91,36.17,33.24,10.75a1,1,0,0,0-1-.94h-5V8.67a6.47,6.47,0,1,0-12.93,0V9.81h-5a1.05,1.05,0,0,0-1,.94L5.52,36.17a1,1,0,0,0,.93,1.15H34.87a1,1,0,0,0,1.05-1A.41.41,0,0,0,35.91,36.17ZM16.35,8.67a4.38,4.38,0,1,1,8.75,0V9.81H16.35ZM7.73,35.24l2.45-23.33h4.07v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91H25.1v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91h4.07l2.45,23.33Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>

                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-menu">
                        <div className="header-menu-des">
                            <nav className="header-nav">
                                <ul className="item_big">
                                    <li className="nav-item active">
                                        <a className="a-img" href="/" title="Trang chủ">
                                            Trang chủ
                                        </a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="a-img" href="/" title="Trang chủ">
                                            Sản phẩm
                                        </a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="a-img" href="/" title="Trang chủ">
                                            Chính sách thành viên
                                        </a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="a-img" href="/" title="Trang chủ">
                                            Giới thiệu
                                        </a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="a-img" href="/" title="Trang chủ">
                                            Liên hệ
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}