export type WorkCategory = 'All' | 'Storytelling' | 'Culture & Tech' | 'Talent' | 'Consultancy';

export type NewsCategory = 'All' | 'Culture & Tech' | 'Storytelling' | 'Talent' | 'Consultancy';

export type InquiryTopic =
  | 'Redefining Storytelling'
  | 'Amplifying African Culture'
  | 'Shaping Cultural Futures'
  | 'Talent Management & Development'
  | 'Strategic Consultancy';

export interface ProofMetric {
  id: string;
  value: string;
  label: string;
  context: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: Exclude<NewsCategory, 'All'>;
  date: string;
  readTime: string;
  location: string;
  author: string;
  authorRole: string;
  excerpt: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  relatedTopic: InquiryTopic;
}

export interface MissionPillar {
  id: string;
  index: string;
  title: string;
  inquiryTopic: InquiryTopic;
  summary: string;
  detail: string;
  deliverables: string[];
  featuredOutcome: string;
  colSpan: 'wide' | 'standard';
}

export interface CaseStudy {
  id: string;
  title: string;
  category: Exclude<WorkCategory, 'All'>;
  inquiryTopic: InquiryTopic;
  location: string;
  year: string;
  format: string;
  image: string;
  imageAlt: string;
  headlineMetric: string;
  summary: string;
  challenge: string;
  approach: string;
  techCultureBridge: string;
  outcomes: string[];
  client: string;
}

export interface TalentProfile {
  id: string;
  name: string;
  discipline: string;
  baseCity: string;
  availability: string;
  bio: string;
  recentCredits: string[];
  focusAreas: string[];
}

export interface ConsultancyModel {
  id: string;
  index: string;
  title: string;
  timeline: string;
  description: string;
  deliverable: string;
}

export const COMPASS_LOGO = {
  src: '/assets/aistudio/The_Compass_design_96eb0232.png',
  alt: 'The Compass emblem',
};

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_lagos_studio_1795476266782.jpg',
  alt: 'Production crew and colorists inside The Compass creative media studio in Lagos with a cinema camera on dolly tracks during golden hour',
  caption: 'The Compass Production Studio · Victoria Island, Lagos',
};

export const TALENT_FEATURE_IMAGE = {
  src: '/src/assets/images/talent_director_portrait_1795476273337.jpg',
  alt: 'Editorial portrait of a West African creative director standing in a dark basalt gallery lit by warm golden side light',
  caption: 'Representing directors, composers, and creative technologists across Africa and the diaspora',
};

export const PROOF_METRICS: ProofMetric[] = [
  {
    id: 'productions',
    value: '42+',
    label: 'Original Productions',
    context: 'Films, spatial exhibitions & digital stories (2021–2026)',
  },
  {
    id: 'roster',
    value: '18',
    label: 'Represented Creators',
    context: 'Directors, musicians & creative technologists under management',
  },
  {
    id: 'reach',
    value: '64M+',
    label: 'Organic Global Views',
    context: 'Cross-platform reach across 14 African & diaspora markets',
  },
  {
    id: 'advisory',
    value: '30+',
    label: 'Consultancy Mandates',
    context: 'Cultural strategy & market-entry engagements delivered',
  },
];

export const MISSION_PILLARS: MissionPillar[] = [
  {
    id: 'redefining-storytelling',
    index: '01.',
    title: 'Redefining Storytelling',
    inquiryTopic: 'Redefining Storytelling',
    summary:
      'We build cinema-grade documentaries, spatial audio narratives, and interactive web films engineered for how modern audiences watch, listen, and participate.',
    detail:
      'Traditional broadcast pipelines flatten nuance. Our production unit pairs anamorphic cinematography and sound design with interactive web canvases and real-time broadcast tooling so African stories land with formal rigor.',
    deliverables: [
      'Original documentary films & episodic series',
      'Spatial audio & interactive web documentaries',
      'Live hybrid broadcast & festival stage visuals',
    ],
    featuredOutcome: '14.2M organic streams on Lagos Soundscapes in 4 months',
    colSpan: 'wide',
  },
  {
    id: 'amplifying-african-culture',
    index: '02.',
    title: 'Amplifying African Culture',
    inquiryTopic: 'Amplifying African Culture',
    summary:
      'We produce cultural platforms, sound archives, and cross-border editorial campaigns that travel globally while keeping creative ownership in Africa.',
    detail:
      'From Lagos to Accra, Johannesburg, and London, we turn local scenes into lasting cultural records—combining editorial programming, touring exhibitions, and direct-to-audience distribution.',
    deliverables: [
      'Cultural festivals, exhibitions & listening spaces',
      'Pan-African editorial & archival publishing',
      'Global syndication & rights-first distribution',
    ],
    featuredOutcome: '28,000+ physical exhibition attendees across 3 cities',
    colSpan: 'standard',
  },
  {
    id: 'shaping-future-culture',
    index: '03.',
    title: 'Shaping the Future of African Culture',
    inquiryTopic: 'Shaping Cultural Futures',
    summary:
      'Our creative technology lab experiments with real-time visuals, projection architecture, and new IP formats built specifically for West African creative economies.',
    detail:
      'We bridge engineering and artistic direction—developing reusable digital stages, augmented architectural installations, and creator-owned digital ecosystems that define the next decade of cultural production.',
    deliverables: [
      'Projection mapping & interactive spatial installations',
      'AR cultural archives & companion mobile experiences',
      'Digital IP incubation & creative R&D labs',
    ],
    featuredOutcome: '92,000 interactive AR sessions during Eko Digital Pavilion',
    colSpan: 'standard',
  },
  {
    id: 'talent-management',
    index: '04.',
    title: 'Talent Management & Development',
    inquiryTopic: 'Talent Management & Development',
    summary:
      'Full-lifecycle representation, career architecture, global licensing, and studio development for African filmmakers, artists, and interdisciplinary creators.',
    detail:
      'Talent needs more than booking agents. We build multi-year creative roadmaps—securing international sync placements, negotiating fair IP splits, directing visual eras, and funding early experimental work.',
    deliverables: [
      '360° artist, director & creator representation',
      'International touring, sync licensing & IP administration',
      'Creative direction, studio mentorship & production funding',
    ],
    featuredOutcome: '3.4x average catalog revenue growth across managed roster in 18 months',
    colSpan: 'wide',
  },
  {
    id: 'consultancy',
    index: '05.',
    title: 'Strategic Consultancy',
    inquiryTopic: 'Strategic Consultancy',
    summary:
      'Cultural intelligence, audience research, and technology-led campaign architecture for regional institutions and global brands entering West Africa.',
    detail:
      'We advise leadership teams on how youth culture, media consumption, and digital infrastructure actually operate on the ground—replacing generic global templates with culturally fluent strategy.',
    deliverables: [
      'West African cultural intelligence & ethnographic audits',
      'Brand positioning & market-entry media architecture',
      'Creative partnership design & campaign governance',
    ],
    featuredOutcome: '+38% unaided brand recall across 4 regional product launches',
    colSpan: 'wide',
  },
];

export const WORK_CATEGORIES: WorkCategory[] = [
  'All',
  'Storytelling',
  'Culture & Tech',
  'Talent',
  'Consultancy',
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lagos-soundscapes',
    title: 'Lagos Soundscapes: 24 Hours in Motion',
    category: 'Storytelling',
    inquiryTopic: 'Redefining Storytelling',
    location: 'Lagos, Nigeria',
    year: '2025',
    format: 'Spatial Audio Documentary & Interactive Web',
    image: '/src/assets/images/work_lagos_soundscapes_1795476274863.jpg',
    imageAlt: 'Audio engineer mixing talking drums and analog synthesizers in a warm amber-lit Lagos sound studio',
    headlineMetric: '14.2M Streams & 28,000 Exhibition Visitors in 4 Months',
    summary:
      'A feature-length spatial audio documentary and browser-based sonic map tracing the percussionists, sound engineers, and nocturnal composers shaping contemporary Lagos.',
    challenge:
      'Global coverage of Nigerian music routinely focuses on chart headlines while overlooking the studio craft, talking drum lineages, and acoustic engineering happening behind closed doors.',
    approach:
      'Our film and audio crews recorded 19 studios across Surulere, Ikeja, and Victoria Island over 30 days, pairing cinema portraits with a synchronized binaural listening interface.',
    techCultureBridge:
      'Custom WebAudio spatial stems let listeners isolate percussion, brass, and room ambience in real time, turning documentary viewing into active sonic exploration.',
    outcomes: [
      '14.2M organic streams across web, YouTube, and partner broadcasters in 4 months',
      '28,000 visitors across touring listening exhibitions in Lagos, Accra, and London',
      'Licensed for educational archiving by 3 international music conservatories',
    ],
    client: 'The Compass Originals × Atlantic Sound Archive',
  },
  {
    id: 'eko-digital-pavilion',
    title: 'Eko Digital Pavilion',
    category: 'Culture & Tech',
    inquiryTopic: 'Shaping Cultural Futures',
    location: 'Victoria Island, Lagos',
    year: '2025',
    format: 'Projection Architecture & Live AR Archive',
    image: '/src/assets/images/work_digital_pavilion_1795476310410.jpg',
    imageAlt: 'Brutalist concrete pavilion in Lagos illuminated at dusk with geometric golden woven light projections and visitors walking beneath arches',
    headlineMetric: '92,000 Interactive AR Sessions Across 6 Festival Days',
    summary:
      'An open-air architectural light pavilion translating heritage West African weaving geometries into responsive real-time projection mapping and mobile augmented reality.',
    challenge:
      'Lagos Art & Tech Week sought a flagship public commission that felt unmistakably rooted in Nigerian visual heritage rather than imported generic light-show aesthetics.',
    approach:
      'We collaborated with textile historians and real-time shader engineers to turn Adire and Aso-Oke structural patterns into sound-reactive light choreography across 14-meter concrete arches.',
    techCultureBridge:
      'Low-bandwidth WebAR markers enabled attendees on everyday smartphones to unlock artist audio notes and weave patterns without downloading an app.',
    outcomes: [
      '92,000 completed mobile AR archive sessions across 6 evenings',
      'Average visitor dwell time of 41 minutes—nearly double prior festival benchmarks',
      'Featured in 16 international architecture and design publications',
    ],
    client: 'Lagos Art & Tech Week Commission',
  },
  {
    id: 'new-wave-cinema-slate',
    title: 'New Wave Directors Slate & Visual Touring',
    category: 'Talent',
    inquiryTopic: 'Talent Management & Development',
    location: 'Lagos · London · Berlin',
    year: '2026',
    format: 'Talent Architecture, Film Production & Licensing',
    image: '/src/assets/images/work_african_cinema_1795476268992.jpg',
    imageAlt: 'Nigerian film director looking through an anamorphic cinema camera rig on a Lagos rooftop overlooking the dusk skyline',
    headlineMetric: '3.4x Catalog Revenue Growth & 11-City Screening Tour',
    summary:
      'End-to-end representation, visual direction, and international licensing program launching four emerging Nigerian directors and composers onto global festival and commercial rosters.',
    challenge:
      'Independent Nigerian directors and sonic artists frequently face predatory buyout contracts and fragmented international representation when crossing into global commercial markets.',
    approach:
      'The Compass structured a unified management, rights-retention, and co-production framework—funding three short-film calling cards and coordinating European festival premieres.',
    techCultureBridge:
      'Built a private digital screening room and rights-clearance portal that reduced international agency licensing turnaround from six weeks to five business days.',
    outcomes: [
      '3.4x increase in international licensing and commercial directing fees over 18 months',
      '11-city sold-out screening and live-score tour across West Africa and Europe',
      '100% master and publishing ownership retained by the represented creators',
    ],
    client: 'The Compass Talent Roster',
  },
  {
    id: 'west-africa-youth-index',
    title: 'West Africa Youth Culture Index 2026',
    category: 'Consultancy',
    inquiryTopic: 'Strategic Consultancy',
    location: 'Lagos · Abuja · Accra',
    year: '2026',
    format: 'Cultural Intelligence & Market-Entry Advisory',
    image: '/src/assets/images/work_cultural_consultancy_1795476280100.jpg',
    imageAlt: 'Architectural black stone studio table in Lagos holding contemporary African art books, indigo textile swatches, and strategy diagrams on a tablet',
    headlineMetric: '+38% Brand Recall Across 4 Regional Product Launches',
    summary:
      'An ethnographic study and go-to-market cultural playbook guiding a pan-African fintech and telecom consortium through product naming, creator partnerships, and youth media launches.',
    challenge:
      'Despite heavy digital ad spend, regional product campaigns struggled with low organic trust among 18–30 urban audiences in Lagos, Port Harcourt, and Accra.',
    approach:
      'Our consultancy team conducted 140 field interviews with studio owners, campus collectives, and digital creators, mapping how trust actually circulates through peer-led culture.',
    techCultureBridge:
      'Delivered an interactive cultural cadence dashboard paired with creator co-ownership playbooks, replacing one-off influencer posts with durable community sponsorships.',
    outcomes: [
      '+38% unaided brand recall measured across 4 regional product launches in 6 months',
      '46% lower customer acquisition cost compared to prior traditional media flights',
      'Adopted as the standing West African creative governance framework for 2026–2027',
    ],
    client: 'KoraPan Financial & Telecom Consortium',
  },
];

export const TALENT_ROSTER: TalentProfile[] = [
  {
    id: 'tunde-balogun',
    name: 'Tunde Balogun',
    discipline: 'Film Director & Cinematographer',
    baseCity: 'Lagos / London',
    availability: 'Open for Q2 2026 Commercial & Documentary Commissions',
    bio: 'Architectural documentary filmmaker known for tactile dusk cinematography and intimate portraits of urban West African life. Directed three official selection shorts across Berlin, Toronto, and Lagos.',
    recentCredits: [
      'Director — "Third Mainland Nocturne" (Short Documentary, 2025)',
      'Lead Cinematographer — "Lagos Soundscapes" (2025)',
      'Commercial Campaign — Meridian Mobile Pan-Africa Launch',
    ],
    focusAreas: ['Documentary Cinema', 'Commercial Direction', 'Visual Essays'],
  },
  {
    id: 'amara-okonkwo',
    name: 'Amara Okonkwo',
    discipline: 'Sonic Architect & Composer',
    baseCity: 'Lagos',
    availability: 'Booking Film Scoring & Spatial Audio Residencies',
    bio: 'Blends Igbo percussive polyrhythms with modular synthesis and orchestral strings for film, museum installations, and live spatial performances.',
    recentCredits: [
      'Original Score — "Eko Digital Pavilion" Soundscape (2025)',
      'Executive Producer — "Lagos Soundscapes" Spatial Mix',
      'Live Spatial Set — Tate Modern Late Series, London',
    ],
    focusAreas: ['Film Scoring', 'Spatial Audio', 'Live Performance'],
  },
  {
    id: 'kofi-mensah-adeyemi',
    name: 'Seyi Adeyemi',
    discipline: 'Creative Technologist & Spatial Designer',
    baseCity: 'Lagos / Accra',
    availability: 'Accepting Institutional & Brand Installation Briefs',
    bio: 'Builds real-time generative visual systems, WebGL interactive archives, and projection-mapped stage environments rooted in West African geometric systems.',
    recentCredits: [
      'Technical Director — "Eko Digital Pavilion" (2025)',
      'Stage Visuals — Alté Live European Tour (11 Cities)',
      'Interactive Archive — Nigerian Modernist Architecture Digital Index',
    ],
    focusAreas: ['Real-Time Visuals', 'Projection Mapping', 'Interactive Web'],
  },
  {
    id: 'zainab-ibrahim',
    name: 'Zainab Ibrahim',
    discipline: 'Cultural Producer & Creative Director',
    baseCity: 'Abuja / Lagos',
    availability: 'Available for Editorial Campaigns & Exhibition Curation',
    bio: 'Curates multidisciplinary exhibitions, print monographs, and fashion-meets-film campaigns spotlighting northern and southern Nigerian craft lineages.',
    recentCredits: [
      'Lead Curator — "Indigo & Concrete" Monograph Exhibition (2026)',
      'Creative Director — West Africa Youth Culture Index Visual Identity',
      'Executive Producer — Northern Craft Documentary Anthology',
    ],
    focusAreas: ['Exhibition Curation', 'Campaign Direction', 'Editorial Print'],
  },
];

export const CONSULTANCY_MODELS: ConsultancyModel[] = [
  {
    id: 'cultural-intelligence',
    index: '01.',
    title: 'Cultural Intelligence & Audience Research',
    timeline: '4–6 Week Sprint',
    description:
      'Field-backed insight into Nigerian and West African youth movements, media habits, language shifts, and emerging creator ecosystems.',
    deliverable: 'Executive research dossier, cultural calendar & strategy workshop',
  },
  {
    id: 'brand-architecture',
    index: '02.',
    title: 'Brand Narrative & Technology Strategy',
    timeline: '6–10 Week Engagement',
    description:
      'End-to-end positioning, storytelling architecture, and interactive digital touchpoints designed for regional credibility and global resonance.',
    deliverable: 'Narrative platform, campaign blueprint & creative technology roadmap',
  },
  {
    id: 'production-co-dev',
    index: '03.',
    title: 'IP Co-Development & Creator Partnerships',
    timeline: 'Quarterly / Annual Retainer',
    description:
      'Structuring ethical, high-impact partnerships between global brands, institutional funders, and Africa’s leading filmmakers and musicians.',
    deliverable: 'Partner curation, rights governance & turnkey production oversight',
  },
];

export const CLIENT_TESTIMONIAL = {
  quote:
    'Before working with The Compass, our West African launches relied on adapted European campaign decks that missed the cultural pulse in Lagos and Accra. Their research and production teams rebuilt our narrative from the ground up—delivering a 38% lift in unaided brand recall within six months.',
  author: 'Chidinma Nwosu',
  role: 'VP of Brand & Regional Growth',
  organization: 'KoraPan Financial Group',
};

export const INQUIRY_TOPICS: InquiryTopic[] = [
  'Redefining Storytelling',
  'Amplifying African Culture',
  'Shaping Cultural Futures',
  'Talent Management & Development',
  'Strategic Consultancy',
];

export const BUDGET_RANGES = [
  'Under $25,000 (Advisory / Sprint)',
  '$25,000 – $75,000 (Production / Campaign)',
  '$75,000 – $200,000 (Flagship Experience / Retainer)',
  '$200,000+ (Multi-Market / Original IP)',
];

export const NEWS_CATEGORIES: NewsCategory[] = [
  'All',
  'Culture & Tech',
  'Storytelling',
  'Talent',
  'Consultancy',
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'eko-spatial-sound-lab-2026',
    title: 'The Compass Opens Spatial Sound & Real-Time Visuals Lab in Victoria Island',
    category: 'Culture & Tech',
    date: 'November 18, 2026',
    readTime: '4 min read',
    location: 'Lagos',
    author: 'Damilola Fashola',
    authorRole: 'Managing Editor, The Compass',
    featured: true,
    image: '/src/assets/images/work_digital_pavilion_1795476310410.jpg',
    imageAlt: 'Illuminated brutalist architectural pavilion in Lagos showcasing golden woven light projections at dusk',
    excerpt:
      'Our new Victoria Island R&D facility pairs Dolby-calibrated spatial mixing with real-time projection rigs—giving Nigerian filmmakers, musicians, and creative technologists shared access to next-generation production infrastructure.',
    body: [
      'After eighteen months of architectural prototyping and acoustic engineering, The Compass has officially commissioned its Spatial Sound & Real-Time Visuals Lab in Victoria Island, Lagos. Built to serve both our internal originals unit and independent West African creators, the facility brings cinema-grade spatial mixing and real-time GPU stage visualization under one roof.',
      'Historically, Nigerian directors and touring musicians seeking spatial audio mastering or interactive stage engineering had to ship masters and technical riders to studios in London or Los Angeles—introducing steep currency costs and separating technical craft from its cultural source. The new lab closes that gap directly in Lagos.',
      'Starting in Q1 2027, the lab will host quarterly six-week residencies pairing two creative technologists with two filmmakers or composers to prototype interactive documentaries, projection-mapped performances, and low-bandwidth WebAR cultural archives built for mobile-first African audiences.',
    ],
    relatedTopic: 'Shaping Cultural Futures',
  },
  {
    id: 'african-cinema-new-grammar',
    title: 'Why West African Documentary Cinema Is Adopting Interactive Web Chapters',
    category: 'Storytelling',
    date: 'November 9, 2026',
    readTime: '5 min read',
    location: 'Lagos · Accra',
    author: 'Tunde Balogun',
    authorRole: 'Represented Director',
    image: '/src/assets/images/work_african_cinema_1795476268992.jpg',
    imageAlt: 'Nigerian film director framing a dusk shot on an anamorphic cinema camera rig overlooking Lagos',
    excerpt:
      'Following the 14.2M-stream run of Lagos Soundscapes, regional producers are pairing theatrical documentary cuts with browser-native audio stems and archival essays.',
    body: [
      'A quiet structural shift is underway across independent West African documentary studios. Rather than treating a film premiere as the finish line, production teams are designing multi-layered digital companions that allow viewers to explore archival interviews, isolated field recordings, and architectural maps long after festival screenings conclude.',
      'During the rollout of Lagos Soundscapes, nearly 38% of online viewers spent more than eleven minutes interacting with the browser-based percussion stems—far exceeding standard social clip retention. Audiences were not merely watching Lagos; they were studying the sonic craft behind it.',
      'For cultural storytellers, this hybrid format unlocks sustainable direct-to-audience licensing with universities, museums, and international broadcasters while keeping editorial nuance intact.',
    ],
    relatedTopic: 'Redefining Storytelling',
  },
  {
    id: 'rights-first-talent-compact',
    title: 'The Compass Announces 2027 Rights-First Representation Compact for Emerging Directors',
    category: 'Talent',
    date: 'October 28, 2026',
    readTime: '3 min read',
    location: 'Lagos · London',
    author: 'Ngozi Eze',
    authorRole: 'Head of Talent Development',
    excerpt:
      'Four new interdisciplinary creators join our managed slate under a transparent co-development model that guarantees 100% creator master ownership.',
    body: [
      'The Compass Talent Division has expanded its 2027 roster with four new filmmakers, sonic architects, and spatial designers working between Lagos, Abuja, Accra, and London. Each signing is anchored by our Rights-First Representation Compact.',
      'Under the compact, The Compass provides early development capital, international commercial representation, and global sync administration while ensuring creators retain full ownership of their original masters and intellectual property.',
      'Applications for our mid-2027 studio mentorship cohort open this December, with priority given to directors and composers working across documentary film, spatial audio, and interactive media.',
    ],
    relatedTopic: 'Talent Management & Development',
  },
  {
    id: 'youth-culture-index-findings',
    title: 'Inside the 2026 West Africa Youth Culture Index: How Peer Collectives Outperform Legacy Ad Flights',
    category: 'Consultancy',
    date: 'October 14, 2026',
    readTime: '6 min read',
    location: 'Lagos · Abuja · Accra',
    author: 'Chidi Obi',
    authorRole: 'Principal, Cultural Consultancy',
    excerpt:
      'Key takeaways from 140 field interviews across Lagos, Abuja, and Accra revealing why community-backed cultural platforms drive 38% stronger brand recall.',
    body: [
      'Our latest cultural intelligence report surveyed 140 studio founders, campus collectives, radio hosts, and independent designers across three major West African metros. One finding stood above every metric: urban audiences aged 18 to 30 increasingly tune out top-down international campaign templates.',
      'Brands that achieved measurable commercial lift in 2026 invested directly in durable cultural infrastructure—funding listening spaces, archival print editions, and local creator showcases rather than transient billboard blitzes.',
      'Executive briefings for the full 2026 West Africa Youth Culture Index are now open for regional leadership teams and international partners planning 2027 market launches.',
    ],
    relatedTopic: 'Strategic Consultancy',
  },
];

