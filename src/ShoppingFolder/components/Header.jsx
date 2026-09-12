
const Header = ({ onAccountClick }) => {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand brand-mark" href="#">
            <span className="brand-icon">S</span>
            Style<span>Street</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto gap-lg-3">
              {['Men', 'Women', 'Kids', 'Beauty'].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
            <div className="header-actions">
              <div className="search-wrap">
                <span aria-hidden="true">⌕</span>
                <input type="search" placeholder="Search styles" aria-label="Search styles" />
              </div>
              <button className="icon-action" type="button" aria-label="Account" onClick={onAccountClick}>♙</button>
              <button className="icon-action cart-action" type="button" aria-label="Shopping cart">
                ♡<span className="cart-count">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="announcement">Free shipping on orders over ₹999 <span>•</span> Easy 30-day returns</div>
    </header>
  )
}

export default Header