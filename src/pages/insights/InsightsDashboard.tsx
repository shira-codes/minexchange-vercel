import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ChevronRight, MoreHorizontal, Zap, ArrowUpRight, Plus, Flame, CheckCircle2, Users, ChevronDown, Bell, TrendingUp, TrendingDown, MapPin, Globe } from "lucide-react"
import { MOCK_LEADS, InsightLead } from "@/data/mockInsightsData"
import { cn } from "@/lib/utils"
import { ExpandedMarketIntelligence } from "@/components/insights/ExpandedMarketIntelligence"
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

export default function InsightsDashboard() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-[1600px] mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Welcome back, AI Biz Dev
          </h1>
          <p className="text-slate-500 mt-1 text-lg">Here are your latest leads and team updates based on your preferences.</p>
        </div>
        <div className="flex items-center gap-4">
           <Button variant="outline" className="hidden md:flex rounded-full border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900 h-11 px-6 bg-white shadow-sm">
              <Bell className="h-4 w-4 mr-2" /> Notifications
           </Button>
           <div className="h-11 w-11 rounded-full bg-white border border-slate-200 p-0.5 shadow-sm">
              <img src="https://picsum.photos/seed/user/100" alt="User" className="h-full w-full rounded-full object-cover" />
           </div>
        </div>
      </div>

      {isExpanded ? (
        <ExpandedView onCollapse={() => setIsExpanded(false)} />
      ) : (
        <StandardView onExpand={() => setIsExpanded(true)} />
      )}
    </div>
  )
}

function ExpandedView({ onCollapse }: { onCollapse: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Expanded Search Bar */}
      <div className="bg-white p-2 rounded-[24px] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-2 items-center sticky top-4 z-30">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input placeholder="Search for commodities, trends, or companies..." className="pl-14 h-12 bg-slate-50 border-transparent focus-visible:ring-0 text-base rounded-[20px]" />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 px-2 md:px-0 scrollbar-hide">
             {['All Com', 'Energy', 'Precious Metals', 'Base Metals', 'Bulk', 'Technology'].map((filter) => (
                <Button key={filter} variant="ghost" size="sm" className="rounded-full text-slate-600 hover:bg-slate-50 hover:text-slate-900 whitespace-nowrap h-10 px-4 font-medium">
                    {filter}
                </Button>
             ))}
        </div>
        <div className="flex gap-2 w-full md:w-auto px-2 md:px-0">
             <Button variant="outline" className="rounded-full border-slate-200 text-slate-600 h-12 px-6 bg-white hover:bg-slate-50">
                1 Month <ChevronDown className="ml-2 h-3 w-3" />
             </Button>
             <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800 h-12 px-6 shadow-lg shadow-slate-900/10" onClick={onCollapse}>
                <ChevronDown className="h-4 w-4 mr-2" /> Collapse
             </Button>
        </div>
      </div>

      <ExpandedMarketIntelligence onCollapse={onCollapse} />
    </div>
  );
}

function StandardView({ onExpand }: { onExpand: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Search & Filter Bar */}
      <div className="bg-white p-2 rounded-[24px] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-2 items-center sticky top-4 z-30">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input placeholder="Search leads, services, or projects..." className="pl-14 h-12 bg-slate-50 border-transparent focus-visible:ring-0 text-base rounded-[20px]" />
        </div>
        
        <div className="h-8 w-[1px] bg-slate-100 hidden md:block mx-2" />

        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 px-2 md:px-0 scrollbar-hide">
          <Button variant="ghost" size="sm" className="rounded-full bg-brand-orange text-white hover:bg-brand-orange/90 font-medium whitespace-nowrap h-10 px-5 shadow-md shadow-brand-orange/20">
            Status <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
          {['Active', 'Australia', 'Commodity', 'Gold', 'Stage'].map((filter) => (
             <Button key={filter} variant="ghost" size="sm" className="rounded-full text-slate-600 hover:bg-slate-50 hover:text-slate-900 whitespace-nowrap h-10 px-4 font-medium">
                {filter} <ChevronDown className="ml-1 h-3 w-3 text-slate-400" />
             </Button>
          ))}
        </div>
        
        <Button className="rounded-full bg-brand-orange text-white hover:bg-brand-orange/90 h-12 px-6 shadow-lg shadow-brand-orange/20 ml-2">
             <Plus className="h-4 w-4 mr-2" /> New Lead
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Leads Feed (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-slate-900">Leads for You</h2>
                <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-0 font-medium px-2.5 py-0.5 rounded-full text-xs">
                    Upside your preferences
                </Badge>
            </div>
          </div>

          <div className="space-y-4">
            {MOCK_LEADS.map((lead) => (
              <DetailedLeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        </div>

        {/* Right Column: Widgets (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Uncontacted Leads Widget */}
            <Card className="bg-white border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative rounded-[32px]">
                <CardContent className="p-6">
                    <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white mb-4">
                        <Zap className="h-5 w-5 fill-current" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight">Previously Uncontacted Leads</h3>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                        3 new uncontacted leads waiting for your review.
                    </p>
                    <Button variant="secondary" className="w-full mt-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl h-9 text-xs font-medium">
                        View leads
                    </Button>
                </CardContent>
            </Card>

            {/* Contacted Leads Widget */}
            <Card className="bg-white border-slate-100 shadow-sm hover:shadow-md transition-all rounded-[32px]">
                <CardContent className="p-6">
                    <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white mb-4">
                        <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight">All Contacted Leads</h3>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                        2 leads contacted. Follow up required for Gold Processing.
                    </p>
                    <Button variant="secondary" className="w-full mt-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl h-9 text-xs font-medium">
                        View contacted
                    </Button>
                </CardContent>
            </Card>
          </div>

          {/* AI Opportunity Radar */}
          <Card className="bg-slate-900 text-white border-slate-800 shadow-xl shadow-slate-900/20 overflow-hidden relative rounded-[32px]">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-3xl rounded-full -mr-8 -mt-8" />
            
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold">AI Opportunity Radar</h3>
                    <p className="text-slate-400 text-xs mt-0.5">Emerging Signals Based On Your Services</p>
                  </div>
              </div>

              <div className="space-y-5">
                {[1, 2].map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <Flame className="h-4 w-4 text-brand-orange fill-current" />
                                <span className="text-brand-orange font-bold text-sm">Hot</span>
                            </div>
                            <span className="text-slate-400 font-mono text-xs font-medium">{i === 0 ? '$2M - $5M' : '$4M - $8M'}</span>
                        </div>
                        <p className="text-slate-200 text-sm font-medium leading-snug group-hover:text-brand-orange transition-colors">
                            {i === 0 ? "4 companies raised funds for drilling in WA last 7 days" : "2 projects moved to PFS stage in copper"}
                        </p>
                        <div className="mt-2 text-xs text-slate-500">
                            Why this matters to you: <br/>
                            <span className="text-slate-400">Multiple exploration campaigns will need RC Drilling soon.</span>
                        </div>
                    </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Market Intelligence */}
            <Card className="bg-white border-slate-100 shadow-sm hover:shadow-md transition-all rounded-[32px]">
                <CardHeader className="pb-2 pt-6 px-6">
                    <CardTitle className="text-base font-bold text-slate-900">Market Intelligence</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pb-2">
                <div className="divide-y divide-slate-50">
                    {[
                        { name: 'Gold', price: '$2,341.60', change: '+1.2%', up: true, data: [2300, 2310, 2305, 2320, 2335, 2341] },
                        { name: 'Uranium', price: '$91.25', change: '+1.6%', up: true, data: [88, 89, 90, 89, 90, 91] },
                        { name: 'Copper', price: '$4.57', change: '+0.7%', up: true, data: [4.2, 4.3, 4.4, 4.5, 4.55, 4.57] }
                    ].map((item, i) => (
                        <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors cursor-pointer group">
                            <div>
                                <span className="block font-bold text-slate-900 text-sm">{item.name}</span>
                                <span className="block text-xs text-slate-500 font-mono mt-0.5">{item.price}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="h-8 w-16">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={item.data.map((val, idx) => ({ val, idx }))}>
                                            <Area type="monotone" dataKey="val" stroke={item.up ? "#10B981" : "#EF4444"} fill="transparent" strokeWidth={2} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                                <span className={cn("text-[10px] font-bold mt-1", item.up ? "text-emerald-600" : "text-red-500")}>{item.change}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4 pt-0">
                    <Button variant="ghost" size="sm" onClick={onExpand} className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl h-9 text-xs font-medium">
                        View market data
                    </Button>
                </div>
                </CardContent>
            </Card>

            <div className="space-y-6">
                {/* Services Listed */}
                <Card className="bg-white border-slate-100 shadow-sm rounded-[32px]">
                    <CardContent className="p-6">
                        <h3 className="font-bold text-slate-900 text-sm">Number of Services listed</h3>
                        <div className="mt-3">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-2xl font-bold text-brand-orange">24</span>
                                <span className="text-xs text-slate-500 font-medium mb-1">of 50 available</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-orange w-[48%]" />
                            </div>
                            <Button variant="outline" className="w-full mt-4 rounded-xl h-9 text-xs border-slate-200">
                                + Create new service listing
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Team Members */}
                <Card className="bg-white border-slate-100 shadow-sm rounded-[32px] overflow-hidden">
                    <CardContent className="p-0">
                        <div className="h-24 bg-slate-100 relative">
                             {/* Placeholder for Map */}
                             <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center" />
                             <div className="absolute bottom-3 right-3 text-right">
                                 <div className="text-xs text-slate-500 font-medium">Operations spread</div>
                                 <div className="text-lg font-bold text-slate-900">$195M</div>
                             </div>
                        </div>
                        <div className="p-4 flex items-center justify-between bg-white">
                            <span className="text-xs font-bold text-slate-900">Number of team members</span>
                            <div className="flex -space-x-2">
                                {[1,2,3].map(i => (
                                    <div key={i} className="h-6 w-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-600">
                                        <img src={`https://picsum.photos/seed/${i}/100`} className="h-full w-full rounded-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

const DetailedLeadCard: React.FC<{ lead: InsightLead }> = ({ lead }) => {
  return (
    <Card className="bg-slate-900 border-slate-800 shadow-lg shadow-slate-900/20 hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-[32px] relative">
      <div className="absolute top-0 right-0 p-6">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <Flame className="h-3.5 w-3.5 text-brand-orange fill-current" />
              <span className="text-white font-bold text-sm">{lead.matchScore}</span>
          </div>
      </div>
      
      <CardContent className="p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Th, 8 news</span>
            <div className="h-px w-12 bg-slate-700" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 leading-snug pr-16">
            {lead.title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
            {lead.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-brand-orange text-white hover:bg-brand-orange border-0 rounded-lg px-2.5 py-1 text-xs font-medium">
                {lead.location}
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-300 rounded-lg px-2.5 py-1 text-xs font-medium">
                Active
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-300 rounded-lg px-2.5 py-1 text-xs font-medium">
                Development
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-300 rounded-lg px-2.5 py-1 text-xs font-medium">
                Gold
            </Badge>
            <span className="text-xs text-slate-500 self-center ml-auto">Posted 2 days ago</span>
        </div>

        {/* Categories */}
        <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-800">
            <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-slate-400">Implied Work Categories</span>
                <span className="text-[10px] text-brand-orange flex items-center gap-1">
                    Service match score <Zap className="h-3 w-3 fill-current" />
                </span>
            </div>
            <div className="flex flex-wrap gap-2">
                {lead.impliedWorkCategories?.map((cat, i) => (
                    <Badge key={i} variant="secondary" className="bg-slate-700 text-slate-200 hover:bg-slate-600 rounded-lg px-3 py-1 text-xs font-normal">
                        {cat}
                    </Badge>
                ))}
            </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 mt-2">
            <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-slate-700 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${lead.id}/50`} className="h-full w-full object-cover" />
                </div>
                <span className="text-xs text-slate-400">Posted {lead.recency}</span>
            </div>
            <div className="flex gap-2">
                <Button size="sm" className="h-8 rounded-lg bg-slate-700 text-white hover:bg-slate-600 px-6 text-xs font-medium">
                    View
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 rounded-lg hover:bg-slate-800 text-slate-400">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
