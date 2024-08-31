import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const CategorySearch = () => {
    return (
        <div className='flex flex-col items-center mt-10'>
            <h2 className='text-4xl font-bold tracking-wide'>Search <span className='text-green-500'>Doctors</span></h2>
            <h2 className='md:text-xl text-base text-gray-500 text-center'>Search Your Doctor and Book Appointment in one click</h2>


            <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
                <Input type="text" placeholder="Search Doctors" />
                <Button type="submit">
                    <Search className=' w-4 h-4 mr-3' />
                    Search
                </Button>
            </div>
        </div>
    )
}

export default CategorySearch