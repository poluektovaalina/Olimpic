import { useState } from 'react'
import logoOlimpic from '../images/logo-white.png'
import banner from '../images/frame.png'
import icoCountries from '../images/ico-countries.svg'
import icoDisciplines from '../images/ico-disciplines.svg'
import './App.css'
import { Countries } from '../src/components/Countries'

function App() {
  const [mainState, setMainState] = useState(false)

  return (
    <>
      {mainState ? (< Countries goBack={() => setMainState(false)}/>) : (
        <div className="container">
          <div className="main">
            <div className="logo">
              <img src={logoOlimpic} alt="" />
            </div>
            <div className="banner">
              <img src={banner} alt="" />
            </div>
            <div className="btn_group">
              <button onClick={ () => setMainState(true) } className='btn'>
                <div className="lolo_btn">
                  <img src={icoCountries} alt="ico-countries" />
                </div>
                <span className="title_btn">
                  Countries
                </span>
              </button>
              <button className='btn'>
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
        )
      }

    </>
  )
}

export default App
