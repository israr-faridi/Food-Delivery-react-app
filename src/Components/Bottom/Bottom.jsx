import React from 'react'
import BottomHeading from '../../Common/BottomHeading/BottomHeading'
import './Bottom.css'
import { Cards } from '../Cards/Cards'
import { SmallCard1, SmallCard2, SmallCard3 } from '../../Utiles/constant/cards'
// import DoubleCard from '../Cards/DoubleCard'
const Bottom = () => {
  return (
    <div className='Bottom'>
      <BottomHeading title={["MORE THAN", <span> 10,000 </span>, " DISHES TO ORDER!"]} text="Welcome to The Biggest Network of Food Ordering & Delivery" />

      <div className="card_Wrapper1">
        {SmallCard1.map((item, index) => {
          return (
            <>
              <Cards key={index} value={item} />
            </>
          )
        })}

        <div className='DoubleCard'>
          <p className='DoubleCardPara'>Find <spaan className="red">deals</spaan>,<span className='green'> free delivery</span>, and more from our restaurant partners.</p>
          <img className='DoubleCardImg' src="/assets/images/bike.png" alt="" />
        </div>
      </div>

      <div className="card_Wrapper2">
        <div className='DoubleCard2'>
          <img className='DoubleCardImg2' src="/assets/images/Vector-Black.png" alt="" />
          <p className='DoubleCardPara2'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
        {SmallCard2.map((item, index) => {
          return (
            <>
              <Cards key={index} value={item} />
            </>
          )
        })}


      </div>


      <BottomHeading title={"How To Order?"}  />

      <div className="card_Wrapper3">
        {SmallCard3.map((item, index) => {
          return (
            <>
              <Cards key={index} value={item} />
            </>
          )
        })}
      </div>
      
    </div>
  )
}

export default Bottom
