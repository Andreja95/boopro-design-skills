import React from 'react';
import './Step3.styles.css';
import HeaderBreadcrumbs from '../HeaderBreadcrumbs/HeaderBreadcrumbs';
import HelpSectionComponent from '../HelpSectionComponent/HelpSectionComponent';

const step3 = ({activeComponent}) => {
    return (
        <div className='card' style={{height: '100vh'}}>
            <HeaderBreadcrumbs step={1} />
            <div
                className='row card-body card-body-step3 px-lg-5 px-0 justify-content-center'
                style={{height: '80vh'}}>
                <a
                    href=''
                    onClick={(event) =>
                        activeComponent(event, 'helpSectionComponent2')
                    }>
                    <div
                        className='row preview'
                        style={{
                            background: '#F5F8FA',
                            height: '50px',
                        }}>
                        <div className='col-10 my-auto px-4'>
                            <span
                                style={{
                                    fontWeight: 600,
                                    color: '#1A73E8',
                                }}>
                                Preview
                            </span>
                        </div>
                        <div className='col-2 my-auto px-4'>
                            {' '}
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    'images/step3/Vector.png'
                                }
                                alt='Vector'
                                style={{float: 'right'}}
                            />
                        </div>
                    </div>
                </a>
                <div
                    className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-5 mx-0 customize-look'
                    style={{height: '100%'}}>
                    <div>
                        <h3
                            className='my-4'
                            style={{color: '#1a73e8', fontWeight: 700}}>
                            Customize the look
                        </h3>
                        <h5>Upload your logo</h5>
                        <p style={{color: '#516F90'}}>
                            Voluntary but warmly recommended
                        </p>

                        <div className='image-upload mb-4 mt-3'>
                            <label htmlFor='file-input'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/step3/imageUploader.png'
                                    }
                                    style={{pointerEvents: 'none'}}
                                />
                            </label>
                            <input
                                id='file-input'
                                type='file'
                                style={{display: 'none'}}
                            />
                        </div>
                        <h5>Choose a color</h5>
                        <div className='custom-radios mt-3'>
                            <div className='custom-radio'>
                                <input
                                    type='radio'
                                    id='color-1'
                                    name='color'
                                    value='color-1'
                                    checked
                                />
                                <label htmlFor='color-1'>
                                    <span>
                                        <img
                                            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                                            alt='Checked Icon'
                                        />
                                    </span>
                                </label>
                            </div>

                            <div className='custom-radio'>
                                <input
                                    type='radio'
                                    id='color-2'
                                    name='color'
                                    value='color-2'
                                />
                                <label htmlFor='color-2'>
                                    <span>
                                        <img
                                            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                                            alt='Checked Icon'
                                        />
                                    </span>
                                </label>
                            </div>

                            <div className='custom-radio'>
                                <input
                                    type='radio'
                                    id='color-3'
                                    name='color'
                                    value='color-3'
                                />
                                <label htmlFor='color-3'>
                                    <span>
                                        <img
                                            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                                            alt='Checked Icon'
                                        />
                                    </span>
                                </label>
                            </div>

                            <div className='custom-radio'>
                                <input
                                    type='radio'
                                    id='color-4'
                                    name='color'
                                    value='color-4'
                                />
                                <label htmlFor='color-4'>
                                    <span>
                                        <img
                                            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                                            alt='Checked Icon'
                                        />
                                    </span>
                                </label>
                            </div>
                            <div className='custom-radio'>
                                <input
                                    type='radio'
                                    id='color-5'
                                    name='color'
                                    value='color-5'
                                />
                                <label htmlFor='color-5'>
                                    <span>
                                        <img
                                            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                                            alt='Checked Icon'
                                        />
                                    </span>
                                </label>
                            </div>
                            <div className='custom-radio'>
                                <input
                                    type='color'
                                    id='color-6'
                                    name='color'
                                    value='color-6'
                                    style={{display: 'none'}}
                                />
                                <label htmlFor='color-6'>
                                    <span>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/step3/dotCheckbox.png'
                                            }
                                            alt='dotCheckbox'
                                        />
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <HelpSectionComponent />
            </div>
            <div className='row'>
                <div className='card-footer' style={{height: '10vh'}}>
                    <div className='row d-flex justify-content-center'>
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
        </div>
    );
};

export default step3;
