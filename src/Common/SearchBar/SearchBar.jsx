import { Button } from '../Button/Button'
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <input className='SearchBarInput' type="text" placeholder='Enter your delivery location'/>
      <Button text="Order Now" />
    </div>
  )
}

export default SearchBar
