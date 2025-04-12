import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Filter, Download, Plus, Search, Mail, Phone } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import TeacherForm from "@/components/teacher-form"

export default function TeachersPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teachers Management</h1>
          <p className="text-muted-foreground">Manage faculty members and their information</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Teacher
        </Button>
      </div>

      <Tabs defaultValue="all-teachers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all-teachers">All Teachers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="on-leave">On Leave</TabsTrigger>
          <TabsTrigger value="departments">By Department</TabsTrigger>
          <TabsTrigger value="add-teacher">Add Teacher</TabsTrigger>
        </TabsList>
        <TabsContent value="all-teachers" className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Search teachers..." />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
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
              <CardTitle>Faculty Members</CardTitle>
              <CardDescription>Manage all faculty members and their information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "TCH-001",
                    name: "Dr. Robert Johnson",
                    department: "Computer Science",
                    position: "Professor",
                    status: "active",
                    email: "r.johnson@example.edu",
                    phone: "+1 (555) 123-4567",
                  },
                  {
                    id: "TCH-002",
                    name: "Dr. Emily Williams",
                    department: "Business Administration",
                    position: "Associate Professor",
                    status: "active",
                    email: "e.williams@example.edu",
                    phone: "+1 (555) 234-5678",
                  },
                  {
                    id: "TCH-003",
                    name: "Prof. Michael Davis",
                    department: "Mathematics",
                    position: "Assistant Professor",
                    status: "on-leave",
                    email: "m.davis@example.edu",
                    phone: "+1 (555) 345-6789",
                  },
                  {
                    id: "TCH-004",
                    name: "Dr. Sarah Miller",
                    department: "Physics",
                    position: "Professor",
                    status: "active",
                    email: "s.miller@example.edu",
                    phone: "+1 (555) 456-7890",
                  },
                  {
                    id: "TCH-005",
                    name: "Prof. James Wilson",
                    department: "Engineering",
                    position: "Associate Professor",
                    status: "active",
                    email: "j.wilson@example.edu",
                    phone: "+1 (555) 567-8901",
                  },
                ].map((teacher) => (
                  <div key={teacher.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={teacher.name} />
                        <AvatarFallback>
                          {teacher.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{teacher.name}</p>
                        <p className="text-sm text-muted-foreground">{teacher.department}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{teacher.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{teacher.phone}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={teacher.status === "active" ? "default" : "outline"}>
                        {teacher.status === "active" ? "Active" : "On Leave"}
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
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Faculty Members</CardTitle>
              <CardDescription>Currently active faculty members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "TCH-001",
                    name: "Dr. Robert Johnson",
                    department: "Computer Science",
                    position: "Professor",
                    status: "active",
                    email: "r.johnson@example.edu",
                    phone: "+1 (555) 123-4567",
                  },
                  {
                    id: "TCH-002",
                    name: "Dr. Emily Williams",
                    department: "Business Administration",
                    position: "Associate Professor",
                    status: "active",
                    email: "e.williams@example.edu",
                    phone: "+1 (555) 234-5678",
                  },
                  {
                    id: "TCH-004",
                    name: "Dr. Sarah Miller",
                    department: "Physics",
                    position: "Professor",
                    status: "active",
                    email: "s.miller@example.edu",
                    phone: "+1 (555) 456-7890",
                  },
                  {
                    id: "TCH-005",
                    name: "Prof. James Wilson",
                    department: "Engineering",
                    position: "Associate Professor",
                    status: "active",
                    email: "j.wilson@example.edu",
                    phone: "+1 (555) 567-8901",
                  },
                ].map((teacher) => (
                  <div key={teacher.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={teacher.name} />
                        <AvatarFallback>
                          {teacher.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{teacher.name}</p>
                        <p className="text-sm text-muted-foreground">{teacher.department}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{teacher.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
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
        <TabsContent value="on-leave" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Faculty Members on Leave</CardTitle>
              <CardDescription>Faculty members currently on leave</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "TCH-003",
                    name: "Prof. Michael Davis",
                    department: "Mathematics",
                    position: "Assistant Professor",
                    status: "on-leave",
                    email: "m.davis@example.edu",
                    phone: "+1 (555) 345-6789",
                    leaveEnd: "2023-12-31",
                  },
                ].map((teacher) => (
                  <div key={teacher.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={teacher.name} />
                        <AvatarFallback>
                          {teacher.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{teacher.name}</p>
                        <p className="text-sm text-muted-foreground">{teacher.department}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                      <div className="text-sm text-muted-foreground">Leave ends: {teacher.leaveEnd}</div>
                    </div>
                    <div className="flex items-center space-x-4">
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
        <TabsContent value="departments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Faculty by Department</CardTitle>
              <CardDescription>View faculty members organized by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    department: "Computer Science",
                    count: 5,
                    teachers: [
                      {
                        id: "TCH-001",
                        name: "Dr. Robert Johnson",
                        position: "Professor",
                        status: "active",
                      },
                    ],
                  },
                  {
                    department: "Business Administration",
                    count: 4,
                    teachers: [
                      {
                        id: "TCH-002",
                        name: "Dr. Emily Williams",
                        position: "Associate Professor",
                        status: "active",
                      },
                    ],
                  },
                  {
                    department: "Mathematics",
                    count: 3,
                    teachers: [
                      {
                        id: "TCH-003",
                        name: "Prof. Michael Davis",
                        position: "Assistant Professor",
                        status: "on-leave",
                      },
                    ],
                  },
                ].map((dept) => (
                  <div key={dept.department} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">{dept.department}</h3>
                      <Badge variant="outline">{dept.count} Faculty</Badge>
                    </div>
                    <div className="space-y-2">
                      {dept.teachers.map((teacher) => (
                        <div key={teacher.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={teacher.name} />
                              <AvatarFallback>
                                {teacher.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{teacher.name}</p>
                              <p className="text-sm text-muted-foreground">{teacher.position}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={teacher.status === "active" ? "default" : "outline"}>
                              {teacher.status === "active" ? "Active" : "On Leave"}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full">
                        View All in {dept.department}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="add-teacher">
          <TeacherForm />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
