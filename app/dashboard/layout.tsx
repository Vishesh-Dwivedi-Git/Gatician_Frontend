"use client"

import type React from "react"

import { useState, Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import {
  BarChart3,
  Bell,
  ChevronDown,
  Home,
  LogOut,
  Menu,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: ShoppingCart, label: "Orders", href: "/dashboard/orders" },
    { icon: Plus, label: "New Order", href: "/dashboard/new-order" },
    { icon: Users, label: "Customers", href: "/dashboard/customers" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-950 border-r border-gray-800 fixed inset-y-0">
        <div className="p-4 border-b border-gray-800 flex items-center gap-2">
          <Package className="h-6 w-6 text-yellow-400" />
          <span className="font-bold text-lg">GATICIAN</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive ? "bg-yellow-400/10 text-yellow-400" : "text-gray-400 hover:text-white hover:bg-gray-900"
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? "text-yellow-400" : ""}`} />
                <span>{item.label}</span>
                {item.label === "Orders" && (
                  <span className="ml-auto bg-yellow-400/20 text-yellow-400 text-xs px-2 py-0.5 rounded-full">12</span>
                )}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white" asChild>
            <Link href="/logout" className="flex items-center gap-3">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </Button>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0 bg-gray-950 border-r border-gray-800">
          <div className="p-4 border-b border-gray-800 flex items-center gap-2">
            <Package className="h-6 w-6 text-yellow-400" />
            <span className="font-bold text-lg">GATICIAN</span>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    isActive ? "bg-yellow-400/10 text-yellow-400" : "text-gray-400 hover:text-white hover:bg-gray-900"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? "text-yellow-400" : ""}`} />
                  <span>{item.label}</span>
                  {item.label === "Orders" && (
                    <span className="ml-auto bg-yellow-400/20 text-yellow-400 text-xs px-2 py-0.5 rounded-full">
                      12
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>
          <div className="p-4 border-t border-gray-800">
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white" asChild>
              <Link href="/logout" className="flex items-center gap-3">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1 md:ml-64 flex flex-col">
        {/* Topbar */}
        <header className="h-16 border-b border-gray-800 bg-gray-950 flex items-center justify-between px-4 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search..."
                className="pl-9 w-64 bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <span className="hidden md:inline-block">John Doe</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-800 text-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="flex-1 p-6"
            >
              {children}
            </motion.main>
          </AnimatePresence>
        </Suspense>
      </div>
    </div>
  )
}
