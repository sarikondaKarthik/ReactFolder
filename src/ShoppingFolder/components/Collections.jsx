
const Collections = (props) => {
  const {title, ...collection} = props.gentsFashion
  const products = Object.keys(collection)
    .filter((key) => key.startsWith('image'))
    .map((key) => ({ image: collection[key], price: collection[key.replace('image', 'price')] }))
  return (
    <section className="collection-section container" id="men">
      <div className="section-heading" id="gents-fashion">
        <div>
          <p className="eyebrow">CURATED FOR YOU</p>
          <h2>{title}</h2>
        </div>
        <a href="#men" className="view-all">View all <span>→</span></a>
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
                <p className="product-name">Essential look {index + 1}</p>
                <strong>{price}</strong>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Collections