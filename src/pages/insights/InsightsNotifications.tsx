
import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function InsightsNotifications() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Notification Settings</h1>
        <p className="text-slate-600">Control what you get alerted about.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Manage your email preferences for leads and signals.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="flex items-center justify-between space-x-2">
            <div className="space-y-0.5">
              <Label className="text-base">New Leads</Label>
              <p className="text-sm text-slate-500">Get notified immediately when a high-match lead is posted.</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <div className="space-y-0.5">
              <Label className="text-base">Lead Status Changes</Label>
              <p className="text-sm text-slate-500">Notify me if a lead I saved is updated or closed.</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <div className="space-y-0.5">
              <Label className="text-base">Market Signals</Label>
              <p className="text-sm text-slate-500">Alerts for funding rounds and license grants in my regions.</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <div className="space-y-0.5">
              <Label className="text-base">Weekly Digest</Label>
              <p className="text-sm text-slate-500">A summary of activity and performance metrics.</p>
            </div>
            <Switch defaultChecked />
          </div>

        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button className="bg-brand-orange hover:bg-brand-orange/90">Save Preferences</Button>
      </div>
    </div>
  )
}
