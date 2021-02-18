import React from 'react';

const step2 = ({activeComponent}) => {
    return (
        <div
            className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row align-items-center'
            style={{height: '800px'}}>
            <div className='col-12 d-flex align-items-center justify-content-center text-center'>
                <div>
                    <h4 className='mt-b'> Check your e-mail!</h4>
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
                        Click the link in the email to activate your account.
                    </p>

                    <a href=''>You didn't arrive? Click here to resubmit.</a>
                </div>
            </div>
        </div>
    );
};

export default step2;
