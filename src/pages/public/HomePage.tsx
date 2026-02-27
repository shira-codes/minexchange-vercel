import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowRight, ShieldCheck, Globe, Zap, Filter, Play, Briefcase, Gavel, Loader2 } from 'lucide-react';
import { MOCK_LISTINGS } from '@/data/mockData';
import { motion } from 'motion/react';
import { ListingCard } from '@/components/listing/ListingCard';
import { FilterDrawer } from '@/components/search/FilterDrawer';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const featuredListings = MOCK_LISTINGS.filter(l => l.isFeatured).slice(0, 4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <FilterDrawer 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        onApply={(filters) => {
          console.log('Filters applied:', filters);
          navigate('/search');
        }} 
      />

      {/* Hero Section - Luxury Card Style */}
      <div className="p-4 md:p-8 lg:p-12 bg-white">
        <section className="relative h-[85vh] min-h-[600px] bg-slate-950 text-white overflow-hidden flex flex-col justify-center rounded-3xl shadow-2xl">
          {/* Background Image with Spotlight Effect */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/minehero_luxury/1920/1080" 
              alt="Background" 
              className="w-full h-full object-cover opacity-60"
            />
            {/* Vignette / Spotlight Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
          </div>
          
          <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 leading-[1.1]">
                The world's leading platform for <br className="hidden md:block" />
                <span className="font-serif italic font-medium text-brand-orange">mining asset</span> transactions
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto font-light tracking-wide"
            >
              We empower buyers, sellers and agents to connect and transact in a transparent global marketplace. The Minexchange solves the bottleneck for mining projects with limited pathways to transactions.
            </motion.p>

            {/* Search Module - "Shop Now" Pill Style */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-full max-w-2xl mx-auto relative group"
            >
              <form onSubmit={handleSearch} className="relative flex items-center bg-white rounded-full p-2 shadow-2xl shadow-brand-orange/10 transition-transform hover:scale-[1.02]">
                <Search className="ml-4 h-5 w-5 text-slate-400 shrink-0" />
                <Input 
                  className="flex-1 border-none shadow-none focus-visible:ring-0 bg-transparent text-slate-900 placeholder:text-slate-400 h-12 text-lg" 
                  placeholder="Search 'Gold in Australia'..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  size="icon"
                  className="h-12 w-12 rounded-full bg-slate-950 text-white hover:bg-brand-orange hover:text-white transition-colors shrink-0"
                >
                  <ArrowRight className="h-5 w-5 -rotate-45" />
                </Button>
              </form>
              
              {/* Filter Trigger (Text Link below) */}
              <div className="mt-6 flex justify-center">
                 <button 
                   onClick={() => setIsFilterOpen(true)}
                   className="text-white/60 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors uppercase tracking-widest"
                 >
                   <Filter className="h-3 w-3" /> Advanced Filters
                 </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Partner Highlight Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Minexchange exclusive partners</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* NORA Card */}
            <Link to="/partners/nora" className="group block">
              <Card className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white p-6 md:p-8 rounded-2xl">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">NORA</h3>
                    <p className="text-slate-500 mb-4 leading-relaxed">Unlocking the Future of Mineral Extraction from Mining Waste through Next-Generation Nanotechnologies</p>
                    <div className="flex items-center text-brand-orange font-semibold group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-auto bg-blue-50 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
                     <div className="flex items-center gap-3">
                        <div className="bg-[#0077CC] p-2 rounded-lg">
                            <span className="text-white font-bold text-2xl">N</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-slate-900 font-bold text-xl leading-none">NORA</span>
                            <span className="text-slate-500 text-[10px] font-bold tracking-wider uppercase">FUTURE TECHNOLOGIES</span>
                        </div>
                     </div>
                  </div>
                </div>
              </Card>
            </Link>

            {/* REEToken Card */}
            <Link to="/partners/reetoken" className="group block">
              <Card className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white p-6 md:p-8 rounded-2xl">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">REEToken</h3>
                    <p className="text-slate-500 mb-4 leading-relaxed">REEToken is a Luxembourg-based company that provides regulated tokenization infrastructure.</p>
                    <div className="flex items-center text-brand-orange font-semibold group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-auto bg-slate-950 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
                     <div className="flex items-center gap-3">
                        <div className="text-cyan-400">
                             <Zap className="h-8 w-8" />
                        </div>
                        <span className="text-white font-bold text-3xl">REEToken</span>
                     </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Value Props */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The world's largest database of transactable mining assets.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We connect buyers, sellers, and agents through a secure, verified marketplace. 
              From early-stage exploration to producing mines, find the deal that matches your criteria.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['Secure NDA access', 'Global buyer network', 'Direct seller communication', 'Curated opportunities'].map((tag) => (
                <Badge key={tag} variant="secondary" className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-medium rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Marketplace</h3>
              <p className="text-slate-500 leading-relaxed">Access qualified investors and projects across 50+ jurisdictions with standardized data rooms.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Verified & Secure</h3>
              <p className="text-slate-500 leading-relaxed">Bank-grade security with integrated NDA gating, verified user profiles, and secure messaging.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Matching</h3>
              <p className="text-slate-500 leading-relaxed">Our advanced algorithms match assets with the right buyers, saving time and increasing deal flow.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-2">This Week's</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h2>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex border-slate-200 hover:border-brand-orange hover:text-brand-orange">
              <Link to="/search">View All Projects</Link>
            </Button>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-[420px] rounded-xl bg-slate-100 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredListings.map(listing => (
                <ListingCard key={listing.id} listing={listing} showSaveIcon={true} />
              ))}
            </div>
          )}
          
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild className="w-full">
              <Link to="/search">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Promotional Tiles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* MXE TV */}
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src="https://picsum.photos/seed/mxetv/600/800" alt="MXE TV" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">MXE TV</h3>
                <p className="text-slate-300 mb-6 text-sm">Exclusive interviews and market analysis.</p>
                <Button className="bg-white text-slate-900 hover:bg-slate-200 border-none" asChild>
                  <Link to="/mxe-tv" className="flex items-center gap-2"><Play className="h-4 w-4 fill-current" /> Watch Now</Link>
                </Button>
              </div>
            </div>

            {/* List Asset */}
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src="https://picsum.photos/seed/listasset/600/800" alt="List Asset" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">List Your Asset</h3>
                <p className="text-slate-300 mb-6 text-sm">Reach thousands of qualified buyers globally.</p>
                <Button className="bg-brand-orange text-white hover:bg-brand-orange/90 border-none" asChild>
                  <Link to="/list">Start Listing</Link>
                </Button>
              </div>
            </div>

            {/* Become Agent */}
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src="https://picsum.photos/seed/agent/600/800" alt="Become Agent" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Become an Agent</h3>
                <p className="text-slate-300 mb-6 text-sm">Join our network of verified brokers.</p>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900" asChild>
                  <Link to="/agents/become" className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> Join Network</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MXE Arbitration Highlight */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 text-brand-orange">
              <Gavel className="h-6 w-6" />
              <span className="font-bold tracking-wider uppercase text-sm">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MXE Arbitration Center</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              A fully integrated, blockchain-verified arbitration system designed specifically for the mining industry. 
              Secure cross-border transactions with confidence.
            </p>
          </div>
          <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-white hover:text-slate-900 h-14 px-8 text-base" asChild>
            <Link to="/enquiry?subject=Arbitration+Waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
