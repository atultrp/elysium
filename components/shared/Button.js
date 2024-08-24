import React from 'react'

const Button = ({ radius, classes, children }) => {
  return (
    <button
      className={`${radius} ${classes} w-28 py-3 bg-blue-400 text-white bg-gradient-to-br from-[#17b34a] from-15% via-[#0067fe] to-[#00deef] to-100% hover:scale-105 duration-300`}
    >
      {children}
    </button>
  )
}

export default Button