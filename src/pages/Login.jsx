import React, {useState} from 'react';
import Step1 from '../components/LoginComponents/Step1/Step1';
import Step2 from '../components/LoginComponents/Step2/Step2';
import Step3 from '../components/LoginComponents/Step3/Step3';

const Login = () => {
    const [currentStep, setCurrentStep] = useState('step1');
    const handleCurrentStep = (event, childData) => {
        event.preventDefault();
        setCurrentStep(childData);
    };

    return (
        <div className='container'>
            {/* <div className='row header-section'>asd</div> */}
            <div className='row body-section'>
                {(currentStep === 'step1' && (
                    <Step1 activeComponent={handleCurrentStep} />
                )) ||
                    (currentStep === 'step2' && (
                        <Step2 activeComponent={handleCurrentStep} />
                    )) ||
                    (currentStep === 'step3' && (
                        <Step3 activeComponent={handleCurrentStep} />
                    ))}
            </div>
            {/* <div className='row footer-section'>asd</div> */}
        </div>
    );
};

export default Login;
