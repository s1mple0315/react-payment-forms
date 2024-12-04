import { useState } from 'react';
import styles from './Vertical_Stepper.module.css'; // Import the CSS Module

const Vertical_Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);  // Track the current step

  const steps = [
    { label: "Step 1", content: "Content for Step 1" },
    { label: "Step 2", content: "Content for Step 2" },
    { label: "Step 3", content: "Content for Step 3" },
    { label: "Step 4", content: "Content for Step 4" },
  ];

  // Handle moving to the next or previous step
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={styles.stepperContainer}>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`${styles.step} ${currentStep === index + 1 ? styles.stepActive : ''}`}
          >
            <div className={styles.stepLabel}>{step.label}</div>
            <div className={styles.stepContent}>{step.content}</div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={handleBack} disabled={currentStep === 1}>
          Back
        </button>
        <button onClick={handleNext} disabled={currentStep === steps.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Vertical_Stepper;
