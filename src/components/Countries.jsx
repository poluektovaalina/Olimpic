import { useState } from 'react'
import logoOlimpic from '../../images/logo-white.png'
import banner from '../../images/frame.png'
import icoCountries from '../../images/ico-countries.svg'
import icoDisciplines from '../../images/ico-disciplines.svg'
export function Countries() {

  return (
    <>
     <div className="container">
      <div className="main">
        <div className="logo">
          <img src={logoOlimpic} alt="" />
        </div>
        <div className="banner">
          <img src={banner} alt="" />
        </div>
        <div className="btn_group">
          <button className='btn countries'>
            <div className="lolo_btn">
              <img src={icoCountries} alt="ico-countries" />
            </div>
            <span className="title_btn">
              Countries
            </span>
          </button>
          <button className='btn disciplines'>
            <div className="lolo_btn">
              <img src={icoDisciplines} alt="ico-countries" />
            </div>
            <span className="title_btn">
              Disciplines
            </span>
          </button>
        </div>
      </div>
     </div>
    </>
  )
}

export default Countries