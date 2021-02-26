import React from 'react';
import './Step2.styles.css';

const step2 = ({activeComponent}) => {
    return (
        <div className='container'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row align-items-center step2'>
                <div
                    className='col-12 d-flex align-items-center justify-content-center text-center'
                    style={{color: 'black'}}>
                    <div>
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
                            <h4
                                style={{
                                    fontWeight: 700,
                                    fontSize: '30px',
                                    margin: '0px',
                                    paddingLeft: '5px',
                                }}>
                                {' '}
                                bookybook
                            </h4>
                        </div>
                        <h4
                            className='mb-5 mt-4'
                            style={{
                                fontWeight: 700,
                                fontSize: '30px',
                                margin: '0px',
                                paddingLeft: '5px',
                            }}>
                            {' '}
                            Check your e-mail!
                        </h4>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                'images/step2/background.png'
                            }
                            alt=''
                        />
                        <p className='mt-5'>
                            We sent an email to [{' '}
                            <a
                                href=''
                                onClick={(event) =>
                                    activeComponent(event, 'step3')
                                }>
                                ekample@compani.com
                            </a>{' '}
                            ].
                        </p>
                        <p className='mb-5'>
                            Click the link in the email to activate your
                            account.
                        </p>
                        <p>
                            You didn't arrive? <a href=''>Click here </a>to
                            resubmit.{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default step2;
