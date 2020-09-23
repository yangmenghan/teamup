import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Head from "next/head";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import {GetStaticProps} from "next";

export default function Home({allPostsData}: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <Layout home>
            <Head>…</Head>
            <section className={utilStyles.headingMd}>…</section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href="/posts/[id]" as={`posts/${id}`}><a>{title}</a></Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async context => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}