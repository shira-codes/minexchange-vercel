
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Filter, MapPin, Layers, Calendar, CheckCircle, Star, MoreHorizontal } from "lucide-react"
import { MOCK_LEADS, InsightLead } from "@/data/mockInsightsData"

export default function InsightsLeads() {
  const [selectedLead, setSelectedLead] = React.useState<InsightLead | null>(null)

  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Biz Dev Leads</h1>
          <p className="text-slate-600">Find and manage opportunities tailored to your services.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Button variant="outline">Saved Views</Button>
        </div>
      </div>

      {/* Filters Bar */}
      <Card className="bg-white shadow-sm border-slate-200">
        <CardContent className="p-4 flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
             <Input placeholder="Search leads..." className="pl-9" />
          </div>
          <div className="flex gap-2">
             <Button variant="outline" size="sm" className="border-dashed">Category</Button>
             <Button variant="outline" size="sm" className="border-dashed">Region</Button>
             <Button variant="outline" size="sm" className="border-dashed">Commodity</Button>
             <Button variant="outline" size="sm" className="border-dashed">Stage</Button>
             <Button variant="ghost" size="sm" className="text-brand-orange">Clear All</Button>
          </div>
        </CardContent>
      </Card>

      {/* Leads List */}
      <div className="grid gap-4">
        {MOCK_LEADS.map((lead) => (
          <Card 
            key={lead.id} 
            className={`cursor-pointer transition-all hover:shadow-md border-l-4 ${lead.isContacted ? 'border-l-slate-300 bg-slate-50' : 'border-l-brand-orange'}`}
            onClick={() => setSelectedLead(lead)}
          >
            <CardContent className="p-5 flex flex-col md:flex-row gap-4 justify-between items-start">
              <div className="space-y-2 flex-1">
                <div className="flex items-start justify-between md:justify-start gap-3">
                  <h3 className="font-semibold text-lg text-slate-900 hover:text-brand-orange">{lead.title}</h3>
                  {lead.isContacted && <Badge variant="outline" className="text-slate-500">Contacted</Badge>}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="font-medium text-slate-700">{lead.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {lead.region}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Layers className="h-3 w-3" /> {lead.commodity}</span>
                </div>
                <p className="text-sm text-slate-600 line-clamp-2">{lead.summary}</p>
                <div className="flex items-center gap-2 pt-1">
                   <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">{lead.category}</Badge>
                   <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">{lead.stage}</Badge>
                   <span className="text-xs text-slate-400 ml-auto md:ml-2">{lead.recency}</span>
                </div>
              </div>
              
              <div className="flex md:flex-col gap-2 shrink-0">
                 <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); /* save logic */ }}>
                    <Star className="h-4 w-4 mr-2" /> Save
                 </Button>
                 <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90" onClick={(e) => { e.stopPropagation(); setSelectedLead(lead); }}>
                    View Details
                 </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lead Detail Drawer */}
      <Sheet open={!!selectedLead} onOpenChange={(open) => !open && setSelectedLead(null)}>
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
          {selectedLead && (
            <div className="space-y-6">
              <SheetHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20 border-0">
                    {selectedLead.matchReason}
                  </Badge>
                </div>
                <SheetTitle className="text-2xl">{selectedLead.title}</SheetTitle>
                <SheetDescription className="text-base font-medium text-slate-900">
                  {selectedLead.company}
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-slate-500">Region</p>
                    <p className="font-medium">{selectedLead.region}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500">Commodity</p>
                    <p className="font-medium">{selectedLead.commodity}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500">Stage</p>
                    <p className="font-medium">{selectedLead.stage}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500">Posted</p>
                    <p className="font-medium">{selectedLead.recency}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Description</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedLead.summary}
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Suggested Actions</h4>
                  <div className="flex flex-col gap-2">
                    <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 justify-start" size="lg">
                      Send Enquiry
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Mark as Contacted
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-slate-500">
                      Not Relevant
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
