
import * as React from "react"
import { Link } from "react-router-dom"
import { 
  ArrowRight, 
  FlaskConical, 
  Atom, 
  Leaf, 
  TrendingUp, 
  Search, 
  MapPin,
  CheckSquare,
  Loader2,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

// --- Components ---

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2 block text-center">
      {children}
    </span>
  )
}

function SectionHeading({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={cn("text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center", className)}>
      {children}
    </h2>
  )
}

function SectionSubtext({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={cn("text-slate-600 text-center max-w-3xl mx-auto leading-relaxed", className)}>
      {children}
    </p>
  )
}

// --- Page ---

export default function NoraPartnerPage() {
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
            src="https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Mining Excavation" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 bg-blue-600 rounded flex items-center justify-center font-bold text-xl">N</div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-bold text-lg tracking-wide">NORA</span>
              <span className="text-[0.6rem] uppercase tracking-wider opacity-80">Future Technologies</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Nora <span className="text-orange-500">Future Technologies</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            Nano-Engineered Extraction Platforms for Sustainable Mineral Recovery
          </p>
          <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 h-12 font-medium">
            Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 2. The Untapped Potential */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Text */}
          <div>
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-6">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Untapped Potential of Mining Tailings
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Mining tailings are a major underutilized source of critical and precious metals, often left unrecovered due to limitations in conventional extraction methods.
              </p>
              <p>
                Traditional processes can be water- and chemical-intensive, increasing environmental impact.
              </p>
              <p>
                Nora Future Technologies addresses this through nano-engineered selective extraction systems that enhance recovery efficiency while reducing reagent use and environmental footprint at industrial scale.
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: FlaskConical, title: "Advanced Tailings Characterization", desc: "We conduct advanced mineralogical and geochemical assessments to optimize nano-enabled extraction pathways." },
              { icon: Atom, title: "Nanotechnology-Driven Selective Extraction", desc: "Our nano-engineered separation systems enhance metal recovery and selectivity while improving process efficiency." },
              { icon: Leaf, title: "Green Hydrometallurgical Solutions", desc: "Our green hydrometallurgical platforms reduce water use, optimize reagents, and lower emissions." },
              { icon: TrendingUp, title: "From Environmental Liability to Economic Asset", desc: "We transform legacy tailings into valuable resources through advanced recovery systems." }
            ].map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-white mb-4">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-3">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Proprietary Extraction Platforms */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionLabel>Features</SectionLabel>
        <SectionHeading>Proprietary Extraction Platforms for Modern Mining</SectionHeading>
        <SectionSubtext className="mb-12">
          We transform legacy tailings and underutilized deposits into economically viable resources through advanced recovery engineering. Our systems enhance environmental performance while unlocking new revenue opportunities.
        </SectionSubtext>

        {/* Large Image */}
        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 relative">
          <img 
            src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2000&auto=format&fit=crop" 
            alt="Robotic Hand Technology" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Resource Optimization", desc: "Increased extraction efficiency from historical tailings and underutilized deposits, reducing reliance on primary ore extraction." },
            { title: "Operational Efficiency", desc: "Enhanced metal recovery rates through selective nano-enabled separation and optimized reaction control." },
            { title: "ESG & Regulatory Alignment", desc: "Engineered to meet evolving environmental standards, reduce ecological footprint, and support sustainable mining frameworks." }
          ].map((item, i) => (
            <div key={i} className="px-4">
              <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Choosing Nora */}
      <section className="bg-[#FFFBF5] py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choosing Nora?</h2>
            <div className="space-y-6 text-slate-600 mb-8">
              <p>
                Nora Future Technologies combines scientific innovation with industrial execution to accelerate the transition toward cleaner and more efficient mineral recovery systems.
              </p>
              <p>
                Through strategic partnerships and international collaborations, we are advancing nano-enabled hydrometallurgical solutions capable of supporting modern mining operations in a sustainability-driven global economy.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="bg-white border-slate-200 text-slate-900 hover:bg-slate-50 rounded-full px-6">
                Learn More
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Collage */}
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1740&auto=format&fit=crop" className="rounded-lg w-full h-40 object-cover" alt="Tech" />
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1740&auto=format&fit=crop" className="rounded-lg w-full h-40 object-cover mt-8" alt="Lab" />
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1740&auto=format&fit=crop" className="rounded-lg w-full h-40 object-cover -mt-8" alt="Industrial" />
            <img src="https://images.unsplash.com/photo-1516937941344-00b4ec7330f1?q=80&w=1740&auto=format&fit=crop" className="rounded-lg w-full h-40 object-cover" alt="Space" />
          </div>
        </div>
      </section>

      {/* 5. Stats Section */}
      <section className="py-24 px-4 md:px-8">
        <SectionLabel>About Us</SectionLabel>
        <SectionHeading>Generation of Sustainable Mineral Recovery Systems</SectionHeading>
        <SectionSubtext className="mb-12">
          Nora Future Technologies develops advanced extraction platforms that enable responsible resource recovery, improved operational efficiency, and long-term environmental performance across the mining value chain.
        </SectionSubtext>

        <div className="max-w-5xl mx-auto h-64 rounded-2xl overflow-hidden relative flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Lab" 
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
          />
          <div className="relative z-10 grid grid-cols-3 w-full text-white text-center divide-x divide-white/20">
            <div className="px-4">
              <div className="text-5xl font-bold mb-2">4</div>
              <div className="text-xs uppercase tracking-wider opacity-80">Active Patent Filings</div>
            </div>
            <div className="px-4">
              <div className="text-5xl font-bold mb-2">2</div>
              <div className="text-xs uppercase tracking-wider opacity-80">Resource Streams (DSM & DSR)</div>
            </div>
            <div className="px-4">
              <div className="text-5xl font-bold mb-2">3</div>
              <div className="text-xs uppercase tracking-wider opacity-80">Stage Validation Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Enquiry Form */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 md:p-12">
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading className="mb-12">Enquire on how Nora Future<br/>Technologies can support you</SectionHeading>

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
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Company & Contact Info */}
              <div>
                <h3 className="font-bold text-slate-900 mb-6 text-sm">Company & Contact Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
                    <Input id="companyName" placeholder="Ex: John Mineral Group" required className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Primary Contact Person <span className="text-red-500">*</span></Label>
                      <Input id="contactPerson" placeholder="Ex: John Doe" required className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position/Title <span className="text-red-500">*</span></Label>
                      <Input id="position" placeholder="Ex: Director" required className="bg-slate-50 border-slate-200" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                      <Input id="email" type="email" placeholder="Ex: john@company.com" required className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🇦🇪 +971</span>
                        <Input id="phone" type="tel" placeholder="Enter phone number" required className="bg-slate-50 border-slate-200 pl-20" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Country/Site Location <span className="text-red-500">*</span></Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input id="location" placeholder="Search" required className="bg-slate-50 border-slate-200 pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-orange-500 text-xs font-bold cursor-pointer hover:underline">Or Fill by Coordinates</span>
                    <div className="h-48 w-full rounded-lg overflow-hidden border border-slate-200 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop" 
                        alt="Map" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
                        Target Minerals & Commercial Objectives
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Minerals */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Which minerals/metals are you aiming to recover? <span className="text-red-500">*</span></h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {["Gold", "Silver", "Copper", "Nickel", "Cobalt", "Rare Earth Elements", "Iron", "Aluminum"].map((m) => (
                    <div key={m} className="flex items-center space-x-2">
                      <Checkbox id={`mineral-${m}`} />
                      <label htmlFor={`mineral-${m}`} className="text-sm text-slate-600">{m}</label>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="otherMineral" className="text-xs text-slate-500">If other, specify:</Label>
                  <Input id="otherMineral" className="bg-slate-50 border-slate-200" />
                </div>
              </div>

              {/* Priority Objectives */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Priority Objectives <span className="text-red-500">*</span></h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Maximum recovery", "Environmental remediation", "Commercial feasibility study", "Pilot-scale testing", "Full-scale processing"].map((o) => (
                    <div key={o} className="flex items-center space-x-2">
                      <Checkbox id={`obj-${o}`} />
                      <label htmlFor={`obj-${o}`} className="text-sm text-slate-600">{o}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Project Timeline & Expectations:</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs text-slate-500 mb-2 block">Preferred timeline for assessment <span className="text-red-500">*</span></Label>
                    <RadioGroup defaultValue="immediate" className="flex flex-wrap gap-6">
                      {["Immediate", "Within 1-3 months", "Within 6 months"].map((t) => (
                        <div key={t} className="flex items-center space-x-2">
                          <RadioGroupItem value={t.toLowerCase().replace(/\s/g, '-')} id={`time-${t}`} />
                          <Label htmlFor={`time-${t}`} className="text-sm font-normal text-slate-600">{t}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <Label className="text-xs text-slate-500 mb-2 block">Expected project outcomes: <span className="text-red-500">*</span></Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {["Full feasibility study", "Nanotechnology-based extraction proposal", "Pilot plant design", "Commercial partnership"].map((o) => (
                        <div key={o} className="flex items-center space-x-2">
                          <Checkbox id={`outcome-${o}`} />
                          <label htmlFor={`outcome-${o}`} className="text-sm text-slate-600">{o}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Additional Notes or Requirements</h3>
                <p className="text-xs text-slate-500 mb-2">Please provide any additional information that may help us evaluate your tailings and recommend the appropriate nanotechnology solutions:</p>
                <Textarea placeholder="Please provide any additional information..." className="min-h-[120px] bg-slate-50 border-slate-200" />
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
                  className="bg-[#E5D0B9] hover:bg-[#dcc0a3] text-slate-900 font-medium px-12 h-12 rounded-full w-full sm:w-auto"
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
