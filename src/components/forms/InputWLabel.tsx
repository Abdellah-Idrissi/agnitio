import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({type}: {type:'email' | 'password'}) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={`${type}`} className="capitalize" >{type}</Label>
      <Input type={`${type}`} id={`${type}`} placeholder={`Write your ${type}`} />
    </div>
  )
}
