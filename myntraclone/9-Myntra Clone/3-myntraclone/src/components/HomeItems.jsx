import React from 'react'
import {useDispatch} from 'react-redux'
import { bagsliceaction } from '../store/bagSlice';
const HomeItems = ({item}) => {
  const dispatch = useDispatch();
  const addToBag = () => {
    dispatch(bagsliceaction.addToBag(item.id))
  }
  const removeFromBag = () => {
    dispatch(bagsliceaction.removeFromBag(item.id))
  }
  return (
    <>
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={addToBag}>Add to Bag</button>
      <button className="btn-add-bag" onClick={removeFromBag}>Remove From Bag</button>
    </div>
    </>
  )
}

export default HomeItems