import React from "react";
import "./DiscriptionBox.css";
const DiscriptionBox = () => {
  return (
    <div className="discriptionbox">
      <div className="discriptionbox-navigator">
        <div className="discriptionbox-nav-box">Discription</div>
        <div className="discriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="discriptionbox-discription">
        <p>
        This ecommerce website caters to the exchange of goods and services for
          electronic transaction of money as well as Cash-On-Delivery (COD).
          You can visit this website, choose the products they like, enter
          the required details, make payment (or choose to pay later), and
          purchase goods and services in a jiffy.
          
        </p>
        <p>
        This ecommerce website is your digital storefront on the internet. It
          facilitates the transaction between a buyer and seller. It is the
          virtual space where you showcase products, and online customers make
          selections. This website acts as the product shelves, sales staff, and
          cash register of your online business channel.
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;
