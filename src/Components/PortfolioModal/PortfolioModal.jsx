import $ from 'jquery';
import React, { useEffect } from 'react';
import style from './PortfolioModal.module.css';


export default function PortfolioModal(props) {

useEffect(() => {
  $('.btnClose').on('click',function(){
    closeModal()
  });

  function closeModal(){
    $('.modal').removeClass('d-block');
    $('.modal').addClass('d-none');
  }
}, [])



    return (
        <>
            <div className={`modal d-block ${style.up}`} tabIndex="-1">
                <div className={`modal-dialog ${style.modal}`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type='button' className={`btn btn-transparent ms-auto btnClose ${style.mainClose}`} data-bs-dismiss="modal" aria-label="Close">
                                <i className='fas fa-times'></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="cap">
                                <div className={`text-center ${style.head}`}>
                                <h1>{props.imgInfo.title}</h1>
                                    <div className={style.line}>
                                        <i className='fas fa-star'></i>
                                    </div>
                                </div>
                                <img src={props.imgInfo.src} className='w-75 rounded' alt="" />
                                <p className='w-75 m-auto my-5 text-dark'>{props.imgInfo.description}</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type='button' className={`btn btn-transparent m-auto btnClose d-block ${style.close}`} data-bs-dismiss="modal" aria-label="Close">
                                <i className='fas fa-times'></i>Close window
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}