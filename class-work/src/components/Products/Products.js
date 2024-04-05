import React from "react";
import "./Products.css";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Bir from "../../assets/images/pro_img-bir.png";
import Ikki from "../../assets/images/pro_img-ikki.png";
import Uch from "../../assets/images/pro_img-uch.png";
import Tort from "../../assets/images/pro_img-tort.png";
import Besh from "../../assets/images/pro_img-besh.png";
import Olti from "../../assets/images/pro_img-olti.png";
import Yetti from "../../assets/images/pro_img-yetti.png";
import Sakkiz from "../../assets/images/pro_img-sakkiz.png";
import Yulduz from "../../assets/icons/Three Star.svg";

function Products() {
  let data = [
    {
      id: 1,
      img: Bir,
      title: "Breed Dry Dog Food",
      price: 100,
      stock: 35,
    },
    {
      id: 2,
      img: Ikki,
      title: "CANON EOS DSLR Camerad",
      price: 360,
      stock: 95,
    },
    {
      id: 3,
      img: Uch,
      title: "ASUS FHD Gaming Laptop",
      price: 700,
      stock: 325,
    },
    {
      id: 4,
      img: Tort,
      title: "Curology Product Set",
      price: 500,
      stock: 145,
    },
    {
      id: 5,
      img: Besh,
      title: "Kids Electric Car",
      price: 960,
      stock: 65,
    },
    {
      id: 6,
      img: Olti,
      title: "Jr. Zoom Soccer Cleats",
      price: 1160,
      stock: 35,
    },
    {
      id: 7,
      img: Yetti,
      title: "GP11 Shooter USB Gamepad",
      price: 660,
      stock: 55,
    },
    {
      id: 8,
      img: Sakkiz,
      title: "Quilted Satin Jacket",
      price: 660,
      stock: 67,
    },
  ];
  let products = data?.map((el) => (
    <div className="products__wrapper-group">
      <div className="products__wrapper-img">
        <img src={el.img} alt="" />
        <AiOutlineHeart className="img1" />
        <AiOutlineEye className="img2" />
        <button className="products__wrapper-btn">Add To Cart</button>
      </div>
      <h4 className="products__wrapper-title">{el.title}</h4>
      <div className="products__card">
        <p>${el.price}</p>
        <img src={Yulduz} alt="" />
        <span>({el.stock})</span>
      </div>
    </div>
  ));
  return (
    <section className="products">
      <div className="container">
        <div className="products__start">
          <p className="category__text">Our Products</p>
          <div className="products__group">
            <h2 className="category__group-title">Explore Our Products</h2>
            <div classn="products__group-img">
              <BsArrowLeft className="nima" />
              <BsArrowRight className="nima" />
            </div>
          </div>
          <div className="products__wrapper">{products}</div>
        </div>
      </div>
    </section>
  );
}

export default Products;
