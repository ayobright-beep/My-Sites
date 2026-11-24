export type WorkCategory = 'All' | 'Storytelling' | 'Culture & Tech' | 'Talent' | 'Consultancy';

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
