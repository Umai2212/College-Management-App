import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Filter, Download, Plus, Search, Mail, GraduationCap } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import StudentForm from "@/components/student-form"

export default function StudentsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students Management</h1>
          <p className="text-muted-foreground">Manage students and their information</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Student
        </Button>
      </div>

      <Tabs defaultValue="all-students" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all-students">All Students</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="graduated">Graduated</TabsTrigger>
          <TabsTrigger value="programs">By Program</TabsTrigger>
          <TabsTrigger value="add-student">Add Student</TabsTrigger>
        </TabsList>
        <TabsContent value="all-students" className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Search students..." />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select program" />
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
              <CardTitle>Student Directory</CardTitle>
              <CardDescription>Manage all students and their information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "STU-001",
                    name: "John Smith",
                    program: "Computer Science",
                    year: "3rd Year",
                    status: "active",
                    email: "j.smith@example.edu",
                    phone: "+1 (555) 123-4567",
                    gpa: "3.8",
                  },
                  {
                    id: "STU-002",
                    name: "Emily Johnson",
                    program: "Business Administration",
                    year: "2nd Year",
                    status: "active",
                    email: "e.johnson@example.edu",
                    phone: "+1 (555) 234-5678",
                    gpa: "3.5",
                  },
                  {
                    id: "STU-003",
                    name: "Michael Brown",
                    program: "Electrical Engineering",
                    year: "4th Year",
                    status: "active",
                    email: "m.brown@example.edu",
                    phone: "+1 (555) 345-6789",
                    gpa: "3.2",
                  },
                  {
                    id: "STU-004",
                    name: "Sarah Davis",
                    program: "Psychology",
                    year: "1st Year",
                    status: "active",
                    email: "s.davis@example.edu",
                    phone: "+1 (555) 456-7890",
                    gpa: "3.9",
                  },
                  {
                    id: "STU-005",
                    name: "David Wilson",
                    program: "Mathematics",
                    year: "3rd Year",
                    status: "graduated",
                    email: "d.wilson@example.edu",
                    phone: "+1 (555) 567-8901",
                    gpa: "3.7",
                  },
                ].map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={student.name} />
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {student.program} - {student.year}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{student.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">GPA: {student.gpa}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={student.status === "active" ? "default" : "secondary"}>
                        {student.status === "active" ? "Active" : "Graduated"}
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
              <CardTitle>Active Students</CardTitle>
              <CardDescription>Currently enrolled students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "STU-001",
                    name: "John Smith",
                    program: "Computer Science",
                    year: "3rd Year",
                    status: "active",
                    email: "j.smith@example.edu",
                    gpa: "3.8",
                  },
                  {
                    id: "STU-002",
                    name: "Emily Johnson",
                    program: "Business Administration",
                    year: "2nd Year",
                    status: "active",
                    email: "e.johnson@example.edu",
                    gpa: "3.5",
                  },
                  {
                    id: "STU-003",
                    name: "Michael Brown",
                    program: "Electrical Engineering",
                    year: "4th Year",
                    status: "active",
                    email: "m.brown@example.edu",
                    gpa: "3.2",
                  },
                  {
                    id: "STU-004",
                    name: "Sarah Davis",
                    program: "Psychology",
                    year: "1st Year",
                    status: "active",
                    email: "s.davis@example.edu",
                    gpa: "3.9",
                  },
                ].map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={student.name} />
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {student.program} - {student.year}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{student.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">GPA: {student.gpa}</span>
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
        <TabsContent value="graduated" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Graduated Students</CardTitle>
              <CardDescription>Students who have completed their programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "STU-005",
                    name: "David Wilson",
                    program: "Mathematics",
                    year: "Graduated 2023",
                    status: "graduated",
                    email: "d.wilson@example.edu",
                    gpa: "3.7",
                  },
                ].map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={student.name} />
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {student.program} - {student.year}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{student.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">GPA: {student.gpa}</span>
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
        <TabsContent value="programs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Students by Program</CardTitle>
              <CardDescription>View students organized by academic program</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    program: "Computer Science",
                    count: 45,
                    students: [
                      {
                        id: "STU-001",
                        name: "John Smith",
                        year: "3rd Year",
                        status: "active",
                      },
                    ],
                  },
                  {
                    program: "Business Administration",
                    count: 38,
                    students: [
                      {
                        id: "STU-002",
                        name: "Emily Johnson",
                        year: "2nd Year",
                        status: "active",
                      },
                    ],
                  },
                  {
                    program: "Engineering",
                    count: 52,
                    students: [
                      {
                        id: "STU-003",
                        name: "Michael Brown",
                        year: "4th Year",
                        status: "active",
                      },
                    ],
                  },
                ].map((program) => (
                  <div key={program.program} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">{program.program}</h3>
                      <Badge variant="outline">{program.count} Students</Badge>
                    </div>
                    <div className="space-y-2">
                      {program.students.map((student) => (
                        <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={student.name} />
                              <AvatarFallback>
                                {student.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-sm text-muted-foreground">{student.year}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={student.status === "active" ? "default" : "secondary"}>
                              {student.status === "active" ? "Active" : "Graduated"}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full">
                        View All in {program.program}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="add-student">
          <StudentForm />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
