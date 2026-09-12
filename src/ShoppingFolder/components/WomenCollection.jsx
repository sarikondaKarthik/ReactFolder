
const WomenCollection = (props) => {
  const {title, ...collection} = props.ladiesFashion
  const products = Object.keys(collection)
    .filter((key) => key.startsWith('image'))
    .map((key) => ({ image: collection[key], price: collection[key.replace('image', 'price')] }))
  return (
    <section className="women-section" id="women">
      <div className="container">
        <div className="women-banner">
          <img src="assets/LadiesBanner.gif" alt="New season women's fashion" />
          <div className="women-banner-content">
            <p className="eyebrow">FRESH ARRIVALS</p>
            <h2>Made to<br /><em>be noticed.</em></h2>
            <a className="btn btn-light rounded-pill px-4" href="#ladies-fashion">Explore women’s edit <span>→</span></a>
          </div>
        </div>
      </div>
      <div className="collection-section container" id="ladies-fashion">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THIS WEEK'S EDIT</p>
            <h2>{title}</h2>
          </div>
          <a href="#women" className="view-all">View all <span>→</span></a>
        </div>
        <div className="row g-3 g-md-4">
          {products.map(({image, price}, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={image}>
              <article className="product-card">
                <div className="product-image">
                  <img src={image} alt={`${title} look ${index + 1}`} />
                  <button className="wishlist" type="button" aria-label="Add to wishlist">♡</button>
                </div>
                <div className="product-info">
                  <p className="product-name">Statement look {index + 1}</p>
                  <strong>{price}</strong>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WomenCollection;