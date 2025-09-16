"use client"
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit } from 'lucide-react'
import { secretStore } from '@/store/secretStore'
import { DeleteAlert } from './DeleteAlert'
import { TSceret } from '@/types'

export default function SecretsTable() {
const {demoSecrets} = secretStore();

    return (
        <>

            <Table className='w-full mt-4 md:mt-10 hidden md:table'>
                <TableHeader>
                    <TableRow className='text-black font-semibold'>
                        <TableHead className="w-[100px]">Sno.</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className='w-[180px]'>Last Updated</TableHead>
                        <TableHead className='w-[100px]'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='text-gray-700'>
                   {
                    demoSecrets && demoSecrets.map((secret) => (
                        <SecretRow key={secret.id} {...secret} />
                    ))
                   }
                </TableBody>
            </Table>
            <DeleteAlert />
        </>

    )
}


export const SecretRow = (secret: TSceret) => {

    const { setSecretToDelete } = secretStore();

    const handleDeleteClick = () => {
        setSecretToDelete(secret);
    }
    return (
        <TableRow className='cursor-pointer'>
            <TableCell className="">{secret.id}</TableCell>
            <TableCell className=''>{secret.title}</TableCell>
            <TableCell>{secret.lastUpdated.toLocaleString()}</TableCell>
            <TableCell className="">
                <DropdownMenu>
                    <DropdownMenuTrigger className='outline-none'>
                        <Edit className='w-4 h-4 cursor-pointer text-gray-700' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='rounded'>
                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='rounded cursor-pointer'>Edit</DropdownMenuItem>
                        <DropdownMenuItem
                            className='rounded cursor-pointer '
                            onClick={() => handleDeleteClick()}
                        >
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    )
}