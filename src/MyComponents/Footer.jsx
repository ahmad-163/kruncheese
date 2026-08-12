import React from 'react'

// Replace each src with the path/import of your actual icon image
const SOCIALS = [
  { name: 'Facebook', src: '/fb icon.png' },
  { name: 'Instagram', src: '/insta icon.png' },
  { name: 'X', src: '/twitter icon.png' },
  { name: 'LinkedIn', src: '/linkedin icon.png' },
  { name: 'YouTube', src: '/youtube icon.png' },
  { name: 'TikTok', src: '/tiktok icon.png' },
]

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ backgroundColor: '#f1f5f9', padding: '2rem 1rem' }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: '1500px',
          backgroundColor: '#fff',
          borderRadius: '1.25rem',
          padding: '2.5rem 2rem',
        }}
      >
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-4">
          {/* Logo */}
          <div className="d-flex flex-column justify-content-center flex-shrink-0">
            {/* Replace src with the path/import of your actual logo file */}
            <img
              src="/kruncheeselogo.png"
              alt="Kruncheese logo"
              style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
            />
          </div>

          {/* Contact info */}
          <div style={{ maxWidth: '30rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', marginBottom: '0.85rem' }}>
              Kruncheese
            </h3>

            <div className="d-flex align-items-center gap-2 mb-2">
              <i className="bi bi-telephone" style={{ color: '#dc2626', fontSize: '15px' }} />
              <span style={{ fontSize: '15px', color: '#374151' }}>+9248111434434</span>
            </div>

            <div className="d-flex align-items-center gap-2 mb-2">
              <i className="bi bi-envelope" style={{ color: '#dc2626', fontSize: '15px' }} />
              <span style={{ fontSize: '15px', color: '#374151' }}>contact@kruncheese.com.pk</span>
            </div>

            <div className="d-flex align-items-start gap-2 mb-3">
              <i className="bi bi-geo-alt" style={{ color: '#dc2626', fontSize: '15px', marginTop: '2px' }} />
              <span style={{ fontSize: '15px', color: '#374151', lineHeight: 1.5 }}>
                Kruncheese - Sargodha, CB-04 Shalimar Smart City, Mall Road, Sargodha
              </span>
            </div>

            <div className="d-flex gap-2">
              <a href="#" className="d-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  style={{ height: '40px' }}
                />
              </a>
              <a href="#" className="d-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  style={{ height: '40px' }}
                />
              </a>
            </div>
          </div>

          {/* Timings + Social */}
          <div className="flex-shrink-0">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', marginBottom: '0.85rem' }}>
              Our Timings
            </h3>
            <div
              className="d-flex justify-content-between"
              style={{ gap: '3.5rem', fontSize: '15px', color: '#374151', marginBottom: '1.5rem' }}
            >
              <span style={{ color: '#111827' }}>Monday - Sunday</span>
              <span style={{ whiteSpace: 'nowrap' }}>12:00 PM - 05:00 AM</span>
            </div>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.85rem' }}>
              Follow Us:
            </h4>
            <div className="d-flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="d-flex align-items-center justify-content-center overflow-hidden"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  }}
                >
                  <img
                    src={s.src}
                    alt={s.name}
                    style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div
          className="d-flex justify-content-center"
          style={{ gap: '2.5rem', marginTop: '2.5rem', marginBottom: '1.25rem', fontSize: '15px', color: '#111827' }}
        >
          <a href="#" style={{ textDecoration: 'underline', color: 'inherit' }}>
            Terms and conditions
          </a>
          <a href="#" style={{ textDecoration: 'underline', color: 'inherit' }}>
            Privacy Policy
          </a>
        </div>

        <hr style={{ borderTop: '1px solid #e5e7eb' }} />

        {/* Bottom */}
        <div className="text-center" style={{ fontSize: '0.875rem', color: '#374151', paddingTop: '1.25rem' }}>
          © 2026 Powered by{' '}
          <span
            style={{
              display: 'inline-block',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              verticalAlign: 'middle',
              margin: '0 4px',
              background: 'conic-gradient(from 180deg, #ff5fa2, #4facfe, #ff5fa2)',
            }}
          />
          <a href="#" style={{ fontWeight: 600, textDecoration: 'underline', color: '#111827' }}>
            Blink
          </a>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="d-flex align-items-center justify-content-center"
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          width: '44px',
          height: '44px',
          borderRadius: '0.75rem',
          backgroundColor: '#d96b6b',
          border: 'none',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          color: '#fff',
        }}
      >
        <i className="bi bi-chevron-up" style={{ fontSize: '18px' }} />
      </button>
    </div>
  )
}

export default Footer