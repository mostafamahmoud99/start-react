import React from 'react'
import style from './Location.module.css'

export default function Location() {
    return (
        <>
            <section className={style.location}>
                <div className={`container text-center ${style.itemLocation}`}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={style.capLocation}>
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={style.capLocation}>
                                <h3>AROUND THE WEB</h3>
                                <span><i className='fab fa-facebook'></i></span>
                                <span><i className='fab fa-twitter'></i></span>
                                <span><i className='fab fa-linkedin-in'></i></span>
                                <span><i className='fab fa-dribbble'></i></span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={style.capLocation}>
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, MIT</p>
                                <p>licensed Bootstrap theme created by .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}