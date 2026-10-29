// The five service areas. `core: true` marks the three we lead with at launch.

export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  points: string[];
  benefit: string;
  core: boolean;
}

export const services: Service[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'Brand Discovery & Strategy',
    summary:
      'Before we recommend anything, we learn how your business works. What you sell, who buys it, why they choose you over the competition, and what you need marketing to achieve.',
    points: [
      'What your company does and how it makes money',
      'Who your ideal customers are',
      'What sets you apart from competitors',
      'Your commercial goals for the next 6 to 12 months',
      'Where the real opportunities for growth are',
    ],
    benefit: 'A marketing strategy built for your business, not a package copied from the last client.',
    core: true,
  },
  {
    id: 'awareness',
    number: '02',
    title: 'Brand Awareness',
    summary:
      'Good businesses get overlooked all the time because nobody knows they exist, or can’t tell them apart from everyone else. We fix that by getting your name in front of the right people with a message they remember.',
    points: [
      'Sharper brand identity and messaging',
      'Creative campaigns with a clear purpose',
      'Visibility on the digital platforms your customers use',
      'A clear story about what makes you different',
    ],
    benefit: 'More people recognise your brand, and they understand why it’s worth choosing.',
    core: true,
  },
  {
    id: 'social',
    number: '03',
    title: 'Social Media Marketing',
    summary:
      'We plan, create and manage social content that has a job to do. No filler posts to keep a calendar full. Every post supports the strategy.',
    points: [
      'Content planning and scheduling',
      'Posts, graphics and short-form video',
      'Facebook and Instagram management',
      'LinkedIn content for B2B businesses',
      'Community management and audience building',
    ],
    benefit: 'A consistent, professional presence online, without your team having to run it.',
    core: true,
  },
  {
    id: 'growth',
    number: '04',
    title: 'Audience Growth & Engagement',
    summary:
      'Attention is only useful if it turns into conversations. We help you reach new prospects and stay front of mind with the customers you already have.',
    points: [
      'Finding and reaching relevant audiences',
      'Content written for the people you want to attract',
      'Encouraging real interaction, not vanity likes',
      'Paid social recommendations where they make sense',
    ],
    benefit: 'More chances to turn attention into enquiries, leads and sales.',
    core: false,
  },
  {
    id: 'performance',
    number: '05',
    title: 'Performance & Improvement',
    summary:
      'We track the numbers that matter to your business and report on them in plain language. Then we use what we learn to make the next month better.',
    points: [
      'Reach, engagement and audience growth',
      'Website visits and enquiries, where measurable',
      'Campaign performance reviews',
      'Practical recommendations for what to change',
    ],
    benefit: 'You always know what your marketing is doing and why we’re making each decision.',
    core: false,
  },
];

export const specialistServices = [
  'Paid advertising budgets',
  'Photography',
  'Extended video production',
  'Other specialist services',
];
