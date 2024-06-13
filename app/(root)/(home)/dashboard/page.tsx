"use client"
import React from 'react'
/** @format */

import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/ui/card";
import BarChart from "@/components/ui/BarChart";
import SalesCard, { CourseProps } from "@/components/ui/SalesCard";



const cardData: CardProps[] = [
  {
    code: "code I",
    course: "Course 1",
    discription: "+20.1% from last month",
    icon: Users
  },
  {
    code: "code II",
    course: "Course 2",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    code: "code III",
    course: "Course 3",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    code: "code V",
    course: "Course 5",
    discription: "+201 since last hour",
    icon: Activity
  },

  {
    code: "code VI",
    course: "Course 6",
    discription: "+201 since last hour",
    icon: Activity
  },

  {
    code: "code VII",
    course: "Course 7",
    discription: "+201 since last hour",
    icon: Activity
  }
];

const uesrSalesData: CourseProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    
  },
  {
    name: "William Kim",
    email: "will@email.com",
    
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
   
  }
];


const Dashboard = () => {

 

  return (
    <div className='m-20 flex flex-col w-full'>
      <h1 className=' text-[36px] bg-gradient-to-r from-red-400 via-indigo-500 to-blue-600
        inline-block text-transparent bg-clip-text font-bold'>
        Hello, First Name
      </h1>

      
     

      <PageTitle title="Dashboard" className='text-gray-700'/>
      <section className="grid mb-10 w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
         
          <Card
            key={i}
            course={d.course}
            discription={d.discription}
            icon={d.icon}
            code={d.code}
          />
          
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Progress</p>

          <BarChart/>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Contact Tutors</p>
            <p className="text-sm text-gray-400">
              Five Tutors Available
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              
            />
          ))}
        </CardContent>

        {/*  */}
      </section>


    </div>
  )
}

export default Dashboard