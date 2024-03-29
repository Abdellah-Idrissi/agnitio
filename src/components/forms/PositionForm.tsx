"use client"

import { Button } from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { toast } from "sonner"
import { FormEvent } from "react"
import { z } from "zod"

const MAX_FILE_SIZE = 5000000 // Represents 5MB 
const ACCEPTED_FILE_TYPES = [
  "image/jpeg", 
  "image/jpg", 
  "image/png",
  "application/pdf", // PDF files
  "application/msword", // DOC files
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // DOCX files
]

export function PositionForm() {

  const handleForm = (e: FormEvent<HTMLFormElement>)=> {
    e.preventDefault()

    const formData = new FormData(e.currentTarget) // Get FormData instance from form

    // Create form schema
    const formSchema = z.object({
      title:z.string({required_error:'Title is required'}).trim().min(2,'Title must have at least 2 characters'),
      internalRef:z.number({required_error:'Internal Ref is required',invalid_type_error:'Internal Ref must be a number'}).gte(1,'Internal Ref must be equal or greater than 1'),
      opportunityInfo:z.string({required_error:'Opportunity Information is required'}).trim().min(2,'Oppurtinity Information must have at least 2 characters'),
      resume:z
      .any()
      .refine((file) => file.size === 0 ? false : true, "File is required.")
      .refine((file) => file.size <= MAX_FILE_SIZE ? true : false , `Max file size is 5MB.`)
      .refine(
        (file) => ACCEPTED_FILE_TYPES.includes(file.type),
        "Only images (JPEG, JPG, PNG) and documents (PDF, DOC, DOCX) are accepted."
      ),
    })

    // Create the form data object
    const formDataObject = {
      title: formData.get('title') as string,
      internalRef: +formData.get('internalRef')! as number ,
      opportunityInfo: formData.get('opportunityInfo') as string,
      resume: formData.get('resume') as File,
    }

    const result = formSchema.safeParse(formDataObject)

    !result.success ? toast.error(result.error.issues[0].message) : toast.success('Well done :)')

  }


  return (
    <Card className="w-full p-5 9m:p-6">

      <form onSubmit={handleForm} >
        <div className="grid gap-7">

          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" type="text" name="title" placeholder="Enter Title"/>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="internalRef">Internal Ref</Label>
            <Input id="internalRef" type="number" name="internalRef" placeholder="Enter Internal Ref" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="opportunityInfo">Opportunity Information</Label>
            <Textarea id="opportunityInfo" name="opportunityInfo" placeholder="Write Opportunity Information" className="h-[150px] max-h-[200px]" />
          </div>

          <div className="grid gap-2">
            <Label >Add Team Members</Label>
            <Button type="button" variant={'outline'} className="w-fit" onClick={()=> toast.info("I'aint sure what this should be :)")}>Select Team Members</Button>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="resume">Upload Candidate Resume</Label>
            <div className="relative">
              <Input id="resume" name="resume" type="file" className="cursor-pointer" />
              <Button type="button" className="w-fit absolute top-0 left-0 px-[10px] border rounded-r-none hover:bg-neutral-100 cursor-default" variant={'secondary'}>Choose File</Button>
            </div>
          </div>

        </div>

        <div className="mt-10 flex gap-x-4 justify-end">
          <Button>Save</Button>
          <Button variant={'outline'} type="reset">Cancel</Button>
        </div>
      </form>

    </Card>
  )
}
