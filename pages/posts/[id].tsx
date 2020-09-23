import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import utilStyles from '../../styles/utils.module.css'
import {GetStaticPaths, GetStaticProps} from "next";

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
        </Layout>
    )

}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async context => {
    const postData = await getPostData(context.params.id)
    return {
        props: {
            postData
        }
    }
}
