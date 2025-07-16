import React from 'react'
import { buttonProps } from '@/interfaces'
const Button:React.FC<buttonProps> = ({styles}) => {
  return (
    <button className='{`bg-${color} text-white ${sizes} ${shape} px-4 py-2 rounded`}'  >
    </button>
  )
}

export default Button