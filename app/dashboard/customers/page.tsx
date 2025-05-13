"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpDown, Download, Filter, MoreHorizontal, Plus, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Sample customers data
  const customers = [
    {
      id: "CUST-001",
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      phone: "+91 98765 43210",
      orders: 24,
      spent: "₹24,500",
      status: "Active",
      lastOrder: "2 days ago",
    },
    {
      id: "CUST-002",
      name: "Priya Patel",
      email: "priya.patel@example.com",
      phone: "+91 87654 32109",
      orders: 18,
      spent: "₹18,750",
      status: "Active",
      lastOrder: "5 days ago",
    },
    {
      id: "CUST-003",
      name: "Amit Kumar",
      email: "amit.kumar@example.com",
      phone: "+91 76543 21098",
      orders: 32,
      spent: "₹36,200",
      status: "Active",
      lastOrder: "Yesterday",
    },
    {
      id: "CUST-004",
      name: "Neha Singh",
      email: "neha.singh@example.com",
      phone: "+91 65432 10987",
      orders: 15,
      spent: "₹12,850",
      status: "Inactive",
      lastOrder: "1 week ago",
    },
    {
      id: "CUST-005",
      name: "Vikram Mehta",
      email: "vikram.mehta@example.com",
      phone: "+91 54321 09876",
      orders: 27,
      spent: "₹29,400",
      status: "Active",
      lastOrder: "3 days ago",
    },
    {
      id: "CUST-006",
      name: "Ananya Desai",
      email: "ananya.desai@example.com",
      phone: "+91 43210 98765",
      orders: 12,
      spent: "₹9,800",
      status: "Active",
      lastOrder: "4 days ago",
    },
    {
      id: "CUST-007",
      name: "Rajesh Gupta",
      email: "rajesh.gupta@example.com",
      phone: "+91 32109 87654",
      orders: 8,
      spent: "₹7,600",
      status: "Inactive",
      lastOrder: "2 weeks ago",
    },
    {
      id: "CUST-008",
      name: "Kavita Reddy",
      email: "kavita.reddy@example.com",
      phone: "+91 21098 76543",
      orders: 21,
      spent: "₹19,250",
      status: "Active",
      lastOrder: "1 day ago",
    },
    {
      id: "CUST-009",
      name: "Suresh Iyer",
      email: "suresh.iyer@example.com",
      phone: "+91 10987 65432",
      orders: 5,
      spent: "₹4,500",
      status: "Inactive",
      lastOrder: "3 weeks ago",
    },
    {
      id: "CUST-010",
      name: "Meera Joshi",
      email: "meera.joshi@example.com",
      phone: "+91 09876 54321",
      orders: 16,
      spent: "₹15,700",
      status: "Active",
      lastOrder: "2 days ago",
    },
  ]

  // Filter customers based on search term and status
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || customer.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-400/20 text-green-400"
      case "Inactive":
        return "bg-gray-400/20 text-gray-400"
      default:
        return "bg-gray-400/20 text-gray-400"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customers</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Plus className="mr-2 h-4 w-4" /> Add Customer
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 border-gray-800">
            <DialogHeader>
              <DialogTitle>Add New Customer</DialogTitle>
              <DialogDescription>Add a new customer to your database.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First name
                  </label>
                  <Input id="first-name" className="bg-gray-800 border-gray-700" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input id="last-name" className="bg-gray-800 border-gray-700" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" className="bg-gray-800 border-gray-700" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input id="phone" className="bg-gray-800 border-gray-700" />
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium">
                  Address
                </label>
                <Textarea id="address" className="bg-gray-800 border-gray-700" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Add Customer</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="all">All Customers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Customer Management</CardTitle>
              <CardDescription>Manage your customer database and track their orders.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search customers..."
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
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
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
                          ID
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1">
                          Customer
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead>Last Order</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCustomers.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-8 text-gray-400">
                          No customers found matching your criteria
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredCustomers.map((customer, index) => (
                        <motion.tr
                          key={customer.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="border-t border-gray-800 hover:bg-gray-800/50"
                        >
                          <TableCell className="font-medium">{customer.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                                <User className="h-4 w-4 text-gray-400" />
                              </div>
                              <div>
                                <div className="font-medium">{customer.name}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{customer.email}</div>
                              <div className="text-gray-400">{customer.phone}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs ${getStatusColor(customer.status)}`}>
                              {customer.status}
                            </span>
                          </TableCell>
                          <TableCell>{customer.orders}</TableCell>
                          <TableCell>{customer.spent}</TableCell>
                          <TableCell>{customer.lastOrder}</TableCell>
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
                                  Edit customer
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 cursor-pointer">
                                  View orders
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-gray-800" />
                                <DropdownMenuItem className="text-red-400 hover:bg-gray-800 focus:bg-gray-800 cursor-pointer">
                                  Delete customer
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
                Showing <span className="font-medium text-white">{filteredCustomers.length}</span> of{" "}
                <span className="font-medium text-white">{customers.length}</span> customers
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-6">
          {/* Active customers content - similar to "all" but filtered */}
        </TabsContent>
        <TabsContent value="inactive" className="space-y-6">
          {/* Inactive customers content - similar to "all" but filtered */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
