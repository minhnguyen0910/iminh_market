import React from "react";
import "./footer.css";

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="mid-footer">
                    <div className="container" style={{marginTop: "10px"}}>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 ft-info col-footer">

                                <a href="/" className="logo-ft" title="Logo">
                                    <img width="220" height="27"
                                         src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/logo-ft.png?1686556941849"
                                         alt="Dola Organic"/>
                                </a>
                                <div className="content-ft">
                                    Chúng tôi hi vọng tất cả người tiêu dùng Việt nam sẽ được sử dụng những thụ phẩm rau
                                    củ quả tươi ngon, bổ dưỡng và an toàn nhất tại cửa hàng cung cấp thực phẩm rau củ
                                    sạch Minh Market.
                                </div>
                                <h4 className="title-menus">
                                    Hình thức thanh toán
                                </h4>
                                <ul className="thanhtoan">

                                    <li><img width="57" height="35" alt="Payment 1"
                                             data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_1.png?1686556941849"
                                             className="lazyload loaded"
                                             src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_1.png?1686556941849"
                                             data-was-processed="true"/></li>
                                    <li><img width="57" height="35" alt="Payment 2"
                                             data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_2.png?1686556941849"
                                             className="lazyload loaded"
                                             src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_2.png?1686556941849"
                                             data-was-processed="true"/></li>
                                    <li><img width="57" height="35" alt="Payment 3"
                                             data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_3.png?1686556941849"
                                             className="lazyload loaded"
                                             src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/payment_3.png?1686556941849"
                                             data-was-processed="true"/></li>

                                </ul>

                            </div>
                            <div className="col-12 col-md-6 col-lg-2 link-list col-footer">
                                <h4 className="title-menu title-menu2">
                                    Chính sách
                                </h4>
                                <ul className="list-menu">

                                    <li><a href="/chinh-sach-thanh-vien" title="Chính sách thành viên">Chính sách thành
                                        viên</a></li>

                                    <li><a href="/chinh-sach-thanh-toan" title="Chính sách thanh toán">Chính sách thanh
                                        toán</a></li>

                                    <li><a href="/huong-dan-mua-hang" title="Hướng dẫn mua hàng">Hướng dẫn mua hàng</a>
                                    </li>

                                    <li><a href="/bao-mat-thong-tin-ca-nhan" title="Bảo mật thông tin cá nhân">Bảo mật
                                        thông tin cá nhân</a></li>

                                    <li><a href="/qua-tang-tri-an" title="Quà tặng tri ân">Quà tặng tri ân</a></li>

                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 link-list col-footer ">
                                <h4 className="title-menu title-menu2">
                                    Thông tin chung
                                </h4>
                                <div className="group-address">
                                    <ul>
                                        <li><b>Địa chỉ: </b><span>

								Hoà Khánh Bắc - Liên Chiểu - Đà Nẵng

								</span></li>
                                        <li>
                                            <b>Điện thoại: </b><a title="1900 6750" href="tel:19006750">0961053274</a>
                                        </li>
                                        <li>
                                            <b>Email: </b><a title="support@sapo.vn"
                                                             href="mailto:support@sapo.vn">minh@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="title-menu">
                                    Liên kết sàn
                                </h4>

                                <ul className="social">
                                    <li><a href="#" title="Zalo"><img width="32" height="32" title="Zalo"
                                                                      className="lazyload loaded"
                                                                      src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/zalo.png?1686556941849"
                                                                      data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/zalo.png?1686556941849"
                                                                      data-was-processed="true"/></a></li>
                                    <li><a href="#" title="Facebook"><img width="32" height="32" title="Facebook"
                                                                          className="lazyload loaded"
                                                                          src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/facebook.png?1686556941849"
                                                                          data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/facebook.png?1686556941849"
                                                                          data-was-processed="true"/></a></li>
                                    <li><a href="#" title="Youtube"><img width="32" height="32" title="Youtube"
                                                                         className="lazyload loaded"
                                                                         src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/youtube.png?1686556941849"
                                                                         data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/youtube.png?1686556941849"
                                                                         data-was-processed="true"/></a></li>
                                    <li><a href="#" title="Google"><img width="32" height="32" title="Google"
                                                                        className="lazyload loaded"
                                                                        src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/google.png?1686556941849"
                                                                        data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/google.png?1686556941849"
                                                                        data-was-processed="true"/></a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <h4 className="title-menu">
                                    Instagram
                                </h4>
                                <ul className="instagram">
                                    <li>
                                        <div className="thumb-image">
                                            <img className="lazyload loaded"
                                                 src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_1.png?1686556941849"
                                                 data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_1.png?1686556941849"
                                                 alt="Instagram" data-was-processed="true"/>
                                            <a href="#" title="Instagram">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb-image">
                                            <img className="lazyload loaded"
                                                 src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_2.png?1686556941849"
                                                 data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_2.png?1686556941849"
                                                 alt="Instagram" data-was-processed="true"/>
                                            <a href="#" title="Instagram">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb-image">
                                            <img className="lazyload loaded"
                                                 src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_3.png?1686556941849"
                                                 data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_3.png?1686556941849"
                                                 alt="Instagram" data-was-processed="true"/>
                                            <a href="#" title="Instagram">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb-image">
                                            <img className="lazyload loaded"
                                                 src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_4.png?1686556941849"
                                                 data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_4.png?1686556941849"
                                                 alt="Instagram" data-was-processed="true"/>
                                            <a href="#" title="Instagram">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb-image">
                                            <img className="lazyload loaded"
                                                 src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_5.png?1686556941849"
                                                 data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_5.png?1686556941849"
                                                 alt="Instagram" data-was-processed="true"/>
                                            <a href="#" title="Instagram">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb-image">
                                            <img className="lazyload loaded"
                                                 src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_6.png?1686556941849"
                                                 data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/image_ins_6.png?1686556941849"
                                                 alt="Instagram" data-was-processed="true"/>
                                            <a href="#" title="Instagram">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}