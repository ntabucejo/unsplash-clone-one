interface IProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const Action = ({ Icon }: IProps) => {
  return (
    <div className="p-3 bg-slate-100 rounded-md cursor-pointer shadow-md">
      <Icon className="w-4 h-4 text-neutral-500" />
    </div>
  )
}

export default Action
