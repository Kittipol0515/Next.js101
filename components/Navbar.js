import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
            <Image src="/logo.png" width={50} height={50} alt="logo" />
        </Link>
        <h2>All the mall shopping</h2>
      </div>
      <Link href="/">Home page</Link>
      <Link href="/about">About</Link>
      <Link href="/products">All Products</Link>
    </nav>
  )
}
