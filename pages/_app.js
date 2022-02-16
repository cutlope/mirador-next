import '../styles/globals.css'
import Layout from 'pages/_layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
1
