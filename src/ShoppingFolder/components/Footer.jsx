

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a className="brand-mark footer-brand" href="#"><span className="brand-icon">S</span>Style<span>Street</span></a>
            <p>Style that moves with you.</p>
          </div>
          <div className="footer-links">
            <a href="#men">Men</a><a href="#women">Women</a><a href="#kids">Kids</a><a href="#beauty">Beauty</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 StyleStreet. All rights reserved.</span>
          <span>Made for your everyday.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer