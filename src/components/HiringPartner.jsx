import React from 'react'
import './hiringpartner.scss'
import {hiringLogoOne, hiringLogoTwo, hiringLogoThree, hiringLogoFour, hiringLogoFive, hiringLogoSix, hiringLogoSeven, hiringLogoEight, hiringLogoNine, hiringLogoTen, hiringLogoEleven, hiringLogoTwelve, hiringLogoThirteen, hiringLogoFourteen, hiringLogoFifteen} from './index'

const HiringPartner = () => {
    const logoImgData = [hiringLogoOne, hiringLogoTwo, hiringLogoThree, hiringLogoFour, hiringLogoFive, hiringLogoSix, hiringLogoSeven, hiringLogoEight, hiringLogoNine, hiringLogoTen, hiringLogoEleven, hiringLogoTwelve, hiringLogoThirteen, hiringLogoFourteen, hiringLogoFifteen];
    
  return (
    <section className='hiringPartnerMainContainer'>
      <div className="hiringPartnerTextContainer">
        <p className="hiringPartnerHeading">
            Fuel your career with our 700+ hiring partners
        </p>
        <p className="hiringPartnerDesc">
            Get closer to your dream company
        </p>
        <p className="hiringPartnerDesc">
            Our graduates are working with leading tech brands
        </p>
      </div>
        <div className="hiringCompanyLogoContainer">
            {
                logoImgData.map((image, index) => {
                   return <img src={image} alt="" key={index} className='hiringLogoImage' />
                })
            }
        </div>
    </section>
  )
}

export default HiringPartner
