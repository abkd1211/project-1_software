"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useState } from "react"


type DepartmentId = "department";

export default function Component() {

  const router = useRouter();
  const [id, setId] = useState("");
  const [pin, setPin] = useState("");
  const isEmpty = () => {
    if(id==="" || pin==="") {
      alert("Please fill all the inputs")
    }
    else
    router.push('/dashboard')
  }

  
  
  return (
    <div className="mx-auto max-w-md space-y-6 border border-gray-300 rounded-md p-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to create a new account.</p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Doe" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="date-of-birth">Date of Birth</Label>
          <Input id="date-of-birth" type="date" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <div id="department">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aren">Agric Engineering</SelectItem>
                <SelectItem value="bmen">Biomedical Engineering</SelectItem>
                <SelectItem value="cpen">Computer Engineering</SelectItem>
                <SelectItem value="fpen">Food Process Engineering</SelectItem>
                <SelectItem value="mten">Materials Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="id">ID</Label>
          <Input id="id" placeholder="Enter your ID" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pin">PIN</Label>
          <Input id="pin" type="password" placeholder="Enter your PIN" required />
        </div>
        <Button type="submit" className="w-full" onClick={() => router.push('/dashboard')}>
          Sign Up
        </Button>
      </div>
    </div>
  )
}
