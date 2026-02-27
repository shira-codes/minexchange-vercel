import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';
import { Listing, MOCK_LISTINGS } from '@/data/mockData';
import { ListingCard } from '@/components/listings/ListingCard';
import { DraftCard } from '@/components/listings/DraftCard';
import { EmptyState } from '@/components/listings/EmptyState';
import { SkeletonCards } from '@/components/listings/SkeletonCards';
import { ShareModal } from '@/components/listings/ShareModal';
import { ConfirmModal } from '@/components/listings/ConfirmModal';
import { useToast } from '@/components/ui/use-toast';

export default function ListingsPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('live');
  
  // Local state for listings to handle updates
  const [listings, setListings] = useState<Listing[]>([]);
  const [drafts, setDrafts] = useState<Listing[]>([]);

  // Modals state
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{id: string, type: 'live' | 'draft'} | null>(null);
  
  const [convertModalOpen, setConvertModalOpen] = useState(false);
  const [itemToConvert, setItemToConvert] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      // Split mock data into live and drafts for demo purposes
      // In a real app, this would be filtered by status from API
      const allListings = [...MOCK_LISTINGS];
      
      // Create some mock drafts from the existing listings
      const mockDrafts = allListings.slice(0, 2).map(l => ({
        ...l,
        id: `draft_${l.id}`,
        title: `${l.title} (Draft)`,
        createdAt: new Date()
      }));

      setListings(allListings);
      setDrafts(mockDrafts);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleShare = (id: string) => {
    setSelectedListingId(id);
    setShareModalOpen(true);
  };

  const handleDeleteClick = (id: string, type: 'live' | 'draft') => {
    setItemToDelete({ id, type });
    setDeleteModalOpen(true);
  };

  const handleConvertClick = (id: string) => {
    setItemToConvert(id);
    setConvertModalOpen(true);
  };

  const confirmDelete = () => {
    if (!itemToDelete) return;

    if (itemToDelete.type === 'live') {
      setListings(prev => prev.filter(l => l.id !== itemToDelete.id));
    } else {
      setDrafts(prev => prev.filter(d => d.id !== itemToDelete.id));
    }
    
    setDeleteModalOpen(false);
    setItemToDelete(null);
    
    toast({
      title: "Listing deleted",
      description: "The listing has been permanently removed.",
    });
  };

  const confirmConvert = () => {
    if (!itemToConvert) return;

    const listingToConvert = listings.find(l => l.id === itemToConvert);
    if (listingToConvert) {
      // Save to localStorage for Sold Projects page to pick up
      const soldProject = {
        ...listingToConvert,
        soldDate: new Date()
      };
      
      const existingSold = JSON.parse(localStorage.getItem('convertedSoldProjects') || '[]');
      localStorage.setItem('convertedSoldProjects', JSON.stringify([...existingSold, soldProject]));
    }

    setListings(prev => prev.filter(l => l.id !== itemToConvert));
    setConvertModalOpen(false);
    setItemToConvert(null);

    toast({
      title: "Listing converted to Sold",
      description: "The listing has been moved to your Sold Projects.",
    });
  };

  const handleCompleteDraft = (id: string) => {
    // In a real app, we'd check the draft type and route accordingly
    // For demo, we'll just route to the offtake wizard
    navigate('/list/offtake/step/1');
  };

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Listings</h1>
          <p className="text-slate-500 mt-1">Manage your live listings and drafts.</p>
        </div>
        <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 shadow-sm">
          <Link to="/list">
            <Plus className="mr-2 h-4 w-4" />
            List New Project
          </Link>
        </Button>
      </div>

      {/* Tabs & Content */}
      <Tabs defaultValue="live" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-white border border-slate-200 p-1 h-12 w-full sm:w-auto justify-start rounded-xl">
          <TabsTrigger 
            value="live" 
            className="rounded-lg px-6 h-10 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900 data-[state=active]:shadow-none"
          >
            Live Projects <span className="ml-2 bg-slate-200 text-slate-600 py-0.5 px-2 rounded-full text-xs font-medium">{listings.length}</span>
          </TabsTrigger>
          <TabsTrigger 
            value="drafts" 
            className="rounded-lg px-6 h-10 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900 data-[state=active]:shadow-none"
          >
            Saved Drafts <span className="ml-2 bg-slate-200 text-slate-600 py-0.5 px-2 rounded-full text-xs font-medium">{drafts.length}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6 focus-visible:outline-none">
          {isLoading ? (
            <SkeletonCards />
          ) : listings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map(listing => (
                <ListingCard 
                  key={listing.id} 
                  listing={listing} 
                  onShare={handleShare}
                  onConvertToSold={handleConvertClick}
                  onDelete={(id) => handleDeleteClick(id, 'live')}
                />
              ))}
            </div>
          ) : (
            <EmptyState 
              title="No live projects yet"
              description="Publish a listing to start receiving enquiries from potential buyers."
              ctaText="List New Project"
              ctaLink="/list"
              secondaryText="Learn how listing works"
              secondaryLink="/how-it-works"
            />
          )}
        </TabsContent>

        <TabsContent value="drafts" className="space-y-6 focus-visible:outline-none">
          {isLoading ? (
            <SkeletonCards />
          ) : drafts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {drafts.map(draft => (
                <DraftCard 
                  key={draft.id} 
                  draft={draft} 
                  onDelete={(id) => handleDeleteClick(id, 'draft')}
                  onComplete={handleCompleteDraft}
                />
              ))}
            </div>
          ) : (
            <EmptyState 
              title="No saved drafts"
              description="Start a listing and save it anytime to finish later."
              ctaText="List New Project"
              ctaLink="/list"
            />
          )}
        </TabsContent>
      </Tabs>

      {/* Modals */}
      <ShareModal 
        isOpen={shareModalOpen} 
        onClose={() => setShareModalOpen(false)} 
        listingId={selectedListingId || ''} 
      />

      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete listing?"
        description="This action cannot be undone. This will permanently delete the listing and remove it from our servers."
        confirmText="Delete"
        variant="destructive"
      />

      <ConfirmModal
        isOpen={convertModalOpen}
        onClose={() => setConvertModalOpen(false)}
        onConfirm={confirmConvert}
        title="Convert to Sold?"
        description="This will move the listing to your Sold Projects section. It will no longer be visible in search results."
        confirmText="Convert"
      />
    </div>
  );
}
