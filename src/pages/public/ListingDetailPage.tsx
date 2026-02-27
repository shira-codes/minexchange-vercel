import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDemo } from '@/context/DemoContext';
import { MOCK_LISTINGS } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Home, Settings, MapPin, FileText, Info, Lock } from 'lucide-react';
import { ListingHero } from '@/components/listing/ListingHero';
import { AgentSidebar } from '@/components/listing/AgentSidebar';
import { DataRoom } from '@/components/listing/DataRoom';
import { EnquiryForm } from '@/components/listing/EnquiryForm';
import { SimilarListings } from '@/components/listing/SimilarListings';
import { NDAPromptModal, NDASigningModal } from '@/components/listing/NDAModals';
import { ListingChatbotPanel } from '@/components/listing/ListingChatbotPanel';
import { GatedContent } from '@/components/listing/GatedContent';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export default function ListingDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  // We'll use local state for the demo controls to override context if needed, 
  // but syncing with context is better for global consistency.
  // For this specific requirement "Implement 3 states with a controllable mock state",
  // I will add a local override layer.
  const { isAuthenticated: ctxAuth, ndaSigned: ctxNda, login, setNdaSigned } = useDemo();
  
  const [demoAuth, setDemoAuth] = useState(ctxAuth);
  const [demoNda, setDemoNda] = useState(ctxNda);
  const [isSaved, setIsSaved] = useState(false);
  
  // Sync with context initially
  useEffect(() => {
    setDemoAuth(ctxAuth);
    setDemoNda(ctxNda);
  }, [ctxAuth, ctxNda]);

  const listing = MOCK_LISTINGS.find(l => l.id === id) || MOCK_LISTINGS[0];

  // Modals
  const [showNdaPrompt, setShowNdaPrompt] = useState(false);
  const [showNdaSigning, setShowNdaSigning] = useState(false);

  // Handlers
  const handleSave = () => {
    if (!demoAuth) {
      // Trigger login modal or redirect
      alert("Please sign in to save this project.");
      return;
    }
    setIsSaved(!isSaved);
  };

  const handleEnquire = () => {
    document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAccessDataRoom = () => {
    if (!demoAuth) {
      alert("Please sign in to access the data room.");
      return;
    }
    if (!demoNda) {
      setShowNdaPrompt(true);
    }
  };

  const handleSignNda = () => {
    setDemoNda(true);
    setNdaSigned(true); // Sync back to context
    setShowNdaSigning(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 relative">
      {/* Debug / Demo Controls */}
      <div className="fixed bottom-4 left-4 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-xl border border-slate-700 opacity-90 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Settings className="h-3 w-3" /> Demo Controls
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-xs cursor-pointer">
            <input 
              type="checkbox" 
              checked={demoAuth} 
              onChange={(e) => {
                setDemoAuth(e.target.checked);
                if (!e.target.checked) setDemoNda(false);
              }}
              className="rounded border-slate-600 bg-slate-800 text-brand-orange focus:ring-brand-orange"
            />
            Authenticated
          </label>
          <label className="flex items-center gap-2 text-xs cursor-pointer">
            <input 
              type="checkbox" 
              checked={demoNda} 
              onChange={(e) => setDemoNda(e.target.checked)}
              disabled={!demoAuth}
              className="rounded border-slate-600 bg-slate-800 text-brand-orange focus:ring-brand-orange disabled:opacity-50"
            />
            NDA Signed
          </label>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition-colors"><Home className="h-3 w-3" /></Link>
            <ChevronRight className="h-3 w-3 opacity-50" />
            <Link to="/search" className="hover:text-white transition-colors">Search Results</Link>
            <ChevronRight className="h-3 w-3 opacity-50" />
            <span className="text-white font-medium truncate max-w-[200px]">{listing.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <ListingHero 
        listing={listing} 
        isGated={!demoNda} 
        onSave={handleSave}
        isSaved={isSaved}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Tabs & Sections */}
            <Tabs defaultValue="highlights" className="w-full">
              <div className="sticky top-[4.5rem] z-20 bg-slate-50/95 backdrop-blur-sm pt-2 pb-4 -mx-4 px-4 lg:mx-0 lg:px-0">
                <TabsList className="w-full justify-start bg-white border border-slate-200 p-1 h-auto overflow-x-auto flex-nowrap shadow-sm rounded-lg">
                  <TabsTrigger value="highlights" className="data-[state=active]:bg-slate-100 data-[state=active]:text-brand-orange rounded-md px-4 py-2 text-sm whitespace-nowrap">
                    Exploration Highlights
                  </TabsTrigger>
                  <TabsTrigger value="location" className="data-[state=active]:bg-slate-100 data-[state=active]:text-brand-orange rounded-md px-4 py-2 text-sm whitespace-nowrap">
                    Location
                  </TabsTrigger>
                  <TabsTrigger value="resource" className="data-[state=active]:bg-slate-100 data-[state=active]:text-brand-orange rounded-md px-4 py-2 text-sm whitespace-nowrap">
                    Resource
                  </TabsTrigger>
                  <TabsTrigger value="dataroom" className="data-[state=active]:bg-slate-100 data-[state=active]:text-brand-orange rounded-md px-4 py-2 text-sm whitespace-nowrap gap-2">
                    Data Room {!demoNda && <Lock className="h-3 w-3 opacity-70" />}
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="space-y-8 mt-4">
                <TabsContent value="highlights" className="mt-0 focus-visible:outline-none">
                  <Card className="border-slate-200 shadow-sm overflow-hidden">
                    <CardContent className="p-6 sm:p-8">
                      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Info className="h-5 w-5 text-brand-orange" /> Exploration Highlights
                      </h2>
                      <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-600">
                        <p className="mb-4">
                          The {listing.title} represents a significant opportunity in the {listing.location.region} region. 
                          Recent drilling campaigns have confirmed high-grade mineralization extending beyond the historical resource boundary.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 my-6">
                          {listing.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                              <div className="h-6 w-6 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-brand-orange" />
                              </div>
                              <span className="font-medium text-slate-800">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <p>
                          Further exploration targets have been identified through geophysical surveys, indicating potential for 
                          satellite deposits within the tenement package.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="location" className="mt-0 focus-visible:outline-none">
                  <Card className="border-slate-200 shadow-sm overflow-hidden">
                    <CardContent className="p-6 sm:p-8">
                      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-brand-orange" /> Location & Infrastructure
                      </h2>
                      <div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center relative overflow-hidden group mb-6">
                        {/* Mock Map */}
                        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/400')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-slate-200 font-medium text-slate-700 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-brand-orange" /> Interactive Map Placeholder
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Access</h4>
                          <p className="text-sm text-slate-600">
                            Accessible via all-weather gravel road, 45km from the nearest highway. 
                            Airstrip located 15km from the main camp.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Power & Water</h4>
                          <p className="text-sm text-slate-600">
                            Grid power available 30km south. Current operations powered by diesel generators. 
                            Groundwater extraction permits in place.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="resource" className="mt-0 focus-visible:outline-none">
                  <Card className="border-slate-200 shadow-sm overflow-hidden">
                    <CardContent className="p-6 sm:p-8">
                      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-brand-orange" /> Resource Estimate
                      </h2>
                      
                      {!demoNda ? (
                        <GatedContent 
                          title="Detailed Resource Block Model" 
                          isAuthenticated={demoAuth}
                          onAction={handleAccessDataRoom}
                          className="my-4"
                        />
                      ) : (
                        <div className="overflow-x-auto border rounded-xl">
                          <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                              <tr>
                                <th className="p-4">Category</th>
                                <th className="p-4">Tonnes (Mt)</th>
                                <th className="p-4">Grade (g/t)</th>
                                <th className="p-4">Contained Metal (koz)</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              <tr className="hover:bg-slate-50/50">
                                <td className="p-4 font-medium text-slate-900">Indicated</td>
                                <td className="p-4 text-slate-600">12.5</td>
                                <td className="p-4 text-slate-600">2.4</td>
                                <td className="p-4 text-slate-600">965</td>
                              </tr>
                              <tr className="hover:bg-slate-50/50">
                                <td className="p-4 font-medium text-slate-900">Inferred</td>
                                <td className="p-4 text-slate-600">8.2</td>
                                <td className="p-4 text-slate-600">1.8</td>
                                <td className="p-4 text-slate-600">475</td>
                              </tr>
                              <tr className="bg-slate-50 font-bold text-slate-900">
                                <td className="p-4">Total</td>
                                <td className="p-4">20.7</td>
                                <td className="p-4">2.16</td>
                                <td className="p-4">1,440</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="dataroom" className="mt-0 focus-visible:outline-none">
                  <DataRoom 
                    isAuthenticated={demoAuth}
                    isNdaSigned={demoNda}
                    onSignNda={() => setShowNdaPrompt(true)}
                    onLogin={() => alert("Please sign in.")}
                    files={[
                      'NI 43-101 Technical Report (2025).pdf',
                      'Preliminary Economic Assessment.pdf',
                      'Environmental Baseline Study.pdf',
                      'Tenement Schedule.xlsx',
                      'Drill Database (CSV).zip',
                      'Legal Title Opinion.pdf'
                    ]}
                  />
                </TabsContent>
              </div>
            </Tabs>

            {/* Enquiry Section (Bottom) */}
            <div id="enquiry-section">
              <EnquiryForm 
                isAuthenticated={demoAuth}
                onLogin={() => alert("Please sign in.")}
                listingTitle={listing.title}
              />
            </div>

          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4">
            <AgentSidebar 
              listing={listing}
              onEnquire={handleEnquire}
              onSave={handleSave}
              isSaved={isSaved}
            />
          </div>

        </div>
      </div>

      {/* Similar Listings */}
      <SimilarListings currentListingId={listing.id} />

      {/* Chatbot */}
      <ListingChatbotPanel 
        listing={listing}
        isGated={!demoNda}
        isAuthenticated={demoAuth}
      />

      {/* Modals */}
      <NDAPromptModal 
        isOpen={showNdaPrompt}
        onClose={() => setShowNdaPrompt(false)}
        onContinue={() => {
          setShowNdaPrompt(false);
          setShowNdaSigning(true);
        }}
        listingTitle={listing.title}
      />

      <NDASigningModal 
        isOpen={showNdaSigning}
        onClose={() => setShowNdaSigning(false)}
        onSign={handleSignNda}
        listingTitle={listing.title}
      />

    </div>
  );
}

