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
      setStyle('border-[1px] border-neutral-300 rounded px-3 hover:border-neutral-800')
    }
    if (variant === 'clean') {
      setStyle('px-2')
    }
    if (focused) {
      setStyle('text-neutral-800')
    }
  }, [])

  return <button className={`hover:text-neutral-800 py-1 ${style}`}>{children}</button>
}

export default Button
