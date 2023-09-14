"use Client";
import { SearchManufactureProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import {Combobox, Transition} from '@headlessui/react'

const SearchManufacture = ({manufacturer, setManufacturer}: SearchManufactureProps) => {
  return (
    <div className='search-manufacturer'>

<Combobox>
    <div className='relative w-full'>
<Combobox.Button className="absolute-top-[14px]">
    <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="car logo"/>
</Combobox.Button >

    </div>
</Combobox>

    </div>
  )
}

export default SearchManufacture