"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpDown, ChevronLeft, ChevronRight, Download, Filter, MoreHorizontal, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Sample orders data
  const orders = [
    {
      id: "ORD-7352",
      customer: "Rahul Sharma",
      status: "Delivered",
      date: "May 12, 2025",
      amount: "₹2,345",
      items: 3,
    },
    {
      id: "ORD-7351",
      customer: "Priya Patel",
      status: "Processing",
      date: "May 12, 2025",
      amount: "₹1,756",
      items: 2,
    },
    {
      id: "ORD-7350",
      customer: "Amit Kumar",
      status: "Pending",
      date: "May 11, 2025",
      amount: "₹4,890",
      items: 5,
    },
    {
      id: "ORD-7349",
      customer: "Neha Singh",
      status: "Delivered",
      date: "May 11, 2025",
      amount: "₹2,150",
      items: 1,
    },
    {
      id: "ORD-7348",
      customer: "Vikram Mehta",
      status: "Cancelled",
      date: "May 10, 2025",
      amount: "₹3,450",
      items: 4,
    },
    {
      id: "ORD-7347",
      customer: "Ananya Desai",
      status: "Delivered",
      date: "May 10, 2025",
      amount: "₹1,890",
      items: 2,
    },
    {
      id: "ORD-7346",
      customer: "Rajesh Gupta",
      status: "Processing",
      date: "May 9, 2025",
      amount: "₹5,670",
      items: 7,
    },
    {
      id: "ORD-7345",
      customer: "Kavita Reddy",
      status: "Pending",
      date: "May 9, 2025",
      amount: "₹2,340",
      items: 3,
    },
    {
      id: "ORD-7344",
      customer: "Suresh Iyer",
      status: "Delivered",
      date: "May 8, 2025",
      amount: "₹1,450",
      items: 1,
    },
    {
      id: "ORD-7343",
      customer: "Meera Joshi",
      status: "Cancelled",
      date: "May 8, 2025",
      amount: "₹3,780",
      items: 4,
    },
  ]

  // Filter orders based on search term and status
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
          <Link href="/dashboard/new-order">New Order</Link>
        </Button>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
          <CardDescription>Manage and track your orders from ONDC and other channels.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search orders..."
                className="pl-9 bg-gray-800 border-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-gray-800">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-gray-800/50 bg-gray-900">
                  <TableHead className="w-[100px]">
                    <div className="flex items-center gap-1">
                      Order ID
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-400">
                      No orders found matching your criteria
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredOrders.map((order, index) => (
                    <motion.tr
                      key={order.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="border-t border-gray-800 hover:bg-gray-800/50"
                    >
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell className="text-right">{order.amount}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-gray-800" />
                            <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 cursor-pointer">
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 cursor-pointer">
                              Update status
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 cursor-pointer">
                              Print invoice
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-800" />
                            <DropdownMenuItem className="text-red-400 hover:bg-gray-800 focus:bg-gray-800 cursor-pointer">
                              Cancel order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </motion.tr>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Showing <span className="font-medium text-white">{filteredOrders.length}</span> of{" "}
            <span className="font-medium text-white">{orders.length}</span> orders
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="bg-gray-800">
              1
            </Button>
            <Button variant="ghost">2</Button>
            <Button variant="ghost">3</Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
