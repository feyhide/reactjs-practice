import React from 'react'
import { useSelector } from 'react-redux'

const Bagsummary = ({}) => {
  const items = useSelector((store)=> store.items)
  const bagitems = useSelector((store)=>store.bag)

  const finalitems = items.filter((items) => {
    const itemsindex = bagitems.indexOf(items.id)
    return itemsindex >= 0;
  })

let totalMRP = 0;
let totalDiscount = 0;
  finalitems.forEach((bagitems)=>{
    totalMRP += bagitems.original_price;
    totalDiscount += bagitems.original_price - bagitems.current_price;
  })

  let totalItem = bagitems.length;
  let finalPayment = totalMRP - totalDiscount + 99;

  return (
    <>
    <div className="bag-summary">
    <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
        <span className="price-item-tag">Total MRP</span>
        <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
        <span className="price-item-tag">Discount on MRP</span>
        <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
        </div>
        <div className="price-item">
        <span className="price-item-tag">Convenience Fee</span>
        <span className="price-item-value">₹99</span>
        </div>
        <hr/>
        <div className="price-footer">
        <span className="price-item-tag">Total Amount</span>
        <span className="price-item-value">₹{finalPayment}</span>
        </div>
    </div>
    <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
    </button>
    </div>
    </>
  )
}

export default Bagsummary