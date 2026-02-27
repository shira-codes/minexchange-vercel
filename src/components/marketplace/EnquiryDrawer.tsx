import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useDemo } from '@/context/DemoContext';
import { ServiceListing } from '@/data/marketplaceData';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  service: ServiceListing;
}

export function EnquiryDrawer({ isOpen, onOpenChange, service }: EnquiryDrawerProps) {
  const { toast } = useToast();
  const { isAuthenticated, login } = useDemo();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
      toast({
        title: "Enquiry Sent",
        description: `Your enquiry for ${service.title} has been sent to the provider.`,
      });
    }, 1000);
  };

  if (!isAuthenticated) {
    return (
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Sign in to Enquire</SheetTitle>
            <SheetDescription>
              You need to be signed in to contact service providers.
            </SheetDescription>
          </SheetHeader>
          <div className="py-8 flex flex-col gap-4">
            <Button onClick={login} className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
              Sign In / Sign Up
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-[300px] sm:w-[500px] flex flex-col h-full overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Enquire about Service</SheetTitle>
          <SheetDescription>
            Send a message to {service.provider?.name} regarding {service.title}.
          </SheetDescription>
        </SheetHeader>
        
        <form onSubmit={handleSubmit} className="flex-1 py-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" defaultValue="Demo User" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue="user@example.com" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Your Company Name" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              placeholder="I'm interested in this service for my project..." 
              className="min-h-[150px]"
              required 
            />
          </div>
          
          <SheetFooter className="pt-4 border-t border-slate-100 flex-col sm:flex-row gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit" className="bg-brand-orange hover:bg-brand-orange/90 text-white" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Enquiry"}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
