import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Plus, MapPin, Pickaxe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MessagesEmptyStateProps {
  type: 'received' | 'sent';
}

export function MessagesEmptyState({ type }: MessagesEmptyStateProps) {
  const navigate = useNavigate();

  if (type === 'received') {
    return (
      <Card className="flex flex-col items-center justify-center py-16 px-4 text-center border-dashed bg-slate-50/50">
        <div className="bg-white p-4 rounded-full shadow-sm mb-4">
          <Pickaxe className="h-8 w-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          You haven't received any project enquiries yet
        </h3>
        <p className="text-slate-500 max-w-md mb-8">
          Communicate with sellers and potential buyers directly and securely on Minexchange.
          List a project to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={() => navigate('/list')} className="gap-2">
            <Plus className="h-4 w-4" />
            List Your Project
          </Button>
          <Button variant="outline" onClick={() => navigate('/browse/commodity')} className="gap-2">
            <Search className="h-4 w-4" />
            Search Commodities
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col items-center justify-center py-16 px-4 text-center border-dashed bg-slate-50/50">
      <div className="bg-white p-4 rounded-full shadow-sm mb-4">
        <Search className="h-8 w-8 text-slate-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        You haven't sent any enquiries yet
      </h3>
      <p className="text-slate-500 max-w-md mb-8">
        Find projects and contact agents for more information.
        Start by searching for assets or browsing locations.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={() => navigate('/search')} className="gap-2">
          <Search className="h-4 w-4" />
          Search Projects
        </Button>
        <Button variant="outline" onClick={() => navigate('/browse/location')} className="gap-2">
          <MapPin className="h-4 w-4" />
          Browse Locations
        </Button>
      </div>
    </Card>
  );
}
