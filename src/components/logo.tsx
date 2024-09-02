import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image src='/logo.jpg' alt='ballocs logo' width={50} height={50}  className=''/>
    </div>
  )
}

export default Logo