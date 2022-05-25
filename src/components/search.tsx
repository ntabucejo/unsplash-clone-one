import { SearchIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'

interface IProps {
  variant: string
}

const Search = ({ variant }: IProps) => {
  const [focused, setFocused] = useState<boolean>(false)
  const [style, setStyle] = useState<string>('')

  useEffect(() => {
    if (variant === 'navbar') {
      setStyle('rounded-full')
      if (focused) {
        setStyle((value) => `${value} bg-neutral-50 ring-1 ring-neutral-400`)
      } else {
        setStyle('rounded-full')
      }
    } else if (variant === 'hero') {
      setStyle('rounded-md py-4')
    }
  }, [focused])

  return (
    <div
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`bg-neutral-200 flex flex-1 items-center gap-2 px-4 py-2 ${style}`}>
      <SearchIcon className="w-5 h-5 text-neutral-600 hover:text-neutral-800 cursor-pointer" />
      <input
        type="text"
        placeholder="Search free high-resolution photos"
        className="w-full bg-transparent focus:outline-none"
      />
      <VisualIcon />
    </div>
  )
}

export default Search

const VisualIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer"
      viewBox="0 0 32 32"
      version="1.1"
      aria-hidden="false">
      <path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path>
    </svg>
  )
}
