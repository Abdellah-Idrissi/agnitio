'use client'

import { useAppContext } from "@/context";
import PositionCard from "./PositionCard";

const positions: Positions = [
  {
    title: "Software Engineer",
    company: "TechCorp",
    internalRef: 123456,
    context: "Developing web applications using React and Node.js",
  },
  {
    title: "Data Analyst",
    company: "Data Insights",
    internalRef: 789012,
    context: "Analyzing large datasets using Python and SQL",
  },
  {
    title: "Marketing Manager",
    company: "Digital Solutions",
    internalRef: 345678,
    context: "Creating marketing campaigns and strategies",
  },
  {
    title: "Product Designer",
    company: "Design Innovations",
    internalRef: 901234,
    context: "Designing user interfaces and experiences",
  },
  {
    title: "Financial Analyst",
    company: "Finance Experts",
    internalRef: 567890,
    context: "Analyzing financial data and generating reports",
  },
  {
    title: "Human Resources",
    company: "HR Solutions",
    internalRef: 456789,
    context: "Managing recruitment and employee relations",
  },
  {
    title: "Frontend Developer",
    company: "Web Solutions",
    internalRef: 234567,
    context: "Building interactive user interfaces with HTML, CSS, and JavaScript",
  },
  {
    title: "UX/UI Designer",
    company: "Creative Solutions",
    internalRef: 890123,
    context: "Designing intuitive user experiences and user interfaces",
  },
  {
    title: "Project Manager",
    company: "Project Management Inc.",
    internalRef: 654321,
    context: "Overseeing project execution and ensuring timely delivery",
  }
];


export default function Positions({children}:{ children: React.ReactNode }) {
  const {searchVal} = useAppContext()

    // Filtering positions based on searchVal
    const filteredPositions = positions.filter((position) =>
    position.title.toLowerCase().includes(searchVal.toLowerCase())
  )

  return (
    <div className="flex-1 flex flex-col h-full relative pb-[60px] ">

        {filteredPositions.length === 0 && 
          <div className={'text-sm text-center w-full text-neutral-600 flex-1 h-full grid relative p-5 '}>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">No Positions available!</span>
          </div>
        }

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {filteredPositions.map((position) => (
            <PositionCard position={position} key={position.internalRef} />
          ))}
        </div>

        <div className="flex-1 h-full grid items-end absolute bottom-0 left-1/2 -translate-x-1/2 ">
          {children}
        </div>

    </div>
  )
}
