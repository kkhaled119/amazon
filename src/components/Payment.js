import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";

import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

import { getBasketTotal } from "../context/AppReducer";
import "./Payment.css";

const Payment = () => {
  const { basket, user } = useAuth();
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Cairo,Egypt</p>
          </div>
        </div>
        {/*Review Items */}

        <div className="payment-section">
          <div className="payment-title">
            <h3> Review item and Delivery </h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/*Payment method*/}

        <div className="payment-section">
          <h3>Payment Method</h3>
          <div className="payment-details">
            <form>
              {/*Stripe  */}
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order total :{value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button>
                  <span>Buy Now</span>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
