"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

export default function ResultEntryForm() {
  const [students, setStudents] = useState([
    {
      id: "STU001",
      name: "John Smith",
      rollNo: "CS2023001",
      attendance: 85,
      midterm: "",
      final: "",
      assignment: "",
      total: "",
    },
    {
      id: "STU002",
      name: "Emily Johnson",
      rollNo: "CS2023002",
      attendance: 92,
      midterm: "",
      final: "",
      assignment: "",
      total: "",
    },
    {
      id: "STU003",
      name: "Michael Brown",
      rollNo: "CS2023003",
      attendance: 78,
      midterm: "",
      final: "",
      assignment: "",
      total: "",
    },
    {
      id: "STU004",
      name: "Sarah Davis",
      rollNo: "CS2023004",
      attendance: 90,
      midterm: "",
      final: "",
      assignment: "",
      total: "",
    },
    {
      id: "STU005",
      name: "David Wilson",
      rollNo: "CS2023005",
      attendance: 88,
      midterm: "",
      final: "",
      assignment: "",
      total: "",
    },
  ])

  const handleInputChange = (index, field, value) => {
    const newStudents = [...students]
    newStudents[index][field] = value

    // Calculate total if all required fields are filled
    if (newStudents[index].midterm && newStudents[index].final && newStudents[index].assignment) {
      const midterm = Number.parseFloat(newStudents[index].midterm) || 0
      const final = Number.parseFloat(newStudents[index].final) || 0
      const assignment = Number.parseFloat(newStudents[index].assignment) || 0
      const attendance = newStudents[index].attendance * 0.1

      // Calculate total (midterm 30%, final 40%, assignment 20%, attendance 10%)
      const total = midterm * 0.3 + final * 0.4 + assignment * 0.2 + attendance
      newStudents[index].total = total.toFixed(2)
    }

    setStudents(newStudents)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Result Entry Form</CardTitle>
        <CardDescription>Enter and manage student results</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Select>
              <SelectTrigger id="course">
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs101">CS101: Introduction to Computer Science</SelectItem>
                <SelectItem value="math201">MATH201: Calculus I</SelectItem>
                <SelectItem value="eng101">ENG101: English Composition</SelectItem>
                <SelectItem value="phy101">PHY101: Physics I</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="semester">Semester</Label>
            <Select>
              <SelectTrigger id="semester">
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fall-2023">Fall 2023</SelectItem>
                <SelectItem value="spring-2023">Spring 2023</SelectItem>
                <SelectItem value="summer-2023">Summer 2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="section">Section</Label>
            <Select>
              <SelectTrigger id="section">
                <SelectValue placeholder="Select section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Section A</SelectItem>
                <SelectItem value="b">Section B</SelectItem>
                <SelectItem value="c">Section C</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Student Results</Label>
            <div className="flex items-center space-x-2">
              <Checkbox id="show-all" />
              <Label htmlFor="show-all" className="text-sm">
                Show all students
              </Label>
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Roll No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Attendance (10%)</TableHead>
                  <TableHead>Midterm (30%)</TableHead>
                  <TableHead>Final (40%)</TableHead>
                  <TableHead>Assignment (20%)</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.rollNo}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.attendance}%</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={student.midterm}
                        onChange={(e) => handleInputChange(index, "midterm", e.target.value)}
                        className="w-20"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={student.final}
                        onChange={(e) => handleInputChange(index, "final", e.target.value)}
                        className="w-20"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={student.assignment}
                        onChange={(e) => handleInputChange(index, "assignment", e.target.value)}
                        className="w-20"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{student.total ? `${student.total}%` : "-"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <div className="space-x-2">
          <Button variant="outline">Save as Draft</Button>
          <Button>Publish Results</Button>
        </div>
      </CardFooter>
    </Card>
  )
}
