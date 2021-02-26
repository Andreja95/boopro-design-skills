import React from 'react';
import './Step1.styles.css';

const step1 = ({activeComponent}) => {
    return (
        <div className='container'>
            <div
                className='row align-items-center justify-content-center'
                style={{height: '100vh', color: 'black'}}>
                <div className='col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5'>
                    <form className='border border-light step1' action='#!'>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    'images/step3/mainLogo2.png'
                                }
                                alt='mainLogo2'
                            />
                            <p
                                style={{
                                    fontWeight: 700,
                                    fontSize: '30px',
                                    margin: '0px',
                                    paddingLeft: '5px',
                                }}>
                                {' '}
                                bookybook
                            </p>
                        </div>

                        <p className='h2 mb-3 mt-4 font-weight-bold'>
                            Open a free account
                        </p>
                        <p className='mb-4'>
                            {' '}
                            You can now test for 30 days completely free of
                            charge!
                        </p>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='defaultLoginFormEmail'
                            className='form-control mb-4'
                        />
                        <label htmlFor='email'>Choose a password</label>
                        <input
                            type='password'
                            id='defaultLoginFormPassword'
                            className='form-control mb-4'
                        />
                        <label htmlFor='email'>Website</label>
                        <input
                            type='text'
                            className='form-control mb-4'
                            placeholder='Ex. bookybook.se'
                        />
                        <button
                            className='btn btn-block my-4'
                            type='submit'
                            onClick={(event) => activeComponent(event, 'step2')}
                            style={{background: '#1A73E8', color: 'white'}}>
                            Sign in
                        </button>
                        <div className='col-12'>
                            <p style={{fontSize: '14px'}}>
                                By clicking on "Open a free account", you agree
                                to the <a href=''>privacy policy</a> and{' '}
                                <a href=''>terms of service.</a>
                            </p>
                        </div>
                        <div className='col-12 mt-4'>
                            {/* <a href='#' className='mx-1' role='button'> */}
                            Already have an account? {/* </a> */}
                            <a href='#' role='button'>
                                Log in
                            </a>
                        </div>
                    </form>
                </div>
                <div
                    className='col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 additionally-desc'
                    style={{color: 'black'}}>
                    <div className='d-flex justify-content-center'>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                'images/step1/background.png'
                            }
                            alt=''
                        />
                    </div>
                    <div className='col-12 mt-4 px-5 text-center'>
                        <h4 className='font-weight-bold mb-3'>
                            Everything came together in one place
                        </h4>
                        <p>
                            Make it easy for your customers, focus on what
                            you're good at and increase your profitability with
                            Bookibook
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default step1;
