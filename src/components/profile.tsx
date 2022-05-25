interface IProps {
  post: any
}

const Profile = ({ post }: IProps) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="rounded-full w-8 h-8 overflow-hidden">
        <img className="bg-cover w-full" src={post.image} alt="" />
      </div>
      <h2 className="text-white">{post.username}</h2>
    </div>
  )
}

export default Profile
