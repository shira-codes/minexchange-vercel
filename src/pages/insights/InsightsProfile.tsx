
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function InsightsProfile() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Provider Profile</h1>
          <p className="text-slate-600">This profile drives your lead matching algorithms.</p>
        </div>
        <div className="flex items-center gap-3">
           <span className="text-sm text-slate-500">Profile Completeness:</span>
           <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
             <div className="h-full bg-green-500 w-[85%]"></div>
           </div>
           <span className="text-sm font-bold text-green-600">85%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Main Info */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input defaultValue="Acme Mining Services" />
                </div>
                <div className="space-y-2">
                  <Label>Website</Label>
                  <Input defaultValue="https://acmemining.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>About / Capabilities</Label>
                <Textarea 
                  className="min-h-[120px]" 
                  defaultValue="We specialize in RC drilling and exploration services across Western Australia. With a fleet of 10 rigs..."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Matching Preferences</CardTitle>
              <CardDescription>Select the criteria for leads you want to see.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Categories Served</Label>
                <div className="flex flex-wrap gap-2">
                  {['Drilling & Blasting', 'Exploration & Geology', 'Mine Planning'].map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20 cursor-pointer">
                      {tag} &times;
                    </Badge>
                  ))}
                  <Badge variant="outline" className="border-dashed cursor-pointer text-slate-500">+ Add</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Regions</Label>
                <div className="flex flex-wrap gap-2">
                  {['Western Australia', 'Queensland', 'Nevada, USA'].map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer">
                      {tag} &times;
                    </Badge>
                  ))}
                  <Badge variant="outline" className="border-dashed cursor-pointer text-slate-500">+ Add</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Commodities</Label>
                <div className="flex flex-wrap gap-2">
                  {['Gold', 'Copper', 'Lithium', 'Iron Ore'].map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer">
                      {tag} &times;
                    </Badge>
                  ))}
                  <Badge variant="outline" className="border-dashed cursor-pointer text-slate-500">+ Add</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Settings & Logo */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Logo</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <div className="h-32 w-32 rounded-lg bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                Logo
              </div>
              <Button variant="outline" size="sm">Upload New</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="email_leads" defaultChecked />
                <Label htmlFor="email_leads">Email me new leads</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="email_digest" defaultChecked />
                <Label htmlFor="email_digest">Weekly digest</Label>
              </div>
            </CardContent>
          </Card>
          
          <Button className="w-full bg-brand-orange hover:bg-brand-orange/90" size="lg">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}
