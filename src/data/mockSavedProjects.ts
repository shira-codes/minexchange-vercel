import { subDays, subHours } from 'date-fns';

export interface SavedProject {
  id: string;
  title: string;
  location: string;
  type: 'Mining Project' | 'Claim' | 'Royalty' | 'Renewable' | 'Offtake';
  status: 'For Sale' | 'Joint Venture' | 'Farm In' | 'Sold';
  stage: string;
  price: string;
  commodity: string;
  imageUrl: string;
  savedAt: Date;
}

export const MOCK_SAVED_PROJECTS: SavedProject[] = [
  {
    id: 'proj_001',
    title: 'High-Grade Gold Project',
    location: 'Western Australia, Australia',
    type: 'Mining Project',
    status: 'For Sale',
    stage: 'Exploration',
    price: 'POA',
    commodity: 'Gold',
    imageUrl: 'https://picsum.photos/seed/goldproject/400/300',
    savedAt: subHours(new Date(), 2),
  },
  {
    id: 'proj_002',
    title: 'Copper-Gold Porphyry',
    location: 'Atacama, Chile',
    type: 'Mining Project',
    status: 'Joint Venture',
    stage: 'Pre-Feasibility',
    price: '$12M USD',
    commodity: 'Copper',
    imageUrl: 'https://picsum.photos/seed/copper/400/300',
    savedAt: subDays(new Date(), 1),
  },
  {
    id: 'proj_003',
    title: 'Lithium Brine Asset',
    location: 'Salta, Argentina',
    type: 'Claim',
    status: 'For Sale',
    stage: 'Early Exploration',
    price: '$4.5M USD',
    commodity: 'Lithium',
    imageUrl: 'https://picsum.photos/seed/lithium/400/300',
    savedAt: subDays(new Date(), 3),
  },
  {
    id: 'proj_004',
    title: 'Rare Earth Elements Deposit',
    location: 'Quebec, Canada',
    type: 'Mining Project',
    status: 'Farm In',
    stage: 'Resource Definition',
    price: 'POA',
    commodity: 'Rare Earths',
    imageUrl: 'https://picsum.photos/seed/ree/400/300',
    savedAt: subDays(new Date(), 5),
  },
  {
    id: 'proj_005',
    title: 'Solar Farm Development',
    location: 'Nevada, USA',
    type: 'Renewable',
    status: 'For Sale',
    stage: 'Permitting',
    price: '$8.2M USD',
    commodity: 'Solar',
    imageUrl: 'https://picsum.photos/seed/solar/400/300',
    savedAt: subDays(new Date(), 7),
  }
];
