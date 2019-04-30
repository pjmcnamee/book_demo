import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
	<div className='footer'>
	<h2 className="news-title">Contact Me</h2>
	<div className='footer-contact'>
		<p>Email me at</p>
		<p> something@email.com</p>
	</div>
	<div className='footer-links'>
	  <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer">Facebook</a>
	  <a href="https://www.Twitter.com" target='_blank' rel="noopener noreferrer">Twitter</a>
	  <a href="https://www.Instagram.com" target='_blank' rel="noopener noreferrer">Instagram</a>
	</div>
	</div>
  )
}
