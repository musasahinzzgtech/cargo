import React from "react";

import PersonalStep from "./Steps/PersonalStep";
import ProfessionalStep from "./Steps/ProfessionalStep";
import ReviewStep from "./Steps/ReviewStep/ReviewStep.layout";
import { RegisterPageContentSteps } from "./Content.types";

export const createFormSteps = () => {
  return [
    {
      title: "Personal",
      stepName: RegisterPageContentSteps.Personal,
      content: <PersonalStep />,
    },
    {
      title: "Professional",
      stepName: RegisterPageContentSteps.Professional,
      content: <ProfessionalStep />,
    },
    {
      title: "Review",
      stepName: RegisterPageContentSteps.Review,
      content: <ReviewStep />,
    },
  ];
};
