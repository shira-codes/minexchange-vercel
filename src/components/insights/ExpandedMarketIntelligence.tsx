import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, TrendingUp, TrendingDown, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { MOCK_FUNDRAISERS, MOCK_TRENDING_COMMODITIES, MOCK_NEWS } from "@/data/mockInsightsData";

// Mock Chart Data
const GOLD_DATA = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  price: 2300 + Math.random() * 100 + (i * 2),
}));

const URANIUM_DATA = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  price: 85 + Math.random() * 10 + (i * 0.5),
}));

interface ExpandedMarketIntelligenceProps {
  onCollapse: () => void;
}

export function ExpandedMarketIntelligence({ onCollapse }: ExpandedMarketIntelligenceProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Market Intelligence</h2>
        <Button variant="ghost" onClick={onCollapse} className="text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100">
          Show less <ChevronRight className="ml-1 h-4 w-4 rotate-90" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Gold Chart */}
        <Card className="bg-white border-slate-100 shadow-sm rounded-[32px] overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 font-bold text-lg border border-yellow-100">
                Au
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Gold</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900">$2,341.60</span>
                  <span className="text-xs text-slate-500 font-medium">/oz</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full flex items-center">
                    +1.2% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                  </span>
                </div>
              </div>
            </div>

            <div className="h-48 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={GOLD_DATA}>
                  <defs>
                    <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EAB308" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#EAB308" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="price" stroke="#EAB308" fillOpacity={1} fill="url(#colorGold)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Capital Raised</p>
                <div className="flex items-center gap-2 mt-1">
                   <div>
                      <span className="text-lg font-bold text-slate-900">$185M</span>
                      <span className="text-xs text-emerald-600 font-bold ml-1">+2.1%</span>
                   </div>
                </div>
              </div>
              <div className="text-right">
                 <p className="text-xs text-slate-500 font-medium bg-slate-50 px-2 py-1 rounded-lg">27 Deals Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Middle Column: Uranium Chart */}
        <Card className="bg-white border-slate-100 shadow-sm rounded-[32px] overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg border border-emerald-100">
                U
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Uranium</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900">$91.25</span>
                  <span className="text-xs text-slate-500 font-medium">/lb</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full flex items-center">
                    +1.8% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                  </span>
                </div>
              </div>
            </div>

            <div className="h-48 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={URANIUM_DATA}>
                  <defs>
                    <linearGradient id="colorUranium" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="price" stroke="#10B981" fillOpacity={1} fill="url(#colorUranium)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Capital Raised</p>
                <div className="flex items-center gap-2 mt-1">
                   <div>
                      <span className="text-lg font-bold text-slate-900">$41M</span>
                      <span className="text-xs text-red-500 font-bold ml-1">-5.3%</span>
                   </div>
                </div>
              </div>
              <div className="text-right">
                 <p className="text-xs text-slate-500 font-medium bg-slate-50 px-2 py-1 rounded-lg">15 Deals Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Lists */}
        <div className="space-y-6">
          
          {/* Top Fundraisers */}
          <Card className="bg-white border-slate-100 shadow-sm rounded-[32px] overflow-hidden">
            <CardHeader className="pb-2 pt-6 px-6">
              <CardTitle className="text-lg font-bold text-slate-900">Top Fundraisers</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-50">
                {MOCK_FUNDRAISERS.map((fund, i) => (
                  <div key={i} className="flex justify-between items-center p-4 px-6 hover:bg-slate-50 transition-colors">
                    <span className="text-sm font-medium text-slate-700">{fund.name}</span>
                    <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md">{fund.amount}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 px-6">
                <Button variant="ghost" size="sm" className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl h-10 font-medium">
                  View all <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Latest News */}
          <Card className="bg-white border-slate-100 shadow-sm rounded-[32px] overflow-hidden">
            <CardHeader className="pb-2 pt-6 px-6">
              <CardTitle className="text-lg font-bold text-slate-900">Latest News</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-50">
                {MOCK_NEWS.slice(0, 3).map((news) => (
                  <div key={news.id} className="p-4 px-6 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <h5 className="text-sm font-bold text-slate-900 group-hover:text-brand-orange line-clamp-2 leading-snug mb-2 transition-colors">
                      {news.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                      <span className="bg-slate-100 px-1.5 py-0.5 rounded">{news.source}</span>
                      <span>•</span>
                      <span>{news.timeAgo}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 px-6">
                <Button variant="ghost" size="sm" className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl h-10 font-medium">
                  View all <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* Trending Commodities Table */}
      <Card className="bg-white border-slate-100 shadow-sm rounded-[32px] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6 px-6">
          <CardTitle className="text-xl font-bold text-slate-900">Trending Commodities</CardTitle>
          <Button variant="outline" size="sm" className="text-slate-600 rounded-full border-slate-200 hover:bg-slate-50">
            View more
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50/80 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-bold tracking-wider">Commodity</th>
                  <th className="px-6 py-4 font-bold tracking-wider">Price</th>
                  <th className="px-6 py-4 font-bold tracking-wider">1 Mo Trend</th>
                  <th className="px-6 py-4 font-bold tracking-wider">Capital Raised</th>
                  <th className="px-6 py-4 font-bold tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MOCK_TRENDING_COMMODITIES.map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
                    <td className="px-6 py-4 font-mono text-slate-600 font-medium">{item.price}</td>
                    <td className={`px-6 py-4 font-bold ${item.trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
                      {item.change}
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-900">{item.capital}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0 rounded-full hover:bg-slate-100">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        <div className="p-4 border-t border-slate-100 flex justify-center bg-slate-50/30">
            <Button variant="ghost" onClick={onCollapse} className="text-slate-500 hover:text-slate-900 text-xs uppercase tracking-wider font-bold rounded-full hover:bg-slate-100 px-6">
                Show less <ChevronRight className="ml-1 h-3 w-3 rotate-90" />
            </Button>
        </div>
      </Card>

    </div>
  );
}
