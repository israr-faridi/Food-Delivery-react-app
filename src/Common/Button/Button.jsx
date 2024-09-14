import React from 'react'
import './Button.css'

export const Button = ({ text }) => {
  return (
    <button className='primaryBtn'> {text} </button>
  )
}

export const WheatBtn = ({ text }) => {
  return (
    <button className='WheatBtn'> {text} </button>
  )
}

export const DownloadBtn = ({title,para,url}) => {
  return (
    <button className='DownloadBtn'>
      <div className="image">
        <img src={url} alt="Download" />
      </div>
      <div className="btn_data">
        <p className='download_para'>{para}</p>
        <h4>{title}</h4>
      </div>
    </button>
  )
}

