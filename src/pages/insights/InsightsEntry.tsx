
import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useDemo } from "@/context/DemoContext"
import { Lock, CheckCircle, TrendingUp, Target, Bell } from "lucide-react"

export default function InsightsEntry() {
  const { isAuthenticated, userRole, hasInsightsSubscription, login, setUserRole, setHasInsightsSubscription } = useDemo()
  const navigate = useNavigate()

  // 4. Subscribed -> Redirect to Dashboard
  // In a real app, we might use a useEffect to redirect, but rendering a Navigate component works too.
  // However, since this component is likely rendered at /insights, we want to replace the URL.
  React.useEffect(() => {
    if (isAuthenticated && userRole === 'service_provider' && hasInsightsSubscription) {
      navigate('/insights/dashboard', { replace: true })
    }
  }, [isAuthenticated, userRole, hasInsightsSubscription, navigate])

  // 1. Signed Out State
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-slate-50">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Insights for Mining Service Providers</h1>
            <p className="text-xl text-slate-600">
              Unlock business development leads, market intelligence, and actionable signals tailored to your services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-brand-orange mb-2" />
                <CardTitle className="text-lg">Leads for You</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">Get matched with projects needing your specific services at the right stage.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-brand-orange mb-2" />
                <CardTitle className="text-lg">Market Intel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">Track commodity trends, funding rounds, and competitor activity.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Bell className="h-8 w-8 text-brand-orange mb-2" />
                <CardTitle className="text-lg">Signals & Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">Be the first to know about stage changes and new licenses.</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={login} className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              Sign In to Access
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // 2. Signed In, Not Service Provider
  if (userRole !== 'service_provider') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-slate-50">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto bg-slate-100 p-3 rounded-full w-fit mb-4">
              <BriefcaseIcon className="h-8 w-8 text-slate-600" />
            </div>
            <CardTitle>Service Provider Account Required</CardTitle>
            <CardDescription>
              Insights is designed exclusively for companies listing mining services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-600 text-center">
              To access leads and market intelligence, you need to switch to a Service Provider account or create a new one.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full bg-brand-orange hover:bg-brand-orange/90" onClick={() => setUserRole('service_provider')}>
              Create Service Provider Account (Demo)
            </Button>
            <Button variant="ghost" className="w-full" asChild>
              <Link to="/marketplace">Explore Marketplace</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  // 3. Service Provider, Not Subscribed (Paywall)
  if (!hasInsightsSubscription) {
    return (
      <div className="relative min-h-screen bg-slate-50">
        {/* Blurred Background Content (Mocking the dashboard) */}
        <div className="absolute inset-0 overflow-hidden filter blur-md opacity-50 pointer-events-none p-6">
           <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8 space-y-6">
                 <div className="h-32 bg-white rounded-xl shadow-sm"></div>
                 <div className="h-64 bg-white rounded-xl shadow-sm"></div>
                 <div className="h-64 bg-white rounded-xl shadow-sm"></div>
              </div>
              <div className="col-span-4 space-y-6">
                 <div className="h-full bg-white rounded-xl shadow-sm"></div>
              </div>
           </div>
        </div>

        {/* Paywall Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
          <Card className="max-w-lg w-full shadow-2xl border-brand-orange/20">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-brand-orange/10 p-4 rounded-full w-fit mb-4">
                <Lock className="h-10 w-10 text-brand-orange" />
              </div>
              <CardTitle className="text-2xl">Unlock Insights (Tier 1)</CardTitle>
              <CardDescription className="text-base">
                Gain a competitive edge with our premium business development tools.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Unlimited access to <strong>Leads for You</strong> feed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Real-time <strong>Market Signals</strong> (Funding, Licensing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Advanced filtering and lead management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Priority listing in Marketplace search</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-2">
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-lg py-6" asChild>
                <Link to="/pricing">View Pricing & Subscribe</Link>
              </Button>
              <div className="text-center text-xs text-slate-500 mt-2">
                <span className="block mb-2">Demo Control:</span>
                <Button variant="link" size="sm" onClick={() => setHasInsightsSubscription(true)} className="text-brand-orange">
                  [Simulate Subscription Success]
                </Button>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/marketplace/provider/onboarding">List your services first</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return null // Or a loading spinner while redirecting
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}
