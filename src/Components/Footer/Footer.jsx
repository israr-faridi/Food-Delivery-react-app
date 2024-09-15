import React from 'react'
import './Footer.css'
import { DownloadBtn } from '../../Common/Button/Button'
import { FooterNav } from '../../Utiles/constant/footer'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_header">
        <div className="logo_button">
          <img className='footer_logo' src="/assets/images/pizza.png" alt="" />
          <div className="DownloadButton">
            <DownloadBtn title={'App Store'} para={'Download on the'} url={'/assets/images/apple.png'} />
            <DownloadBtn title={'Google Play'} para={'GET IT ON'} url={'/assets/images/GooglePlaylogo.png'} />
          </div>
        </div>
        <div className="row_wrapper">
          <div className="row">
            <h4>Quick links</h4>
            {FooterNav[0].map((value, index) => {
              return (
                <li class="footnav" key={index}>{value}</li>
              )
            })}
          </div>
          <div className="row">
            <h4>Get to Know Us</h4>
            {FooterNav[1].map((value, index) => {
              return (
                <li class="footnav" key={index}>{value}</li>
              )
            })}
          </div>
          <div className="row">
            <h4>News</h4>
            {FooterNav[2].map((value, index) => {
              return (
                <li class="footnav" key={index}>{value}</li>
              )
            })}
          </div>
          <div className="row">
            <h4>Contact</h4>
            {FooterNav[3].map((value, index) => {
              return (
                <li class="footnav" key={index}>{value}</li>
              )
            })}
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="copyright">
          <p>© 2023 pizza.All right reserved</p>
        </div>
        <div className="footer_bottom_nav">
          <li>Privacy</li>
          <li>Policy</li>
          <li>Terms</li>
          <li>Services</li>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
