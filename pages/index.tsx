import Header from '../components/header/header'
import config from '../config.json'
import Post from '../components/home/post'
import Footer from '../components/footer/footer'

export default function Index() {
    return (
        <>
            <Header
                title={
                    config.site.name +
                    ' - Ensinando programação para todo o Brasil'
                }
            />
            <Post />
            <Footer />
        </>
    )
}
