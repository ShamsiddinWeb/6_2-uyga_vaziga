import React from "react";
import "./Products.css";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Bir from "../../assets/images/pro_img-bir.png";
import Ikki from "../../assets/images/ikki.png";
import Uch from "../../assets/images/pro_img-uch.png";
import Tort from "../../assets/images/pro_img-tort.png";
import Besh from "../../assets/images/pro_img-besh.png";
import Olti from "../../assets/images/pro_img-olti.png";
import Yetti from "../../assets/images/pro_img-yetti.png";
import Sakkiz from "../../assets/images/pro_img-sakkiz.png";

function Products() {
  let data = [
    {
      id: 1,
      img: <Bir />,
      title: "Breed Dry Dog Food",
      price: 100,
      stock: 35,
    },
    {
      id: 2,
      img: <Ikki />,
      title: "CANON EOS DSLR Camerad",
      price: 360,
      stock: 95,
    },
    {
      id: 3,
      img: <Uch />,
      title: "ASUS FHD Gaming Laptop",
      price: 700,
      stock: 325,
    },
    {
      id: 4,
      img: <Tort />,
      title: "Curology Product Set",
      price: 500,
      stock: 145,
    },
    {
      id: 5,
      img: <Besh />,
      title: "Kids Electric Car",
      price: 960,
      stock: 65,
    },
    {
      id: 6,
      img: <Olti />,
      title: "Jr. Zoom Soccer Cleats",
      price: 1160,
      stock: 35,
    },
    {
      id: 7,
      img: <Yetti />,
      title: "GP11 Shooter USB Gamepad",
      price: 660,
      stock: 55,
    },
    {
      id: 8,
      img: <Sakkiz />,
      title: "Quilted Satin Jacket",
      price: 660,
      stock: 67,
    },
  ];
  // let products = data?.map((el) => (

  // ));
  return (
    <section class="products">
      <div class="container">
        <div class="products__start">
          <p class="category__text">Our Products</p>
          <div class="products__group">
            <h2 class="category__group-title">Explore Our Products</h2>
            <div class="products__group-img">
              <BsArrowLeft />
              <BsArrowRight />
            </div>
          </div>
          <div class="products__wrapper">
            <div className="products__wrapper-card">
              <img src={Bir} alt="" />
              <AiOutlineHeart />
              <AiOutlineEye />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
