import React from 'react';
import './Step1.styles.css';

const step1 = ({activeComponent}) => {
    return (
        <div className='row align-items-center' style={{height: '100vh'}}>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                <form className='border border-light p-5 step1' action='#!'>
                    <p className='h3 mb-4 font-weight-bold'>
                        Open a free account
                    </p>
                    <p className='mb-4'>
                        {' '}
                        You can now test for 30 days completely free of charge!
                    </p>

                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='defaultLoginFormEmail'
                        className='form-control mb-4'
                        placeholder='E-mail'
                    />
                    <label htmlFor='email'>Choose a password</label>
                    <input
                        type='password'
                        id='defaultLoginFormPassword'
                        className='form-control mb-4'
                        placeholder='Password'
                    />
                    <label htmlFor='email'>Choose a password</label>
                    <input
                        type='text'
                        className='form-control mb-4'
                        placeholder='Website'
                    />

                    <button
                        className='btn btn-primary btn-block my-4'
                        type='submit'
                        onClick={(event) => activeComponent(event, 'step2')}>
                        Sign in
                    </button>
                    <div className='col-12'>
                        <p>
                            <a href=''>
                                By clicking on "Open a free account", you agree
                                to the privacy policy and terms of use of the
                                bookibook service.
                            </a>
                        </p>
                    </div>
                    <div className='col-12 mt-4'>
                        <a href='#' className='mx-2' role='button'>
                            Already have an account?
                        </a>
                        <a href='#' className='mx-2' role='button'>
                            Log in
                        </a>
                    </div>
                </form>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 align-items-center additionally-desc'>
                <div className='col-12 d-flex justify-content-center'>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            'images/step1/background.png'
                        }
                        alt=''
                    />
                </div>
                <div className='col-12 mt-4 text-center'>
                    <h4>Everything came together in one place</h4>
                    <p>
                        Make it easy for your customers, focus on what you're
                        good at and increase your profitability with Bookibook
                    </p>
                </div>
            </div>
        </div>
    );
};

export default step1;
