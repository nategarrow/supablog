import React, { useEffect } from "react"
import supabase from "../../utils/supabase"
import Layout from "../../components/Layout"

// user_id = fd93a9fc-b986-4793-9d98-d53b42399419
const PostPage = ({ post = {} }) => {
  useEffect(() => {
    const subscription = supabase
      .from("comments")
      .on("INSERT", (payload) => {
        console.log(payload)
      })
      .subscribe()

    return () => supabase.removeSubscription(subscription)
  }, [])

  return (
    <Layout>
      <main>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </main>
    </Layout>
  )
}

export default PostPage

export const getServerSideProps = async ({ params }) => {
  const { data: post, error } = await supabase
    .from("posts")
    .select("*,comments(*)")
    .eq(`id`, params.id)
    .single()

  if (error) {
    throw new Error(error.message)
  }
  return {
    props: {
      post,
    },
  }
}
