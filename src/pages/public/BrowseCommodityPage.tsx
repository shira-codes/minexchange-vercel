
import * as React from "react"
import { useNavigate } from "react-router-dom"
import { Search, ArrowRight, TrendingUp, AlertCircle, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { COMMODITY_TAXONOMY, Sector, Commodity } from "@/data/commodityTaxonomy"
import { cn } from "@/lib/utils"

export default function BrowseCommodityPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const handleSectorClick = (sectorId: string) => {
    const element = document.getElementById(sectorId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleCommodityClick = (commodity: Commodity, sector: Sector) => {
    navigate(`/search?sector=${encodeURIComponent(sector.name)}&commodity=${encodeURIComponent(commodity.name)}`)
  }

  const handleSearchSelect = (commodityName: string) => {
    navigate(`/search?commodity=${encodeURIComponent(commodityName)}`)
  }

  // Filter for typeahead
  const filteredCommodities = React.useMemo(() => {
    if (!searchQuery) return []
    const allCommodities = COMMODITY_TAXONOMY.flatMap(s => s.commodities)
    return allCommodities.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
  }, [searchQuery])

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="h-6 w-6 text-red-600" />
        </div>
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Couldn't load commodity directory</h2>
        <p className="text-slate-500 mb-6">We encountered an issue loading the data. Please try again.</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <div className="bg-slate-50 border-b border-slate-200 pt-16 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Browse by Commodity
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Explore listings by commodity sector and individual commodities. 
            Find exactly what you're looking for with our structured directory.
          </p>
          
          {/* Typeahead Search */}
          <div className="relative max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input 
                placeholder="Search commodities (e.g. Gold, Lithium)..." 
                className="pl-10 h-12 text-base bg-white shadow-sm border-slate-300 focus-visible:ring-brand-orange"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Search Dropdown */}
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden z-20">
                {filteredCommodities.length > 0 ? (
                  <div className="py-2">
                    {filteredCommodities.map(c => (
                      <button
                        key={c.id}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center justify-between group"
                        onClick={() => handleSearchSelect(c.name)}
                      >
                        <span className="font-medium text-slate-700 group-hover:text-brand-orange">{c.name}</span>
                        <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-brand-orange" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-slate-500 text-sm">
                    No commodities found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Sector Overview (Tiles) */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Sectors</h2>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7,8].map(i => (
                <Skeleton key={i} className="h-40 w-full rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {COMMODITY_TAXONOMY.map((sector) => (
                <Card 
                  key={sector.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-slate-200 overflow-hidden"
                  onClick={() => handleSectorClick(sector.id)}
                >
                  <div className={cn("h-2 w-full", sector.imageColor)} />
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center text-slate-600", sector.imageColor)}>
                        <span className="font-bold text-lg">{sector.name.charAt(0)}</span>
                      </div>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                        {sector.totalListings}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-brand-orange transition-colors">
                      {sector.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 h-8">
                      {sector.description}
                    </p>
                    <div className="text-xs font-medium text-brand-orange flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      Explore <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Commodity Directory */}
        <section className="space-y-12">
          {isLoading ? (
             <div className="space-y-8">
               {[1,2,3].map(i => (
                 <div key={i} className="space-y-4">
                   <Skeleton className="h-8 w-48" />
                   <div className="flex gap-3">
                     <Skeleton className="h-10 w-24 rounded-full" />
                     <Skeleton className="h-10 w-32 rounded-full" />
                     <Skeleton className="h-10 w-20 rounded-full" />
                   </div>
                 </div>
               ))}
             </div>
          ) : (
            COMMODITY_TAXONOMY.map((sector) => (
              <div key={sector.id} id={sector.id} className="scroll-mt-24">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-2 border-b border-slate-100">
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-xl font-bold text-slate-900">{sector.name}</h2>
                    <span className="text-sm text-slate-500">{sector.commodities.length} commodities</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-brand-orange hover:text-brand-orange/80 hover:bg-brand-orange/5 p-0 sm:px-4 h-auto sm:h-9 mt-2 sm:mt-0 justify-start"
                    onClick={() => navigate(`/search?sector=${encodeURIComponent(sector.name)}`)}
                  >
                    View all {sector.name} listings <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {sector.commodities.map((commodity) => (
                    <button
                      key={commodity.id}
                      onClick={() => handleCommodityClick(commodity, sector)}
                      className="group flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:border-brand-orange hover:shadow-sm transition-all duration-200"
                    >
                      <span className="font-medium text-slate-700 group-hover:text-brand-orange">
                        {commodity.name}
                      </span>
                      <span className="text-xs text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded group-hover:bg-brand-orange/10 group-hover:text-brand-orange">
                        {commodity.count}
                      </span>
                      {commodity.trending && (
                        <TrendingUp className="h-3 w-3 text-green-500 ml-1" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </section>

        {/* Trending Section (Optional) */}
        {!isLoading && (
          <section className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-white rounded-lg shadow-sm text-brand-orange">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Trending this week</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {COMMODITY_TAXONOMY.flatMap(s => s.commodities).filter(c => c.trending).map(c => (
                <button
                  key={`trending-${c.id}`}
                  onClick={() => handleSearchSelect(c.name)}
                  className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-brand-orange hover:text-brand-orange transition-colors shadow-sm"
                >
                  {c.name}
                </button>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  )
}
