import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Briefcase, 
  CheckCircle, 
  Search, 
  User, 
  Bell, 
  Settings,
  LogOut
} from "lucide-react"
import { useDemo } from "@/context/DemoContext"

interface SidebarLinkProps {
  to: string
  icon: React.ElementType
  label: string
  active: boolean
}

const SidebarLink = ({ to, icon: Icon, label, active }: SidebarLinkProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
      active 
        ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20" 
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    )}
  >
    <Icon className={cn("h-5 w-5 transition-colors", active ? "text-white" : "text-slate-400 group-hover:text-slate-600")} />
    <span>{label}</span>
  </Link>
)

export function Sidebar() {
  const location = useLocation()
  const { userRole } = useDemo()
  const pathname = location.pathname

  return (
    <aside className="w-72 bg-white h-[calc(100vh-4rem)] sticky top-16 hidden md:flex flex-col border-r border-slate-100 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.02)]">
      <div className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
        
        {/* Main Nav */}
        <div className="space-y-2">
          <SidebarLink 
            to="/app/dashboard" 
            icon={LayoutDashboard} 
            label="Dashboard" 
            active={pathname === '/app/dashboard'} 
          />
          <SidebarLink 
            to="/app/messages" 
            icon={MessageSquare} 
            label="Messages" 
            active={pathname.startsWith('/app/messages')} 
          />
          <SidebarLink 
            to="/app/listings" 
            icon={FileText} 
            label="My Listings" 
            active={pathname.startsWith('/app/listings')} 
          />
          <SidebarLink 
            to="/app/my-projects" 
            icon={Briefcase} 
            label="Saved Projects" 
            active={pathname.startsWith('/app/my-projects')} 
          />
          <SidebarLink 
            to="/app/sold-projects" 
            icon={CheckCircle} 
            label="Sold Projects" 
            active={pathname.startsWith('/app/sold-projects')} 
          />
          <SidebarLink 
            to="/app/saved-searches" 
            icon={Search} 
            label="Saved Searches" 
            active={pathname.startsWith('/app/saved-searches')} 
          />
        </div>

        {/* Account */}
        <div className="space-y-2">
          <h4 className="px-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Account</h4>
          <SidebarLink 
            to="/app/account" 
            icon={User} 
            label="Profile & Settings" 
            active={pathname.startsWith('/app/account')} 
          />
          <SidebarLink 
            to="/app/notifications" 
            icon={Bell} 
            label="Notifications" 
            active={pathname.startsWith('/app/notifications')} 
          />
          
          {userRole === 'broker' && (
            <SidebarLink 
              to="/app/broker-profile" 
              icon={Briefcase} 
              label="Broker Profile" 
              active={pathname.startsWith('/app/broker-profile')} 
            />
          )}
        </div>
      </div>

      {/* Logout / Bottom Action */}
      <div className="p-4 border-t border-slate-100">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  )
}
