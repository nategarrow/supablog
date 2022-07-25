import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/Layout"
import styles from "../../styles/Home.module.css"
import supabase from "../../utils/supabase"

export default function Posts({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>Select Post</h1>
          <nav>
            <ul>
              {posts.map((post) => {
                return (
                  <li key={post.id}>
                    <Link href={`/post/${post.id}`}>{post.title}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </main>
      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data: posts, error } = await supabase.from("posts").select("*")

  if (error) {
    throw new Error(error)
  }
  return {
    props: {
      posts,
    },
  }
}
