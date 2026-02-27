
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, CreditCard, Calendar } from "lucide-react"

export default function InsightsBilling() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Billing & Subscription</h1>
        <p className="text-slate-600">Manage your Insights subscription and payment methods.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>You are subscribed to the Tier 1 Insights plan.</CardDescription>
            </div>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 px-3 py-1 text-sm">
              Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">Plan Cost</p>
              <p className="text-xl font-bold text-slate-900">$299<span className="text-sm font-normal text-slate-500">/mo</span></p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">Renewal Date</p>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" />
                <p className="text-lg font-medium text-slate-900">Mar 26, 2026</p>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">Payment Method</p>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-slate-400" />
                <p className="text-lg font-medium text-slate-900">•••• 4242</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="font-medium text-slate-900 mb-4">Plan Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Unlimited access to Leads Feed",
                "Real-time Market Signals",
                "Advanced Filtering",
                "Priority Marketplace Listing",
                "Team Management (up to 5 members)",
                "Export capabilities"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-100">
          Cancel Subscription
        </Button>
        <Button variant="outline">
          Update Payment Method
        </Button>
        <Button className="bg-brand-orange hover:bg-brand-orange/90">
          View Invoices
        </Button>
      </div>
    </div>
  )
}
