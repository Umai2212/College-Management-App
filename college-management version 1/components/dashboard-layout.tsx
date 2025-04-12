"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  GraduationCap,
  Users,
  UserCog,
  LayoutDashboard,
  Settings,
  Bell,
  Calendar,
  LogOut,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      href: "/admissions",
      label: "Admissions",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      href: "/results",
      label: "Results",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      href: "/teachers",
      label: "Teachers",
      icon: <UserCog className="h-5 w-5" />,
    },
    {
      href: "/students",
      label: "Students",
      icon: <Users className="h-5 w-5" />,
    },
    {
      href: "/calendar",
      label: "Calendar",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 sm:max-w-xs">
            <div className="flex h-16 items-center border-b px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <GraduationCap className="h-6 w-6" />
                <span>College Management</span>
              </Link>
            </div>
            <nav className="grid gap-2 p-4 text-lg font-medium">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground ${
                    pathname === route.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  }`}
                >
                  {route.icon}
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold md:hidden">
            <GraduationCap className="h-6 w-6" />
          </Link>
          <Link href="/" className="hidden items-center gap-2 font-semibold md:flex">
            <GraduationCap className="h-6 w-6" />
            <span>College Management System</span>
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r md:block">
          <nav className="grid gap-2 p-4 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground ${
                  pathname === route.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                }`}
              >
                {route.icon}
                {route.label}
              </Link>
            ))}
            <div className="mt-auto">
              <Button variant="outline" className="w-full justify-start gap-2 mt-6">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
