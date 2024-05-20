import React from 'react'

const Button = ({ label, iconURL }) => {
  return (
    <button 
            className='flex justify-center items-center gap-2 px-7 py-4 text-white
            border font-montserrat text-lg leading-none bg-coral-red rounded-full '
    >
        {label}
        {iconURL &&
          (<img 
              src={iconURL} 
              alt="arrow right"
              className='ml-2 rounded-full w-5 h-6'
          />)
        }
    </button>
  )
}

export default Button