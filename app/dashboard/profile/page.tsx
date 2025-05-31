"use client"

import { useState } from "react"
import { Calendar, Camera, CreditCard, Edit, Globe, Mail, Phone, Shield, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-gray-400">Manage your account settings and preferences</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-gray-800 hover:bg-gray-900 text-gray-400 hover:text-white">
            Cancel Changes
          </Button>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Save Changes</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Summary Card */}
        <Card className="bg-gray-950 border-gray-800 col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Profile Summary</CardTitle>
            <CardDescription className="text-gray-400">Your public profile information</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center pt-4 pb-6">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border-2 border-yellow-400/50">
                <User className="h-12 w-12 text-gray-400" />
              </div>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-400 text-sm">Product Manager</p>
            <Badge variant="outline" className="mt-2 border-yellow-400/30 text-yellow-400 bg-yellow-400/10">
              Premium Account
            </Badge>

            <div className="w-full mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">john.doe@example.com</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">New York, USA</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-800 pt-4 flex justify-center">
            <Button variant="ghost" className="text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </CardFooter>
        </Card>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-3 bg-gray-900 border border-gray-800">
              <TabsTrigger
                value="personal"
                className="data-[state=active]:bg-yellow-400/10 data-[state=active]:text-yellow-400"
              >
                Personal
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-yellow-400/10 data-[state=active]:text-yellow-400"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-yellow-400/10 data-[state=active]:text-yellow-400"
              >
                Notifications
              </TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal">
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription className="text-gray-400">Update your personal details</CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? (
                        <>
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </>
                      ) : (
                        <>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        defaultValue="John"
                        disabled={!isEditing}
                        className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        defaultValue="Doe"
                        disabled={!isEditing}
                        className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@example.com"
                      disabled={!isEditing}
                      className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        defaultValue="+1 (555) 123-4567"
                        disabled={!isEditing}
                        className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <div className="relative">
                        <Input
                          id="dob"
                          type="date"
                          defaultValue="1990-01-01"
                          disabled={!isEditing}
                          className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                        />
                        <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      defaultValue="Acme Inc."
                      disabled={!isEditing}
                      className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select disabled={!isEditing} defaultValue="product-manager">
                      <SelectTrigger className="bg-gray-900 border-gray-800 focus:ring-yellow-400">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800">
                        <SelectItem value="ceo">CEO</SelectItem>
                        <SelectItem value="cto">CTO</SelectItem>
                        <SelectItem value="product-manager">Product Manager</SelectItem>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Write a short bio about yourself..."
                      defaultValue="Product Manager with 5+ years of experience in retail technology and supply chain optimization."
                      disabled={!isEditing}
                      className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400 min-h-[100px]"
                    />
                  </div>
                </CardContent>
                {isEditing && (
                  <CardFooter className="border-t border-gray-800 pt-4 flex justify-end gap-2">
                    <Button
                      variant="outline"
                      className="border-gray-800 hover:bg-gray-900 text-gray-400 hover:text-white"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Save Changes</Button>
                  </CardFooter>
                )}
              </Card>

              <Card className="bg-gray-950 border-gray-800 mt-6">
                <CardHeader>
                  <CardTitle>Address Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    Update your shipping and billing addresses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      defaultValue="123 Main Street"
                      disabled={!isEditing}
                      className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        defaultValue="New York"
                        disabled={!isEditing}
                        className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        defaultValue="NY"
                        disabled={!isEditing}
                        className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input
                        id="zip"
                        defaultValue="10001"
                        disabled={!isEditing}
                        className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select disabled={!isEditing} defaultValue="us">
                      <SelectTrigger className="bg-gray-900 border-gray-800 focus:ring-yellow-400">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800">
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                {isEditing && (
                  <CardFooter className="border-t border-gray-800 pt-4 flex justify-end gap-2">
                    <Button
                      variant="outline"
                      className="border-gray-800 hover:bg-gray-900 text-gray-400 hover:text-white"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Save Changes</Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription className="text-gray-400">Change your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-gray-900 border-gray-800 focus-visible:ring-yellow-400"
                    />
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-800 pt-4 flex justify-between">
                  <div className="text-sm text-gray-400">Password must be at least 8 characters long</div>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Update Password</Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-950 border-gray-800 mt-6">
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription className="text-gray-400">
                    Add an extra layer of security to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-yellow-400/10">
                        <Shield className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="font-medium">Authenticator App</p>
                        <p className="text-sm text-gray-400">Use an authenticator app to generate one-time codes</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                  <Separator className="bg-gray-800" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gray-800">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium">SMS Authentication</p>
                        <p className="text-sm text-gray-400">Receive a code via SMS to verify your identity</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-950 border-gray-800 mt-6">
                <CardHeader>
                  <CardTitle>Active Sessions</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your active sessions across devices
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-yellow-400/10">
                        <Globe className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="font-medium">Chrome on MacOS</p>
                        <p className="text-xs text-gray-400">New York, USA • Current session</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">Active</Badge>
                  </div>
                  <Separator className="bg-gray-800" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gray-800">
                        <Globe className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium">Safari on iPhone</p>
                        <p className="text-xs text-gray-400">New York, USA • Last active: 2 hours ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10">
                      Revoke
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-800 pt-4">
                  <Button
                    variant="outline"
                    className="border-gray-800 hover:bg-gray-900 text-gray-400 hover:text-white w-full"
                  >
                    Sign Out From All Devices
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription className="text-gray-400">Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-gray-400">Receive updates about your orders</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator className="bg-gray-800" />
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">New Features</p>
                          <p className="text-sm text-gray-400">Learn about new features and updates</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator className="bg-gray-800" />
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Marketing</p>
                          <p className="text-sm text-gray-400">Receive marketing emails and promotions</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order Status</p>
                          <p className="text-sm text-gray-400">Get notified when order status changes</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator className="bg-gray-800" />
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Inventory Alerts</p>
                          <p className="text-sm text-gray-400">Get notified about low inventory</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator className="bg-gray-800" />
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Analytics Reports</p>
                          <p className="text-sm text-gray-400">Weekly analytics and performance reports</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-800 pt-4 flex justify-end">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Save Preferences</Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-950 border-gray-800 mt-6">
                <CardHeader>
                  <CardTitle>Subscription</CardTitle>
                  <CardDescription className="text-gray-400">Manage your subscription and billing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Premium Plan</h3>
                      <p className="text-sm text-gray-400">$49.99/month • Renews on June 15, 2025</p>
                    </div>
                    <Badge className="bg-yellow-400/20 text-yellow-400">Active</Badge>
                  </div>
                  <Separator className="bg-gray-800" />
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gray-800">
                      <CreditCard className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium">Payment Method</p>
                      <p className="text-sm text-gray-400">Visa ending in 4242</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row gap-2 sm:justify-between">
                  <Button
                    variant="outline"
                    className="border-gray-800 hover:bg-gray-900 text-gray-400 hover:text-white sm:w-auto w-full"
                  >
                    Update Payment Method
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-900/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 sm:w-auto w-full"
                  >
                    Cancel Subscription
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
