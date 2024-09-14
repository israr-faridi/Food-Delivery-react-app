import React from 'react'
import './Banner.css'
import { DownloadBtn } from '../../Common/Button/Button'
import SearchBar from '../../Common/SearchBar/SearchBar'
const Banner = () => {
    return (
        <div className='Banner'>
            <div className="banner_data">
                <h1>Your Favorite Food Delivery Partner</h1>
                <p>The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep. </p>
                <SearchBar />
                <div className="DownloadButton">
                    <DownloadBtn title={'App Store'} para={'Download on the'} url={'/assets/images/apple.png'} />
                    <DownloadBtn title={'Google Play'} para={'GET IT ON'} url={'/assets/images/GooglePlaylogo.png'} />
                </div>
            </div>
            <div className="banner_image">
                <img src="/assets/images/banner.png" alt="" />
            </div>
        </div>
    )
}

export default Banner
