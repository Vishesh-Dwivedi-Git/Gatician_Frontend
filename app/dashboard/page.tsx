"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowDown, ArrowRight, ArrowUp, Clock, DollarSign, Package, ShoppingCart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          <Plus className="mr-2 h-4 w-4" /> New Order
        </Button>
      </div>

      <StatsCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentOrdersCard />
        <PerformanceCard />
      </div>
      <CustomerOverviewCard />
    </div>
  )
}

function StatsCards() {
  const ref = useRef<Element | null>(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const stats = [
    {
      title: "Total Orders",
      value: "1,284",
      change: "+12.5%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      title: "Total Customers",
      value: "843",
      change: "+7.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      title: "Pending Orders",
      value: "32",
      change: "-2.5%",
      trend: "down",
      icon: Clock,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      title: "Revenue",
      value: "₹94,256",
      change: "+18.3%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {stats.map((stat, index) => (
        <motion.div key={index} variants={item}>
          <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
              <div className={`p-2 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center mt-1">
                {stat.trend === "up" ? (
                  <ArrowUp className="h-4 w-4 text-green-400 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-400 mr-1" />
                )}
                <p className={stat.trend === "up" ? "text-green-400" : "text-red-400"}>{stat.change}</p>
                <p className="text-gray-400 text-xs ml-1">from last month</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

function RecentOrdersCard() {
  const orders = [
    {
      id: "ORD-7352",
      customer: "Rahul Sharma",
      status: "Delivered",
      date: "2 hours ago",
      amount: "₹2,345",
    },
    {
      id: "ORD-7351",
      customer: "Priya Patel",
      status: "Processing",
      date: "5 hours ago",
      amount: "₹1,756",
    },
    {
      id: "ORD-7350",
      customer: "Amit Kumar",
      status: "Pending",
      date: "Yesterday",
      amount: "₹4,890",
    },
    {
      id: "ORD-7349",
      customer: "Neha Singh",
      status: "Delivered",
      date: "Yesterday",
      amount: "₹2,150",
    },
    {
      id: "ORD-7348",
      customer: "Vikram Mehta",
      status: "Cancelled",
      date: "2 days ago",
      amount: "₹3,450",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-400/20 text-green-400"
      case "Processing":
        return "bg-blue-400/20 text-blue-400"
      case "Pending":
        return "bg-yellow-400/20 text-yellow-400"
      case "Cancelled":
        return "bg-red-400/20 text-red-400"
      default:
        return "bg-gray-400/20 text-gray-400"
    }
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl">Recent Orders</CardTitle>
        <CardDescription>You have {orders.length} orders this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between border-b border-gray-800 pb-4 last:border-0"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-gray-800">
                  <Package className="h-4 w-4 text-yellow-400" />
                </div>
                <div>
                  <div className="font-medium">{order.customer}</div>
                  <div className="text-sm text-gray-400">
                    {order.id} • {order.date}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`px-2.5 py-0.5 rounded-full text-xs ${getStatusColor(order.status)}`}>
                  {order.status}
                </div>
                <div className="font-medium">{order.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full" asChild>
          <Link href="/dashboard/orders">
            View All Orders <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function PerformanceCard() {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl">Performance</CardTitle>
        <CardDescription>Your store performance this month</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="sales">
          <TabsList className="grid grid-cols-3 bg-gray-800">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>
          <TabsContent value="sales" className="pt-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold">₹94,256</div>
                  <div className="text-sm text-gray-400">Total Sales</div>
                </div>
                <div className="flex items-center text-green-400">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  18.3%
                </div>
              </div>
              <div className="h-[200px] flex items-end gap-2">
                {[40, 70, 45, 90, 60, 80, 95, 60, 70, 65, 75, 85].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-yellow-400/20 hover:bg-yellow-400/30 transition-colors rounded-sm"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="text-xs text-gray-400">{i + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="orders" className="pt-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold">1,284</div>
                  <div className="text-sm text-gray-400">Total Orders</div>
                </div>
                <div className="flex items-center text-green-400">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  12.5%
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Delivered</div>
                    <div className="text-sm text-gray-400">78%</div>
                  </div>
                  <Progress value={78} className="h-2 bg-gray-800 [&_.progress-bar]:bg-green-400" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Processing</div>
                    <div className="text-sm text-gray-400">14%</div>
                  </div>
                  <Progress value={14} className="h-2 bg-gray-800 [&_.progress-bar]:bg-blue-400" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Pending</div>
                    <div className="text-sm text-gray-400">5%</div>
                  </div>
                  <Progress value={5} className="h-2 bg-gray-800" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Cancelled</div>
                    <div className="text-sm text-gray-400">3%</div>
                  </div>
                  <Progress value={3} className="h-2 bg-gray-800 [&_.progress-bar]:bg-red-400" />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="customers" className="pt-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold">843</div>
                  <div className="text-sm text-gray-400">Total Customers</div>
                </div>
                <div className="flex items-center text-green-400">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  7.2%
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">New Customers</div>
                    <div className="text-sm text-gray-400">124</div>
                  </div>
                  <Progress value={15} className="h-2 bg-gray-800 [&_.progress-bar]:bg-yellow-400" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">Returning Customers</div>
                    <div className="text-sm text-gray-400">719</div>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-800 [&_.progress-bar]:bg-blue-400" />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function CustomerOverviewCard() {
  const customers = [
    {
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      orders: 24,
      spent: "₹24,500",
      lastOrder: "2 days ago",
    },
    {
      name: "Priya Patel",
      email: "priya.patel@example.com",
      orders: 18,
      spent: "₹18,750",
      lastOrder: "5 days ago",
    },
    {
      name: "Amit Kumar",
      email: "amit.kumar@example.com",
      orders: 32,
      spent: "₹36,200",
      lastOrder: "Yesterday",
    },
    {
      name: "Neha Singh",
      email: "neha.singh@example.com",
      orders: 15,
      spent: "₹12,850",
      lastOrder: "1 week ago",
    },
    {
      name: "Vikram Mehta",
      email: "vikram.mehta@example.com",
      orders: 27,
      spent: "₹29,400",
      lastOrder: "3 days ago",
    },
  ]

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl">Top Customers</CardTitle>
          <CardDescription>Your most valuable customers</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left font-medium text-gray-400 py-3">Customer</th>
                <th className="text-left font-medium text-gray-400 py-3">Orders</th>
                <th className="text-left font-medium text-gray-400 py-3">Total Spent</th>
                <th className="text-left font-medium text-gray-400 py-3">Last Order</th>
                <th className="text-right font-medium text-gray-400 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="border-b border-gray-800 last:border-0">
                  <td className="py-3">
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-400">{customer.email}</div>
                    </div>
                  </td>
                  <td className="py-3">{customer.orders}</td>
                  <td className="py-3">{customer.spent}</td>
                  <td className="py-3">{customer.lastOrder}</td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full" asChild>
          <Link href="/dashboard/customers">
            View All Customers <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function Plus({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
