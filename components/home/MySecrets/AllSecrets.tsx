import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import React from 'react'

import { navigationStore } from '@/store'
import { MySecretsNav } from '@/types';
import SecretsTable from './SecretsTable';
export default function AllSecrets() {
    return (
    <main className='w-full h-full flex flex-col'>
        <div className='w-full flex justify-between items-center mt-4 md:mt-8'>
            <span className='text-xl md:text-2xl font-medium'>
                All Secrets
            </span>
            <Button
                size="sm"
                onClick={() => navigationStore.setState({ mySecretsNav: MySecretsNav.NEW })}
                className='rounded flex items-center cursor-pointer px-1'
            >
                <PlusIcon className='w-4 h-4' />
                <span className='hidden md:block'>New Secret</span>
            </Button>
        </div>
        <SecretsTable />
    </main>
    )
}
