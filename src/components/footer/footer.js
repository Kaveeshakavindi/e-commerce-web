import React from 'react'
import '../footer/footer.css'
import { AiOutlineRight } from 'react-icons/ai';

export default function footer() {
  return (

    <footer>
    <div className='footer-container'>

        <div className='footer-column'>
            <div className='footer-logo'>
                The Arc. c 2021
            </div>

            <div className='footer-email'>
                
                <input type="email" id="email" name="email" placeholder="Email" />
                <button type="submit"><AiOutlineRight /></button>
            </div>
        </div>

        <div className='footer-column'>
            <div className='footer-item'>
                Contact
            </div>
            <div className='footer-item'>
                About
            </div>
            <div className='footer-item'>
                Collection
            </div>
        </div>

        <div className='footer-column'>
            <div className='footer-item'>
                Contact
            </div>
            <div className='footer-item'>
                About
            </div>
            <div className='footer-item'>
                Collection
            </div>
        </div>

        <div className='footer-column'>
            <div className='footer-item'>
                Contact
            </div>
            <div className='footer-item'>
                About
            </div>
            <div className='footer-item'>
                Collection
            </div>
        </div>
    </div>
    </footer>
    

   
    
  )
}
