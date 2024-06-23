import React from 'react';
import './index.css';
import logo from './Skilltern.png';

const Footer = () => {
  return (
    <footer className="main-footer bg-black">
      <div className="main-footer__top">
        <div className="container">
          <div className="main-footer__inner">
            <a href="index.html" className="main-footer__inner-logo">
              <img
                src={logo}
                width="174"
                alt="SkillTern EdTech"
              />
            </a>
            <div className="main-footer__inner-social">
              <a href="https://facebook.com">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com">
                <i className="icon-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://pinterest.com">
                <i className="icon-pinterest" aria-hidden="true"></i>
              </a>
              <a href="https://instagram.com">
                <i className="icon-Instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="main-footer__middle">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-2">
              <div className="footer-widget">
                <div className="footer-widget--links">
                  <ul className="list-unstyled footer-widget__links">
                    <li><a href="course.html">Top Courses</a></li>
                    <li><a href="service-d-road.html">Certifications</a></li>
                    <li><a href="team.html">Our Instructors</a></li>
                    <li><a href="blog-grid.html">Latest News</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-2">
              <div className="footer-widget">
                <div className="footer-widget--links footer-widget--links2">
                  <ul className="list-unstyled footer-widget__links">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="blog-details.html">Upcoming Events</a></li>
                    <li><a href="faq.html">FAQs</a></li>
                    <li><a href="team.html">Insurance</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="footer-widget">
                <div className="footer-widget--gallery">
                  <div className="footer-widget__grid">
                    <a
                      href="assets/images/gallery/gallery-2-1.jpg"
                      className="footer-widget__grid-item popup-gallery"
                      style={{backgroundImage: 'url(assets/images/gallery/gallery-2-1.jpg)'}}
                    ></a>
                    <a
                      href="assets/images/gallery/gallery-2-2.jpg"
                      className="footer-widget__grid-item popup-gallery"
                      style={{backgroundImage: 'url(assets/images/gallery/gallery-2-2.jpg)'}}
                    ></a>
                    <a
                      href="assets/images/gallery/gallery-2-3.jpg"
                      className="footer-widget__grid-item popup-gallery"
                      style={{backgroundImage: 'url(assets/images/gallery/gallery-2-3.jpg)'}}
                    ></a>
                    <a
                      href="assets/images/gallery/gallery-2-4.jpg"
                      className="footer-widget__grid-item popup-gallery"
                      style={{backgroundImage: 'url(assets/images/gallery/gallery-2-4.jpg)'}}
                    ></a>
                    <a
                      href="assets/images/gallery/gallery-2-5.jpg"
                      className="footer-widget__grid-item popup-gallery"
                      style={{backgroundImage: 'url(assets/images/gallery/gallery-2-5.jpg)'}}
                    ></a>
                    <a
                      href="assets/images/gallery/gallery-2-6.jpg"
                      className="footer-widget__grid-item popup-gallery"
                      style={{backgroundImage: 'url(assets/images/gallery/gallery-2-6.jpg)'}}
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4 offset-xl-1">
              <div className="footer-widget footer-widget__right">
                <div className="footer-widget--about">
                  <ul className="list-unstyled footer-widget__info">
                    <li>
                      <i className="icon-map-pin" aria-hidden="true"></i>
                      <a href="https://www.google.com/maps">
                        6391 Elgin St. Celina, Delaware 10299
                      </a>
                    </li>
                    <li>
                      <i className="icon-telephone-call-1" aria-hidden="true"></i>
                      <a href="tel:+8801775-338747">(303) 555-0105</a>
                    </li>
                    <li>
                      <i className="icon-envelope" aria-hidden="true"></i>
                      <a href="mailto:info@skilltern.com">
                        info@skilltern.com
                      </a>
                    </li>
                  </ul>
                </div>

                <form
                  action="#"
                  className="footer-widget__newsletter mc-form"
                >
                  <input type="text" name="EMAIL" placeholder="Email address" />
                  <button type="submit">
                    Subscribe <span className="sr-only">Subscribe</span>
                  </button>
                </form>

                <h6 className="footer-widget__update">
                  Stay Updated with the Latest Trends in Skill Development
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-footer__bottom">
        <div className="container">
          <div className="main-footer__bottom__inner">
            <p className="main-footer__copyright">
              &copy; Copyright <span className="dynamic-year"></span> by SkillTern EdTech.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
