"use client"


import { Button } from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { toast } from "sonner"

export function PositionForm() {

  return (
    <Card className="w-full p-5 9m:p-6">

      <div className="grid gap-7">

        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" type="text" placeholder="Enter Title"/>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="internalRef">Internal Ref</Label>
          <Input id="internalRef" type="number" placeholder="Enter Internal Ref" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="info">Oppurtinity Information</Label>
          <Textarea id="info" placeholder="Write Oppurtinity Information" className="h-[150px] max-h-[200px]" />
        </div>

        <div className="grid gap-2">
          <Label >Add Team Members</Label>
          <Button variant={'outline'} className="w-fit" onClick={()=> toast.info("I'aint sure what this should be :)")}>Select Team Members</Button>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="resume">Upload Candidate Resume</Label>
          <div className="relative">
            <Input id="resume" type="file" className="cursor-pointer " />
            <Button className="w-fit absolute top-0 left-0 px-[10px] border rounded-r-none hover:bg-neutral-100 cursor-default" variant={'secondary'}>Choose File</Button>
          </div>
        </div>

      </div>

      <div className="mt-10 flex gap-x-4 justify-end">
        <Button>Save</Button>
        <Button variant={'outline'}>Cancel</Button>
      </div>

    </Card>
  )
}
