import React, {useEffect} from "react";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

export function Policy() {
    useEffect(()=>{
        document.title="Chính sách"
    },[])
    return (
        <>
            <Header/>
            <div className="bodywrap">
                <section className="bread-crumb"
                         style={{
                             background: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                             backgroundImage: "url(https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/breadcrumb.jpg?1686556941849) ,linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))"
                         }}>
                    <div className="container">
                        <div className="title-bread-crumb">
                            Chính sách thành viên
                        </div>
                    </div>
                </section>
                <section className="page">
                    <div className="container">
                        <div className="pg_page padding-top-15">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title category-title">
                                        <h1 className="title-head d-none"><a href="#">Chính sách thành viên</a></h1>
                                    </div>
                                    <div className="content-page rte">
                                        <p>Điều kiện chính sách thành viên</p>
                                        <p><strong>1. Thẻ thành viên</strong></p>
                                        <p>Điều kiện cấp thẻ thành viên: Khi khách hàng mua hàng trên hệ thống nhà hàng
                                            Dola
                                            Restaurant&nbsp;sẽ được cấp thẻ thành viên.</p>
                                        <p><strong>2. Thẻ VIP</strong></p>
                                        <p><strong>Điều kiện nhận thẻ VIP:</strong></p>
                                        <p>+ Có giá trị tổng đơn hàng lớn hơn 15&nbsp;triệu/ tháng</p>
                                        <p>+ Mua hàng với giá trị 3&nbsp;triệu trợ lên</p>
                                        <p>+ Tham gia các hoạt động, chương trình khuyến mãi của Dola</p>
                                        <p><strong>Lưu ý:&nbsp;</strong>Hạn mức 10,&nbsp;20,&nbsp;30, 50,100 triệu
                                            đồng&nbsp;là
                                            tính từ thời điểm bắt đầu mua tới khi lên thẻ. Khi lên thẻ VIP&nbsp;và tích
                                            tiếp lên
                                            20 đến&nbsp;100&nbsp;triệu, tổng&nbsp;tiền này là tính từ khi khách
                                            hàng&nbsp;mua
                                            lần đầu và cộng dồn lên.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}