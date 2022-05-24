import Header from './header'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="text-sm">
      <Header />
      {children}
    </div>
  )
}

export default Layout
