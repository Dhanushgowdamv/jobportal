/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div> <Table>
    <TableCaption>A list of your completed jobs</TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>works</TableHead>
            <TableHead>types</TableHead>
            <TableHead className="text-right">Status</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {
            [1,2,3,4,5].map((item,index)=>(

        
                <TableRow key={index}>
                    <TableCell>vbnfg</TableCell>
                    <TableCell>sfghsdfg</TableCell>
                    <TableCell>ireyfutgaiwe</TableCell>
                    <TableCell className="text-right"><Badge>selected</Badge></TableCell>
                </TableRow>
            ))
            
        }
    </TableBody>
</Table></div>
  )
}

export default AppliedJobTable                         