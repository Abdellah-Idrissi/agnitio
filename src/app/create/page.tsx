import { PositionForm } from "@/components/forms/PositionForm";

export default function page() {
  return (
    <div className="flex-1 h-full">

      <div className="cnt py-7 sm:py-8">
        <h2 className="font-semibold text-4xl  text-center mb-8">Position Creation</h2>
        <PositionForm />
      </div>

    </div>
  )
}
