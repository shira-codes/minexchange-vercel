
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Eye, MessageSquare } from "lucide-react"
import { Link } from "react-router-dom"

export default function InsightsServiceListings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Service Listings</h1>
          <p className="text-slate-600">Manage your services visible in the Marketplace.</p>
        </div>
        <Button className="bg-brand-orange hover:bg-brand-orange/90" asChild>
          <Link to="/marketplace/provider/services/new">
            <Plus className="h-4 w-4 mr-2" />
            Add New Service
          </Link>
        </Button>
      </div>

      <div className="grid gap-4">
        {/* Service Card 1 */}
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-lg text-slate-900">RC Drilling - Western Australia</h3>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">Published</Badge>
              </div>
              <p className="text-sm text-slate-500">Category: Drilling & Blasting • Updated 2 days ago</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4 text-slate-400" />
                  <span>124 Views</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4 text-slate-400" />
                  <span>8 Enquiries</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Card 2 */}
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-lg text-slate-900">Diamond Drilling - Queensland</h3>
                <Badge variant="secondary" className="text-slate-600">Draft</Badge>
              </div>
              <p className="text-sm text-slate-500">Category: Drilling & Blasting • Updated 1 week ago</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
