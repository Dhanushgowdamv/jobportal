import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>A list of your recent registered companies</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className=" text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableCell>
                    <Avatar>
                        <AvatarImage src="https://imgs.search.brave.com/wjBRHxlYypRcgCbh1QG8FCUT2WiwiPOsPSTiyAzlQ6I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ4Lzk3/L2M4LzQ4OTdjOGEw/MjU1ZDBhYzZjZDJj/MDIyZDVmMGUwNzNh/LmpwZw "/>
                    </Avatar>
                </TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>18-11-2025</TableCell>
                <TableCell>
                    <Popover>
                        <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                        <PopoverContent className="w-32">
                            <div className='flex items-center px-2'>
                                <Edit2 className='w-4'/>
                                <span>Edit</span>
                            </div>
                        </PopoverContent>
                    </Popover>
                </TableCell>
            </TableBody>
        </Table>

    </div>
  )
}

export default CompaniesTable