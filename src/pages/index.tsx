import Header from '../views/header'
import config from '../../config'
import HomePageContent from '../views/home'
import Footer from '../views/footer'
import { GetStaticProps } from 'next'
import { Post } from '../entities/Post'
import { postsImpl } from '../main/dependencies'
import React from 'react'

export const getStaticProps: GetStaticProps = async context => {
    return { props: { posts: postsImpl.getPosts() } }
}

type IndexProps = {
    posts: Post[]
}

export default class IndexPage extends React.Component<IndexProps> {
    render() {
        return (
            <>
                <Header
                    title={
                        config.site.name +
                        ' - Um Compilado de conhecimentos em programação'
                    }
                    homePage={true}
                />
                <HomePageContent {...this.props.posts} />
                <Footer />
            </>
        )
    }
}
