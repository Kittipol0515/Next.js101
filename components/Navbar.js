import Link from "next/link"
export default function Navbar() {
    return(
        <nav>
            <div>
                <h1>Shopping</h1>
            </div>
            <Link href="/">Home page</Link>
            <Link href="/about">about</Link>
            <Link href="/products">all products</Link>
        </nav>
    )
}