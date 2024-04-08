import React from 'react'
import illustration from "../../public/images/no_review.svg"
import Image from 'next/image';

function InvalidAddress() {
  return (
      <div className='w-full h-[70vh] flex flex-col justify-center items-center '>
          <Image src={illustration} alt='Nothing to display' />
          <p className='mt-4'>Sorry, we probably do not have this location. Make sure you pick from the suggested addresses while typing.</p>
    </div>
  )
}

export default InvalidAddress