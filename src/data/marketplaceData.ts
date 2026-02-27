import { UserRole } from '@/context/DemoContext';

export interface MarketplaceCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  verified: boolean;
  about: string;
  regions: string[];
  commodities: string[];
  certifications?: string[];
  website?: string;
  contactEmail?: string;
}

export interface ServiceListing {
  id: string;
  providerId: string;
  title: string;
  category: string; // matches category.name
  summary: string;
  description: string; // rich text (simulated)
  regions: string[];
  commodities: string[];
  image: string;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
  provider?: ServiceProvider; // populated for display
}

export const MARKETPLACE_CATEGORIES: MarketplaceCategory[] = [
  {
    id: 'cat_001',
    slug: 'exploration-geology',
    name: 'Exploration & Geology',
    description: 'Geological surveys, mapping, and exploration services.',
    image: 'https://picsum.photos/seed/exploration/800/600',
  },
  {
    id: 'cat_002',
    slug: 'mine-planning',
    name: 'Mine Planning',
    description: 'Feasibility studies, mine design, and scheduling.',
    image: 'https://picsum.photos/seed/planning/800/600',
  },
  {
    id: 'cat_003',
    slug: 'mine-infrastructure',
    name: 'Mine Infrastructure',
    description: 'Construction, engineering, and infrastructure development.',
    image: 'https://picsum.photos/seed/infrastructure/800/600',
  },
  {
    id: 'cat_004',
    slug: 'drilling-blasting',
    name: 'Drilling & Blasting',
    description: 'Drilling contractors and blasting services.',
    image: 'https://picsum.photos/seed/drilling/800/600',
  },
  {
    id: 'cat_005',
    slug: 'mineral-processing',
    name: 'Mineral Processing',
    description: 'Metallurgy, processing plants, and laboratories.',
    image: 'https://picsum.photos/seed/processing/800/600',
  },
  {
    id: 'cat_006',
    slug: 'mining-technology',
    name: 'Mining Technology',
    description: 'Software, automation, and digital solutions.',
    image: 'https://picsum.photos/seed/technology/800/600',
  },
  {
    id: 'cat_007',
    slug: 'hse-risk-esg',
    name: 'HSE, Risk & ESG',
    description: 'Health, safety, environment, and sustainability consulting.',
    image: 'https://picsum.photos/seed/esg/800/600',
  },
  {
    id: 'cat_008',
    slug: 'corporate-advisory',
    name: 'Corporate & Advisory',
    description: 'Legal, financial, and strategic advisory services.',
    image: 'https://picsum.photos/seed/corporate/800/600',
  },
  {
    id: 'cat_009',
    slug: 'rehabilitation-closure',
    name: 'Rehabilitation & Closure',
    description: 'Mine closure planning and environmental rehabilitation.',
    image: 'https://picsum.photos/seed/rehab/800/600',
  },
];

export const MOCK_PROVIDERS: ServiceProvider[] = [
  {
    id: 'prov_001',
    name: 'GeoTech Solutions',
    tagline: 'Advanced geological consulting for modern mining.',
    logo: 'https://picsum.photos/seed/geotech/200/200',
    verified: true,
    about: 'GeoTech Solutions provides comprehensive geological services including exploration management, resource estimation, and geological modeling. Our team of experienced geologists uses the latest technology to deliver accurate and reliable results.',
    regions: ['Australia', 'Africa', 'South America'],
    commodities: ['Gold', 'Copper', 'Lithium'],
    certifications: ['ISO 9001', 'AusIMM Member'],
    website: 'https://geotech.example.com',
    contactEmail: 'info@geotech.example.com',
  },
  {
    id: 'prov_002',
    name: 'BlastMaster Inc.',
    tagline: 'Precision drilling and blasting services.',
    logo: 'https://picsum.photos/seed/blastmaster/200/200',
    verified: true,
    about: 'BlastMaster Inc. is a leading provider of drilling and blasting services for the mining and construction industries. We specialize in safe, efficient, and cost-effective blasting solutions.',
    regions: ['North America', 'Australia'],
    commodities: ['Iron Ore', 'Coal', 'Gold'],
    certifications: ['SafeWork Certified'],
    website: 'https://blastmaster.example.com',
    contactEmail: 'sales@blastmaster.example.com',
  },
  {
    id: 'prov_003',
    name: 'EcoMine Consultants',
    tagline: 'Sustainable mining solutions for a better future.',
    logo: 'https://picsum.photos/seed/ecomine/200/200',
    verified: false,
    about: 'EcoMine Consultants specializes in environmental impact assessments, rehabilitation planning, and ESG strategy. We help mining companies operate responsibly and sustainably.',
    regions: ['Global'],
    commodities: ['All'],
    certifications: ['Environmental Excellence Award'],
    website: 'https://ecomine.example.com',
    contactEmail: 'contact@ecomine.example.com',
  },
  {
    id: 'prov_004',
    name: 'MinePlan Pro',
    tagline: 'Optimizing mine design and scheduling.',
    logo: 'https://picsum.photos/seed/mineplan/200/200',
    verified: true,
    about: 'MinePlan Pro offers expert mine planning and engineering services. We help you maximize the value of your resource through optimized pit design, scheduling, and equipment selection.',
    regions: ['South America', 'North America'],
    commodities: ['Copper', 'Gold', 'Silver'],
    certifications: ['PE Licensed'],
    website: 'https://mineplan.example.com',
    contactEmail: 'info@mineplan.example.com',
  },
  {
    id: 'prov_005',
    name: 'TechRock Systems',
    tagline: 'Digital transformation for the mining industry.',
    logo: 'https://picsum.photos/seed/techrock/200/200',
    verified: true,
    about: 'TechRock Systems provides cutting-edge software and automation solutions for mining operations. From fleet management to predictive maintenance, we help you unlock the power of data.',
    regions: ['Global'],
    commodities: ['All'],
    certifications: ['ISO 27001'],
    website: 'https://techrock.example.com',
    contactEmail: 'sales@techrock.example.com',
  },
  {
    id: 'prov_006',
    name: 'Global InfraBuild',
    tagline: 'Building the foundation for mining success.',
    logo: 'https://picsum.photos/seed/infrabuild/200/200',
    verified: false,
    about: 'Global InfraBuild specializes in the construction of mine infrastructure, including camps, roads, power plants, and processing facilities. We deliver projects on time and on budget.',
    regions: ['Africa', 'Asia'],
    commodities: ['Bulk', 'Base Metals'],
    certifications: ['Safety First Award'],
    website: 'https://infrabuild.example.com',
    contactEmail: 'projects@infrabuild.example.com',
  },
];

export const MOCK_SERVICES: ServiceListing[] = [
  // Exploration & Geology (Existing + New)
  {
    id: 'srv_001',
    providerId: 'prov_001',
    title: 'Resource Estimation & Modeling',
    category: 'Exploration & Geology',
    summary: 'JORC compliant resource estimation and 3D geological modeling.',
    description: 'Our resource estimation services are conducted by Competent Persons in accordance with the JORC Code. We use advanced geostatistical methods and 3D modeling software to provide accurate and reliable resource estimates.',
    regions: ['Australia', 'Africa'],
    commodities: ['Gold', 'Copper', 'Nickel'],
    image: 'https://picsum.photos/seed/resource/800/600',
    status: 'published',
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-06-20'),
  },
  {
    id: 'srv_002',
    providerId: 'prov_001',
    title: 'Exploration Project Management',
    category: 'Exploration & Geology',
    summary: 'End-to-end management of exploration programs from grassroots to feasibility.',
    description: 'We manage all aspects of exploration programs, including tenement management, drilling supervision, sampling, and data management. Our experienced team ensures that your exploration budget is spent effectively.',
    regions: ['Australia'],
    commodities: ['Gold', 'Lithium'],
    image: 'https://picsum.photos/seed/exploration-mgmt/800/600',
    status: 'published',
    createdAt: new Date('2023-02-10'),
    updatedAt: new Date('2023-02-10'),
  },
  {
    id: 'srv_006',
    providerId: 'prov_001',
    title: 'Geophysical Survey Interpretation',
    category: 'Exploration & Geology',
    summary: 'Expert interpretation of airborne and ground geophysical data.',
    description: 'Unlock the potential of your geophysical data with our expert interpretation services. We integrate geophysics with geology to identify high-priority drill targets.',
    regions: ['South America', 'Africa'],
    commodities: ['Base Metals', 'Uranium'],
    image: 'https://picsum.photos/seed/geophysics/800/600',
    status: 'published',
    createdAt: new Date('2023-03-15'),
    updatedAt: new Date('2023-03-15'),
  },

  // Mine Planning
  {
    id: 'srv_007',
    providerId: 'prov_004',
    title: 'Open Pit Optimization & Design',
    category: 'Mine Planning',
    summary: 'Strategic pit optimization and detailed mine design.',
    description: 'We use Whittle and other industry-standard software to determine the optimal pit shell and develop practical mine designs that maximize NPV.',
    regions: ['South America', 'North America'],
    commodities: ['Copper', 'Gold'],
    image: 'https://picsum.photos/seed/pit-design/800/600',
    status: 'published',
    createdAt: new Date('2023-04-01'),
    updatedAt: new Date('2023-04-01'),
  },
  {
    id: 'srv_008',
    providerId: 'prov_004',
    title: 'Life of Mine Scheduling',
    category: 'Mine Planning',
    summary: 'Long-term production scheduling and strategic planning.',
    description: 'Develop robust life-of-mine schedules that balance production targets with operational constraints. We provide multiple scenarios to help you make informed strategic decisions.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/scheduling/800/600',
    status: 'published',
    createdAt: new Date('2023-04-20'),
    updatedAt: new Date('2023-04-20'),
  },
  {
    id: 'srv_009',
    providerId: 'prov_001',
    title: 'Feasibility Study Management',
    category: 'Mine Planning',
    summary: 'Coordination and management of PFS and DFS studies.',
    description: 'We lead and coordinate multi-disciplinary teams to deliver high-quality Pre-Feasibility and Definitive Feasibility Studies that meet international banking standards.',
    regions: ['Africa', 'Australia'],
    commodities: ['Gold', 'Lithium'],
    image: 'https://picsum.photos/seed/feasibility/800/600',
    status: 'published',
    createdAt: new Date('2023-05-05'),
    updatedAt: new Date('2023-05-05'),
  },

  // Mine Infrastructure
  {
    id: 'srv_010',
    providerId: 'prov_006',
    title: 'Remote Camp Construction',
    category: 'Mine Infrastructure',
    summary: 'Turnkey accommodation and camp facilities for remote sites.',
    description: 'We design and build comfortable, durable, and energy-efficient camps for remote mining operations. Our solutions include accommodation units, mess halls, and recreation facilities.',
    regions: ['Africa', 'Asia'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/camp/800/600',
    status: 'published',
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2023-06-01'),
  },
  {
    id: 'srv_011',
    providerId: 'prov_006',
    title: 'Haul Road Engineering',
    category: 'Mine Infrastructure',
    summary: 'Design and construction of heavy-duty haul roads.',
    description: 'Optimize your fleet performance with well-designed haul roads. We provide engineering design, construction supervision, and maintenance planning for mine access and haul roads.',
    regions: ['Global'],
    commodities: ['Bulk', 'Base Metals'],
    image: 'https://picsum.photos/seed/roads/800/600',
    status: 'published',
    createdAt: new Date('2023-06-15'),
    updatedAt: new Date('2023-06-15'),
  },
  {
    id: 'srv_012',
    providerId: 'prov_002',
    title: 'Site Civil Works',
    category: 'Mine Infrastructure',
    summary: 'Earthworks, drainage, and civil foundations.',
    description: 'Comprehensive civil works services for mine sites, including bulk earthworks, drainage systems, and concrete foundations for processing plants.',
    regions: ['Australia'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/civil/800/600',
    status: 'published',
    createdAt: new Date('2023-07-01'),
    updatedAt: new Date('2023-07-01'),
  },

  // Drilling & Blasting (Existing + New)
  {
    id: 'srv_003',
    providerId: 'prov_002',
    title: 'Production Drilling Services',
    category: 'Drilling & Blasting',
    summary: 'High-capacity production drilling for open pit operations.',
    description: 'Our fleet of modern drill rigs is capable of handling large-scale production drilling requirements. We focus on safety, accuracy, and productivity to ensure your mining operations run smoothly.',
    regions: ['North America'],
    commodities: ['Iron Ore', 'Copper'],
    image: 'https://picsum.photos/seed/drilling-srv/800/600',
    status: 'published',
    createdAt: new Date('2023-03-05'),
    updatedAt: new Date('2023-07-01'),
  },
  {
    id: 'srv_013',
    providerId: 'prov_002',
    title: 'Explosives Supply & Management',
    category: 'Drilling & Blasting',
    summary: 'Reliable supply and on-site management of explosives.',
    description: 'We provide a secure and reliable supply of bulk and packaged explosives. Our on-site management services ensure safe storage, handling, and loading.',
    regions: ['Australia', 'North America'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/explosives/800/600',
    status: 'published',
    createdAt: new Date('2023-07-10'),
    updatedAt: new Date('2023-07-10'),
  },
  {
    id: 'srv_014',
    providerId: 'prov_002',
    title: 'Blast Optimization Consulting',
    category: 'Drilling & Blasting',
    summary: 'Technical consulting to improve fragmentation and reduce costs.',
    description: 'Our blast engineers analyze your current practices and implement changes to improve fragmentation, reduce vibration, and lower overall drill and blast costs.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/blast-opt/800/600',
    status: 'published',
    createdAt: new Date('2023-07-20'),
    updatedAt: new Date('2023-07-20'),
  },

  // Mineral Processing
  {
    id: 'srv_015',
    providerId: 'prov_001',
    title: 'Metallurgical Testwork Management',
    category: 'Mineral Processing',
    summary: 'Design and supervision of metallurgical testwork programs.',
    description: 'We design and manage metallurgical testwork programs to characterize ore properties and define process flowsheets. We work with leading laboratories to ensure high-quality results.',
    regions: ['Global'],
    commodities: ['Gold', 'Copper', 'Lithium'],
    image: 'https://picsum.photos/seed/metallurgy/800/600',
    status: 'published',
    createdAt: new Date('2023-08-01'),
    updatedAt: new Date('2023-08-01'),
  },
  {
    id: 'srv_016',
    providerId: 'prov_006',
    title: 'Process Plant Construction',
    category: 'Mineral Processing',
    summary: 'EPC services for mineral processing plants.',
    description: 'We offer Engineering, Procurement, and Construction (EPC) services for mineral processing plants. Our experience covers crushing, grinding, flotation, and leaching circuits.',
    regions: ['Africa', 'Asia'],
    commodities: ['Base Metals', 'Precious Metals'],
    image: 'https://picsum.photos/seed/plant-const/800/600',
    status: 'published',
    createdAt: new Date('2023-08-15'),
    updatedAt: new Date('2023-08-15'),
  },
  {
    id: 'srv_017',
    providerId: 'prov_005',
    title: 'Plant Control System Optimization',
    category: 'Mineral Processing',
    summary: 'Advanced control strategies to maximize recovery and throughput.',
    description: 'Implement advanced process control (APC) systems to stabilize your plant and optimize performance. We help you achieve higher recovery rates and increased throughput.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/plant-control/800/600',
    status: 'published',
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2023-09-01'),
  },

  // Mining Technology
  {
    id: 'srv_018',
    providerId: 'prov_005',
    title: 'Fleet Management Systems',
    category: 'Mining Technology',
    summary: 'Real-time tracking and optimization of mining fleets.',
    description: 'Our fleet management system provides real-time visibility into your mining operations. Track equipment location, status, and performance to optimize cycle times and productivity.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/fleet-mgmt/800/600',
    status: 'published',
    createdAt: new Date('2023-09-10'),
    updatedAt: new Date('2023-09-10'),
  },
  {
    id: 'srv_019',
    providerId: 'prov_005',
    title: 'Predictive Maintenance Solutions',
    category: 'Mining Technology',
    summary: 'AI-driven predictive maintenance for critical assets.',
    description: 'Reduce downtime and maintenance costs with our predictive maintenance platform. We use machine learning to analyze sensor data and predict equipment failures before they occur.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/predictive-maint/800/600',
    status: 'published',
    createdAt: new Date('2023-09-20'),
    updatedAt: new Date('2023-09-20'),
  },
  {
    id: 'srv_020',
    providerId: 'prov_005',
    title: 'Digital Twin Implementation',
    category: 'Mining Technology',
    summary: 'Create a digital replica of your mine for simulation and planning.',
    description: 'We build high-fidelity digital twins of your mining operations. Use the digital twin to simulate scenarios, test changes, and train operators in a risk-free environment.',
    regions: ['North America', 'Australia'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/digital-twin/800/600',
    status: 'published',
    createdAt: new Date('2023-10-01'),
    updatedAt: new Date('2023-10-01'),
  },

  // HSE, Risk & ESG (Existing + New)
  {
    id: 'srv_005',
    providerId: 'prov_003',
    title: 'ESG Strategy Development',
    category: 'HSE, Risk & ESG',
    summary: 'Strategic ESG consulting for mining companies.',
    description: 'We help mining companies develop and implement robust ESG strategies. Our services include materiality assessments, sustainability reporting, and stakeholder engagement.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/esg-strat/800/600',
    status: 'published',
    createdAt: new Date('2023-05-20'),
    updatedAt: new Date('2023-08-15'),
  },
  {
    id: 'srv_021',
    providerId: 'prov_003',
    title: 'Environmental Impact Assessments',
    category: 'HSE, Risk & ESG',
    summary: 'Comprehensive EIA services for permitting and compliance.',
    description: 'Our team of environmental scientists conducts rigorous impact assessments to support your project approvals. We cover baseline studies, impact modeling, and management planning.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/eia/800/600',
    status: 'published',
    createdAt: new Date('2023-10-10'),
    updatedAt: new Date('2023-10-10'),
  },
  {
    id: 'srv_022',
    providerId: 'prov_003',
    title: 'Safety Management Systems',
    category: 'HSE, Risk & ESG',
    summary: 'Development and auditing of safety management systems.',
    description: 'Ensure the safety of your workforce with a robust safety management system. We assist with system development, implementation, and auditing against international standards.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/safety/800/600',
    status: 'published',
    createdAt: new Date('2023-10-20'),
    updatedAt: new Date('2023-10-20'),
  },

  // Corporate & Advisory
  {
    id: 'srv_023',
    providerId: 'prov_001',
    title: 'Technical Due Diligence',
    category: 'Corporate & Advisory',
    summary: 'Independent technical reviews for M&A and financing.',
    description: 'We provide independent technical due diligence services for investors and lenders. Our reviews cover geology, mining, processing, and infrastructure to identify risks and opportunities.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/due-diligence/800/600',
    status: 'published',
    createdAt: new Date('2023-11-01'),
    updatedAt: new Date('2023-11-01'),
  },
  {
    id: 'srv_024',
    providerId: 'prov_004',
    title: 'Project Valuation',
    category: 'Corporate & Advisory',
    summary: 'Economic valuation of mining projects and assets.',
    description: 'Our valuation experts provide defensible valuations for mining projects at all stages of development. We use discounted cash flow (DCF) and market comparable methods.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/valuation/800/600',
    status: 'published',
    createdAt: new Date('2023-11-15'),
    updatedAt: new Date('2023-11-15'),
  },
  {
    id: 'srv_025',
    providerId: 'prov_003',
    title: 'Social License to Operate',
    category: 'Corporate & Advisory',
    summary: 'Community engagement and social risk management.',
    description: 'Secure your social license to operate with our community engagement services. We help you build trust and shared value with local communities and stakeholders.',
    regions: ['Africa', 'South America'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/social/800/600',
    status: 'published',
    createdAt: new Date('2023-11-20'),
    updatedAt: new Date('2023-11-20'),
  },

  // Rehabilitation & Closure (Existing + New)
  {
    id: 'srv_004',
    providerId: 'prov_003',
    title: 'Mine Closure Planning',
    category: 'Rehabilitation & Closure',
    summary: 'Comprehensive mine closure plans and cost estimation.',
    description: 'We develop detailed mine closure plans that meet regulatory requirements and stakeholder expectations. Our services include cost estimation, risk assessment, and post-closure monitoring planning.',
    regions: ['Global'],
    commodities: ['All'],
    image: 'https://picsum.photos/seed/closure/800/600',
    status: 'published',
    createdAt: new Date('2023-04-12'),
    updatedAt: new Date('2023-04-12'),
  },
  {
    id: 'srv_026',
    providerId: 'prov_003',
    title: 'Landform Design & Rehabilitation',
    category: 'Rehabilitation & Closure',
    summary: 'Geomorphic landform design for sustainable rehabilitation.',
    description: 'We design stable, natural-looking landforms that resist erosion and support revegetation. Our approach integrates engineering and ecology to create sustainable post-mining landscapes.',
    regions: ['Australia', 'North America'],
    commodities: ['Coal', 'Iron Ore'],
    image: 'https://picsum.photos/seed/landform/800/600',
    status: 'published',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2023-12-01'),
  },
  {
    id: 'srv_027',
    providerId: 'prov_003',
    title: 'Water Management for Closure',
    category: 'Rehabilitation & Closure',
    summary: 'Long-term water management strategies for closed mines.',
    description: 'Develop effective strategies to manage water quality and quantity after mine closure. We address issues such as acid mine drainage (AMD) and pit lake chemistry.',
    regions: ['Global'],
    commodities: ['Base Metals', 'Gold'],
    image: 'https://picsum.photos/seed/water-closure/800/600',
    status: 'published',
    createdAt: new Date('2023-12-10'),
    updatedAt: new Date('2023-12-10'),
  },
];

// Helper to hydrate services with provider data
export const getHydratedServices = () => {
  return MOCK_SERVICES.map(service => {
    const provider = MOCK_PROVIDERS.find(p => p.id === service.providerId);
    return { ...service, provider };
  });
};

export const getServicesByCategory = (slug: string) => {
  const category = MARKETPLACE_CATEGORIES.find(c => c.slug === slug);
  if (!category) return [];
  return getHydratedServices().filter(s => s.category === category.name);
};

export const getProviderById = (id: string) => {
  return MOCK_PROVIDERS.find(p => p.id === id);
};

export const getServiceById = (id: string) => {
  const service = MOCK_SERVICES.find(s => s.id === id);
  if (!service) return undefined;
  const provider = MOCK_PROVIDERS.find(p => p.id === service.providerId);
  return { ...service, provider };
};
