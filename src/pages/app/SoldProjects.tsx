import React, { useState, useEffect } from 'react';
import { SoldProject, MOCK_SOLD_PROJECTS } from '@/data/mockSoldProjects';
import { SoldProjectCard } from '@/components/sold-projects/SoldProjectCard';
import { EmptyState } from '@/components/sold-projects/EmptyState';
import { SkeletonCards } from '@/components/sold-projects/SkeletonCards';
import { ConfirmModal } from '@/components/listings/ConfirmModal';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function SoldProjectsPage() {
  const [projects, setProjects] = useState<SoldProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { toast } = useToast();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      try {
        // Load from mock data
        let allProjects = [...MOCK_SOLD_PROJECTS];
        
        // Load from localStorage (simulating persistence from Listings page)
        const storedSold = localStorage.getItem('convertedSoldProjects');
        if (storedSold) {
          const parsed = JSON.parse(storedSold);
          // Merge, avoiding duplicates if any
          const existingIds = new Set(allProjects.map(p => p.id));
          const newProjects = parsed.filter((p: any) => !existingIds.has(p.id));
          allProjects = [...newProjects, ...allProjects];
        }

        setProjects(allProjects);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to load sold projects", err);
        setError(true);
        setIsLoading(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDeleteClick = (id: string) => {
    setItemToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (!itemToDelete) return;

    setProjects(prev => prev.filter(p => p.id !== itemToDelete));
    
    // Update localStorage if needed
    const storedSold = localStorage.getItem('convertedSoldProjects');
    if (storedSold) {
      const parsed = JSON.parse(storedSold);
      const updated = parsed.filter((p: any) => p.id !== itemToDelete);
      localStorage.setItem('convertedSoldProjects', JSON.stringify(updated));
    }

    setDeleteModalOpen(false);
    setItemToDelete(null);
    
    toast({
      title: "Sold project deleted",
      description: "The project has been removed from your sold archive.",
    });
  };

  const handleShare = (id: string) => {
    toast({
      title: "Link copied",
      description: "Project link copied to clipboard.",
    });
  };

  if (isLoading) {
    return (
      <div className="space-y-6 p-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-48 bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-64 bg-slate-100 rounded animate-pulse" />
        </div>
        <SkeletonCards />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
        <AlertCircle className="h-10 w-10 text-red-500" />
        <p className="text-slate-600">Couldn't load sold projects.</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto pb-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Sold Projects</h1>
        <p className="text-slate-500">Projects you've marked as sold.</p>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map(project => (
            <React.Fragment key={project.id}>
              <SoldProjectCard
                project={project}
                onDelete={handleDeleteClick}
                onShare={handleShare}
              />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete sold project?"
        description="This removes it from your sold archive. This action cannot be undone."
        confirmText="Delete"
        variant="destructive"
      />
    </div>
  );
}
