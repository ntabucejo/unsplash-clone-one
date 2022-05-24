import Header from './header'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
