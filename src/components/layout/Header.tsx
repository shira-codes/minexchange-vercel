import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useDemo } from "@/context/DemoContext"
import { 
  Search, 
  Menu, 
  X, 
  Bell, 
  User, 
  LogOut, 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  ChevronDown,
  Pickaxe,
  Wind,
  Map,
  Coins,
  Handshake,
  Users,
  BookOpen,
  Tv,
  Info,
  Cpu,
  Gem
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NotificationBellDropdown } from "@/components/notifications/NotificationBellDropdown"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  const { isAuthenticated, userRole, logout } = useDemo()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const location = useLocation()

  const isAuthPage = location.pathname.startsWith('/auth')
  const isDarkMode = location.pathname.startsWith('/mxe-tv')
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isAuthPage) return null

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300",
      isDarkMode 
        ? "bg-slate-950 border-b-0" 
        : "bg-white/95",
      isScrolled 
        ? (isDarkMode ? "bg-slate-950 shadow-sm shadow-black/50" : "border-b border-slate-200 shadow-sm") 
        : "border-b border-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className={cn(
              "h-9 w-9 rounded-xl flex items-center justify-center shadow-sm transition-colors duration-300",
              isDarkMode 
                ? "bg-white text-slate-950 group-hover:bg-brand-orange group-hover:text-white" 
                : "bg-slate-900 text-white group-hover:bg-brand-orange"
            )}>
              <span className="font-bold text-xl">M</span>
            </div>
            <span className={cn(
              "font-bold text-lg tracking-tight hidden sm:inline-block",
              isDarkMode ? "text-white" : "text-slate-900"
            )}>The Minexchange</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={cn(
            "hidden lg:flex items-center gap-1 text-sm font-medium",
            isDarkMode ? "text-slate-300" : "text-slate-600"
          )}>
            <Button variant="ghost" asChild className={cn(
              isDarkMode ? "text-slate-300 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            )}>
              <Link to="/browse/commodity">Commodities</Link>
            </Button>
            <Button variant="ghost" asChild className={cn(
              isDarkMode ? "text-slate-300 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            )}>
              <Link to="/browse/location">Locations</Link>
            </Button>
            
            {/* List an Asset Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                  "gap-1",
                  isDarkMode ? "text-slate-300 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}>
                  List an Asset <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-2">
                <DropdownMenuLabel className="text-xs text-slate-400 font-normal uppercase tracking-wider px-2 py-1.5">Asset Types</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/list/mining-project/step/1" className="cursor-pointer">
                    <Pickaxe className="mr-2 h-4 w-4 text-slate-500" /> Mining Project
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/list/renewable-asset/step/1" className="cursor-pointer">
                    <Wind className="mr-2 h-4 w-4 text-slate-500" /> Renewable Asset
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/list/claim/step/1" className="cursor-pointer">
                    <Map className="mr-2 h-4 w-4 text-slate-500" /> Claim
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/list/royalty-asset/step/1" className="cursor-pointer">
                    <Coins className="mr-2 h-4 w-4 text-slate-500" /> Royalty Asset
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1" />
                <DropdownMenuItem asChild>
                  <Link to="/list/offtake/step/1" className="cursor-pointer bg-brand-orange/5 text-brand-orange focus:bg-brand-orange/10 focus:text-brand-orange">
                    <Handshake className="mr-2 h-4 w-4" /> List an Offtake
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild className={cn(
              isDarkMode ? "text-slate-300 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            )}>
              <Link to="/marketplace">Marketplace</Link>
            </Button>
            <Button variant="ghost" asChild className={cn(
              isDarkMode ? "text-slate-300 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            )}>
              <Link to="/insights">Insights</Link>
            </Button>

            {/* Explore Mega Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                  "gap-1",
                  isDarkMode ? "text-slate-300 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}>
                  Explore <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[600px] p-0 overflow-hidden">
                <div className="grid grid-cols-3 bg-slate-50">
                  <div className="col-span-2 p-4 bg-white">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-3 text-slate-900">Platform</h4>
                        <ul className="space-y-1">
                          <li>
                            <Link to="/agents" className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-orange p-2 rounded-md hover:bg-slate-50 transition-colors">
                              <Users className="h-4 w-4" /> Explore Agents
                            </Link>
                          </li>
                          <li>
                            <Link to="/agents/become" className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-orange p-2 rounded-md hover:bg-slate-50 transition-colors">
                              <Briefcase className="h-4 w-4" /> Become an Agent
                            </Link>
                          </li>
                          <li>
                            <Link to="/how-to-guides" className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-orange p-2 rounded-md hover:bg-slate-50 transition-colors">
                              <BookOpen className="h-4 w-4" /> How-To Guides
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-3 text-slate-900">Content</h4>
                        <ul className="space-y-1">
                          <li>
                            <Link to="/mxe-tv" className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-orange p-2 rounded-md hover:bg-slate-50 transition-colors">
                              <Tv className="h-4 w-4" /> MXE TV
                            </Link>
                          </li>
                          <li>
                            <Link to="/about" className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-orange p-2 rounded-md hover:bg-slate-50 transition-colors">
                              <Info className="h-4 w-4" /> About Us
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 p-4 bg-slate-50 border-l border-slate-100">
                    <h4 className="font-semibold text-sm mb-3 text-slate-900">Partners</h4>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/partners/nora" className="block group">
                          <div className="flex items-center gap-2 mb-1 group-hover:text-brand-orange transition-colors">
                            <Cpu className="h-4 w-4" /> <span className="text-sm font-medium">NORA</span>
                          </div>
                          <p className="text-xs text-slate-500 leading-tight">Future Technologies Partner</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/partners/reetoken" className="block group">
                          <div className="flex items-center gap-2 mb-1 group-hover:text-brand-orange transition-colors">
                            <Gem className="h-4 w-4" /> <span className="text-sm font-medium">REEToken</span>
                          </div>
                          <p className="text-xs text-slate-500 leading-tight">Digital Asset Tokenization</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className={cn(
            "lg:hidden",
            isDarkMode ? "text-slate-300 hover:text-white" : "text-slate-500 hover:text-slate-900"
          )}>
            <Search className="h-5 w-5" />
          </Button>

            {isAuthenticated ? (
            <>
              <NotificationBellDropdown />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full ring-2 ring-transparent hover:ring-slate-200 transition-all">
                    <Avatar className="h-9 w-9 border border-slate-200">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>MX</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {userRole === 'individual' ? 'Individual Investor' : 
                         userRole === 'agent' ? 'Agent' : 
                         userRole === 'broker' ? 'Broker' : 
                         userRole === 'service_provider' ? 'Service Provider' : 'Admin'}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/app/dashboard" className="cursor-pointer">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/app/account" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Account</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/app/listings" className="cursor-pointer">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>My Listings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild className={cn(
                "hidden sm:inline-flex",
                isDarkMode ? "text-slate-300 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900"
              )}>
                <Link to="/auth/sign-in">Sign In</Link>
              </Button>
              <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-sm shadow-brand-orange/20">
                <Link to="/auth/sign-up">Join Now</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "lg:hidden",
              isDarkMode ? "text-slate-300 hover:text-white" : "text-slate-600"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white p-4 absolute w-full shadow-lg animate-in slide-in-from-top-5">
          <nav className="flex flex-col space-y-4">
            <Link to="/browse/commodity" className="text-sm font-medium text-slate-600 hover:text-brand-orange px-2 py-1">Commodities</Link>
            <Link to="/browse/location" className="text-sm font-medium text-slate-600 hover:text-brand-orange px-2 py-1">Locations</Link>
            <Link to="/list" className="text-sm font-medium text-slate-600 hover:text-brand-orange px-2 py-1">List an Asset</Link>
            <Link to="/marketplace" className="text-sm font-medium text-slate-600 hover:text-brand-orange px-2 py-1">Marketplace</Link>
            <Link to="/insights" className="text-sm font-medium text-slate-600 hover:text-brand-orange px-2 py-1">Insights</Link>
            <div className="border-t border-slate-100 pt-4 mt-2">
               <Link to="/auth/sign-in" className="block w-full text-center py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg mb-2">Sign In</Link>
               <Link to="/auth/sign-up" className="block w-full text-center py-2 text-sm font-medium text-white bg-brand-orange rounded-lg">Join Now</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
