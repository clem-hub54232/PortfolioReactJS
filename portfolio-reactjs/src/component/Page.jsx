import '../css/Page.css'

function Page({ bannerSrc, title, subtitle, children }) {
  return (
    <section className="page">
      <div className="page__banner">
        <img src={bannerSrc} alt="" className="page__bannerImg" />
      </div>

      <div className="page__header">
        <h3 className="page-title">{title}</h3>
        {subtitle ? <p className="page__subtitle">{subtitle}</p> : null}
        <hr className="page-divider" />
      </div>

      <div className="page__body">
        {children}
      </div>
    </section>
  )
}

export default Page
