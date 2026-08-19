export const CONTACT = {
  email: 'hellokasircompany@gmail.com',
  phone: '+233 50 439 9802',
  phoneRaw: '+233504399802',
  phoneLocal: '050 439 9802',
  whatsapp: 'https://wa.me/message/DDDRI6DY2BXUI1',
  location: 'Accra, Ghana',
  hours: 'Mon – Sat, 9:00 AM – 7:00 PM GMT',
}

export const PILLARS = [
  {
    slug: 'societal-solutions',
    tag: 'Pillar 01',
    title: 'Societal Impact Solutions',
    tagline: 'Tech that solves problems everyday people actually face.',
    description:
      'We build products that tackle real, painful problems in West African life — rent scams, land fraud, broken record-keeping. Software with a public purpose.',
    proofPoints: [
      { name: 'Escavio', label: 'Rent fraud & escrow', desc: 'Protects tenants and landlords from rent scams with verified listings and escrow-secured payments.' },
      { name: 'KromMap', label: 'Land fraud detection', desc: 'Registers, verifies, and traces land ownership so families and investors stop losing money to double-sold plots.' },
    ],
    features: ['Fraud detection', 'Trust & verification', 'Mobile-first', 'Local payment rails'],
    icon: 'shield',
  },
  {
    slug: 'government-solutions',
    tag: 'Pillar 02',
    title: 'Government & Public Sector Solutions',
    tagline: 'Digitize, modernize, and adopt AI — without the noise.',
    description:
      'We help ministries, agencies, and district assemblies move from paper and spreadsheets to secure digital systems, and integrate AI where it actually improves service delivery.',
    proofPoints: [
      { name: 'Records digitization', label: 'Paper → dashboard', desc: 'Retire filing cabinets. Search, audit, and report in seconds.' },
      { name: 'AI-assisted operations', label: 'Practical AI adoption', desc: 'Deploy AI where it earns its keep — triage, translation, drafting, search — with safeguards built in.' },
    ],
    features: ['Records digitization', 'Citizen portals', 'AI adoption playbooks', 'Secure hosting'],
    icon: 'gov',
  },
  {
    slug: 'ai-automation',
    tag: 'Pillar 03',
    title: 'AI Automation for Businesses',
    tagline: 'Give your business an AI edge — and buy back your time.',
    description:
      'From WhatsApp chatbots to front-desk automation to full workflow AI, we integrate the tools that let SMBs and mid-sized companies serve more customers, faster, without hiring for it.',
    proofPoints: [
      { name: 'AI front desk', label: '24/7 first response', desc: 'Handles bookings, FAQs, and hand-offs across WhatsApp, web, and phone.' },
      { name: 'Workflow automation', label: 'Ops on autopilot', desc: 'Quotes, invoices, follow-ups, reporting — automated end to end.' },
    ],
    features: ['WhatsApp & web chatbots', 'Front-desk automation', 'Workflow automation', 'Custom AI integrations'],
    icon: 'bot',
  },
]

export const SERVICES = [
  {
    slug: 'website-development',
    title: 'Website Development',
    tagline: 'Fast, SEO-ready websites that convert.',
    description:
      'Custom business websites built with modern stacks — fast, mobile-first, and optimized for search and conversion.',
    features: ['Custom design', 'Mobile-first', 'CMS integration', 'Lightning fast'],
    icon: 'code',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'iOS & Android apps people love.',
    description:
      'Native-quality cross-platform apps built with React Native and Flutter — from MVP to launch on the App Store and Play Store.',
    features: ['iOS & Android', 'Offline-ready', 'Push notifications', 'Secure APIs'],
    icon: 'device',
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce Websites',
    tagline: 'Sell online with confidence.',
    description:
      'Full online stores with secure checkout, product management, inventory, and local payment integration (MTN MoMo, Telecel Cash, Paystack, Stripe).',
    features: ['MoMo & card payments', 'Inventory', 'Order tracking', 'Analytics'],
    icon: 'cart',
  },
  {
    slug: 'portfolio-websites',
    title: 'Portfolio Websites',
    tagline: 'Showcase your work beautifully.',
    description:
      'Elegant, personal portfolio sites for creators, freelancers, and professionals — fast, accessible, and easy to update.',
    features: ['Custom layouts', 'Case study pages', 'Contact forms', 'Blog-ready'],
    icon: 'sparkle',
  },
  {
    slug: 'school-management',
    title: 'School / Management Systems',
    tagline: 'Run your school or business smarter.',
    description:
      'Web-based management systems for schools and organizations — students, staff, fees, results, inventory, HR, and reporting in one dashboard.',
    features: ['Student records', 'Fees & payments', 'Results processing', 'Role-based access'],
    icon: 'dashboard',
  },
  {
    slug: 'seo',
    title: 'SEO Optimization',
    tagline: 'Rank higher. Grow organically.',
    description:
      'Technical SEO, on-page optimization, content strategy, and local SEO that helps your business show up on Google when it matters.',
    features: ['Technical audit', 'Keyword research', 'On-page SEO', 'Local SEO'],
    icon: 'search',
  },
  {
    slug: 'automation-bots',
    title: 'Automation Bots',
    tagline: 'Automate the boring stuff.',
    description:
      'Custom bots and automations for WhatsApp, Telegram, and the web — customer support, lead capture, reminders, scraping, and workflow automation.',
    features: ['WhatsApp & Telegram', 'Workflow automation', 'AI integrations', '24/7 uptime'],
    icon: 'bot',
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    tagline: 'High-converting pages that ship fast.',
    description:
      'Conversion-focused landing pages for product launches, campaigns, and lead generation — copy, design, and analytics all set up.',
    features: ['A/B testing ready', 'Lead capture', 'Pixel tracking', 'Copy included'],
    icon: 'rocket',
  },
]

export const PROJECTS = [
  {
    title: 'Escavio',
    category: 'Societal Impact',
    tags: ['PropTech', 'Escrow', 'Rent Fraud'],
    description: "Verified listings and escrow that end rent scams in Ghana — the landlord only gets paid when the tenant has the keys in hand.",
    link: 'https://escavio.site',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fescavio.site?w=1600&h=1200',
    color: 'from-brand-600 to-accent-cyan',
  },
  {
    title: 'KromMap',
    category: 'Societal Impact',
    tags: ['LegalTech', 'GIS', 'Land Records'],
    description: 'Land-fraud detection for West Africa — verified plots, ownership history, and dispute alerts before you sign a single cedi over.',
    link: 'https://krommap.site',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fkrommap.site?w=1600&h=1200',
    color: 'from-brand-700 to-accent-sky',
  },
  {
    title: 'Styleon',
    category: 'E-commerce',
    tags: ['Fashion', 'MoMo', 'Storefront'],
    description: 'Modern fashion storefront for African brands — beautiful product pages, MoMo and card checkout, and analytics that actually help you sell.',
    link: 'https://styleon.site',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fstyleon.site?w=1600&h=1200',
    color: 'from-brand-500 to-accent-cyan',
  },
  {
    title: 'LectureWithKWS',
    category: 'Web App',
    tags: ['AI', 'EdTech', 'Next.js'],
    description: "Ghana's first AI-powered smart classroom — delivering intelligent, on-demand learning to students and educators.",
    link: 'https://lecturewithkws.site',
    image: '/projects/lecture.png',
    color: 'from-brand-600 to-accent-cyan',
  },
  {
    title: 'CryptoVault',
    category: 'Mobile App',
    tags: ['React', 'Crypto', 'UI Prototype'],
    description: 'Dark-themed crypto portfolio tracker with live prices, trade actions, and performance insights for BTC, ETH, and SOL.',
    link: 'https://cryptuiscreen.vercel.app/',
    image: '/projects/mobile.png',
    color: 'from-navy to-brand-600',
  },
  {
    title: 'Kwadwo Wilson Portfolio',
    category: 'Portfolio',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    description: 'Personal portfolio for a full-stack developer — projects, stack, testimonials, and direct client contact.',
    link: 'https://kwadwowilson.space',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fkwadwowilson.space?w=1600&h=1200',
    color: 'from-brand-700 to-brand-400',
  },
  {
    title: 'Visionaries Vault',
    category: 'Website',
    tags: ['Next.js', 'Premium', 'Brand'],
    description: 'Premium self-development platform built around mindset mastery, growth systems, and legacy leadership.',
    link: 'https://visionariesvault.vercel.app/',
    image: '/projects/web.png',
    color: 'from-brand-500 to-accent-sky',
  },
  {
    title: 'TerraNova Realty',
    category: 'Real Estate',
    tags: ['Next.js', 'Listings', 'Search'],
    description: "Luxury real estate marketplace for Accra — 1,240+ listings, mortgage calculator, and agent directory.",
    link: 'https://realestate-weld-eta.vercel.app/',
    image: '/projects/realestate.png',
    color: 'from-brand-600 to-navy',
  },
  {
    title: 'Ernest Wood Bot',
    category: 'Automation',
    tags: ['Telegram', 'Python', 'Payments'],
    description: 'VIP Telegram bot with subscription plans, live status checks, and FAQ/support automation.',
    link: 'https://t.me/ernestwood_bot',
    image: '/projects/bot.png',
    color: 'from-accent-cyan to-brand-600',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Akosua Mensah',
    role: 'Founder, Bloom Boutique',
    quote:
      'Our new store looks premium and loads instantly. Sales are up and customers actually compliment the checkout now.',
  },
  {
    name: 'Mr. Owusu',
    role: 'Headmaster, Sunrise Academy',
    quote:
      'The school system saved our staff hours every week. Fees, results, and attendance — all in one place.',
  },
  {
    name: 'Daniel K.',
    role: 'Operations, GoMove',
    quote:
      'Professional from day one. The team delivered both apps on time and the live tracking just works.',
  },
]

export const STATS = [
  { value: '3',   label: 'Pillars We Serve' },
  { value: '10+', label: 'Products Delivered' },
  { value: '10',  label: 'Happy Clients' },
  { value: '24/7', label: 'AI Systems Live' },
]

export const PROCESS = [
  { step: '01', title: 'Discover', desc: 'We learn the problem, the people, and what "impact" actually means for you.' },
  { step: '02', title: 'Design', desc: 'Clean, conversion-focused UI/UX for every screen, sized to the audience.' },
  { step: '03', title: 'Build', desc: 'Modern, scalable engineering — with AI wired in where it earns its keep.' },
  { step: '04', title: 'Launch & grow', desc: 'Ship, measure, and iterate — with real support after go-live.' },
]
