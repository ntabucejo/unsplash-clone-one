interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout
