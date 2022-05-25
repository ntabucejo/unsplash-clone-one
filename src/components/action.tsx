interface IProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const Action = ({ Icon }: IProps) => {
  return (
    <div className="p-3 bg-slate-50 rounded-md cursor-pointer shadow-md group">
      <Icon className="w-4 h-4 text-neutral-500 group-hover:text-neutral-800" />
    </div>
  )
}

export default Action
