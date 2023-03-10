import React from 'react'
import { decrememnt, increment, removeItem } from '../features/cart/cartSlice'
import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch } from 'react-redux'



const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button onClick={() => dispatch(removeItem(id))} className='remove-btn'>remove</button>
      </div>
      <div>
        <button onClick={() => dispatch(increment(id))} className='amount-btn'>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button onClick={() => {
          if (amount === 1) {
            dispatch(removeItem(id));
            return;
          }
          dispatch(decrememnt(id))
        }} className='amount-btn'>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
