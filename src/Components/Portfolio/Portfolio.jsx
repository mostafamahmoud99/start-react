import React, { useEffect } from 'react';
import Image from './images/images'
import PortfolioModal from '../PortfolioModal/PortfolioModal';
import stylemodal from '../PortfolioModal/PortfolioModal.module.css';
import style from './Portfolio.module.css';
import $ from 'jquery'
import ReactDOM from 'react-dom/client';
import About from '../About/About';


export default function Portfolio() {
    useEffect(() => {
        display();
        Modal();
        function display() {
            let box = ``
            Image.map((image) => {
                box += ` <div class="col-md-4 col-sm-6 my-2">
                <div class="${style.imgContainer}">
                    <div class="${style.imgLayer}" id="${image.name}" target ="${image.src}" title="${image.description}">
                        <i class='fas fa-plus'></i>
                    </div>
                    <img src=${image.src} alt=${image.name} class='w-100 rounded' />
                </div>
            </div>`
            })
            document.querySelector('.row').innerHTML = box;
        }



        function Modal() {
            $(`.${style.imgLayer}`).on('click', function () {
                $(`.${style.PortfolioModal}`).css('display', 'block');
                $(`.${stylemodal.up}`).removeClass('d-none');
                $(`.${stylemodal.up}`).addClass('d-block')


                let imgInfo = {
                    title: $(this).attr('id'),
                    src: $(this).attr('target'),
                    description: $(this).attr('title')
                };

                const root = ReactDOM.createRoot(document.getElementById('port'));
                root.render(
                    <React.StrictMode>
                        <PortfolioModal imgInfo={imgInfo} />
                    </React.StrictMode>
                );

            });

        }
    }, [])





    return (
        <>
            <section id='portfolio' className={style.port}>
                <div className={`text-center ${style.head}`}>
                    <h1 className='fw-bold'>PORTFOLIO</h1>
                    <div className={style.line}>
                        <i className='fas fa-star'></i>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                    </div>
                    <div id="port">

                    </div>
                </div>
            </section>
            <About/>
        </>
    )
}
