import React from "react";
import "./Service.css";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineMoneyCollect } from "react-icons/ai";

function Service() {
  let data = [
    {
      id: 1,
      img: <TbTruckDelivery />,
      text: "Phones",
    },
    {
      id: 2,
      img: <RiCustomerService2Fill />,
      text: "Computers",
    },
    {
      id: 3,
      img: <AiOutlineMoneyCollect />,
      text: "SmartWatch",
    },
  ];
  let service = data?.map((el) => (
    <li key={el.id} className="service__list-item">
      <span className="service__list-span1">
        <span className="service__list-span2">{el.img}</span>
      </span>
      <h3 className="service__list-title">FREE AND FAST DELIVERY</h3>
      <p className="service__list-text">
        Free delivery for all orders over $140
      </p>
    </li>
  ));
  return (
    <section className="service">
      <div className="container">
        <ul className="service__list">{service}</ul>
      </div>
    </section>
  );
}

export default Service;
