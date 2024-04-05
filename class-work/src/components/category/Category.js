import React from "react";
import "./Category.css";
import { BsPhone, BsSmartwatch } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineCamera } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";
import { SiYoutubegaming } from "react-icons/si";

function Category() {
  let data = [
    {
      id: 1,
      img: <BsPhone />,
      text: "Phones",
    },
    {
      id: 2,
      img: <HiOutlineComputerDesktop />,
      text: "Computers",
    },
    {
      id: 3,
      img: <BsSmartwatch />,
      text: "SmartWatch",
    },
    {
      id: 4,
      img: <AiOutlineCamera />,
      text: "Camera",
    },
    {
      id: 5,
      img: <FiHeadphones />,
      text: "HeadPhones",
    },
    {
      id: 6,
      img: <SiYoutubegaming />,
      text: "Gaming",
    },
  ];
  let category = data?.map((el) => (
    <li key={el.id} className="category__list-item">
      {el.img}
      <p>{el.text}</p>
    </li>
  ));
  return (
    <section className="category">
      <div className="container">
        <div className="category__start">
          <p className="category__text">Categories</p>
          <h2 className="category__title">Browse By Category</h2>
          <ul className="category__list">{category}</ul>
        </div>
      </div>
    </section>
  );
}

export default Category;
