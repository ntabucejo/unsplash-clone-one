interface IProps {
  children: React.ReactNode
}

const Main = ({ children }: IProps) => {
  return (
    <main className="mb-20">
      <div className="px-4 space-y-6 overflow-hidden">{children}</div>
    </main>
  )
}

export default Main
