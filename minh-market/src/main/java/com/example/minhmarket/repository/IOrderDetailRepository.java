package com.example.minhmarket.repository;

import com.example.minhmarket.model.IOrderManage;
import com.example.minhmarket.model.IdOrderDetail;
import com.example.minhmarket.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail, IdOrderDetail> {
    @Query(value = "select p.name_product as nameProduct, op.date_order as dateOrder, od.qtt as qtt,op.id_order as codeOrder from order_product as op \n" +
            "inner join order_detail as od on op.id_order=od.id_order\n" +
            "inner join product as p on p.id_product=od.id_product\n" +
            "inner join customer as c on c.id_customer= op.id_customer " +
            "inner join account as a where a.name_account= :nameAcc",nativeQuery = true)
    List<IOrderManage> getAllOrder(String nameAcc);
    @Query(value = "select p.name_product as nameProduct, op.date_order as dateOrder, od.qtt as qtt,op.id_order as codeOrder from order_product as op \n" +
            "inner join order_detail as od on op.id_order=od.id_order\n" +
            "inner join product as p on p.id_product=od.id_product\n" +
            "inner join customer as c on c.id_customer= op.id_customer " +
            "inner join account as a where a.name_account= :nameAcc and op.date_order between :start and :end",nativeQuery = true)
    List<IOrderManage> searchByDate(String nameAcc, LocalDate start, LocalDate end);
}
