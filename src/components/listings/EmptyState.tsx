import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryText?: string;
  secondaryLink?: string;
}

export function EmptyState({ title, description, ctaText, ctaLink, secondaryText, secondaryLink }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
      <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
        <Plus className="h-8 w-8 text-slate-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 max-w-sm mb-8">{description}</p>
      <Button asChild className="bg-brand-orange hover:bg-brand-orange/90">
        <Link to={ctaLink}>
          <Plus className="mr-2 h-4 w-4" />
          {ctaText}
        </Link>
      </Button>
      {secondaryText && secondaryLink && (
        <Link to={secondaryLink} className="mt-4 text-sm text-slate-500 hover:text-slate-700 hover:underline">
          {secondaryText}
        </Link>
      )}
    </div>
  );
}
