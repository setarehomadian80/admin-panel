import { Check } from 'lucide-react'
import { EllipsisVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BasicTable from './Table/table';
import Order from './Orders overview/order';

export default function ProjectBox() {
  return (
    <div className='w-full bg-white rounded-xl'>
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
