import React from 'react';
import './HeaderBreadcrumbs.styles.css';
import Icon from '@mdi/react';
import {mdiLessThan} from '@mdi/js';

const HeaderBreadcrumbs = ({step}) => {
    return (
        <div className='row'>
            <div
                className='card-header info-color py-4 text-left'
                style={{background: 'white'}}>
                <div className='row card-header-info'>
                    <div className='col-6 col-xl-2 d-flex align-items-center'>
                        {' '}
                        {step === 2 ? (
                            <div>
                                <button
                                    className='btn btn-link stepBackMobile'
                                    style={{
                                        float: 'left',
                                    }}>
                                    <Icon
                                        path={mdiLessThan}
                                        title='Back'
                                        size={1}
                                        color='blue'
                                        style={{paddingRight: '5px'}}
                                    />
                                    Back
                                </button>
                                <div className='logoo'>
                                    <div className='row d-flex justify-content-center'>
                                        <div className='col'>
                                            {' '}
                                            <img
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    'images/step3/mainLogo2.png'
                                                }
                                                alt='mainLogo2'
                                            />
                                        </div>
                                        <div className='col'>
                                            <span
                                                className='h4'
                                                style={{
                                                    margin: '0',
                                                }}>
                                                {' '}
                                                bookybook
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='row d-flex justify-content-center'>
                                <div className='col'>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            'images/step3/mainLogo2.png'
                                        }
                                        alt='mainLogo2'
                                    />
                                </div>
                                <div className='col'>
                                    <span
                                        className='h4'
                                        style={{
                                            margin: '0',
                                        }}>
                                        {' '}
                                        bookybook
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='col-6 col-xl-10 d-flex align-items-center'>
                        <span
                            className='h4'
                            style={{
                                margin: '0',
                                paddingLeft: '5px',
                                paddingRight: '15px',
                            }}>
                            {' '}
                            Step {step} / 3
                        </span>
                        <span
                            className={
                                'dot ' + (step === 1 ? 'dotActive' : null)
                            }></span>
                        <span
                            className={
                                'dot ' + (step === 2 ? 'dotActive' : null)
                            }></span>
                        <span
                            className={
                                'dot ' + (step === 3 ? 'dotActive' : null)
                            }></span>
                    </div>
                </div>
                {/* Header */}
            </div>
        </div>
    );
};

export default HeaderBreadcrumbs;
