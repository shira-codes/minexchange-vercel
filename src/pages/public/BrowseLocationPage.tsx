
import * as React from "react"
import { useNavigate } from "react-router-dom"
import { Search, ArrowRight, MapPin, Globe, AlertCircle, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { LOCATION_TAXONOMY, Region, Country, Subregion } from "@/data/locationTaxonomy"
import { cn } from "@/lib/utils"

export default function BrowseLocationPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [expandedCountries, setExpandedCountries] = React.useState<Record<string, boolean>>({})

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const handleRegionClick = (regionId: string) => {
    const element = document.getElementById(regionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleCountryClick = (country: Country, region: Region) => {
    // If country has subregions, toggle expand, otherwise route
    if (country.subregions && country.subregions.length > 0) {
      setExpandedCountries(prev => ({
        ...prev,
        [country.name]: !prev[country.name]
      }))
    } else {
      navigate(`/search?country=${encodeURIComponent(country.name)}&region=${encodeURIComponent(region.name)}`)
    }
  }

  const handleSubregionClick = (subregion: Subregion, country: Country) => {
    navigate(`/search?country=${encodeURIComponent(country.name)}&subregion=${encodeURIComponent(subregion.name)}`)
  }

  const handleSearchSelect = (locationName: string) => {
    navigate(`/search?location=${encodeURIComponent(locationName)}`)
  }

  // Filter for typeahead
  const filteredLocations = React.useMemo(() => {
    if (!searchQuery) return []
    const results: { name: string, type: string }[] = []
    
    LOCATION_TAXONOMY.forEach(r => {
      if (r.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        results.push({ name: r.name, type: 'Region' })
      }
      r.countries.forEach(c => {
        if (c.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({ name: c.name, type: 'Country' })
        }
        c.subregions?.forEach(s => {
          if (s.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            results.push({ name: s.name, type: 'Region/State' })
          }
        })
      })
    })
    return results.slice(0, 5)
  }, [searchQuery])

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="h-6 w-6 text-red-600" />
        </div>
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Couldn't load location directory</h2>
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
            Browse by Location
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Explore listings by region, country, and key mining jurisdictions.
            Discover opportunities in top-tier mining districts.
          </p>
          
          {/* Typeahead Search */}
          <div className="relative max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input 
                placeholder="Search countries, regions, states..." 
                className="pl-10 h-12 text-base bg-white shadow-sm border-slate-300 focus-visible:ring-brand-orange"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Search Dropdown */}
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden z-20">
                {filteredLocations.length > 0 ? (
                  <div className="py-2">
                    {filteredLocations.map((loc, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center justify-between group"
                        onClick={() => handleSearchSelect(loc.name)}
                      >
                        <span className="font-medium text-slate-700 group-hover:text-brand-orange">{loc.name}</span>
                        <span className="text-xs text-slate-400 uppercase tracking-wider">{loc.type}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-slate-500 text-sm">
                    No locations found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Region Overview (Tiles) */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Regions</h2>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7].map(i => (
                <Skeleton key={i} className="h-40 w-full rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {LOCATION_TAXONOMY.map((region) => (
                <Card 
                  key={region.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-slate-200 overflow-hidden"
                  onClick={() => handleRegionClick(region.id)}
                >
                  <div className={cn("h-2 w-full", region.imageColor)} />
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center text-slate-600", region.imageColor)}>
                        <Globe className="h-6 w-6 opacity-80" />
                      </div>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                        {region.count}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-brand-orange transition-colors">
                      {region.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mb-4 h-4">
                      {region.countries.slice(0, 3).map(c => c.name).join(", ")}
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

        {/* Location Directory */}
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
            LOCATION_TAXONOMY.map((region) => (
              <div key={region.id} id={region.id} className="scroll-mt-24">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-2 border-b border-slate-100">
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-xl font-bold text-slate-900">{region.name}</h2>
                    <span className="text-sm text-slate-500">{region.countries.length} countries</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-brand-orange hover:text-brand-orange/80 hover:bg-brand-orange/5 p-0 sm:px-4 h-auto sm:h-9 mt-2 sm:mt-0 justify-start"
                    onClick={() => navigate(`/search?region=${encodeURIComponent(region.name)}`)}
                  >
                    View all {region.name} listings <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {region.countries.map((country) => {
                    const isExpanded = expandedCountries[country.name];
                    const hasSubregions = country.subregions && country.subregions.length > 0;

                    return (
                      <div key={country.name} className="space-y-2">
                        <button
                          onClick={() => handleCountryClick(country, region)}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 rounded-lg border bg-white transition-all duration-200",
                            isExpanded 
                              ? "border-brand-orange ring-1 ring-brand-orange shadow-sm" 
                              : "border-slate-200 hover:border-brand-orange hover:shadow-sm"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-slate-50 rounded text-slate-400">
                              <MapPin className="h-4 w-4" />
                            </div>
                            <div className="text-left">
                              <span className="font-medium text-slate-900 block">{country.name}</span>
                              <span className="text-xs text-slate-500">{country.count} listings</span>
                            </div>
                          </div>
                          {hasSubregions && (
                            isExpanded ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />
                          )}
                        </button>

                        {/* Subregions Panel */}
                        {hasSubregions && isExpanded && (
                          <div className="ml-4 pl-4 border-l-2 border-slate-100 space-y-1 py-1 animate-in slide-in-from-top-2 duration-200">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Top Jurisdictions</span>
                              <Button 
                                variant="link" 
                                className="h-auto p-0 text-xs text-brand-orange"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate(`/search?country=${encodeURIComponent(country.name)}&region=${encodeURIComponent(region.name)}`)
                                }}
                              >
                                View all {country.name}
                              </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {country.subregions!.map(sub => (
                                <button
                                  key={sub.name}
                                  onClick={() => handleSubregionClick(sub, country)}
                                  className="px-2.5 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-md hover:bg-brand-orange/10 hover:text-brand-orange transition-colors border border-slate-100"
                                >
                                  {sub.name} ({sub.count})
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </section>

        {/* Featured Locations (Optional) */}
        {!isLoading && (
          <section className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-white rounded-lg shadow-sm text-brand-orange">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Popular Mining Jurisdictions</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Western Australia", "Nevada", "Ontario", "Quebec", "Chile", "Peru", "South Africa"].map(loc => (
                <button
                  key={loc}
                  onClick={() => handleSearchSelect(loc)}
                  className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-brand-orange hover:text-brand-orange transition-colors shadow-sm"
                >
                  {loc}
                </button>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  )
}
