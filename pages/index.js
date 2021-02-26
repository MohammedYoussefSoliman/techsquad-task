import Head from 'next/head';
import Posts from '../components/posts/posts';

export default function Home() {
  return (
    <>
      <Head>
        <title>NewsBuzz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts />
    </>
  )
}
