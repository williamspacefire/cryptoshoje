import Header from '../views/header/header'
import config from '../../config'
import PostPage from '../views/home/post'
import Footer from '../views/footer/footer'
import { GetStaticProps } from 'next'
import { Post } from '../entities/post_type'
import { postsImpl } from '../main/dependencies'

export const getStaticProps: GetStaticProps = async context => {
    return { props: { posts: postsImpl.getPosts() } }
}

export default function Index(props: { posts: Post[] }) {
    const { posts } = props

    return (
        <>
            <Header
                title={
                    config.site.name +
                    ' - Um Compilado de conhecimentos em programação'
                }
                homePage={true}
            />
            <PostPage posts={posts} />
            <Footer />
        </>
    )
}
