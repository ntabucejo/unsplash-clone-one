import Header from './components/header'
import Hero from './components/hero'
import Layout from './components/layout'
import Main from './components/main'

const App = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <Hero />
      </Main>
    </Layout>
  )
}

export default App
