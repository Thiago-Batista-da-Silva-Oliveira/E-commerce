import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import {saveShippingAddress} from '../actions/cartActions'

export default function ShippingAddressScreen(props) {
    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
    if(!userInfo){
        props.history.push('/signin')
    }
    const [fullName, setFullName ] = useState(shippingAddress.fullName)
    const [address, setAddress ] = useState(shippingAddress.address)
    const [city, setCity ] = useState(shippingAddress.city)
    const [postalCode, setPostalCode ] = useState(shippingAddress.postalCode)
    const [country, setCountry ] = useState(shippingAddress.country)
    const dispatch = useDispatch()
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, city, postalCode, country}))
        props.history.push('/payment')
    }
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter Full Name"
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fullAddress">Full Address</label>
          <input
            type="text"
            id="fullAddress"
            placeholder="Enter Full Address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="City">City</label>
          <input
            type="text"
            id="City"
            placeholder="Enter City"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="PostalCode">Postal Code</label>
          <input
            type="text"
            id="PostalCode"
            placeholder="Enter Postal Code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Country">Country</label>
          <input
            type="text"
            id="Country"
            placeholder="Enter Country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
            <label />
            <button className="primary" type="submit">Continue</button>
        </div>

      </form>
    </div>
  );
}
