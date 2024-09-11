import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{heigth:'300px'}} className='container mt-5 w-100'>
        <div className='d-flex flex-row  justify-content-center'>
        <div className='col-lg-3 col-6'>
          <h5>media</h5>
          <p>Designed and built with all the love in 
            the world by the Luminar team with the help 
            of our contributors.
          </p>
          <p>Code licensed Luminar,docs CC BY 3.0.</p>
          <p>Currently v5.3.2</p>
        </div>
        <div className='col-lg-3 col-6 ms-5'>
          <h5>Links</h5>
         <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link> <br />
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link><br/>
           <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Watching History Page</Link> 

        </div>
        <div className='col-lg-3 col-6'>
          <h5>Guide</h5>
          <p>React</p>
           <p>React Bootstrap</p>
            <p>React Router</p>
        </div>
        <div className='col-lg-3 col-6'>
          <h5>Contact Us</h5>
          <input type="text" style={{padding:'10px'}} placeholder='Enter your email' className=' rounded' size="20" />
          <button  className='btn bg-info ms-2'><i className="fa-solid fa-arrow-right fs-5 text-center p-1 text-white"></i></button>
          <div className='mt-3 text-white fs-5 row'>
           <div className='col-lg-2'> <i class="fa-brands fa-twitter"></i></div>
           <div className='col-lg-2'><i class="fa-brands fa-instagram "></i></div>
           <div className='col-lg-2'><i class="fa-brands fa-facebook  "></i></div>
           <div className='col-lg-2'><i class="fa-brands fa-linkedin "></i></div>
           <div className='col-lg-2'><i class="fa-brands fa-github "></i></div>
           <div className='col-lg-2'> <i class="fa-solid fa-phone "></i></div>
          </div>
        </div>
        </div>
        <div className='text-center mt-5'>
          Copyright Jan 2024 Batch,Media Player.Built with React
        </div>
    </div>
  )
}

export default Footer