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
            gap: '40px',
            marginBottom: '30px'
          }}
        >
          {/* Left Section */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#000', marginBottom: '20px' }}>
              Kruncheese
            </h3>

            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
              <span style={{ color: '#c40013', fontSize: '18px' }}>📞</span>
              <span style={{ fontSize: '15px', color: '#333' }}>+924211434434</span>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
              <span style={{ color: '#c40013', fontSize: '18px' }}>✉️</span>
              <span style={{ fontSize: '15px', color: '#333' }}>contact@kruncheese.com.pk</span>
            </div>

            {/* Address */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '25px' }}>
              <span style={{ color: '#c40013', fontSize: '18px', marginTop: '2px' }}>📍</span>
              <span style={{ fontSize: '15px', color: '#333', lineHeight: '1.6' }}>
                Kruncheese - Gulberg, 3 A - C3 Near Hussain Chowk, Gulberg 3, Lahore
              </span>
            </div>

            {/* App Store Badges */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#" style={{ display: 'block' }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  style={{ height: '40px' }}
                />
              </a>
              <a href="#" style={{ display: 'block' }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  style={{ height: '40px' }}
                />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#000', marginBottom: '20px' }}>
              Our Timings
            </h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
              <span style={{ fontSize: '15px', color: '#333' }}>Monday - Sunday</span>
              <span style={{ fontSize: '15px', color: '#333' }}>12:00 PM - 05:00 AM</span>
            </div>

            <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#000', marginBottom: '15px' }}>
              Follow Us:
            </h4>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#1877F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/fb icon.png" alt="Facebook" style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#E4405F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/insta icon.png" alt="Instagram" style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/twitter icon.png" alt="X" style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#0A66C2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/linkedin icon.png" alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/youtube icon.png" alt="YouTube" style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/tiktok icon.png" alt="TikTok" style={{ width: '20px', height: '20px' }} />
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
              style={{ height: '60px', margin: '0 auto' }}
            />
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#000', marginBottom: '20px' }}>
            Kruncheese
          </h3>

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <span style={{ color: '#c40013', fontSize: '18px' }}>📞</span>
            <span style={{ fontSize: '15px', color: '#333' }}>+924211434434</span>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <span style={{ color: '#c40013', fontSize: '18px' }}>✉️</span>
            <span style={{ fontSize: '15px', color: '#333' }}>contact@kruncheese.com.pk</span>
          </div>

          {/* Address */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '25px' }}>
            <span style={{ color: '#c40013', fontSize: '18px', marginTop: '2px' }}>📍</span>
            <span style={{ fontSize: '15px', color: '#333', lineHeight: '1.6' }}>
              Kruncheese - Gulberg, 3 A - C3 Near Hussain Chowk, Gulberg 3, Lahore
            </span>
          </div>

          {/* App Store Badges */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '30px', flexWrap: 'wrap' }}>
            <a href="#" style={{ display: 'block' }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                style={{ height: '40px' }}
              />
            </a>
            <a href="#" style={{ display: 'block' }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                style={{ height: '40px' }}
              />
            </a>
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#000', marginBottom: '20px' }}>
            Our Timings
          </h3>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            <span style={{ fontSize: '15px', color: '#333' }}>Monday - Sunday</span>
            <span style={{ fontSize: '15px', color: '#333' }}>12:00 PM - 05:00 AM</span>
          </div>

          <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#000', marginBottom: '15px' }}>
            Follow Us:
          </h4>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '30px' }}>
            <a
              href="#"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#1877F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/fb icon.png" alt="Facebook" style={{ width: '20px', height: '20px' }} />
            </a>
            <a
              href="#"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#E4405F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/insta icon.png" alt="Instagram" style={{ width: '20px', height: '20px' }} />
            </a>
            <a
              href="#"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/twitter icon.png" alt="X" style={{ width: '20px', height: '20px' }} />
            </a>
            <a
              href="#"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#0A66C2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/linkedin icon.png" alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
            </a>
            <a
              href="#"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#FF0000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/youtube icon.png" alt="YouTube" style={{ width: '20px', height: '20px' }} />
            </a>
            <a
              href="#"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/tiktok icon.png" alt="TikTok" style={{ width: '20px', height: '20px' }} />
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
          <a href="#" style={{ fontWeight: '600', color: '#000', textDecoration: 'none' }}>
            🔵 Blink
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
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s',
          zIndex: 999
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
