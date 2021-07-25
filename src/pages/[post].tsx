import React from 'react'
import Header from '../views/header'
import { GetStaticProps } from 'next'
import { Post } from '../entities/Post'
import Footer from '../views/footer'
import { postsImpl } from '../main/dependencies'
import PostPageContent from '../views/post'

export default class PostPage extends React.Component<Post> {
    render() {
        return (
            <>
                <Header title={this.props.title} />
                <PostPageContent {...this.props} />
                <Footer />
            </>
        )
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postId = params?.post as string
    postsImpl.setPostId(postId)
    const post = postsImpl.getPost()

    if (post) return { props: post }

    return { notFound: true }
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: postsImpl.getHomePagePaths(),
    }
}
