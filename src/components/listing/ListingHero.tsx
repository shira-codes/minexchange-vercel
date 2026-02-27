import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Layers, Share2, Heart, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Listing } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface ListingHeroProps {
  listing: Listing;
  isGated: boolean;
  onSave: () => void;
  isSaved: boolean;
}

export function ListingHero({ listing, isGated, onSave, isSaved }: ListingHeroProps) {
  return (
    <div className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={listing.image} 
          alt={listing.title} 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          {/* Left Side: Info */}
          <div className="flex-1 max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-brand-orange text-white border-none px-3 py-1 text-sm font-medium">
                {listing.type}
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-md px-3 py-1">
                {listing.stage}
              </Badge>
              {isGated && (
                <Badge variant="destructive" className="bg-red-500/90 backdrop-blur-md border-none px-3 py-1 gap-1.5">
                  <Lock className="h-3.5 w-3.5" /> NDA Required
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
              {listing.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-300 mb-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-orange" /> 
                <span className="font-medium text-white">{listing.location.region}, {listing.location.country}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-brand-orange" /> 
                <span className="font-medium text-white">{listing.commodity.join(', ')}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <div className="font-medium text-white">
                {listing.price.type === 'Contact for Price' ? 'Contact for Price' : 
                 listing.price.amount ? `${listing.price.currency} ${(listing.price.amount / 1000000).toFixed(1)}M` : 'POA'}
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-2xl line-clamp-3 md:line-clamp-none">
              {listing.summary}
              <button className="text-brand-orange hover:text-brand-orange/80 ml-2 font-medium inline-flex items-center gap-1 transition-colors">
                Read more <ArrowRight className="h-3 w-3" />
              </button>
            </p>
          </div>
          
          {/* Right Side: Actions & Gallery Preview */}
          <div className="flex flex-col gap-4 w-full lg:w-auto shrink-0">
            <div className="flex gap-3">
              <Button variant="secondary" className="flex-1 gap-2 bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md">
                <Share2 className="h-4 w-4" /> Share
              </Button>
              <Button 
                variant="secondary" 
                className={cn(
                  "flex-1 gap-2 border-none backdrop-blur-md transition-all",
                  isSaved ? "bg-brand-orange text-white hover:bg-brand-orange/90" : "bg-white/10 hover:bg-white/20 text-white"
                )}
                onClick={onSave}
              >
                <Heart className={cn("h-4 w-4", isSaved && "fill-current")} /> 
                {isSaved ? 'Saved' : 'Save'}
              </Button>
            </div>
            
            {/* Gallery Thumbnails */}
            <div className="hidden md:flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-24 h-16 rounded-lg overflow-hidden border border-white/20 relative group cursor-pointer">
                  <img 
                    src={`https://picsum.photos/seed/${listing.id}${i}/200/150`} 
                    alt="Gallery thumbnail" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {i === 3 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-xs font-medium text-white">
                      +5
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
