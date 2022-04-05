import Sidebar from '@/layout/Sidebar'
import Layout from '/components/layout'
import '/styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return <>
    <Layout>
      <Sidebar/>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
