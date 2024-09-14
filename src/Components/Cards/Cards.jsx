import './Cards.css'
export const Cards = ({ value }) => {
  const { number, image, Title, isradius, widthincrease } = value
  return (
    <div>
      <div className={`small_card ${widthincrease && "widthincrease"}`} >
        {/* <div className="number">{number}</div> */}
        <div className="number">{number}</div>
        <div className={`${isradius && "radius"} card_image `}>
          <img className='card_img' src={image} alt="" />
        </div>
        <div className="small_card_data">
          <h4 className='small_h4'>{Title}</h4>
        </div>
      </div>
    </div>
  )
}

