import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';

interface AccountSettingsCardProps {
  role: string;
  onConvertToBroker: () => void;
}

export function AccountSettingsCard({ role, onConvertToBroker }: AccountSettingsCardProps) {
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const { toast } = useToast();

  const handleConfirm = () => {
    onConvertToBroker();
    setIsConfirmOpen(false);
    toast({
      title: "Account converted",
      description: "You have successfully converted to a Broker account.",
    });
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-4 border-b border-slate-100">
        <CardTitle className="text-lg font-semibold text-slate-900">Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {role === 'Broker' ? (
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
            <div>
              <h4 className="text-sm font-medium text-green-900">Broker Account Enabled</h4>
              <p className="text-xs text-green-700 mt-1">
                You have access to advanced listing features and broker tools.
              </p>
            </div>
            <Button variant="outline" className="bg-white text-green-700 border-green-200 hover:bg-green-50" asChild>
              <Link to="/app/broker-profile">Go to Broker Profile</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
            <div>
              <h4 className="text-sm font-medium text-slate-900">Convert to Broker Account</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-md">
                Unlock professional tools, create a broker profile, and manage multiple listings efficiently.
              </p>
            </div>
            <Button onClick={() => setIsConfirmOpen(true)}>
              Convert to Broker
            </Button>
          </div>
        )}

        <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Convert to Broker Account?</DialogTitle>
              <DialogDescription>
                This will enable Broker Profile features and allow you to list on behalf of others.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handleConfirm}>Convert to Broker</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
