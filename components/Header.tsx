import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full'>
        <div className='w-full h-[110px] flex justify-center items-center'>
            <Image alt='logo full' src={'/images/logo-full.svg'} width={210} height={210}/>
        </div>
    </header>
  )
}

export default Header