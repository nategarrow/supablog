import React from "react"
import supabase from "../utils/supabase"

const LoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target.email.value
    await supabase.auth.signIn({ email })
  }
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LoginPage
