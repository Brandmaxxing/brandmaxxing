// Central site settings. Anything marked TODO is a placeholder to replace before launch.

export const site = {
  name: 'Brandmaxxing',
  url: 'https://brandmaxxing.co.za',
  tagline: 'Maximise Your Brand. Multiply Your Opportunities.',
  promise: 'Be Seen. Be Remembered. Be Chosen.',
  strapline: 'Your business is unique. Your marketing should be too.',
  description:
    'Brandmaxxing is a strategic marketing partner for South African businesses. We understand your business first, then build brand awareness and social media strategies that attract the right customers.',
  locale: 'en_ZA',
  country: 'South Africa',

  contact: {
    // TODO: replace with the real business email address
    email: 'hello@brandmaxxing.co.za',
    // TODO: add a phone/WhatsApp number when available (leave empty to hide it)
    phone: '',
    // TODO: confirm the area you serve
    location: 'South Africa',
  },

  // TODO: replace with the Google Form URL once created (see README "Follow-ups").
  // While empty, the enquiry form shows as a styled placeholder with email fallback.
  enquiryFormUrl: '',

  // TODO: replace with the Google Calendar appointment booking page URL.
  // While empty, the booking card links to email instead.
  bookingUrl: '',

  // TODO: add social profile URLs when they exist (leave empty to hide)
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },
};

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'How We Work', href: '/how-we-work/' },
  { label: 'Packages', href: '/packages/' },
  { label: 'About', href: '/about/' },
];

export const consultationHref = '/contact/#book';
