"use client"

import { Check } from 'lucide-react'
import { EllipsisVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BasicTable from './table';
import Order from './order';

export default function ProjectBox() {
  return (
    <div className='w-full rounded-[14px]
     bg-white dark:bg-[#202940]
     shadow-[4px_4px_4px_rgba(0,0,0,0.25)]
     '>
      {/* header */}
      <div className='flex justify-between items-center p-5'>
        {/* text */}
        <div>
          <h1 className="text-xl font-bold">Projects</h1>
          <div className='flex'>
            <Check style={{ color: 'green' }} />
            <p> 30 done this month</p>
          </div>
        </div>
        {/* dropdown-menu */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-md hover:bg-muted">
                <EllipsisVertical className="h-5 w-5" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Action</DropdownMenuItem>
              <DropdownMenuItem>Another action</DropdownMenuItem>
              <DropdownMenuItem >
                something else
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        {/* table */}
        <BasicTable />
      </div>
    </div>
  )
}
