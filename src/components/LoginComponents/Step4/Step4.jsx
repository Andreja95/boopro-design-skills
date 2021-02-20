import React from 'react';
import './Step4.styles.css';
import HeaderBreadcrumbs from '../HeaderBreadcrumbs/HeaderBreadcrumbs';

const step4 = ({activeComponent}) => {
    return (
        <div className='card' style={{height: '100vh'}}>
            <HeaderBreadcrumbs step={2} />

            <div className='card-body card-body-step4 px-lg-5 pt-0'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-6'>
                        <h4 className='mb-4 mt-4'>Account information</h4>
                        <form
                            className='text-center'
                            style={{color: '#757575'}}
                            action='#!'>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 md-form'>
                                    <label htmlFor='materialLoginFormEmail'>
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        id='materialLoginFormEmail'
                                        className='form-control'
                                        placeholder='ex. John'
                                    />
                                </div>

                                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 md-form'>
                                    <label htmlFor='materialLoginFormPassword'>
                                        LastName
                                    </label>
                                    <input
                                        type='text'
                                        id='materialLoginFormPassword'
                                        className='form-control'
                                        placeholder='ex. Doe'
                                    />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 md-form'>
                                    <label
                                        htmlFor='materialLoginFormEmail'
                                        className='control-label'>
                                        {' '}
                                        Company Name
                                    </label>
                                    <input
                                        type='text'
                                        id='materialLoginFormEmail'
                                        className='form-control'
                                        placeholder='ex. Bookybook'
                                    />
                                </div>

                                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 md-form'>
                                    <label htmlFor='materialLoginFormPassword'>
                                        Phone Number
                                    </label>
                                    <input
                                        type='text'
                                        id='materialLoginFormPassword'
                                        className='form-control'
                                        placeholder='ex. +46 733 123 456'
                                    />
                                </div>
                            </div>
                            <div className='row mt-5 mb-4'>
                                <h6>Choose a branch</h6>
                                <div className='industry row'>
                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/hairdresser.png'
                                            }
                                            alt='hairdresser'
                                        />
                                        <p>Hairdresser</p>
                                    </div>

                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/nails.png'
                                            }
                                            alt='nails'
                                        />
                                        <p>Nails</p>
                                    </div>
                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/massage.png'
                                            }
                                            alt='massage'
                                        />
                                        <p>Massage</p>
                                    </div>
                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/Eyebrows-and-eyelashes.png'
                                            }
                                            alt='Eyebrows-and-eyelashes'
                                        />
                                        <p>Eyebrows & eyelashes</p>
                                    </div>
                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/barbershop.png'
                                            }
                                            alt='barbershop'
                                        />
                                        <p>Barbershop</p>
                                    </div>
                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/makeup.png'
                                            }
                                            alt='makeup'
                                        />
                                        <p>Makeup</p>
                                    </div>
                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/skin-care.png'
                                            }
                                            alt='skin-care'
                                        />
                                        <p>Skin-care</p>
                                    </div>
                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/training.png'
                                            }
                                            alt='training'
                                        />
                                        <p>Training</p>
                                    </div>
                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/depilation.png'
                                            }
                                            alt='depilation'
                                        />
                                        <p>Depilation</p>
                                    </div>
                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/tattooing-and-piercing.png'
                                            }
                                            alt='tattooing-and-piercing'
                                        />
                                        <p>Tattooing-and-piercing</p>
                                    </div>
                                    <div className='industry-item'>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step4/other.png'
                                            }
                                            alt='other'
                                        />
                                        <p>Other</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class='card-footer'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                        <button
                            className='btn btn-outline-info btn-block my-4 waves-effect z-depth-0 stepBackDesktop'
                            type='submit'>
                            Back
                        </button>
                    </div>
                    <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2'>
                        <button
                            className='btn btn-primary btn-block my-4 waves-effect z-depth-0'
                            type='submit'
                            onClick={(event) =>
                                activeComponent(event, 'step4')
                            }>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default step4;
