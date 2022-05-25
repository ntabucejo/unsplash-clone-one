import { ArrowDownIcon, PlusIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import Action from './action'
import Profile from './profile'

interface IProps {
  post: any
}

const Card = ({ post }: IProps) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [style, setStyle] = useState<string>('')

  const hoverHandler = (isHovered: boolean) => {
    setHovered(isHovered)
    if (!hovered) {
      setStyle('brightness-50')
    } else {
      setStyle('brightness-100')
    }
  }

  return (
    <div
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
      className="relative mb-5 w-screen sm:w-auto -ml-4 sm:ml-0">
      {hovered && (
        <div className="absolute w-full h-full z-10 flex flex-col justify-between p-6">
          <div className="flex justify-end gap-4">
            <Action Icon={HeartIcon} />
            <Action Icon={PlusIcon} />
          </div>
          <div className="flex justify-between items-center">
            <Profile post={post} />
            <Action Icon={ArrowDownIcon} />
          </div>
        </div>
      )}
      <img className={`w-full ${style}`} src={post.photo} alt="" />
    </div>
  )
}

export default Card
