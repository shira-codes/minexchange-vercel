import React, { useState, useEffect } from 'react';
import { SavedProject, MOCK_SAVED_PROJECTS } from '@/data/mockSavedProjects';
import { SavedProjectCard } from '@/components/saved-projects/SavedProjectCard';
import { EmptyState } from '@/components/saved-projects/EmptyState';
import { SkeletonCards } from '@/components/saved-projects/SkeletonCards';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function MyProjectsPage() {
  const [projects, setProjects] = useState<SavedProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setProjects(MOCK_SAVED_PROJECTS);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleUnsave = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    toast({
      title: "Removed from saved projects",
      description: "The project has been removed from your list.",
    });
  };

  const handleShare = (id: string) => {
    // Mock share
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
        <p className="text-slate-600">Couldn't load saved projects.</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto pb-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Saved Projects</h1>
        <p className="text-slate-500">Projects you saved to review later.</p>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map(project => (
            <React.Fragment key={project.id}>
              <SavedProjectCard
                project={project}
                onUnsave={handleUnsave}
                onShare={handleShare}
              />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
