import React from 'react'
import group from '/home/jacklarnaque/Documents/Projects/projet perso/react/randomproj/src/image/group-img/Group77.png'
import com3 from '/home/jacklarnaque/Documents/Projects/projet perso/react/randomproj/src/image/group-img/Frame79.png'
import com2 from '/home/jacklarnaque/Documents/Projects/projet perso/react/randomproj/src/image/group-img/Group65.png'
import com1 from '/home/jacklarnaque/Documents/Projects/projet perso/react/randomproj/src/image/Group78.png'
import img1 from '/home/jacklarnaque/Documents/Projects/projet perso/react/randomproj/src/image/image12.png'
import img2 from '/home/jacklarnaque/Documents/Projects/projet perso/react/randomproj/src/image/wedding-photography1.png'
import img3 from '/home/jacklarnaque/Documents/Projects/projet perso/react/randomproj/src/image/mountain-bike1.png'
const Main = () => {
  return (
    <div className='main-container'>
        <div className='img-box'>
          <img src={group} alt='f'></img>
        </div>
        <div className='block-page'>
          <h1 className='exp'>Online Experiences</h1>
          <p className='exp'>Join unique interactive
            activities led by one-of-a-kind hostsall without leaving home.</p>
        </div>
        <div className='imgsell'>
        <div>
          <img className='images' src={img1} alt='im1'></img>
          <img className='comment' src={com1} alt='com1'></img>
        </div>
        <div className='images'>
          <img className='images' src={img2} alt='im2'></img>
          <img className='comment' src={com2} alt='im2'></img>
        </div>
        <div className='images'>
          <img className='images' src={img3} alt='im3'></img>
          <img className='comment' src={com3} alt='im3'></img>
        </div>
        </div>
    </div>
  )
}

export default Main