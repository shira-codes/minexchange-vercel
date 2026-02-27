import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getServiceById, ServiceListing } from '@/data/marketplaceData';
import { EnquiryDrawer } from '@/components/marketplace/EnquiryDrawer';
import { MapPin, Pickaxe, CheckCircle2, ChevronRight, Share2, Heart, MessageSquare } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<ServiceListing | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (id) {
        const result = getServiceById(id);
        setService(result);
      }
      setIsLoading(false);
    }, 800);
  }, [id]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-[400px] w-full rounded-xl" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <Skeleton className="h-[300px] w-full rounded-xl" />
        </div>
      </div>
    );
  }

  if (!service) {
    return <div className="p-12 text-center">Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center text-sm text-slate-500">
          <Link to="/marketplace" className="hover:text-brand-orange">Marketplace</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to={`/marketplace/category/${service.category.toLowerCase().replace(/ /g, '-')}`} className="hover:text-brand-orange">
            {service.category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="font-medium text-slate-900 truncate max-w-[200px]">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                {service.category}
              </Badge>
              {service.provider?.verified && (
                <Badge variant="outline" className="border-brand-blue/20 text-brand-blue bg-brand-blue/5 gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Verified Provider
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {service.title}
            </h1>
            
            <div className="flex items-center gap-2 text-lg text-slate-600">
              <span className="text-slate-400">by</span>
              <Link to={`/marketplace/provider/${service.providerId}`} className="font-medium text-brand-orange hover:underline">
                {service.provider?.name}
              </Link>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              {service.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-lg shadow-brand-orange/20 px-8" onClick={() => setEnquiryOpen(true)}>
                Enquire / Request Quote
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Share2 className="h-4 w-4" /> Share
              </Button>
              <Button variant="ghost" size="lg" className="gap-2 text-slate-500 hover:text-red-500 hover:bg-red-50">
                <Heart className="h-4 w-4" /> Save
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-100">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start border-b border-slate-200 rounded-none bg-transparent h-auto p-0 space-x-8">
              <TabsTrigger 
                value="overview" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-orange data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-0 font-medium text-slate-500 data-[state=active]:text-slate-900"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="capabilities" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-orange data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-0 font-medium text-slate-500 data-[state=active]:text-slate-900"
              >
                Capabilities
              </TabsTrigger>
              <TabsTrigger 
                value="regions" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-orange data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-0 font-medium text-slate-500 data-[state=active]:text-slate-900"
              >
                Regions & Commodities
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="pt-8 space-y-6">
              <div className="prose prose-slate max-w-none">
                <h3 className="text-xl font-bold text-slate-900">Service Description</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-8">Key Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Industry leading expertise and technology</li>
                  <li>Proven track record of successful project delivery</li>
                  <li>Commitment to safety and environmental standards</li>
                  <li>Cost-effective solutions tailored to your needs</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="capabilities" className="pt-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Core Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Project Management', 'Technical Consulting', 'Data Analysis', 'Field Operations', 'Reporting', 'Compliance'].map((cap, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-brand-orange" />
                      <span className="font-medium text-slate-700">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="regions" className="pt-8 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-slate-400" /> Regions Served
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.regions.map(region => (
                    <Badge key={region} variant="secondary" className="px-3 py-1 text-sm bg-slate-100 text-slate-700">
                      {region}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Pickaxe className="h-5 w-5 text-slate-400" /> Commodities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.commodities.map(comm => (
                    <Badge key={comm} variant="secondary" className="px-3 py-1 text-sm bg-slate-100 text-slate-700">
                      {comm}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            {/* Provider Card */}
            <Card className="overflow-hidden border-slate-200 shadow-sm">
              <div className="p-6 bg-slate-900 text-white text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full p-1 mb-4">
                  <img 
                    src={service.provider?.logo} 
                    alt={service.provider?.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{service.provider?.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{service.provider?.tagline}</p>
                
                <div className="flex justify-center gap-2 mt-4">
                  {service.provider?.verified && (
                    <Badge className="bg-brand-blue text-white border-0">Verified</Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="text-sm text-slate-600 text-center">
                  {service.provider?.about.substring(0, 100)}...
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/marketplace/provider/${service.providerId}`}>
                    View Profile
                  </Link>
                </Button>
                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white" onClick={() => setEnquiryOpen(true)}>
                  <MessageSquare className="mr-2 h-4 w-4" /> Contact Provider
                </Button>
              </CardContent>
            </Card>
            
            {/* Trust Signals */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center space-y-4">
              <h4 className="font-semibold text-slate-900">Why use Minexchange?</h4>
              <ul className="text-sm text-slate-600 space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Verified service providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Secure enquiry process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Direct communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Drawer */}
      {service && (
        <EnquiryDrawer 
          isOpen={enquiryOpen} 
          onOpenChange={setEnquiryOpen} 
          service={service} 
        />
      )}
    </div>
  );
}
