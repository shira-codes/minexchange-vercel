import React from 'react';
import { ListingCard } from '@/components/listing/ListingCard';
import { MOCK_LISTINGS, Listing } from '@/data/mockData';

interface SimilarListingsProps {
  currentListingId: string;
}

export function SimilarListings({ currentListingId }: SimilarListingsProps) {
  const similarListings = MOCK_LISTINGS
    .filter(l => l.id !== currentListingId)
    .slice(0, 3);

  if (similarListings.length === 0) return null;

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Similar Listings</h2>
          <a href="/search" className="text-sm font-medium text-brand-orange hover:text-brand-orange/80 transition-colors">
            View all listings &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarListings.map(listing => (
            <ListingCard key={listing.id} listing={listing} showSaveIcon={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
