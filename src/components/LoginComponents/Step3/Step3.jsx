import React from 'react';
import './Step3.styles.css';
import Icon from '@mdi/react';
import {mdiHandLeft} from '@mdi/js';
import HeaderBreadcrumbs from '../HeaderBreadcrumbs/HeaderBreadcrumbs';

const step3 = ({activeComponent}) => {
    return (
        <div className='card' style={{height: '100vh'}}>
            <HeaderBreadcrumbs step={1} />
            <div className='row card-body card-body-step3 px-lg-5 px-0 pt-0 justify-content-center'>
                <div
                    className='row preview'
                    style={{
                        background: '#F5F8FA',
                        height: '50px',
                    }}>
                    <div className='col-10 my-auto'>
                        <span style={{fontWeight: 600, color: '#1A73E8'}}>
                            Preview
                        </span>
                    </div>
                    <div className='col-2 my-auto'>
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
                <div
                    className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-5'
                    style={{height: '100%', width: 'auto'}}>
                    <h4 className='mt-4'>Customize the look</h4>
                    <h5>Upload your logo</h5>
                    <h5 className='lead'>Voluntary but warmly recommended</h5>

                    <div class='image-upload mb-4 mt-3'>
                        <label for='file-input'>
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
                    <div class='custom-radios mt-3'>
                        <div class='custom-radio'>
                            <input
                                type='radio'
                                id='color-1'
                                name='color'
                                value='color-1'
                            />
                            <label for='color-1'>
                                <span>
                                    <img
                                        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                                        alt='Checked Icon'
                                    />
                                </span>
                            </label>
                        </div>

                        <div class='custom-radio'>
                            <input
                                type='radio'
                                id='color-2'
                                name='color'
                                value='color-2'
                            />
                            <label for='color-2'>
                                <span>
                                    <img
                                        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                                        alt='Checked Icon'
                                    />
                                </span>
                            </label>
                        </div>

                        <div class='custom-radio'>
                            <input
                                type='radio'
                                id='color-3'
                                name='color'
                                value='color-3'
                            />
                            <label for='color-3'>
                                <span>
                                    <img
                                        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                                        alt='Checked Icon'
                                    />
                                </span>
                            </label>
                        </div>

                        <div class='custom-radio'>
                            <input
                                type='radio'
                                id='color-4'
                                name='color'
                                value='color-4'
                            />
                            <label for='color-4'>
                                <span>
                                    <img
                                        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                                        alt='Checked Icon'
                                    />
                                </span>
                            </label>
                        </div>
                        <div class='custom-radio'>
                            <input
                                type='radio'
                                id='color-5'
                                name='color'
                                value='color-5'
                            />
                            <label for='color-5'>
                                <span>
                                    <img
                                        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                                        alt='Checked Icon'
                                    />
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div
                    className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-5 help-section'
                    style={{height: '100%', width: 'auto'}}>
                    <div className='sectionCard1'>
                        <div
                            className='logoo mb-3'
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    'images/step3/mainLogo.png'
                                }
                                alt='mainLogo'
                            />
                            <span
                                style={{
                                    fontWeight: 600,
                                    margin: '0px',
                                    paddingLeft: '5px',
                                    fontSize: '25px',
                                }}>
                                {' '}
                                bookybook
                            </span>
                        </div>
                        <h4 className='hello' style={{color: 'white'}}>
                            <span>Hej! </span>
                            <Icon
                                path={mdiHandLeft}
                                title='Back'
                                // size={2}
                                color='white'
                                style={{
                                    height: '35px',
                                    width: '35px',
                                    marginBottom: '10px',
                                }}
                            />
                        </h4>
                        <div className='help'>
                            <p>What do you want help with?</p>
                            <div
                                className='row custom-button'
                                style={{
                                    backgroundColor: 'white',
                                    borderTopLeftRadius: '10px',
                                    borderTopRightRadius: '10px',
                                }}>
                                <div className='custom-button-logo'>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            'images/step3/Frame.png'
                                        }
                                        alt='Frame'
                                    />
                                </div>
                                <div
                                    className='custom-button-name'
                                    style={{color: 'black'}}>
                                    <span style={{fontWeight: 500}}>
                                        Book a new time
                                    </span>
                                </div>
                                <div className='custom-button-arrow'>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            'images/step3/Vector.png'
                                        }
                                        alt='Vector'
                                    />
                                </div>
                            </div>
                            <div
                                className='row custom-button'
                                style={{backgroundColor: 'white'}}>
                                <div className='custom-button-logo'>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            'images/step3/Frame2.png'
                                        }
                                        alt='Frame2'
                                    />
                                </div>
                                <div
                                    className='custom-button-name'
                                    style={{color: 'black'}}>
                                    <span style={{fontWeight: 500}}>
                                        Cancel the meeting
                                    </span>
                                </div>
                                <div className='custom-button-arrow'>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            'images/step3/Vector.png'
                                        }
                                        alt='Vector'
                                    />
                                </div>
                            </div>
                            <div
                                className='row custom-details mt-4'
                                style={{backgroundColor: 'white'}}>
                                <div
                                    className='custom-button-name'
                                    style={{color: 'black'}}>
                                    <span style={{fontWeight: 500}}>
                                        That's what our customers say about us
                                    </span>
                                </div>
                                <div className='custom-button-arrow'>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            'images/step3/Vector2.png'
                                        }
                                        alt='Vector2'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sectionCard2'></div>
                    <div className='sectionCard3'>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                'images/step3/Frame22.png'
                            }
                            alt='Frame22'
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div class='card-footer'>
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
