import React from 'react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '40px 20px 20px' }}>
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '40px',
        }}
      >
        {/* Desktop Layout */}
        <div 
          className="footer-desktop"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            marginBottom: '30px'
          }}
        >
          {/* Left Section */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
            {/* Logo - Large and to the left */}
            <div style={{ flexShrink: 0 }}>
              <img
                src="/kruncheeselogo.png"
                alt="Kruncheese"
                style={{ height: '180px' }}
              />
            </div>

            {/* Contact Details */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#000', marginBottom: '18px' }}>
                Kruncheese
              </h3>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#c40013">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <span style={{ fontSize: '14px', color: '#333' }}>+924211434434</span>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#c40013">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span style={{ fontSize: '14px', color: '#333' }}>contact@kruncheese.com.pk</span>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#c40013" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span style={{ fontSize: '14px', color: '#333', lineHeight: '1.5' }}>
                  Kruncheese - Gulberg, 3 A - C3 Near Hussain Chowk, Gulberg 3, Lahore
                </span>
              </div>

              {/* App Store Badges */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="#" style={{ display: 'block' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    style={{ height: '42px' }}
                  />
                </a>
                <a href="#" style={{ display: 'block' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    style={{ height: '42px' }}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#000', marginBottom: '18px' }}>
              Our Timings
            </h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '35px', fontSize: '14px' }}>
              <span style={{ color: '#333' }}>Monday - Sunday</span>
              <span style={{ color: '#333' }}>12:00 PM - 05:00 AM</span>
            </div>

            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#000', marginBottom: '15px' }}>
              Follow Us:
            </h4>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="#"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: '#1877F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/fb icon.png" alt="Facebook" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: '#E4405F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/insta icon.png" alt="Instagram" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/twitter icon.png" alt="X" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: '#0A66C2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/linkedin icon.png" alt="LinkedIn" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/youtube icon.png" alt="YouTube" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/tiktok icon.png" alt="TikTok" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div 
          className="footer-mobile"
          style={{ display: 'none' }}
        >
          {/* Logo Centered */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img
              src="/kruncheeselogo.png"
              alt="Kruncheese"
              style={{ height: '100px', margin: '0 auto' }}
            />
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#000', marginBottom: '18px' }}>
            Kruncheese
          </h3>

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#c40013">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            <span style={{ fontSize: '14px', color: '#333' }}>+924211434434</span>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#c40013">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span style={{ fontSize: '14px', color: '#333' }}>contact@kruncheese.com.pk</span>
          </div>

          {/* Address */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#c40013" style={{ marginTop: '2px', flexShrink: 0 }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span style={{ fontSize: '14px', color: '#333', lineHeight: '1.5' }}>
              Kruncheese - Gulberg, 3 A - C3 Near Hussain Chowk, Gulberg 3, Lahore
            </span>
          </div>

          {/* App Store Badges */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
            <a href="#" style={{ display: 'block' }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                style={{ height: '42px' }}
              />
            </a>
            <a href="#" style={{ display: 'block' }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                style={{ height: '42px' }}
              />
            </a>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#000', marginBottom: '18px' }}>
            Our Timings
          </h3>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '14px' }}>
            <span style={{ color: '#333' }}>Monday - Sunday</span>
            <span style={{ color: '#333' }}>12:00 PM - 05:00 AM</span>
          </div>

          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#000', marginBottom: '15px' }}>
            Follow Us:
          </h4>

          {/* Social Icons - Mobile */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
            <a href="#" style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/fb icon.png" alt="Facebook" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
            <a href="#" style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: '#E4405F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/insta icon.png" alt="Instagram" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
            <a href="#" style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/twitter icon.png" alt="X" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
            <a href="#" style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: '#0A66C2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/linkedin icon.png" alt="LinkedIn" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
            <a href="#" style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/youtube icon.png" alt="YouTube" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
            <a href="#" style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/tiktok icon.png" alt="TikTok" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '30px',
            marginBottom: '20px',
            fontSize: '14px',
            color: '#333',
            flexWrap: 'wrap'
          }}
        >
          <a href="#" style={{ textDecoration: 'underline', color: '#333' }}>
            Terms and conditions
          </a>
          <a href="#" style={{ textDecoration: 'underline', color: '#333' }}>
            Privacy Policy
          </a>
        </div>

        <hr style={{ borderTop: '1px solid #e5e7eb', margin: '20px 0' }} />

        {/* Bottom */}
        <div style={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>
          © 2026 Powered by{' '}
          <span style={{
            display: 'inline-block',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            verticalAlign: 'middle',
            marginRight: '4px'
          }}></span>
          <a href="#" style={{ fontWeight: '600', color: '#000', textDecoration: 'none' }}>
            Blink
          </a>
        </div>
      </div>

      {/* Back to top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#d96b6b',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s',
          zIndex: 999,
          fontWeight: 'bold'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)'
          e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'
          e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        ↑
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-desktop {
            display: none !important;
          }
          .footer-mobile {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Footer
