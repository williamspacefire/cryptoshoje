import Header from '../views/header/header'
import config from '../../config'
import Post from '../views/home/post'
import Footer from '../views/footer/footer'

export default function Index() {
    return (
        <>
            <Header
                title={
                    config.site.name +
                    ' - Ensinando programação para todo o Brasil'
                }
                homePage={true}
            />
            <Post />
            <Footer />
        </>
    )
}
