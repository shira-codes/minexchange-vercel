
import * as React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { InsightsSidebar } from "./InsightsSidebar"
import { useDemo } from "@/context/DemoContext"

export function InsightsLayout() {
  const { isAuthenticated, userRole } = useDemo()

  // Logic to determine if sidebar should be shown
  const showSidebar = isAuthenticated && userRole === 'service_provider';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F6] font-sans">
      <Header />
      <div className="flex flex-1 container mx-auto max-w-[1600px] px-4 md:px-6 py-6 gap-6">
        {showSidebar && <InsightsSidebar />}
        <main className="flex-1 overflow-x-hidden min-h-[800px]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
