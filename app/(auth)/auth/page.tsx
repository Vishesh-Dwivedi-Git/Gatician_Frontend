
"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Package ,HomeIcon} from "lucide-react"
import Home from "@/app/page"

// Validation schemas
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password confirmation is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

// Form data types
type SignInFormData = z.infer<typeof signInSchema>
type SignUpFormData = z.infer<typeof signUpSchema>

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Initialize forms
  const signInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  })

  const signUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      password: "",
      confirmPassword: "",
    },
  })

  // Form submission handlers
  const onSignInSubmit = async (data: SignInFormData) => {
    setIsLoading(true)
    setError(null)
    try {
      // Replace with your actual sign-in API call
      console.log("Sign In:", data)
      // Redirect or update state on successful sign-in
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const onSignUpSubmit = async (data: SignUpFormData) => {
    setIsLoading(true)
    setError(null)
    try {
      // Replace with your actual sign-up API call
      console.log("Sign Up:", data)
      // Redirect or update state on successful sign-up
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-500 rounded-lg rotate-12 opacity-80"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-yellow-500 rounded-lg -rotate-45 opacity-70"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-orange-500 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <Link href="/" className="flex items-center space-x-2">
          <Package className="h-8 w-8 text-orange-500" />
          <span className="text-xl font-bold">GATICIAN</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="flex items-center text-gray-300 transition-colors hover:text-yellow-500">
  <HomeIcon className="h-5 w-5 mr-1" />
  Home
</Link>

         
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="w-full max-w-md">
          <Tabs value={activeTab} onValueChange={(value: string) => setActiveTab(value as "signin" | "signup")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-900 border border-gray-800">
              <TabsTrigger value="signin" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-white">Welcome Back</CardTitle>
                  <CardDescription className="text-gray-400">Sign in to your Gatician account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                  <form onSubmit={signInForm.handleSubmit(onSignInSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        {...signInForm.register("email")}
                      />
                      {signInForm.formState.errors.email && (
                        <p className="text-red-500 text-sm">{signInForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">
                        Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 pr-10"
                          {...signInForm.register("password")}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                      {signInForm.formState.errors.password && (
                        <p className="text-red-500 text-sm">{signInForm.formState.errors.password.message}</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <Link href="#" className="text-sm text-orange-500 hover:text-orange-400">
                        Forgot password?
                      </Link>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                    <div className="text-center text-sm text-gray-400">
                      {"Don't have an account? "}
                      <button
                        type="button"
                        onClick={() => setActiveTab("signup")}
                        className="text-orange-500 hover:text-orange-400"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-white">Create Account</CardTitle>
                  <CardDescription className="text-gray-400">
                    Join Gatician and streamline your retail operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                  <form onSubmit={signUpForm.handleSubmit(onSignUpSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                          {...signUpForm.register("firstName")}
                        />
                        {signUpForm.formState.errors.firstName && (
                          <p className="text-red-500 text-sm">{signUpForm.formState.errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                          {...signUpForm.register("lastName")}
                        />
                        {signUpForm.formState.errors.lastName && (
                          <p className="text-red-500 text-sm">{signUpForm.formState.errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signupEmail" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="signupEmail"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        {...signUpForm.register("email")}
                      />
                      {signUpForm.formState.errors.email && (
                        <p className="text-red-500 text-sm">{signUpForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Company
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        {...signUpForm.register("company")}
                      />
                      {signUpForm.formState.errors.company && (
                        <p className="text-red-500 text-sm">{signUpForm.formState.errors.company.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signupPassword" className="text-white">
                        Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="signupPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 pr-10"
                          {...signUpForm.register("password")}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                      {signUpForm.formState.errors.password && (
                        <p className="text-red-500 text-sm">{signUpForm.formState.errors.password.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 pr-10"
                          {...signUpForm.register("confirmPassword")}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                      {signUpForm.formState.errors.confirmPassword && (
                        <p className="text-red-500 text-sm">{signUpForm.formState.errors.confirmPassword.message}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                    <div className="text-center text-sm text-gray-400">
                      {"Already have an account? "}
                      <button
                        type="button"
                        onClick={() => setActiveTab("signin")}
                        className="text-orange-500 hover:text-orange-400"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
