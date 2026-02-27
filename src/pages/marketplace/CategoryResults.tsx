import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilterDrawer } from '@/components/marketplace/FilterDrawer';
import { ServiceCard } from '@/components/marketplace/ServiceCard';
import { getServicesByCategory, MARKETPLACE_CATEGORIES, ServiceListing } from '@/data/marketplaceData';
import { Search, ChevronRight, LayoutGrid, List } from 'lucide-react';

export default function CategoryResults() {
  const { slug } = useParams<{ slug: string }>();
  const [services, setServices] = useState<ServiceListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const category = MARKETPLACE_CATEGORIES.find(c => c.slug === slug);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (slug) {
        const results = getServicesByCategory(slug);
        setServices(results);
      }
      setIsLoading(false);
    }, 800);
  }, [slug]);

  if (!category) {
    return <div className="p-8 text-center">Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center text-sm text-slate-500">
          <Link to="/marketplace" className="hover:text-brand-orange">Marketplace</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="font-medium text-slate-900">{category.name}</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <h1 className="text-3xl font-bold text-slate-900">{category.name}</h1>
          <p className="text-slate-500 max-w-3xl">{category.description}</p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-medium text-slate-900">{services.length}</span> results found
            </div>
            
            <div className="flex items-center gap-3">
              <FilterDrawer />
              
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px] h-9">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center border border-slate-200 rounded-md overflow-hidden h-9">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`h-full w-9 rounded-none ${viewMode === 'grid' ? 'bg-slate-100 text-slate-900' : 'text-slate-400'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <div className="w-px h-full bg-slate-200" />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`h-full w-9 rounded-none ${viewMode === 'list' ? 'bg-slate-100 text-slate-900' : 'text-slate-400'}`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-[400px] bg-slate-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : services.length > 0 ? (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {services.map(service => (
              <React.Fragment key={service.id}>
                <ServiceCard service={service} viewMode={viewMode} />
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
              <Search className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">No services found</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-6">
              We couldn't find any services matching your criteria. Try adjusting your filters or search terms.
            </p>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
