
import * as React from "react"
import { Link } from "react-router-dom"
import { 
  ArrowRight, 
  Hexagon, 
  Zap, 
  Factory, 
  Search, 
  CheckCircle2,
  Loader2,
  Globe,
  MapPin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

// --- Components ---

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-2 block">
      {children}
    </span>
  )
}

function SectionHeading({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={cn("text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight", className)}>
      {children}
    </h2>
  )
}

// --- Page ---

export default function ReetokenPartnerPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464254786740-b97e5420c299?q=80&w=2072&auto=format&fit=crop" 
            alt="Mineral Landscape" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-white px-6 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            {/* Logo Placeholder */}
            <div className="flex items-center gap-2 mb-6">
              <Hexagon className="h-8 w-8 text-blue-400 fill-blue-400/20" />
              <span className="font-bold text-xl tracking-wide">REEToken</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              From Mineral Assets to Advanced Materials - Powered by NFT Technology
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Nora Future Technologies (NFT) enables the transformation of Dead Sea mineral resources and strategic metal deposits into high-value advanced materials through proprietary green extraction and nanomanufacturing systems, creating technology-backed real-world assets suitable for structured tokenization.
            </p>
            <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 h-12 font-medium text-sm">
              Explore NFT Technology Platform <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Our Offerings */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <SectionLabel>Our offerings</SectionLabel>
            <SectionHeading>End-to-End Mineral-to-Material Value Chain</SectionHeading>
            
            <div className="text-slate-600 mb-6">
              <p className="mb-4 font-medium">NFT integrates:</p>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                <li>Resource validation</li>
                <li>JORC-aligned mineral modeling</li>
                <li>Green extraction technologies</li>
                <li>Advanced nanomaterial production</li>
                <li>Industrial-pilot validation</li>
              </ul>
              <p className="mb-10">
                This structured approach enhances resource validation, process clarity, and industrial readiness.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { 
                  icon: Hexagon, 
                  title: "Technology-Backed Resource Structuring", 
                  desc: "NFT provides validated resource models and proprietary processing pathways that define the underlying economic basis of tokenizable mineral assets." 
                },
                { 
                  icon: Zap, 
                  title: "Extraction-to-Product Validation", 
                  desc: "From resource confirmation through pilot-scale metallurgical validation, NFT ensures technical credibility before any financial structuring." 
                },
                { 
                  icon: Factory, 
                  title: "Industrial Offtake & Market Integration", 
                  desc: "NFT-developed materials target construction, water treatment, advanced composites, and battery-grade minerals, supporting downstream commercial validation." 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-white shrink-0 mt-1">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544084944-152696a63f72?q=80&w=1888&auto=format&fit=crop" 
              alt="Dead Sea Salt Formations" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Who We Are */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Content */}
          <div>
            <SectionLabel>Who we are</SectionLabel>
            <SectionHeading>About Nora Future Technologies (NFT)</SectionHeading>
            <div className="text-slate-600 space-y-6">
              <p>
                Nora Future Technologies is an advanced mineral technology platform specializing in:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Bio-assisted extraction systems</li>
                <li>Hybrid acid-base nanostructure formation</li>
                <li>Lithium enrichment from hypersaline brines</li>
                <li>Fe-Al-Si nanocomposite production</li>
              </ul>
              <p>
                NFT bridges geological assets with high-value engineered materials, creating scalable industrial solutions rather than commodity-only extraction models.
              </p>
            </div>
          </div>

          {/* Right Icons */}
          <div className="space-y-8 pt-8">
            {[
              { 
                icon: Zap, 
                title: "Validated Resource & Process Framework", 
                desc: "All NFT resource programs follow structured mineral estimation protocols and feasibility-level modifying factors prior to industrial deployment." 
              },
              { 
                icon: Search, 
                title: "Designed for Institutional Capital", 
                desc: "NFT's structured technology platform enables mineral assets to transition from geological potential to validated industrial production pathways, reducing technical uncertainty prior to financial structuring." 
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-white shrink-0 mt-1">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Images Grid */}
        <div className="grid md:grid-cols-3 gap-4 h-64">
          <img 
            src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1935&auto=format&fit=crop" 
            alt="Core Sample" 
            className="w-full h-full object-cover rounded-xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1780&auto=format&fit=crop" 
            alt="Microscopic Structure" 
            className="w-full h-full object-cover rounded-xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Processing" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>

      {/* 4. Why NFT-Powered Assets */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#FDF6E9] rounded-3xl p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why NFT-Powered Assets</h2>
              <ul className="space-y-3 mb-10">
                {[
                  "Dual-source resource model (DSM + DSR)",
                  "Proprietary green extraction IP",
                  "Nanomanufacturing value uplift",
                  "Industrial pilot validation",
                  "ESG-aligned process design"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Button variant="outline" className="bg-white border-slate-200 text-slate-900 hover:bg-slate-50 rounded-full px-8">
                  Learn more
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">
                  Contact NFT
                </Button>
              </div>
            </div>

            {/* Right Diagram (CSS Art) */}
            <div className="relative h-[300px] w-full flex items-center justify-center text-[10px] font-medium text-slate-600">
              {/* Central Nodes */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">Mining Exchange Platform</div>
                <div className="h-24 w-24 bg-black rounded-full text-white flex items-center justify-center text-center p-2 text-xs leading-tight z-20">
                  Technology-Validated Digital Minerals
                </div>
                <div className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Hexagon className="h-3 w-3 text-blue-400" /> NFT Technology Platform
                </div>
              </div>
              
              {/* Floating Nodes */}
              <div className="absolute top-10 right-20 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                Mineral Resource Operators
              </div>
              <div className="absolute bottom-10 right-20 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                Institutional & Strategic Investors
              </div>

              {/* Connecting Lines (Simple SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none text-slate-300" style={{ zIndex: 0 }}>
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="1" />
                <line x1="30%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technology-Backed Real-World Mineral Assets */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Technology-Backed Real-World<br/>Mineral Assets
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16">
          NFT integrates advanced extraction and material engineering into mineral asset frameworks, enhancing economic defensibility prior to digital issuance.
        </p>

        <div className="bg-slate-50 rounded-xl p-12 grid md:grid-cols-3 gap-8 divide-x divide-slate-200">
          <div>
            <div className="text-orange-600 text-5xl font-bold mb-2">4</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Active Patent Filings</div>
          </div>
          <div>
            <div className="text-orange-600 text-5xl font-bold mb-2">2</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Resource Streams (DSM & DSR)</div>
          </div>
          <div>
            <div className="text-orange-600 text-5xl font-bold mb-2">3</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Stage Validation Platform</div>
          </div>
        </div>
      </section>

      {/* 6. Enquiry Form */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Send us your enquiry</h2>
            <p className="text-slate-500">Reach out to us and learn more about how REEToken can help your venture scale</p>
          </div>

          {isSuccess ? (
            <div className="text-center py-20">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent Successfully</h3>
              <p className="text-slate-600 mb-8">Thank you for your enquiry. Our team will be in touch shortly.</p>
              <Button onClick={() => setIsSuccess(false)} variant="outline">Send another message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name <span className="text-red-500">*</span></Label>
                  <Input id="firstName" placeholder="First name" required className="bg-white border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name <span className="text-red-500">*</span></Label>
                  <Input id="lastName" placeholder="Last name" required className="bg-white border-slate-200" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                <Input id="email" type="email" placeholder="you@company.com" required className="bg-white border-slate-200" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm flex items-center gap-1">
                    🇦🇪 +971 <span className="text-slate-300">|</span>
                  </span>
                  <Input id="phone" type="tel" placeholder="Enter phone number" className="bg-white border-slate-200 pl-24" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company name <span className="text-red-500">*</span></Label>
                  <Input id="companyName" placeholder="Ex: Zen corp" required className="bg-white border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Company website <span className="text-red-500">*</span></Label>
                  <Input id="website" placeholder="Ex: https://example.com" required className="bg-white border-slate-200" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="address">Company Address <span className="text-red-500">*</span></Label>
                  <Input id="address" placeholder="Ex: London" required className="bg-white border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Mines Location <span className="text-red-500">*</span></Label>
                  <Input id="location" placeholder="Ex: New York" required className="bg-white border-slate-200" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Key Elements and metals</Label>
                <Input id="tags" placeholder="Enter a new tag" className="bg-white border-slate-200" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                <Textarea id="message" placeholder="Leave us a message..." required className="min-h-[120px] bg-white border-slate-200" />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" required />
                <label
                  htmlFor="privacy"
                  className="text-xs text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-0.5"
                >
                  You agree to our friendly <a href="#" className="underline">privacy policy</a>.
                </label>
              </div>

              {/* Recaptcha Placeholder */}
              <div className="bg-slate-50 border border-slate-200 rounded p-3 w-fit flex items-center gap-4">
                <Checkbox id="robot" />
                <label htmlFor="robot" className="text-sm text-slate-600">I'm not a robot</label>
                <div className="flex flex-col items-center ml-4">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" className="h-8 w-8 opacity-50" />
                  <span className="text-[8px] text-slate-400">reCAPTCHA</span>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#E5D0B9] hover:bg-[#dcc0a3] text-slate-900 font-medium px-16 h-12 rounded-full w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </div>

            </form>
          )}
        </div>
      </section>

    </div>
  )
}
