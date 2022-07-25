import React from "react"
import Link from "next/link"

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link href={`/post`}>Posts</Link>
        <Link href={`/login`}>Login</Link>
      </ul>
    </div>
  )
}

export default NavBar
