import React, { useContext, useState } from "react";
import { CartCounterContext } from "../features/Context/CartContext";
import {Link} from "react-router-dom";

const CheckoutLayout = () => {
  const {cartItems} = useContext(CartCounterContext)
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center w-[600px]">
          <p className="text-[40px] mb-4">Completed</p>

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center">
              <p className="p-2 px-4 rounded-2xl bg-gray-300 text-black">1</p>
              <p>Shopping cart</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="p-2  px-4 rounded-2xl bg-gray-300 text-white">2</p>
              <p>Checkout details</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="p-2  px-4 rounded-2xl bg-black text-black">3</p>
              <p>Order complete</p>
            </div>
          </div>
        </div>
        <div className="flex my-10 gap-10">
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1  gap-8 mb-10">
              {/* Contact Information */}
              <div className="border  p-4 rounded-md border-black">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <form>
                  <div className="flex items-center justify-between gap-2">
                    <div className="mb-4">
                      <label className="block text-sm font-medium">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="First name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Email"
                    />
                  </div>
                </form>
              </div>

              {/* Shipping Address */}
              <div className="border rounded-md p-4 border-black">
                <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Street Address"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Country</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Country"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">
                      Town / City
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Town / City"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="mb-4">
                      <label className="block text-sm font-medium">State</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="State"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="ZIP Code"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-10 border p-4 rounded-md border-black">
              <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
              <form className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="creditCard"
                    name="payment"
                    value="creditCard"
                    className="mr-2"
                  />
                  <label htmlFor="creditCard" className="text-sm font-medium">
                    Pay by Card Credit
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    value="paypal"
                    className="mr-2"
                  />
                  <label htmlFor="paypal" className="text-sm font-medium">
                    Paypal
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="1234 1234 1234 1234"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium">CVC</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="text-right w-full my-4">
              <button className="w-full px-6 py-2 bg-black text-white font-semibold rounded">
                <Link to="/complete">Place Order</Link>
              </button>
            </div>
          </div>
          {/* Order Summery */}
          <div className="border border-black p-2 rounded-md max-h-[700px]">
            <div className="w-[320px] bg-white box-content">
                <p className="font-medium text-[28px] p-2">Order summery</p>
              <div className=" flex flex-col px-4 justify-between gap-10  box-content">
                <div className="flex flex-col w-full justify-between gap-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between py-4 border-b"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.img}
                          alt="Product Image"
                          className="h-[80px] w-[96px] "
                        />
                        <div className="">
                          <p className="font-semibold text-[14px] pb-1">
                            {item.title}
                          </p>
                          <p className="text-gray-500 text-[14px] pb-2">
                            Color: {item.color}
                          </p>
                          <div className="flex items-center rounded border pb-1 px-1">
                            <button className="px-1">+</button>
                            <p className="px-4">{item.quantity}</p>
                            <button className="px-1">-</button>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[14px] font-semibold">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <div className="flex py-2 items-center justify-between mb-2">
                    <input type="text" placeholder="Input" className="p-2 border-gray-600 border rounded-md"/>
                    <button className="p-2 px-4 bg-black text-white rounded-md">Apply</button>
                  </div>
                  <div className="flex border-b py-2 items-center justify-between mb-2">
                    <p>JenkateMW</p>
                    <p className="text-[#38CB89]">
                    <b>-$25.00 [Remove]</b>
                    </p>
                  </div>
                  <div className="flex border-b py-2 items-center justify-between mb-2">
                    <p>Shipping</p>
                    <p>
                     Free
                    </p>
                  </div>
                  <div className="flex border-b py-2 items-center justify-between mb-2">
                    <p>Subtotal</p>
                    <p>
                      $
                      {cartItems.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p>Total</p>
                    <p>
                      $
                      {cartItems.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutLayout;
