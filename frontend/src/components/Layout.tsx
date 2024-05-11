import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Navbar />
            <div className="" >{children}</div>
            <Footer/>
        </main>
    )
}