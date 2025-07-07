"use client";

import React, { useState } from "react";
import { UserFormData } from "../../types/form";
import {
  validateStep,
  getCompletedSteps,
  getStepTitle,
  getStepDescription,
} from "../../utils/formValidation";
import { ProgressBar } from "./ProgressBar";
import { FormSummary } from "./FormSummary";
import { SuccessPage } from "./SuccessPage";
import { StepName } from "./Steps/StepName";
import { StepGoals } from "./Steps/StepGoals";
import { StepWeight } from "./Steps/StepWeight";
import { StepLevel } from "./Steps/StepLevel";
import { StepFrequency } from "./Steps/StepFrequency";
import { StepActivities } from "./Steps/StepActivities";
import { StepColor } from "./Steps/StepColor";

const TOTAL_STEPS = 7;

export const UserRegistrationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSummary, setShowSummary] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    fitnessGoals: [],
    currentWeight: 0,
    targetWeight: undefined,
    fitnessLevel: "beginner",
    workoutFrequency: "",
    preferredActivities: [],
    favoriteColor: undefined,
  });

  const completedSteps = getCompletedSteps(formData);
  const canProceed = validateStep(currentStep, formData);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleBack = () => {
    if (showSummary) {
      setShowSummary(false);
      setCurrentStep(TOTAL_STEPS);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleEdit = (step: number) => {
    setShowSummary(false);
    setCurrentStep(step);
  };

  const handleFinish = () => {
    setShowSummary(true);
  };

  const handleSubmit = () => {
    // Ici, vous pouvez traiter les données du formulaire
    console.log("Données du formulaire:", formData);

    // Afficher la page de succès
    setIsCompleted(true);
    setShowSummary(false);
  };

  const handleRestart = () => {
    setIsCompleted(false);
    setShowSummary(false);
    setCurrentStep(1);
    setFormData({
      name: "",
      fitnessGoals: [],
      currentWeight: 0,
      targetWeight: undefined,
      fitnessLevel: "beginner",
      workoutFrequency: "",
      preferredActivities: [],
      favoriteColor: undefined,
    });
  };

  const updateFormData = (updates: Partial<UserFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  if (isCompleted) {
    return <SuccessPage formData={formData} onRestart={handleRestart} />;
  }

  if (showSummary) {
    return (
      <div className="min-h-screen bg-app-bg py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <FormSummary
            formData={formData}
            onEdit={handleEdit}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-app-bg via-jade-1 to-jade-2 py-8 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-jade-3 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-60 right-20 w-20 h-20 bg-jade-4 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-jade-5 rounded-full opacity-25 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-jade-6 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <ProgressBar
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          completedSteps={completedSteps}
        />

        <div className="bg-white/60 backdrop-blur-lg border border-jade-3 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Card decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-jade-8 via-jade-9 to-jade-10"></div>
          <div className="mb-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-strong mb-3 tracking-tight">
              {getStepTitle(currentStep)}
            </h1>
            <p className="text-muted/80 text-lg">
              {getStepDescription(currentStep)}
            </p>
          </div>

          {currentStep === 1 && (
            <StepName
              value={formData.name}
              onChange={(name) => updateFormData({ name })}
              onNext={handleNext}
              canProceed={canProceed}
            />
          )}

          {currentStep === 2 && (
            <StepGoals
              selectedGoals={formData.fitnessGoals}
              onChange={(fitnessGoals) => updateFormData({ fitnessGoals })}
              onNext={handleNext}
              onBack={handleBack}
              canProceed={canProceed}
            />
          )}

          {currentStep === 3 && (
            <StepWeight
              currentWeight={formData.currentWeight}
              targetWeight={formData.targetWeight}
              onCurrentWeightChange={(currentWeight) =>
                updateFormData({ currentWeight })
              }
              onTargetWeightChange={(targetWeight) =>
                updateFormData({ targetWeight })
              }
              onNext={handleNext}
              onBack={handleBack}
              canProceed={canProceed}
            />
          )}

          {currentStep === 4 && (
            <StepLevel
              selectedLevel={formData.fitnessLevel}
              onChange={(fitnessLevel) => updateFormData({ fitnessLevel })}
              onNext={handleNext}
              onBack={handleBack}
              canProceed={canProceed}
            />
          )}

          {currentStep === 5 && (
            <StepFrequency
              selectedFrequency={formData.workoutFrequency}
              onChange={(workoutFrequency) =>
                updateFormData({ workoutFrequency })
              }
              onNext={handleNext}
              onBack={handleBack}
              canProceed={canProceed}
            />
          )}

          {currentStep === 6 && (
            <StepActivities
              selectedActivities={formData.preferredActivities}
              onChange={(preferredActivities) =>
                updateFormData({ preferredActivities })
              }
              onNext={handleNext}
              onBack={handleBack}
              canProceed={canProceed}
            />
          )}

          {currentStep === 7 && (
            <StepColor
              selectedColor={formData.favoriteColor}
              onChange={(favoriteColor) => updateFormData({ favoriteColor })}
              onBack={handleBack}
              onFinish={handleFinish}
            />
          )}
        </div>
      </div>
    </div>
  );
};
