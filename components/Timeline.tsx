import { FC } from 'react';
import { useRouteTheme } from '../hooks/useRouteTheme';

interface TimelineProps {
  currentStep: number;
  route?: 'challenge' | 'card' | 'Answer';
}

const cardSteps = [
  'Choose 1 card from the deck above',
  'Read the Card',
  'Tell me what you think about me',
  'Send your perspective',
  '(Opt)Sign up to get your analysis',
  '(Opt)Join activities to get your Persona Cards',
];

const challengeSteps = [
  'Choose 1 challenge from the deck to challenge me',
  'I have to complete & submit the Challenge',
  'You check the result - give feedback',
  'If I win the Challenge, you have to do something for me in return. You decide What it is',
  '(Opt)Sign up to get your analysis',
  '(Opt)Join activities to get your Persona Cards',
];

export const Timeline: FC<TimelineProps> = ({
  currentStep,
  route = 'card',
}) => {
  const theme = useRouteTheme();
  const steps = route === 'challenge' ? challengeSteps : cardSteps;

  return (
    <div className="max-w-md mx-auto h-full p-6">
      <h3 className="text-lg font-bold mb-4">Your Journey</h3>
      <div className="space-y-3">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isPreviousStep = stepNumber < currentStep;
          const isHighlightedStep = stepNumber === currentStep;

          return (
            <div
              key={index}
              className={`flex items-center gap-3 ${
                isHighlightedStep
                  ? `text-[${theme.primary}] font-bold`
                  : isPreviousStep
                  ? 'text-black'
                  : 'text-gray-400'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  stepNumber <= currentStep ? `bg-[${theme.primary}]` : 'bg-gray-200'
                }`}
              >
                <span className="text-white text-sm">{stepNumber}</span>
              </div>
              <span className="text-base">{step}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;