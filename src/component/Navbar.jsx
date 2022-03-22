import React from 'react'
import { useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
  const thali = useSelector(state => state.counter.thali)
  console.log(thali.length)
  return (
    <div className='header'>
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7IQ5n8CbtwMlea25ojFF3tzAHvXLByjDzh_8DwLuYeLKdS_BkzoHl0z7Rb_3rMYVNoQ&usqp=CAU" style={{ height: "50px" }} />
        <h5 className='logo_name'>Delicious Food</h5>
      </div>
      <div className="search">
        <input type="text" className='search_input' placeholder='search Your ' />

      </div>
 
      <div className="cart">
        <button className='btn_cart'>
          view Cart <button className='btn_qwt_state'>{thali.length} </button></button>


      </div>
    </div>
  )
}

export default Navbar