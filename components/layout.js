import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen" style={{backgroundColor: '#1c1c1c', color: 'white'}}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
