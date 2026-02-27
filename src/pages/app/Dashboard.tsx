import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, ChevronRight, Bell, MoreHorizontal, ArrowUpRight, FileText, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockSavedSearches } from '@/data/mockSavedSearches';
import { mockReceivedMessages } from '@/data/mockMessages';
import { MOCK_LISTINGS } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { SkeletonGrid } from '@/components/dashboard/SkeletonGrid';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  // Mock Data Selection
  const recentListings = MOCK_LISTINGS.slice(0, 3);
  const recentSavedSearches = mockSavedSearches.slice(0, 3);
  const recentMessages = mockReceivedMessages.slice(0, 3);
  
  // Mock User
  const user = {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    avatar: "https://i.pravatar.cc/150?u=alex",
    role: "Broker",
    listingsCount: 12,
    draftsCount: 2,
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-8 p-8 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="h-10 w-48 bg-slate-100 rounded-xl animate-pulse" />
          <div className="h-10 w-32 bg-slate-100 rounded-xl animate-pulse" />
        </div>
        <SkeletonGrid />
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8 max-w-[1600px] mx-auto font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-1 text-lg">Welcome back, {user.name}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-brand-orange transition-colors" />
            <input 
              type="text" 
              placeholder="Search Projects..." 
              className="h-11 pl-10 pr-4 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange w-64 transition-all"
            />
          </div>
          <Button size="lg" className="rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white shadow-lg shadow-brand-orange/20 px-6" asChild>
            <Link to="/list">
              <Plus className="h-5 w-5 mr-2" />
              List an Asset
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 1. Profile Card */}
        <Card className="border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-[32px] overflow-hidden bg-white h-full flex flex-col">
          <CardHeader className="border-b border-slate-50 p-8 pb-4">
            <CardTitle className="text-lg font-semibold text-slate-800">Profile</CardTitle>
          </CardHeader>
          <CardContent className="p-8 flex flex-col h-full">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <Avatar className="h-24 w-24 border-4 border-slate-50 shadow-sm">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-slate-100 text-slate-600 text-2xl">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-1 right-1 h-5 w-5 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">{user.name}</h2>
                <p className="text-slate-500 mb-3">{user.email}</p>
                <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 px-3 py-1 rounded-full font-medium">
                  {user.role}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-auto">
              <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 group hover:border-brand-orange/20 hover:bg-brand-orange/5 transition-colors cursor-pointer">
                <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">{user.listingsCount}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Listings</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 group hover:border-brand-orange/20 hover:bg-brand-orange/5 transition-colors cursor-pointer">
                <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">{user.draftsCount}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Drafts</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-50 flex justify-center">
               <Button variant="ghost" className="text-slate-400 hover:text-brand-orange hover:bg-transparent text-xs font-bold uppercase tracking-widest flex items-center gap-2" asChild>
                 <Link to="/app/account">
                   View Full Profile <ChevronRight className="h-4 w-4" />
                 </Link>
               </Button>
            </div>
          </CardContent>
        </Card>

        {/* 2. Your Projects */}
        <Card className="border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-[32px] overflow-hidden bg-white h-full flex flex-col">
          <CardHeader className="border-b border-slate-50 p-8 pb-4">
            <CardTitle className="text-lg font-semibold text-slate-800">Your Projects</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col">
            <div className="divide-y divide-slate-50 flex-1">
              {recentListings.map((listing, index) => (
                <div key={listing.id} className="p-6 hover:bg-slate-50/50 transition-colors group cursor-pointer flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`mt-2 h-2.5 w-2.5 rounded-full shrink-0 ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-indigo-500' : 'bg-green-500'}`} />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-base mb-1 group-hover:text-brand-orange transition-colors">{listing.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Badge variant="outline" className="rounded-md border-slate-200 text-slate-500 font-normal text-xs px-2 py-0.5 bg-white">
                          {listing.stage}
                        </Badge>
                        <span>•</span>
                        <span>Updated {formatDistanceToNow(new Date(listing.createdAt))} ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-brand-orange group-hover:text-brand-orange transition-all">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-slate-50 mt-auto">
               <Button variant="ghost" className="w-full text-slate-400 hover:text-brand-orange hover:bg-transparent text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2" asChild>
                 <Link to="/app/listings">
                   View All Projects <ChevronRight className="h-4 w-4" />
                 </Link>
               </Button>
            </div>
          </CardContent>
        </Card>

        {/* 3. Saved Searches */}
        <Card className="border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-[32px] overflow-hidden bg-white h-full flex flex-col">
          <CardHeader className="border-b border-slate-50 p-8 pb-4">
            <CardTitle className="text-lg font-semibold text-slate-800">Saved Searches</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col">
            <div className="divide-y divide-slate-50 flex-1">
              {recentSavedSearches.map((search) => (
                <div key={search.id} className="p-6 hover:bg-slate-50/50 transition-colors group flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm mb-0.5">{search.name}</h3>
                      <p className="text-xs text-slate-500">{search.query}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {search.emailAlerts && (
                      <Badge className="bg-green-50 text-green-600 hover:bg-green-100 border-green-100 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide font-bold">
                        Alerts On
                      </Badge>
                    )}
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-300 hover:text-brand-orange" asChild>
                      <Link to={`/search?q=${search.query}`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-slate-50 mt-auto">
               <Button variant="ghost" className="w-full text-slate-400 hover:text-brand-orange hover:bg-transparent text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2" asChild>
                 <Link to="/app/saved-searches">
                   View All Searches <ChevronRight className="h-4 w-4" />
                 </Link>
               </Button>
            </div>
          </CardContent>
        </Card>

        {/* 4. Project Enquiries */}
        <Card className="border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-[32px] overflow-hidden bg-white h-full flex flex-col">
          <CardHeader className="border-b border-slate-50 p-8 pb-4">
            <CardTitle className="text-lg font-semibold text-slate-800">Project Enquiries</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col">
            <div className="divide-y divide-slate-50 flex-1">
              {recentMessages.map((msg) => (
                <div key={msg.id} className="p-6 hover:bg-slate-50/50 transition-colors group cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-10 w-10 border border-slate-100">
                        <AvatarImage src={msg.sender.avatar} />
                        <AvatarFallback className="bg-slate-100 text-slate-500 text-xs font-bold">
                          {msg.sender.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      {msg.status === 'new' && (
                        <span className="absolute -top-1 -right-1 h-3 w-3 bg-blue-500 border-2 border-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-semibold text-slate-900 text-sm">{msg.sender.name}</h3>
                        <span className="text-xs text-slate-400">• {formatDistanceToNow(new Date(msg.timestamp))} ago</span>
                      </div>
                      <p className="text-xs text-slate-500">Re: {msg.enquiry.title}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-slate-50 mt-auto">
               <Button variant="ghost" className="w-full text-slate-400 hover:text-brand-orange hover:bg-transparent text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2" asChild>
                 <Link to="/app/messages">
                   View All Enquiries <ChevronRight className="h-4 w-4" />
                 </Link>
               </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
