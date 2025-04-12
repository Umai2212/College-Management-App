import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Filter, Download, Plus, Search } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { Input } from "@/components/ui/input"
import AdmissionForm from "@/components/admission-form"

export default function AdmissionsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admissions Management</h1>
          <p className="text-muted-foreground">Manage the entire admission process from application to enrollment</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Application
        </Button>
      </div>

      <Tabs defaultValue="applications" className="space-y-4">
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="waitlisted">Waitlisted</TabsTrigger>
          <TabsTrigger value="new-application">New Application</TabsTrigger>
        </TabsList>
        <TabsContent value="applications" className="space-y-4">
          <div className="flex justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Search applications..." />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex space-x-2">
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
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>You have 128 applications pending review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "APP-2023-001",
                    name: "John Smith",
                    program: "Computer Science",
                    date: "2023-05-15",
                    status: "pending",
                  },
                  {
                    id: "APP-2023-002",
                    name: "Emily Johnson",
                    program: "Business Administration",
                    date: "2023-05-14",
                    status: "pending",
                  },
                  {
                    id: "APP-2023-003",
                    name: "Michael Brown",
                    program: "Electrical Engineering",
                    date: "2023-05-13",
                    status: "pending",
                  },
                  {
                    id: "APP-2023-004",
                    name: "Sarah Davis",
                    program: "Psychology",
                    date: "2023-05-12",
                    status: "pending",
                  },
                  {
                    id: "APP-2023-005",
                    name: "David Wilson",
                    program: "Mathematics",
                    date: "2023-05-11",
                    status: "pending",
                  },
                ].map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{application.name}</p>
                        <p className="text-sm text-muted-foreground">{application.program}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{application.id}</p>
                        <p className="text-sm text-muted-foreground">{application.date}</p>
                      </div>
                      <Badge variant={application.status === "pending" ? "outline" : "default"}>
                        {application.status === "pending" ? "Pending" : application.status}
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
        <TabsContent value="approved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Approved Applications</CardTitle>
              <CardDescription>Applications that have been approved for admission</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "APP-2023-006",
                    name: "Robert Taylor",
                    program: "Computer Science",
                    date: "2023-05-10",
                    status: "approved",
                  },
                  {
                    id: "APP-2023-007",
                    name: "Jennifer Martinez",
                    program: "Business Administration",
                    date: "2023-05-09",
                    status: "approved",
                  },
                  {
                    id: "APP-2023-008",
                    name: "William Anderson",
                    program: "Mechanical Engineering",
                    date: "2023-05-08",
                    status: "approved",
                  },
                ].map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-green-100 p-2">
                        <GraduationCap className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">{application.name}</p>
                        <p className="text-sm text-muted-foreground">{application.program}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{application.id}</p>
                        <p className="text-sm text-muted-foreground">{application.date}</p>
                      </div>
                      <Badge variant="success">Approved</Badge>
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
        <TabsContent value="rejected" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rejected Applications</CardTitle>
              <CardDescription>Applications that have been rejected</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "APP-2023-009",
                    name: "Thomas Jackson",
                    program: "Physics",
                    date: "2023-05-07",
                    status: "rejected",
                  },
                  {
                    id: "APP-2023-010",
                    name: "Lisa White",
                    program: "Chemistry",
                    date: "2023-05-06",
                    status: "rejected",
                  },
                ].map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-red-100 p-2">
                        <GraduationCap className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">{application.name}</p>
                        <p className="text-sm text-muted-foreground">{application.program}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{application.id}</p>
                        <p className="text-sm text-muted-foreground">{application.date}</p>
                      </div>
                      <Badge variant="destructive">Rejected</Badge>
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
        <TabsContent value="waitlisted" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Waitlisted Applications</CardTitle>
              <CardDescription>Applications that have been waitlisted</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "APP-2023-011",
                    name: "Kevin Harris",
                    program: "Civil Engineering",
                    date: "2023-05-05",
                    status: "waitlisted",
                  },
                  {
                    id: "APP-2023-012",
                    name: "Amanda Lewis",
                    program: "Architecture",
                    date: "2023-05-04",
                    status: "waitlisted",
                  },
                ].map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-yellow-100 p-2">
                        <GraduationCap className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">{application.name}</p>
                        <p className="text-sm text-muted-foreground">{application.program}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{application.id}</p>
                        <p className="text-sm text-muted-foreground">{application.date}</p>
                      </div>
                      <Badge variant="warning">Waitlisted</Badge>
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
        <TabsContent value="new-application">
          <AdmissionForm />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
