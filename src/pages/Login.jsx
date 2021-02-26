import React, {useState} from 'react';
import Step1 from '../components/LoginComponents/Step1/Step1';
import Step2 from '../components/LoginComponents/Step2/Step2';
import Step3 from '../components/LoginComponents/Step3/Step3';
import Step4 from '../components/LoginComponents/Step4/Step4';
import HelpSectionComponent from '../components/LoginComponents/HelpSectionComponent/HelpSectionComponent';
import HelpSectionComponent2 from '../components/LoginComponents/HelpSectionComponent2/HelpSectionComponent2';

const Login = () => {
    const [currentStep, setCurrentStep] = useState('step1');
    const handleCurrentStep = (event, childData) => {
        event.preventDefault();
        setCurrentStep(childData);
    };

    return (
        <div className='container-fluid mx-0 px-0'>
            {(currentStep === 'step1' && (
                <Step1 activeComponent={handleCurrentStep} />
            )) ||
                (currentStep === 'step2' && (
                    <Step2 activeComponent={handleCurrentStep} />
                )) ||
                (currentStep === 'step3' && (
                    <Step3 activeComponent={handleCurrentStep} />
                )) ||
                (currentStep === 'step4' && (
                    <Step4 activeComponent={handleCurrentStep} />
                )) ||
                (currentStep === 'helpSectionComponent' && (
                    <HelpSectionComponent activeComponent={handleCurrentStep} />
                )) ||
                (currentStep === 'helpSectionComponent2' && (
                    <HelpSectionComponent2
                        activeComponent={handleCurrentStep}
                    />
                ))}
        </div>
    );
};

export default Login;
