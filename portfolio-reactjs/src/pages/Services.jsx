import Page from '../component/Page'
import banner from '../img/banner.jpg'
function Services() {
    return (
        <>
            <Page
                bannerSrc={banner}
                title={"Mon offre de service"}
                subtitle={"Voici les prestations sur lesquelles je peux intervenir"}>
                <p>MON BODY</p>
            </Page>
        </>
    )
}

export default Services