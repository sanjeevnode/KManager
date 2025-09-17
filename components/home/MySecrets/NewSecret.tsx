import { Button } from '@/components/ui/button'
import { navigationStore } from '@/store'
import { MySecretsNav } from '@/types'
import { Check, X } from 'lucide-react'
import React from 'react'

export default function NewSecret() {

  return (
    <main className='w-full h-full flex flex-col'>
      <div className='w-full flex justify-between items-center mt-4 md:mt-8'>
        <span className='text-xl md:text-2xl font-medium'>
          Create New Secret
        </span>
       <div className='flex gap-2'>
          <Button
            size="sm"
            onClick={() => navigationStore.setState({ mySecretsNav: MySecretsNav.ALL })}
            variant="destructive"
            className='rounded flex items-center cursor-pointer px-1'
          >
            <X className='w-4 h-4' />
            <span className='hidden md:block'>Cancel</span>
          </Button>
          <Button
            size="sm"
            onClick={() => navigationStore.setState({ mySecretsNav: MySecretsNav.ALL })}
            className='rounded flex items-center cursor-pointer px-1 '
          >
            <Check className='w-4 h-4' />
            <span className='hidden md:block'>Save</span>
          </Button>
       </div>
      </div>

    </main>
  )
}
