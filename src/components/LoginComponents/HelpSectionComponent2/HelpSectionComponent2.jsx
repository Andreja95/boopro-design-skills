import React from 'react';
import Icon from '@mdi/react';
import {mdiHandLeft} from '@mdi/js';
import {mdiLessThan} from '@mdi/js';
import './HelpSection2.styles.css';

const HelpSectionComponent = () => {
    return (
        <div className='col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <div
                className='col-12 my-0 backSetup'
                style={{
                    height: '5vh',
                }}>
                <button
                    className='btn btn-link stepBackMobile'
                    style={{
                        height: '100%',
                        paddingLeft: '5px',
                    }}>
                    <Icon
                        path={mdiLessThan}
                        size={1}
                        color='blue'
                        style={{
                            margin: '0',
                            paddingRight: '5px',
                        }}
                    />{' '}
                    Back to Setup
                </button>
            </div>
            <div
                className='col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-12 mx-auto help-section2'
                style={{height: '95vh'}}>
                <div className='sectionCardFirst'>
                    <div
                        className='col-12 col-12 mb-3'
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            paddingLeft: '40px',
                            paddingTop: '40px',
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
                    <div className='col-12'>
                        <h4
                            style={{
                                color: 'white',
                                alignItems: 'center',
                                justifyContent: 'left',
                                display: 'flex',
                                paddingLeft: '40px',
                                textAlign: 'left',
                            }}>
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
                    </div>

                    <div className='help mb-3'>
                        <p>What do you want help with?</p>
                    </div>
                    <div
                        className='row mx-auto'
                        style={{
                            backgroundColor: 'white',
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                            width: '90%',
                            height: '70px',
                            alignItems: 'center',
                            position: 'relative',
                            marginTop: '15%',
                        }}>
                        <div className='col-3' style={{textAlign: 'center'}}>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    'images/step3/Frame.png'
                                }
                                alt='Frame'
                            />
                        </div>
                        <div className='col-7' style={{color: 'black'}}>
                            <span style={{fontWeight: 700}}>
                                Book a new time
                            </span>
                        </div>
                        <div className='col-2' style={{textAlign: 'center'}}>
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
                        className='row mx-auto v-line'
                        style={{
                            width: '90%',
                            zIndex: 1,
                            height: '1px',
                            backgroundColor: '#dfe3eb',
                        }}></div>

                    <div
                        className='row mx-auto'
                        style={{
                            backgroundColor: 'white',
                            borderBottomLeftRadius: '10px',
                            borderBottomRightRadius: '10px',
                            width: '90%',
                            height: '70px',
                            alignItems: 'center',
                            position: 'relative',
                            zIndex: 1,
                        }}>
                        <div className='col-3' style={{textAlign: 'center'}}>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    'images/step3/Frame2.png'
                                }
                                alt='Frame2'
                            />
                        </div>
                        <div className='col-7' style={{color: 'black'}}>
                            <span style={{fontWeight: 700}}>
                                Cancel the meeting
                            </span>
                        </div>
                        <div
                            className='col-2'
                            style={{textAlign: 'center', paddingRight: '15px'}}>
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
                        className='row mx-auto mt-4'
                        style={{
                            backgroundColor: 'white',
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                            borderBottomLeftRadius: '10px',
                            borderBottomRightRadius: '10px',
                            width: '90%',
                            height: '70px',
                            alignItems: 'center',
                            position: 'relative',
                            zIndex: 1,
                        }}>
                        <div
                            className='col-10'
                            style={{color: 'black', textAlign: 'center'}}>
                            <span
                                style={{
                                    fontWeight: 700,
                                    fontSize: '13px',
                                }}>
                                That's what our customers say about us
                            </span>
                        </div>
                        <div className='col-2' style={{textAlign: 'center'}}>
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
                <div className='sectionCardSecond'></div>
                <div className='sectionCardThird'>
                    <div
                        className='col-12 h-100'
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
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
        </div>
    );
};

export default HelpSectionComponent;
