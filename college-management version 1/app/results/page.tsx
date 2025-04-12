import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Filter, Download, Plus, Search, FileText } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ResultEntryForm from "@/components/result-entry-form"

export default function ResultsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Results Management</h1>
          <p className="text-muted-foreground">Manage and publish academic results</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Results
        </Button>
      </div>

      <Tabs defaultValue="all-results" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all-results">All Results</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="entry-form">Result Entry</TabsTrigger>
        </TabsList>
        <TabsContent value="all-results" className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Search results..." />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall-2023">Fall 2023</SelectItem>
                  <SelectItem value="spring-2023">Spring 2023</SelectItem>
                  <SelectItem value="fall-2022">Fall 2022</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Academic Results</CardTitle>
              <CardDescription>View and manage all academic results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "RES-2023-001",
                    course: "Introduction to Computer Science",
                    department: "Computer Science",
                    semester: "Fall 2023",
                    status: "published",
                  },
                  {
                    id: "RES-2023-002",
                    course: "Business Ethics",
                    department: "Business Administration",
                    semester: "Fall 2023",
                    status: "published",
                  },
                  {
                    id: "RES-2023-003",
                    course: "Calculus I",
                    department: "Mathematics",
                    semester: "Fall 2023",
                    status: "draft",
                  },
                  {
                    id: "RES-2023-004",
                    course: "Introduction to Psychology",
                    department: "Psychology",
                    semester: "Fall 2023",
                    status: "published",
                  },
                  {
                    id: "RES-2023-005",
                    course: "Digital Electronics",
                    department: "Electrical Engineering",
                    semester: "Fall 2023",
                    status: "draft",
                  },
                ].map((result) => (
                  <div key={result.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{result.course}</p>
                        <p className="text-sm text-muted-foreground">{result.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{result.id}</p>
                        <p className="text-sm text-muted-foreground">{result.semester}</p>
                      </div>
                      <Badge variant={result.status === "published" ? "default" : "outline"}>
                        {result.status === "published" ? "Published" : "Draft"}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="published" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Published Results</CardTitle>
              <CardDescription>Results that have been published and are visible to students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "RES-2023-001",
                    course: "Introduction to Computer Science",
                    department: "Computer Science",
                    semester: "Fall 2023",
                    status: "published",
                    date: "2023-12-15",
                  },
                  {
                    id: "RES-2023-002",
                    course: "Business Ethics",
                    department: "Business Administration",
                    semester: "Fall 2023",
                    status: "published",
                    date: "2023-12-14",
                  },
                  {
                    id: "RES-2023-004",
                    course: "Introduction to Psychology",
                    department: "Psychology",
                    semester: "Fall 2023",
                    status: "published",
                    date: "2023-12-12",
                  },
                ].map((result) => (
                  <div key={result.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-green-100 p-2">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">{result.course}</p>
                        <p className="text-sm text-muted-foreground">{result.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">Published on: {result.date}</p>
                        <p className="text-sm text-muted-foreground">{result.semester}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="draft" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Draft Results</CardTitle>
              <CardDescription>Results that are still in draft mode and not visible to students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "RES-2023-003",
                    course: "Calculus I",
                    department: "Mathematics",
                    semester: "Fall 2023",
                    status: "draft",
                    lastEdited: "2023-12-10",
                  },
                  {
                    id: "RES-2023-005",
                    course: "Digital Electronics",
                    department: "Electrical Engineering",
                    semester: "Fall 2023",
                    status: "draft",
                    lastEdited: "2023-12-08",
                  },
                ].map((result) => (
                  <div key={result.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-yellow-100 p-2">
                        <FileText className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">{result.course}</p>
                        <p className="text-sm text-muted-foreground">{result.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">Last edited: {result.lastEdited}</p>
                        <p className="text-sm text-muted-foreground">{result.semester}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="default" size="sm">
                        Publish
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="entry-form">
          <ResultEntryForm />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
