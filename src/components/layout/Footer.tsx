import * as React from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center">
                <span className="text-brand-orange font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">The Minexchange</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              The world's largest database of transactable mining assets. Connecting buyers, sellers, and agents globally with verified data and secure workflows.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/search" className="hover:text-brand-orange transition-colors">Buy an Asset</Link></li>
              <li><Link to="/list" className="hover:text-brand-orange transition-colors">Sell an Asset</Link></li>
              <li><Link to="/enquiry" className="hover:text-brand-orange transition-colors">Make an Enquiry</Link></li>
              <li><Link to="/marketplace" className="hover:text-brand-orange transition-colors">Marketplace</Link></li>
              <li><Link to="/insights" className="hover:text-brand-orange transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/legal/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-brand-orange transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal/nda" className="hover:text-brand-orange transition-colors">NDA Agreement</Link></li>
              <li><Link to="/legal/facilitation-agreement" className="hover:text-brand-orange transition-colors">Facilitation Agreement</Link></li>
              <li><Link to="/legal/agent-facilitation-agreement" className="hover:text-brand-orange transition-colors">Agent Facilitation Agreement</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0" />
                <span>100 St Georges Terrace,<br />Perth WA 6000, Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-orange shrink-0" />
                <span>+61 8 9000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-orange shrink-0" />
                <a href="mailto:support@minexchange.com" className="hover:text-white">support@minexchange.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} The Minexchange. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
            <Link to="/legal/cookies" className="hover:text-white">Cookies</Link>
            <Link to="/legal/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
