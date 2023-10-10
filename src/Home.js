import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <img className="home__image" src="https://miro.medium.com/v2/resize:fit:1200/0*xeMP6IcGjGUYSeTs.jpg" alt="" />

        <div className="home__row">
       <Product
            id = "12880097"
            title = "8-Core CPU 10-Core GPU 8GB Unified Memory 512GB SSD Storage¹"
            price = {79990}
            rating = {5}
            image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-hero-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1670038314708"
            />  
        <Product
            id = "12700090"
            title = "Galaxy Z Fold5"
            price = {164999}
            rating = {5}
            image = "https://images.samsung.com/in/smartphones/galaxy-z-fold5/buy/product_color_icyBlue.png?imwidth=480"
            />      
        </div>
        <div className="home__row">
        <Product
            id = "12888876"
            title = "InstaLite Unbreakable Sports Water Bottle 1 Litre with Time Markings, BPA Free Non-Toxic Water Bottle for Gym, Office Water Bottle"
            price = {1500}
            rating = {3}
            image = "https://m.media-amazon.com/images/I/81zdMi6Dz7L._AC_UF894,1000_QL80_.jpg"
            />  
        <Product
            id = "12000006"
            title = "LG 28 L Convection Microwave Oven (MC2846BG, Black)"
            price = {32000}
            rating = {4}
            image = "https://m.media-amazon.com/images/I/71pjlg3dSQL._SX679_.jpg"
            />  

        <Product
            id = "12887890"
            title = "Apple iPad Pro 11-inch 2021 (Space Gray, 128GB, 8GB RAM)"
            price = {142990}
            rating = {5}
            image = "https://img5.gadgetsnow.com/gd/images/products/additional/large/G234508_View_1/mobiles/tablets/apple-ipad-pro-11-inch-2021-space-gray-128gb-8gb-ram-.jpg"
            />          
        </div>
        <div className="home__row">
        <Product
            id = "12867809"
            title = "SAMSUNG 1m 38cm 55 inch S95C OLED 4K Smart TV"
            price = {2024990}
            rating = {4}
            image = "https://images.samsung.com/is/image/samsung/p6pim/in/qa55s95caklxl/gallery/in-oled-s95c-qa55s95caklxl-536392156?$1300_1038_PNG$"
            />   
        </div>
    </div>

    
  )
}

export default Home;
