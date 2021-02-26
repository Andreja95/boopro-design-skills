import React from 'react';
import './HeaderBreadcrumbs.styles.css';
import Icon from '@mdi/react';
import {mdiLessThan} from '@mdi/js';

const HeaderBreadcrumbs = ({step}) => {
    return (
        <div className='row card-header py-4'>
            <div className='col-7 col-sm-6 col-xl-auto d-flex align-items-center px-4'>
                {' '}
                {step === 2 ? (
                    <div>
                        <button
                            className='btn btn-link stepBackMobile'
                            style={{
                                float: 'left',
                                paddingLeft: '0px',
                            }}>
                            <Icon
                                path={mdiLessThan}
                                size={1}
                                color='blue'
                                style={{
                                    paddingRight: '5px',
                                }}
                            />{' '}
                            Back
                        </button>

                        <div className='logoCompany'>
                            <div className='row'>
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
                                <div className='col px-0'>
                                    <p
                                        className='h4'
                                        style={{
                                            margin: '0',
                                            fontSize: '25px',
                                            fontWeight: '700',
                                            color: 'black',
                                        }}>
                                        {' '}
                                        bookybook
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='row'>
                        <div className='col'>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    'images/step3/mainLogo2.png'
                                }
                                alt='mainLogo2'
                            />
                        </div>
                        <div className='col mx-0 px-0'>
                            <p
                                className='h4'
                                style={{
                                    margin: '0',
                                    fontSize: '25px',
                                    fontWeight: '700',
                                    color: 'black',
                                }}>
                                {' '}
                                bookybook
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <div
                className='col-5 col-sm-6 col-xl-auto my-auto'
                style={{textAlign: 'right'}}>
                <span style={{color: '#1A73E8', fontWeight: '700'}}>
                    {' '}
                    Step {step}{' '}
                </span>{' '}
                <span style={{color: '#1A73E8'}}>/ 3</span>
                <span
                    className={'dot ml-3 ' + (step >= 1 ? 'dotActive' : null)}
                    style={{marginLeft: '20px'}}></span>
                <span
                    className={
                        'dot ' + (step >= 2 ? 'dotActive' : null)
                    }></span>
                <span
                    className={
                        'dot ' + (step >= 3 ? 'dotActive' : null)
                    }></span>
            </div>
        </div>
    );
};

export default HeaderBreadcrumbs;
