const Banner = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          <img src="assets/GentsBanner.gif" alt="New season men's fashion" />
          <div className="hero-content">
            <p className="eyebrow">THE NEW SEASON</p>
            <h1>Dress like<br /><em>you mean it.</em></h1>
            <p className="hero-copy">Elevated essentials made for every version of you.</p>
            <a className="btn btn-dark rounded-pill px-4" href="#gents-fashion">Shop the collection <span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner