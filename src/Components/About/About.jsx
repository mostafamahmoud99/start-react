import React from 'react';
import Contact from '../Contact/Contact';
import style from './About.module.css';

export default function About() {
    return (
        <>
            <section className={style.about}>
                <div className={style.item}>
                    <div className={`text-center ${style.head}`}>
                        <h1 className='fw-bold text-white'>ABOUT</h1>
                        <div className={style.line}>
                            <i className='fas fa-star'></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={style.cap}>
                                <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={style.cap}>
                                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact/>
        </>
    )
}
