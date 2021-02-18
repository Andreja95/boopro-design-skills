import React from 'react';
import './Step3.styles.css';
import Icon from '@mdi/react';
import {mdiLessThan} from '@mdi/js';

const step3 = () => {
    return (
        <div className='card'>
            <div className='row'>
                <div
                    className='card-header info-color py-4 text-center'
                    style={{background: 'white'}}>
                    <button
                        className='btn btn-link stepBackMobile'
                        style={{float: 'left'}}>
                        <Icon
                            path={mdiLessThan}
                            title='Back'
                            size={1}
                            color='blue'
                        />
                        Back
                    </button>
                    <strong>Sign in</strong>
                </div>
            </div>
            <div className='card-body px-lg-5 pt-0'>
                <h4 className='mb-4'>Account information</h4>
                <form
                    className='text-center'
                    style={{color: '#757575'}}
                    action='#!'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 md-form'>
                            <label htmlFor='materialLoginFormEmail'>Name</label>
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
                                        'images/step3/hairdresser.png'
                                    }
                                    alt='hairdresser'
                                />
                                <p>Hairdresser</p>
                            </div>

                            <div className='industry-item'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/nails.png'
                                    }
                                    alt='nails'
                                />
                                <p>Nails</p>
                            </div>
                            <div className='industry-item'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/massage.png'
                                    }
                                    alt='massage'
                                />
                                <p>Massage</p>
                            </div>
                            <div className='industry-item'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/Eyebrows-and-eyelashes.png'
                                    }
                                    alt='Eyebrows-and-eyelashes'
                                />
                                <p>Eyebrows & eyelashes</p>
                            </div>
                            <div className='industry-item'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/barbershop.png'
                                    }
                                    alt='barbershop'
                                />
                                <p>Barbershop</p>
                            </div>
                            <div className='industry-item'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/makeup.png'
                                    }
                                    alt='makeup'
                                />
                                <p>Makeup</p>
                            </div>
                            <div className='industry-item'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/skin-care.png'
                                    }
                                    alt='skin-care'
                                />
                                <p>Skin-care</p>
                            </div>
                            <div className='industry-item'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/training.png'
                                    }
                                    alt='training'
                                />
                                <p>Training</p>
                            </div>
                            <div className='industry-item'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/depilation.png'
                                    }
                                    alt='depilation'
                                />
                                <p>Depilation</p>
                            </div>
                            <div className='industry-item'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/tattooing-and-piercing.png'
                                    }
                                    alt='tattooing-and-piercing'
                                />
                                <p>Tattooing-and-piercing</p>
                            </div>
                            <div className='industry-item'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/other.png'
                                    }
                                    alt='other'
                                />
                                <p>Other</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class='card-footer'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                        <button
                            className='btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 stepBackDesktop'
                            type='submit'>
                            Back
                        </button>
                    </div>
                    <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                        <button
                            className='btn btn-primary btn-rounded btn-block my-4 waves-effect z-depth-0'
                            type='submit'>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default step3;
