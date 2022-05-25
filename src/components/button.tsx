import { useEffect, useState } from 'react'

interface IProps {
  children: React.ReactNode
  variant: string
  focused?: boolean
}

const Button = ({ children, variant, focused = false }: IProps) => {
  const [style, setStyle] = useState<string>('')

  useEffect(() => {
    if (variant === 'normal') {
      setStyle('border-[1px] border-neutral-300 rounded px-3 hover:border-neutral-800 py-1')
    } else if (variant === 'clean') {
      setStyle(() => 'px-3 py-3')
    } else if (variant === 'explorer') {
      setStyle(() => `px-2 py-3`)
    }
    if (focused) {
      setStyle((value) => `${value} text-neutral-800 border-b-2 border-black`)
    }
  }, [])

  return <button className={`hover:text-neutral-800 whitespace-nowrap ${style}`}>{children}</button>
}

export default Button
