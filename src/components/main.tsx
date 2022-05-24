interface IProps {
  children: React.ReactNode
}

const Main = ({ children }: IProps) => {
  return (
    <main>
      <div className="px-4">{children}</div>
    </main>
  )
}

export default Main
