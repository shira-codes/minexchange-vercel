import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Heart, Share2, CheckCircle } from 'lucide-react';
import { Listing } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface AgentSidebarProps {
  listing: Listing;
  onEnquire: () => void;
  onSave: () => void;
  isSaved: boolean;
}

export function AgentSidebar({ listing, onEnquire, onSave, isSaved }: AgentSidebarProps) {
  return (
    <div className="space-y-6 sticky top-24">
      {/* Agent Card */}
      <Card className="border-slate-200 shadow-sm overflow-hidden">
        <CardHeader className="bg-slate-50 border-b border-slate-100 p-4">
          <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Listing Agent</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
              <img 
                src={`https://i.pravatar.cc/150?u=${listing.seller.name}`} 
                alt={listing.seller.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                {listing.seller.name}
                <CheckCircle className="h-3.5 w-3.5 text-brand-orange" />
              </h3>
              <p className="text-sm text-slate-500">{listing.seller.type}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button onClick={onEnquire} className="w-full gap-2 bg-brand-orange hover:bg-brand-orange/90 shadow-sm h-11 text-base font-medium">
              <MessageSquare className="h-4 w-4" /> Enquire Now
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className={cn(
                  "w-full gap-2 border-slate-200 hover:bg-slate-50 hover:text-brand-orange transition-colors",
                  isSaved && "text-brand-orange border-brand-orange bg-brand-orange/5"
                )}
                onClick={onSave}
              >
                <Heart className={cn("h-4 w-4", isSaved && "fill-current")} /> 
                {isSaved ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" className="w-full gap-2 border-slate-200 hover:bg-slate-50 hover:text-brand-orange transition-colors">
                <Share2 className="h-4 w-4" /> Share
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Data Summary */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="bg-slate-50 border-b border-slate-100 p-4">
          <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Key Data</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-100">
            <div className="flex justify-between p-4 hover:bg-slate-50/50 transition-colors">
              <span className="text-slate-500 text-sm font-medium">Price</span>
              <span className="font-semibold text-slate-900 text-sm">
                {listing.price.type === 'Contact for Price' ? 'Contact Agent' : 
                 listing.price.amount ? `${listing.price.currency} ${(listing.price.amount / 1000000).toFixed(1)}M` : 'POA'}
              </span>
            </div>
            <div className="flex justify-between p-4 hover:bg-slate-50/50 transition-colors">
              <span className="text-slate-500 text-sm font-medium">Stage</span>
              <span className="font-semibold text-slate-900 text-sm">{listing.stage}</span>
            </div>
            <div className="flex justify-between p-4 hover:bg-slate-50/50 transition-colors">
              <span className="text-slate-500 text-sm font-medium">Commodity</span>
              <span className="font-semibold text-slate-900 text-sm">{listing.commodity[0]}</span>
            </div>
            <div className="flex justify-between p-4 hover:bg-slate-50/50 transition-colors">
              <span className="text-slate-500 text-sm font-medium">Listing ID</span>
              <span className="font-mono text-slate-400 text-xs bg-slate-100 px-2 py-0.5 rounded">{listing.id}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
