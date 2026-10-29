// Monthly service packages.
// TODO: set real monthly prices. While `price` is empty the card shows a placeholder.

export interface Package {
  id: string;
  name: string;
  price: string; // e.g. 'R4 500' (shown as "From R4 500 / month")
  audience: string;
  summary: string;
  includes: string[];
  featured: boolean;
}

export const packages: Package[] = [
  {
    id: 'starter',
    name: 'Brand Starter',
    price: '',
    audience: 'For small businesses that need a professional, consistent online presence.',
    summary: 'The essentials, done properly. A clear brand direction and a social presence you’re proud to send people to.',
    includes: [
      'Brand discovery consultation',
      'Content plan built around your goals',
      'Regular posts and graphics for one or two platforms',
      'Scheduling and publishing',
      'Monthly performance summary',
    ],
    featured: false,
  },
  {
    id: 'builder',
    name: 'Brand Builder',
    price: '',
    audience: 'For growing businesses that want stronger awareness and a more active presence.',
    summary: 'More content, more channels and active engagement, so people start recognising and talking about your brand.',
    includes: [
      'Everything in Brand Starter',
      'Higher posting frequency, including short-form video',
      'Community management and engagement',
      'A brand awareness campaign each quarter',
      'Paid social recommendations',
      'Monthly report with recommendations',
    ],
    featured: true,
  },
  {
    id: 'accelerator',
    name: 'Brand Accelerator',
    price: '',
    audience: 'For established businesses that want a full strategy across several platforms.',
    summary: 'Strategy, content and campaigns across your key platforms, managed as one plan and reviewed with you regularly.',
    includes: [
      'Everything in Brand Builder',
      'Multi-platform content, including LinkedIn for B2B',
      'Ongoing campaign planning and management',
      'Audience growth and targeting strategy',
      'Detailed reporting and strategy reviews',
      'Priority support',
    ],
    featured: false,
  },
];

export const pricePlaceholder = 'R —';
