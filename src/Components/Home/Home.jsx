import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import style from './Home.module.css'
import img from './images/avataaars.svg'
export default function Home() {
  return (
    <>
      <section id='home' className={`${style.home}`}>
        <div className='d-flex align-items-center justify-content-center text-center'>
          <div>
            <div className="home-img">
              <img src={img} alt="background" className={style.background} />
            </div>
            <div className="home-cap mt-3">
              <h1>START REACT</h1>
              <div className={style.line}>
                <i className='fas fa-star'></i>
              </div>
              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </section>
      <Portfolio/>
    </>
  )
}
