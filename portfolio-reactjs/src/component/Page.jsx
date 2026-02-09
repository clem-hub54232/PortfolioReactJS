import '../css/Page.css'

function Page({ bannerSrc, title, subtitle, children }) {
  return (
    <section className="page">
      <div className="page__banner">
        <img src={bannerSrc} alt="" className="page__bannerImg" />
      </div>

      <div className="page__header">
        <h1 className="page__title">{title}</h1>
        {subtitle ? <p className="page__subtitle">{subtitle}</p> : null}
        <hr className="page__divider" />
      </div>

      <div className="page__body">
        {children}
      </div>
    </section>
  )
}

export default Page
