import Positions from "@/components/positionsComps/Positions";
import { PositionsPagination } from "@/components/positionsComps/PositionsPagination";
import SearchPosition from "@/components/positionsComps/SearchPosition";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex-1 h-full flex flex-col  ">

      <div className="cnt flex-1 flex flex-col h-full py-7 sm:py-8 ">

        <div className="flex flex-col md:flex-row md:justify-between gap-y-4 mb-10">
          <h2 className="font-semibold text-4xl  text-center">Positions</h2>

          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-3 ">
            <SearchPosition />

            <Link href={`/create`}>
              <Button className="w-full">
                <Plus size={16} className="mr-1" />
                Add New
              </Button>
            </Link>
          </div>
        </div>

        <Positions>
          <PositionsPagination />
        </Positions>

      </div>

    </div>
  )
}
