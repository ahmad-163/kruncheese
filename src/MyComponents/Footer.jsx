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
    <div style={{ backgroundColor: '#f1f5f9', padding: 'clamp(1rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1rem)' }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: '1500px',
          backgroundColor: '#fff',
          borderRadius: 'clamp(12px, 2vw, 20px)',
          padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem)',
        }}
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'start'
          }}
        >
          {/* Logo */}
          <div className="d-flex flex-column justify-content-center">
            <img
              src="/kruncheeselogo.png"
              alt="Kruncheese logo"
              style={{ height: 'clamp(55px, 10vw, 80px)', width: 'auto', objectFit: 'contain' }}
            />
          </div>

          {/* Contact info */}
          <div>
            <h3 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 700, color: '#111827', marginBottom: '0.85rem' }}>
              Kruncheese
            </h3>

            <div className="d-flex align-items-center gap-2 mb-2" style={{ flexWrap: 'wrap' }}>
              <i className="bi bi-telephone" style={{ color: '#dc2626', fontSize: 'clamp(13px, 2.5vw, 15px)' }} />
              <span style={{ fontSize: 'clamp(12px, 2.5vw, 15px)', color: '#374151' }}>+9248111434434</span>
            </div>

            <div className="d-flex align-items-center gap-2 mb-2" style={{ flexWrap: 'wrap' }}>
              <i className="bi bi-envelope" style={{ color: '#dc2626', fontSize: 'clamp(13px, 2.5vw, 15px)' }} />
              <span style={{ fontSize: 'clamp(12px, 2.5vw, 15px)', color: '#374151', wordBreak: 'break-word' }}>contact@kruncheese.com.pk</span>
            </div>

            <div className="d-flex align-items-start gap-2 mb-3">
              <i className="bi bi-geo-alt" style={{ color: '#dc2626', fontSize: 'clamp(13px, 2.5vw, 15px)', marginTop: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: 'clamp(12px, 2.5vw, 15px)', color: '#374151', lineHeight: 1.5 }}>
                Kruncheese - Sargodha, CB-04 Shalimar Smart City, Mall Road, Sargodha
              </span>
            </div>

            <div className="d-flex gap-2" style={{ flexWrap: 'wrap' }}>
              <a href="#" className="d-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  style={{ height: 'clamp(32px, 6vw, 40px)' }}
                />
              </a>
              <a href="#" className="d-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  style={{ height: 'clamp(32px, 6vw, 40px)' }}
                />
              </a>
            </div>
          </div>

          {/* Timings + Social */}
          <div>
            <h3 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 700, color: '#111827', marginBottom: '0.85rem' }}>
              Our Timings
            </h3>
            <div
              style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                fontSize: 'clamp(12px, 2.5vw, 15px)', 
                color: '#374151', 
                marginBottom: '1.5rem' 
              }}
            >
              <span style={{ color: '#111827', fontWeight: '600' }}>Monday - Sunday</span>
              <span style={{ whiteSpace: 'nowrap' }}>12:00 PM - 05:00 AM</span>
            </div>

            <h4 style={{ fontSize: 'clamp(14px, 2.8vw, 16px)', fontWeight: 700, color: '#111827', marginBottom: '0.85rem' }}>
              Follow Us:
            </h4>
            <div className="d-flex gap-2" style={{ flexWrap: 'wrap' }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="d-flex align-items-center justify-content-center overflow-hidden"
                  style={{
                    width: 'clamp(32px, 6vw, 36px)',
                    height: 'clamp(32px, 6vw, 36px)',
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)'
                  }}
                >
                  <img
                    src={s.src}
                    alt={s.name}
                    style={{ width: 'clamp(14px, 3vw, 18px)', height: 'clamp(14px, 3vw, 18px)', objectFit: 'contain' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div
          className="d-flex justify-content-center"
          style={{ 
            gap: 'clamp(1rem, 3vw, 2.5rem)', 
            marginTop: 'clamp(1.5rem, 3vw, 2.5rem)', 
            marginBottom: '1.25rem', 
            fontSize: 'clamp(12px, 2.5vw, 15px)', 
            color: '#111827',
            flexWrap: 'wrap',
            textAlign: 'center'
          }}
        >
          <a href="#" style={{ textDecoration: 'underline', color: 'inherit' }}>
            Terms and conditions
          </a>
          <a href="#" style={{ textDecoration: 'underline', color: 'inherit' }}>
            Privacy Policy
          </a>
        </div>

        <hr style={{ borderTop: '1px solid #e5e7eb', margin: 'clamp(1rem, 2vw, 1.5rem) 0' }} />

        {/* Bottom */}
        <div className="text-center" style={{ fontSize: 'clamp(11px, 2.2vw, 14px)', color: '#374151', paddingTop: '1rem' }}>
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

      {/* Back to top - Responsive */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="d-flex align-items-center justify-content-center"
        style={{
          position: 'fixed',
          bottom: 'clamp(0.75rem, 2vw, 1rem)',
          right: 'clamp(0.75rem, 2vw, 1rem)',
          width: 'clamp(40px, 8vw, 44px)',
          height: 'clamp(40px, 8vw, 44px)',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          backgroundColor: '#d96b6b',
          border: 'none',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          color: '#fff',
          cursor: 'pointer',
          transition: 'all 0.3s',
          zIndex: 999
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1) translateY(-2px)'
          e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.25)'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1) translateY(0)'
          e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)'
        }}
      >
        <i className="bi bi-chevron-up" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }} />
      </button>
    </div>
  )
}

export default Footer
