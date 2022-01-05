import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
    return (
    <div>
        <Head>
            <title>Starbucks Coffee Company</title>
            <meta name="description" content="Starbucks Coffee Company" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
    )
}

export default Layout
