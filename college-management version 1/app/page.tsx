import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Users, UserCog } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <h1 className="text-2xl font-bold">College Management System</h1>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/admissions" className="font-medium transition-colors hover:text-primary">
              Admissions
            </Link>
            <Link href="/results" className="font-medium transition-colors hover:text-primary">
              Results
            </Link>
            <Link href="/teachers" className="font-medium transition-colors hover:text-primary">
              Teachers
            </Link>
            <Link href="/students" className="font-medium transition-colors hover:text-primary">
              Students
            </Link>
          </nav>
          <Button variant="outline" size="sm">
            Login
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Comprehensive College Management Solution
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Streamline admissions, manage results, and keep track of teachers and students all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
            <Card className="flex flex-col items-center justify-between p-2">
              <CardHeader className="items-center pb-2">
                <GraduationCap className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Admissions</CardTitle>
                <CardDescription className="text-center">
                  Manage the entire admission process from application to enrollment
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/admissions">View System</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-between p-2">
              <CardHeader className="items-center pb-2">
                <BookOpen className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Results</CardTitle>
                <CardDescription className="text-center">
                  Record, analyze, and publish academic results efficiently
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/results">View System</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-between p-2">
              <CardHeader className="items-center pb-2">
                <UserCog className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Teachers</CardTitle>
                <CardDescription className="text-center">
                  Complete teacher management with profiles, schedules, and performance tracking
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/teachers">View System</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-between p-2">
              <CardHeader className="items-center pb-2">
                <Users className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Students</CardTitle>
                <CardDescription className="text-center">
                  Comprehensive student management with profiles and academic tracking
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/students">View System</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} College Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
