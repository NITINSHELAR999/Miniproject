import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTothali } from "../redux/slice";
const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const add = (item) => {
    item = JSON.parse(JSON.stringify(item));
    item.quantity = quantity;
    item.totalPrice = Number(item.quantity) * Number(item.price)
    dispatch(addTothali(item));
    console.log(addTothali(item))
  }

  const increment = () => {
    setQuantity(quantity + 1)

  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (<>
    <div className='container  border  mt-2' >
      <img src={data.image} style={{ height: "200px", width: "100%" ,marginBottom:"8px"}} />
      <div className='d-flex justify-content-between'>
        <h3 className='mx-3 bg-light text-success px-2'>{data.name}</h3>
        <h2 className='mx-4 bg-info text-light px-3'> ${data.price}</h2>
      </div>
      <h6>{data.description}</h6>

      <div className='qwt_set_btn'>
        {/* <a href="#" className="btn btn-primary " </a> */}
        <div>
          <span className="input-group-btn">
            <button type="button" className="btn_qwt"
              onClick={decrement} >
              <span className="glyphicon glyphicon-minus">-</span>
            </button>
          </span>
          <input type="text" id="quantity" name="quantity" className="text_input"
            value={quantity} min="1" max="100" />
          <span className="">
            <button type="button" className="btn_qwt"
              onClick={increment}>
              <span className="glyphicon glyphicon-plus">+</span>
            </button>
          </span>
          <button className='btn  mt-2 btn-sm  text-info mx-3 border border-radius' onClick={() => add(data)} ><h4>Add To Cart</h4></button>
        </div>

      </div>
    </div>

  </>

  )
}

export default Product