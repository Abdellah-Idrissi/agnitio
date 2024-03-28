"use client";

import { X } from "lucide-react";
import { Input } from "../ui/input";
import { ChangeEvent } from "react";
import { useAppContext } from "@/context";

export default function SearchPosition() {

  const {searchVal, setSearchVal} = useAppContext()

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value)
  }

  const emptySearchInput = () => {
    setSearchVal("")
  }

  return (
    <div>
      <div className="flex gap-x-2 w-full ">
        <div className="relative w-full">
          
          <Input
            value={searchVal}
            onChange={handleSearchInput}
            placeholder="Search by position title"
          />

          {searchVal !== "" && (
            <span
              className="cursor-pointer absolute right-[12px] top-[12px] hover:opacity-90 transition-colors bg-white"
              onClick={emptySearchInput}
            >
              <X size={16} />
            </span>
          )}
        </div>

      </div>
    </div>
  );
}
