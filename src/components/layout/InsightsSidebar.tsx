
import * as React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Target, 
  MessageSquare, 
  Briefcase, 
  Users, 
  UserCircle, 
  CreditCard, 
  Bell, 
  LogOut,
  Lock
} from "lucide-react"
import { useDemo } from "@/context/DemoContext"
import { Button } from "@/components/ui/button"

const InsightsSidebarLink = ({ to, icon: Icon, label, active, locked }: { to: string, icon: any, label: string, active: boolean, locked?: boolean }) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 relative group",
      active 
        ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20" 
        : "text-slate-400 hover:bg-white/10 hover:text-white",
      locked && "opacity-60 pointer-events-none"
    )}
  >
    <Icon className={cn("h-5 w-5", active ? "text-white" : "text-slate-500 group-hover:text-slate-300")} />
    {label}
    {locked && <Lock className="h-3 w-3 absolute right-3 text-slate-600" />}
  </Link>
)

export function InsightsSidebar() {
  const location = useLocation()
  const { logout } = useDemo()
  const pathname = location.pathname
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <aside className="w-72 hidden md:flex flex-col gap-6 py-6 px-4 bg-slate-900 rounded-[32px] my-6 ml-6 h-[calc(100vh-3rem)] sticky top-6">
      <div className="space-y-8 flex-1">
        
        {/* Header / Brand Context */}
        <div className="px-5 pt-2">
           <div className="flex items-center gap-2 mb-1">
             <div className="h-8 w-8 bg-brand-orange rounded-lg flex items-center justify-center">
               <Briefcase className="h-5 w-5 text-white" />
             </div>
             <span className="text-xl font-bold text-white tracking-tight">ACRU</span>
           </div>
           <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest pl-1">Insights Workspace</span>
        </div>

        {/* Main Nav */}
        <div className="space-y-2">
          <InsightsSidebarLink 
            to="/insights/dashboard" 
            icon={LayoutDashboard} 
            label="Dashboard" 
            active={pathname === '/insights/dashboard'} 
          />
          <InsightsSidebarLink 
            to="/insights/leads" 
            icon={Target} 
            label="Biz Dev Leads" 
            active={pathname.startsWith('/insights/leads')} 
          />
          <InsightsSidebarLink 
            to="/insights/enquiries" 
            icon={MessageSquare} 
            label="Enquiries" 
            active={pathname.startsWith('/insights/enquiries')} 
          />
          <InsightsSidebarLink 
            to="/insights/service-listings" 
            icon={Briefcase} 
            label="Service Listings" 
            active={pathname.startsWith('/insights/service-listings')} 
          />
          <InsightsSidebarLink 
            to="/insights/team" 
            icon={Users} 
            label="Approved Team" 
            active={pathname.startsWith('/insights/team')} 
          />
        </div>

        {/* Account */}
        <div className="space-y-2 pt-6 border-t border-slate-800">
          <h4 className="px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Settings</h4>
          <InsightsSidebarLink 
            to="/insights/profile" 
            icon={UserCircle} 
            label="Provider Profile" 
            active={pathname.startsWith('/insights/profile')} 
          />
          <InsightsSidebarLink 
            to="/insights/billing" 
            icon={CreditCard} 
            label="Billing Plans" 
            active={pathname.startsWith('/insights/billing')} 
          />
          <InsightsSidebarLink 
            to="/insights/notifications" 
            icon={Bell} 
            label="Notifications" 
            active={pathname.startsWith('/insights/notifications')} 
          />
        </div>
      </div>

      <div className="pt-4 px-2">
        <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-white/10 rounded-full px-5 h-12" onClick={handleLogout}>
          <LogOut className="mr-3 h-4 w-4" />
          Log out
        </Button>
      </div>
    </aside>
  )
}
