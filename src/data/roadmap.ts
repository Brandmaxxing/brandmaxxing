// The six-phase Brandmaxxing roadmap.

export interface Phase {
  step: number;
  name: string;
  headline: string;
  text: string;
}

export const roadmap: Phase[] = [
  {
    step: 1,
    name: 'Discover',
    headline: 'We get to know your business',
    text: 'An initial consultation where we look at your brand, your current marketing, your target market and what you want to achieve.',
  },
  {
    step: 2,
    name: 'Strategise',
    headline: 'We build a practical plan',
    text: 'Clear priorities, the right platforms, content themes and goals we can actually measure. Nothing you don’t need.',
  },
  {
    step: 3,
    name: 'Create',
    headline: 'We make the content',
    text: 'On-brand content that people want to engage with, organised in a structured publishing calendar you can see in advance.',
  },
  {
    step: 4,
    name: 'Activate',
    headline: 'We put it to work',
    text: 'We publish your content, manage the agreed social media activity and run your campaigns.',
  },
  {
    step: 5,
    name: 'Measure',
    headline: 'We check what’s working',
    text: 'We review performance, spot new opportunities and adjust the strategy based on real results.',
  },
  {
    step: 6,
    name: 'Grow',
    headline: 'We build on it',
    text: 'More of what works. Stronger recognition, and new ways to reach the customers you want.',
  },
];
