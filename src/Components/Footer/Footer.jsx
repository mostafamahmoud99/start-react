import React from 'react';
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <section className={style.footer}>
        <div className="contianer">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-item text-center">
                <p>Copyright © Your Website 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
