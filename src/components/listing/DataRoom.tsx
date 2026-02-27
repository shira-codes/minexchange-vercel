import React from 'react';
import { FileText, Download, Eye, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GatedContent } from './GatedContent';
import { cn } from '@/lib/utils';

interface DataRoomProps {
  isAuthenticated: boolean;
  isNdaSigned: boolean;
  onSignNda: () => void;
  onLogin: () => void;
  files: string[];
}

export function DataRoom({ isAuthenticated, isNdaSigned, onSignNda, onLogin, files }: DataRoomProps) {
  const isGated = !isNdaSigned;

  return (
    <Card className="border-slate-200 shadow-sm overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-brand-orange/10 rounded-full flex items-center justify-center">
            <FileText className="h-5 w-5 text-brand-orange" />
          </div>
          <div>
            <CardTitle className="text-lg font-bold text-slate-900">Project Data Room</CardTitle>
            <p className="text-sm text-slate-500 mt-1">
              {isGated ? 'Confidential documents available upon NDA signature' : 'Access unlocked. Download or view files below.'}
            </p>
          </div>
        </div>
        {isGated && (
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
            <Lock className="h-3 w-3" /> Secure Access
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-6">
        {isGated ? (
          <GatedContent 
            title="Data Room Files" 
            isAuthenticated={isAuthenticated} 
            onAction={isAuthenticated ? onSignNda : onLogin}
            description={isAuthenticated 
              ? "This project contains sensitive technical reports and legal documents. Please execute the NDA to proceed."
              : "Create an account or sign in to access the confidential data room."
            }
          />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {files.length > 0 ? files.map((file, i) => (
              <div 
                key={i} 
                className="group flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-brand-orange/30 hover:bg-brand-orange/5 hover:shadow-sm transition-all cursor-pointer bg-white"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white transition-colors border border-slate-200">
                    <FileText className="h-5 w-5 text-slate-400 group-hover:text-brand-orange transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900 truncate group-hover:text-brand-orange transition-colors">{file}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                      <span>PDF</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span>2.4 MB</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span>Uploaded 2 days ago</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-brand-orange hover:bg-brand-orange/10 rounded-full" title="View">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-brand-orange hover:bg-brand-orange/10 rounded-full" title="Download">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )) : (
              <div className="col-span-full text-center py-12 text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                No files uploaded yet.
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
