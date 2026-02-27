import { addDays, subDays } from 'date-fns';

export interface Listing {
  id: string;
  title: string;
  type: 'Mining Project' | 'Renewable Asset' | 'Claim' | 'Royalty Asset' | 'Offtake Listing';
  commodity: string[];
  location: {
    country: string;
    region: string;
    coordinates?: [number, number];
  };
  stage: 'Exploration' | 'Development' | 'Production' | 'Care & Maintenance' | 'Closed';
  price: {
    amount: number | null;
    currency: string;
    type: 'Fixed' | 'Negotiable' | 'Auction' | 'Contact for Price';
  };
  image: string;
  summary: string;
  highlights: string[];
  isFeatured?: boolean;
  isNdaRequired?: boolean;
  createdAt: Date;
  matchReason?: string;
  seller: {
    name: string;
    type: 'Individual' | 'Agent' | 'Broker' | 'Company';
    avatar?: string;
  };
  // General details
  geology?: string;
  resource?: string;
  infrastructure?: string;
  // Offtake specific
  offtakeDetails?: {
    intention: 'Product Sale';
    grade: string;
    quantity: string;
    contractType: 'Spot' | 'Long Term';
  };
  
  // New Wizard Fields
  commoditySector?: string[];
  intention?: string;
  explorationHighlights?: string;
  tenementLocationMaps?: boolean;
  drillRockChipMap?: boolean;
  crossSectionIsometric?: boolean;
  corePhotos?: boolean;
  samplePhotos?: boolean;
  additionalImagery?: boolean;
  companyStatus?: 'Private' | 'Public';
  operatorName?: string;
  isOperatorHidden?: boolean;
  currentOwnership?: string;
  jorcCompliant?: string;
  uploadDocumentalFile?: boolean;
  additionalResourceInfo?: string;
  uploadSupportingDoc?: boolean;
  tonnageVolume?: boolean;
  resourceContainedGrade?: boolean;
  sizeOfArea?: string;
  numberOfClaims?: boolean;
  drillingPermits?: boolean;
  uploadPresentation?: boolean;
  recentAnnouncement?: boolean;
  materialInfrastructure?: string;
  nativeTitleAgreements?: boolean;
  royaltyDetails?: boolean;
  yearlyRentalFees?: string;
  rentalFeesPaid?: boolean;
}

export const COMMODITIES = [
  'Gold', 'Copper', 'Lithium', 'Silver', 'Nickel', 'Cobalt', 'Zinc', 'Iron Ore', 'Rare Earths', 'Uranium'
];

export const LOCATIONS = [
  { country: 'Australia', region: 'Western Australia' },
  { country: 'Canada', region: 'British Columbia' },
  { country: 'USA', region: 'Nevada' },
  { country: 'Chile', region: 'Antofagasta' },
  { country: 'Peru', region: 'Cajamarca' },
  { country: 'Brazil', region: 'Minas Gerais' },
];

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 'lst_001',
    title: 'High-Grade Gold Project in WA',
    type: 'Mining Project',
    commodity: ['Gold'],
    location: { country: 'Australia', region: 'Western Australia' },
    stage: 'Exploration',
    price: { amount: 2500000, currency: 'AUD', type: 'Negotiable' },
    image: 'https://picsum.photos/seed/goldmine/800/600',
    summary: 'Advanced exploration project with significant high-grade intercepts. JORC compliant resource pending.',
    highlights: ['High grade intercepts', 'Near infrastructure', 'Historical workings'],
    isFeatured: true,
    isNdaRequired: true,
    createdAt: subDays(new Date(), 2),
    matchReason: 'Matches your search for "Gold" and "WA"',
    seller: { name: 'Sarah Jenkins', type: 'Broker' }
  },
  {
    id: 'lst_002',
    title: 'Copper-Cobalt Development Opportunity',
    type: 'Mining Project',
    commodity: ['Copper', 'Cobalt'],
    location: { country: 'Canada', region: 'British Columbia' },
    stage: 'Development',
    price: { amount: 12000000, currency: 'CAD', type: 'Contact for Price' },
    image: 'https://picsum.photos/seed/copper/800/600',
    summary: 'Large scale porphyry system with completed PFS. Excellent infrastructure access.',
    highlights: ['PFS Complete', 'Large Resource', 'Strategic Metal'],
    isFeatured: true,
    isNdaRequired: true,
    createdAt: subDays(new Date(), 5),
    matchReason: 'Matches your search for "Copper"',
    seller: { name: 'Global Mining Corp', type: 'Company' }
  },
  {
    id: 'lst_003',
    title: 'Lithium Brine Offtake Agreement',
    type: 'Offtake Listing',
    commodity: ['Lithium'],
    location: { country: 'Argentina', region: 'Salta' },
    stage: 'Production',
    price: { amount: null, currency: 'USD', type: 'Contact for Price' },
    image: 'https://picsum.photos/seed/lithium/800/600',
    summary: 'Product sale opportunity for 10,000tpa LCE. Production starting Q4 2026.',
    highlights: ['High Purity', 'Long Term Contract Available', 'ESG Compliant'],
    isFeatured: false,
    isNdaRequired: true,
    createdAt: subDays(new Date(), 1),
    seller: { name: 'Argentum Lithium', type: 'Company' },
    offtakeDetails: {
      intention: 'Product Sale',
      grade: '99.5% Li2CO3',
      quantity: '10,000 tpa',
      contractType: 'Long Term'
    }
  },
  {
    id: 'lst_004',
    title: 'Nevada Gold Claims Package',
    type: 'Claim',
    commodity: ['Gold', 'Silver'],
    location: { country: 'USA', region: 'Nevada' },
    stage: 'Exploration',
    price: { amount: 150000, currency: 'USD', type: 'Fixed' },
    image: 'https://picsum.photos/seed/nevada/800/600',
    summary: 'Strategic land package adjacent to producing mine. Early stage exploration potential.',
    highlights: ['Strategic Location', 'Low Holding Costs', 'Drill Ready'],
    isFeatured: false,
    isNdaRequired: false,
    createdAt: subDays(new Date(), 10),
    seller: { name: 'Mike Ross', type: 'Individual' }
  },
  {
    id: 'lst_005',
    title: 'Rare Earths Project - NORA Partner',
    type: 'Mining Project',
    commodity: ['Rare Earths'],
    location: { country: 'Australia', region: 'Northern Territory' },
    stage: 'Exploration',
    price: { amount: 5000000, currency: 'AUD', type: 'Negotiable' },
    image: 'https://picsum.photos/seed/rareearths/800/600',
    summary: 'Heavy rare earths potential. Partnered with NORA for strategic development.',
    highlights: ['NORA Partner', 'Heavy REE', 'Government Support'],
    isFeatured: true,
    isNdaRequired: true,
    createdAt: subDays(new Date(), 3),
    seller: { name: 'Strategic Minerals Ltd', type: 'Company' }
  },
  {
    id: 'lst_006',
    title: 'Iron Ore Royalty Stream',
    type: 'Royalty Asset',
    commodity: ['Iron Ore'],
    location: { country: 'Brazil', region: 'Minas Gerais' },
    stage: 'Production',
    price: { amount: 8500000, currency: 'USD', type: 'Auction' },
    image: 'https://picsum.photos/seed/ironore/800/600',
    summary: '1.5% NSR on producing iron ore mine. Stable cash flow.',
    highlights: ['Immediate Cash Flow', 'Long Mine Life', 'Major Operator'],
    isFeatured: false,
    isNdaRequired: true,
    createdAt: subDays(new Date(), 7),
    seller: { name: 'Royalty Corp', type: 'Broker' }
  }
];

export const MOCK_SERVICES = [
  {
    id: 'srv_001',
    name: 'GeoScan Exploration Services',
    category: 'Exploration & Geology',
    location: ['Australia', 'Africa'],
    image: 'https://picsum.photos/seed/geoscan/800/600',
    description: 'Advanced geophysical surveying and geological mapping services.',
    verified: true
  },
  {
    id: 'srv_002',
    name: 'MineBuild Engineering',
    category: 'Mine Infrastructure',
    location: ['Global'],
    image: 'https://picsum.photos/seed/minebuild/800/600',
    description: 'EPCM services for mine construction and infrastructure development.',
    verified: true
  },
  {
    id: 'srv_003',
    name: 'EcoRehab Solutions',
    category: 'Rehabilitation & Closure',
    location: ['North America'],
    image: 'https://picsum.photos/seed/ecorehab/800/600',
    description: 'Sustainable mine closure and environmental rehabilitation planning.',
    verified: false
  }
];
