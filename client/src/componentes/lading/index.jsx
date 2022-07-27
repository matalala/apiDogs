import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/img.jpg'
function Lading() {
 
  return(
      <>
      <img src={img} alt=''/>
      <Link to='/home'>HOME</Link>
      </>
    )
     
    }
  
  
  export default Lading;