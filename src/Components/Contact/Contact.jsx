import React from 'react';
import Location from '../Location/Location';
import style from './Contact.module.css';

export default function Contact() {
    return (
        <>
            <section>
                <div className={style.itemContact}>
                    <div className={`text-center ${style.head}`}>
                        <h1 className='fw-bold'>CONTACT ME</h1>
                        <div className={style.line}>
                            <i className='fas fa-star'></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <div className="contact-form">
                                <form>
                                    <div className={`${style.brdr} form-floating mb-3`}>
                                        <input type="email" className="form-control border-0" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>
                                </form>
                            </div>


                            <div className="contact-form">
                                <form>
                                    <div className={`${style.brdr} form-floating mb-3`}>
                                        <input type="email" className="form-control border-0" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email Address</label>
                                    </div>
                                </form>
                            </div>


                            <div className="contact-form">
                                <form>
                                    <div className={`${style.brdr} form-floating mb-3`}>
                                        <input type="email" className="form-control border-0" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Phone Number</label>
                                    </div>
                                </form>
                            </div>


                            <div className="contact-form">
                                <form>
                                    <div className={`${style.brdr} form-floating mb-3`}>
                                        <textarea style={{height:'200px'}} className="form-control border-0" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Message</label>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Location/>
        </>
    )
}
