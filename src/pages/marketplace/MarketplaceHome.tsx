import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, ArrowUpRight } from 'lucide-react';
import { MARKETPLACE_CATEGORIES } from '@/data/marketplaceData';

export default function MarketplaceHome() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/yellow_caterpillar_truck/1920/1080" 
            alt="Yellow Caterpillar Mining Trucks" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 mt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            The Leading Mining Services Marketplace
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            Connect with top mining service providers and discover a wide range of professional services for the mining and resources industry.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl mx-auto mt-10">
            <div className="relative flex items-center w-full h-14 rounded-lg bg-slate-100 shadow-2xl overflow-hidden focus-within:ring-2 focus-within:ring-brand-orange/50 transition-all">
              <div className="pl-4 pr-3 text-slate-500">
                <Search className="h-5 w-5" />
              </div>
              <input 
                className="flex-1 bg-transparent h-full text-base text-slate-900 placeholder:text-slate-500 focus:outline-none"
                placeholder="Search MXE Marketplace by services, providers, projects or location"
              />
              <div className="pr-1.5">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-10 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium px-4 rounded-md gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MARKETPLACE_CATEGORIES.map((category) => (
            <div key={category.id} className="group relative flex flex-col rounded-[32px] bg-slate-900 border border-slate-800 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* Image Area */}
              <div className="h-64 w-full overflow-hidden relative rounded-[24px]">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-none rounded-full px-3 py-1 font-normal tracking-wide">
                    Service Category
                  </Badge>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 px-2 pt-5 pb-2 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">
                    {category.name}
                  </h3>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6">
                  {category.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-xs uppercase tracking-wider font-medium">Available Now</span>
                    <span className="text-white font-semibold">View Providers</span>
                  </div>

                  <Button 
                    asChild
                    className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full pl-5 pr-1.5 h-12 flex items-center gap-3 transition-all group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                  >
                    <Link to={`/marketplace/category/${category.slug}`}>
                      <span className="font-bold text-base">Explore</span>
                      <div className="h-9 w-9 bg-black rounded-full flex items-center justify-center text-white">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Area (Visual spacer to match dark theme feel before global footer) */}
      <div className="h-20 bg-slate-950" />
    </div>
  );
}
