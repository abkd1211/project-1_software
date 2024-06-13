import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"



interface RegistrationProps {
  courses: Course[]; // Array of course objects
  onSubmit: (selectedCourses: Course[]) => void; // Function to handle form submission
}


const Registration = () => {
  return (
    <div>
      <div className='mb-[20px]'>Registration</div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>

          <TableRow>
            <TableHead className="w-[100px]">Course ID</TableHead>
            <TableHead>Course Name</TableHead>
            
            <TableHead className="text-right">Amount</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Code I</TableCell>
            <TableCell>Course 1</TableCell>
            <TableCell className="text-right">$150.00</TableCell>   
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Code I</TableCell>
            <TableCell>Course 1</TableCell>
            <TableCell className="text-right">$150.00</TableCell>   
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Code I</TableCell>
            <TableCell>Course 1</TableCell>
            <TableCell className="text-right">$150.00</TableCell>   
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Code I</TableCell>
            <TableCell>Course 1</TableCell>
            <TableCell className="text-right">$150.00</TableCell>   
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Code I</TableCell>
            <TableCell>Course 1</TableCell>
            <TableCell className="text-right">$150.00</TableCell>   
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Code I</TableCell>
            <TableCell>Course 1</TableCell>
            <TableCell className="text-right">$150.00</TableCell>   
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Code I</TableCell>
            <TableCell>Course 1</TableCell>
            <TableCell className="text-right">$150.00</TableCell>   
          </TableRow>
        </TableBody>
    </Table>

    </div>
    
  )
}

export default Registration