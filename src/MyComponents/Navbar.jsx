import React, { useState, useEffect, useRef } from 'react'

const categories = ["Deals", "Burgers", "Wraps", "Sides", "Dip", "Drinks"]

// Media query hook
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        media.addListener(listener)
        return () => media.removeListener(listener)
    }, [matches, query])

    return matches
}

// Cities and their sub-regions
const citiesData = {
    "Lahore": ["DHA Phase 5", "Gulberg III", "Johar Town", "Model Town", "Abdalians Society Block B"],
    "Karachi": ["DHA Phase 6", "Clifton Block 2", "Gulshan-e-Iqbal", "Saddar"],
    "Islamabad": ["F-7 Markaz", "Blue Area", "G-11", "I-8"],
    "Sargodha": ["Aziz Colony", "Satellite Town", "University Road"],
}

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeCategory, setActiveCategory] = useState("Deals")
    const [showLocationModal, setShowLocationModal] = useState(false)
    const [showSearchModal, setShowSearchModal] = useState(false)
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const [selectedCity, setSelectedCity] = useState("Sargodha")
    const [selectedArea, setSelectedArea] = useState("Aziz Colony")
    const [orderType, setOrderType] = useState("Delivery")
    const [locationConfirmed, setLocationConfirmed] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const profileRef = useRef(null)
    
    const isMobile = useMediaQuery('(max-width: 768px)')
    const isTablet = useMediaQuery('(max-width: 1024px)')

    // Show location modal on first visit
    useEffect(() => {
        const hasVisited = localStorage.getItem('hasSelectedLocation')
        if (!hasVisited) {
            setShowLocationModal(true)
        } else {
            // Load saved location
            const savedCity = localStorage.getItem('selectedCity')
            const savedArea = localStorage.getItem('selectedArea')
            const savedOrderType = localStorage.getItem('orderType')
            if (savedCity && savedArea) {
                setSelectedCity(savedCity)
                setSelectedArea(savedArea)
                setOrderType(savedOrderType || "Delivery")
                setLocationConfirmed(true)
            }
        }
    }, [])

    // Handle scroll to update sticky navbar and detect sections
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)

            // Detect which section is in view
            const sections = document.querySelectorAll('[data-section]')
            let currentSection = "Deals"

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect()
                // If section is in the viewport (with some offset for the navbar)
                if (rect.top <= 200 && rect.bottom >= 200) {
                    currentSection = section.getAttribute('data-section')
                }
            })

            setActiveCategory(currentSection)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close profile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfileMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleCategoryClick = (cat) => {
        setActiveCategory(cat)
        // Smooth scroll to section
        const section = document.querySelector(`[data-section="${cat}"]`)
        if (section) {
            const offset = 160 // Account for fixed navbar height
            const elementPosition = section.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    const handleLocationSelect = () => {
        localStorage.setItem('hasSelectedLocation', 'true')
        localStorage.setItem('selectedCity', selectedCity)
        localStorage.setItem('selectedArea', selectedArea)
        localStorage.setItem('orderType', orderType)
        setLocationConfirmed(true)
        setShowLocationModal(false)
    }

    const handleUseCurrentLocation = () => {
        // Implement geolocation logic here
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    alert(`Location detected: ${position.coords.latitude}, ${position.coords.longitude}`)
                    // You would typically reverse geocode this to get city/area
                },
                (error) => {
                    alert('Unable to get your location. Please select manually.')
                }
            )
        } else {
            alert('Geolocation is not supported by your browser.')
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        // Implement search logic here
        console.log('Searching for:', searchQuery)
        alert(`Searching for: ${searchQuery}`)
        setShowSearchModal(false)
        setSearchQuery('')
    }

    return (
        <div>
            {/* Simplified Top Navbar - Responsive */}
            <div
                className="d-flex align-items-center justify-content-between"
                style={{ 
                    height: isMobile ? '50px' : '60px', 
                    borderBottom: '1px solid #eee', 
                    background: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    padding: isMobile ? '0 12px' : '0 16px',
                    position: 'relative',
                    zIndex: 2000
                }}
            >
                {/* Location Selector - Left Side */}
                <div 
                    className="d-flex align-items-center" 
                    style={{ cursor: 'pointer', gap: isMobile ? '4px' : '8px', flex: 1, minWidth: 0 }}
                    onClick={() => setShowLocationModal(true)}
                >
                    <span style={{ fontSize: isMobile ? '16px' : '20px', color: '#c40013', flexShrink: 0 }}>📍</span>
                    <div style={{ overflow: 'hidden', minWidth: 0 }}>
                        <div style={{ fontSize: isMobile ? '10px' : '12px', color: '#333', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {orderType} to
                        </div>
                        <div style={{ fontSize: isMobile ? '9px' : '12px', color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {isMobile ? `${selectedArea}` : `${selectedArea}, ${selectedCity} - eta 45 min`}
                        </div>
                    </div>
                </div>

                {/* Brand Logo - Center */}
                <div style={{ 
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 1
                }}>
                    <img 
                        src="/kruncheeselogo(2).png" 
                        alt="KRUNCHEESE" 
                        style={{ height: isMobile ? '5px' : '30px' }}
                        onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'block'
                        }}
                    />
                    <div style={{ 
                        display: 'none',
                        fontSize: isMobile ? '18px' : '24px', 
                        fontWeight: 'bold', 
                        color: '#c40013' 
                    }}>
                        KRUNCHEESE
                    </div>
                </div>

                {/* Action Icons - Right Side */}
                <div className="d-flex align-items-center" style={{ gap: isMobile ? '12px' : '20px', zIndex: 2 }}>
                    {/* Search Icon */}
                    <span 
                        style={{ 
                            cursor: 'pointer',
                            fontSize: isMobile ? '16px' : '20px',
                            color: '#c40013'
                        }}
                        onClick={() => setShowSearchModal(true)}
                        title="Search"
                    >
                        🔍
                    </span>

                    {/* Profile Icon with Dropdown */}
                    <div style={{ position: 'relative' }} ref={profileRef}>
                        <span 
                            style={{ 
                                cursor: 'pointer',
                                fontSize: isMobile ? '16px' : '20px',
                                color: '#c40013'
                            }}
                            onClick={() => setShowProfileMenu(!showProfileMenu)}
                            title="Profile"
                        >
                            👤
                        </span>

                        {/* Profile Dropdown Menu */}
                        {showProfileMenu && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '35px',
                                    right: '0',
                                    background: '#fff',
                                    border: '1px solid #eee',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                                    minWidth: isMobile ? '180px' : '200px',
                                    zIndex: 2000,
                                    overflow: 'hidden',
                                }}
                            >
                                {isLoggedIn ? (
                                    <>
                                        <div style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>John Doe</div>
                                            <div style={{ fontSize: '12px', color: '#999' }}>john@example.com</div>
                                        </div>
                                        <button
                                            onClick={() => console.log('My Orders')}
                                            style={{
                                                width: '100%',
                                                border: 'none',
                                                background: 'transparent',
                                                padding: '10px 16px',
                                                textAlign: 'left',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                color: '#333',
                                            }}
                                            onMouseEnter={(e) => e.target.style.background = '#f8f8f8'}
                                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                        >
                                            📦 My Orders
                                        </button>
                                        <button
                                            onClick={() => console.log('Account Settings')}
                                            style={{
                                                width: '100%',
                                                border: 'none',
                                                background: 'transparent',
                                                padding: '10px 16px',
                                                textAlign: 'left',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                color: '#333',
                                            }}
                                            onMouseEnter={(e) => e.target.style.background = '#f8f8f8'}
                                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                        >
                                            ⚙️ Account Settings
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsLoggedIn(false)
                                                setShowProfileMenu(false)
                                            }}
                                            style={{
                                                width: '100%',
                                                border: 'none',
                                                background: 'transparent',
                                                padding: '10px 16px',
                                                textAlign: 'left',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                color: '#c40013',
                                                borderTop: '1px solid #eee',
                                            }}
                                            onMouseEnter={(e) => e.target.style.background = '#f8f8f8'}
                                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                        >
                                            🚪 Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => {
                                                setIsLoggedIn(true)
                                                setShowProfileMenu(false)
                                            }}
                                            style={{
                                                width: '100%',
                                                border: 'none',
                                                background: 'transparent',
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                color: '#333',
                                                fontWeight: '600',
                                            }}
                                            onMouseEnter={(e) => e.target.style.background = '#f8f8f8'}
                                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                        >
                                            🔐 Login
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsLoggedIn(true)
                                                setShowProfileMenu(false)
                                            }}
                                            style={{
                                                width: '100%',
                                                border: 'none',
                                                background: 'transparent',
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                color: '#333',
                                                fontWeight: '600',
                                            }}
                                            onMouseEnter={(e) => e.target.style.background = '#f8f8f8'}
                                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                        >
                                            ✨ Sign Up
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Cart Icon with Badge */}
                    <div style={{ position: 'relative', cursor: 'pointer' }}>
                        <span style={{ fontSize: isMobile ? '16px' : '20px', color: '#c40013' }}>🛒</span>
                        <span
                            style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-10px',
                                background: '#000',
                                color: '#fff',
                                borderRadius: '50%',
                                width: isMobile ? '16px' : '18px',
                                height: isMobile ? '16px' : '18px',
                                fontSize: isMobile ? '10px' : '11px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '600',
                            }}
                        >
                            0
                        </span>
                    </div>
                </div>
            </div>

            {/* Sticky Category Navigation - Responsive */}
            <div  className="category-scroll"
                style={{
                    position: 'fixed',
                    top: scrolled ? '0px' : (isMobile ? '50px' : '60px'), 
                    left: 0,
                    right: 0,
                    background: '#f7f7f8',
                    borderBottom: scrolled ? '1px solid #eee' : 'none',
                    padding: isMobile ? '12px 0' : (isTablet ? '16px 0' : '20px 0'),
                    zIndex: 1000,
                    transition: 'top 0.3s ease',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                }}
            >
                <div
                    style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: isMobile ? '0 16px' : '0 16px',
                        position: 'relative',
                        overflowX: 'hidden',
                    }}
                >
                    <div
                        className="d-flex"
                        style={{
                            gap: isMobile ? '8px' : '14px',
                            width: isMobile ? 'max-content' : 'fit-content'
                        }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryClick(cat)}
                                className="fw-bold"
                                style={{
                                    padding: isMobile ? '8px 16px' : '10px 24px',
                                    borderRadius: '30px',
                                    border: 'none',
                                    background: activeCategory === cat ? '#fff' : '#c40013',
                                    color: activeCategory === cat ? '#c40013' : '#fff',
                                    boxShadow: activeCategory === cat ? '0 1px 4px rgba(0,0,0,0.15)' : 'none',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.2s ease',
                                    fontSize: isMobile ? '13px' : '15px',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ height: isMobile ? '56px' : '76px' }} />

            {/* Location Selection Modal - Shown on first visit */}
            {showLocationModal && (
                <div
                    onClick={(e) => {
                        // Don't allow closing if location not confirmed yet
                        if (locationConfirmed) {
                            setShowLocationModal(false)
                        }
                    }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 3000,
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: '#fff',
                            borderRadius: isMobile ? '16px' : '20px',
                            padding: isMobile ? '24px 20px' : (isTablet ? '32px 36px' : '40px 50px'),
                            maxWidth: isMobile ? '95%' : (isTablet ? '500px' : '600px'),
                            width: isMobile ? '95%' : '90%',
                            position: 'relative',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                        }}
                    >
                        {/* Close Button - Only show if location already confirmed */}
                        {locationConfirmed && (
                            <button
                                onClick={() => setShowLocationModal(false)}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: '#999',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '36px',
                                    height: '36px',
                                    fontSize: '20px',
                                    cursor: 'pointer',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                ×
                            </button>
                        )}

                        {/* Logo */}
                        <div style={{ textAlign: 'center', marginBottom: isMobile ? '20px' : '30px' }}>
                            <img 
                                src="/kruncheeselogo.png?v=3" 
                                alt="KRUNCHEESE" 
                                style={{ height: isMobile ? '50px' : '65px' }}
                                onError={(e) => {
                                    e.target.style.display = 'none'
                                    e.target.nextSibling.style.display = 'block'
                                }}
                            />
                            <div style={{ 
                                display: 'none',
                                fontSize: isMobile ? '20px' : '26px', 
                                fontWeight: 'bold', 
                                color: '#c40013' 
                            }}>
                                KRUNCHEESE
                            </div>
                        </div>

                        {/* Select Order Type */}
                        <h3 style={{ 
                            textAlign: 'center', 
                            fontSize: isMobile ? '18px' : '22px', 
                            marginBottom: isMobile ? '16px' : '20px',
                            color: '#333',
                            fontWeight: '600'
                        }}>
                            Select your order type
                        </h3>

                        <div style={{ 
                            display: 'flex', 
                            gap: isMobile ? '8px' : '12px', 
                            justifyContent: 'center',
                            marginBottom: isMobile ? '20px' : '30px'
                        }}>
                            <button
                                onClick={() => setOrderType('Delivery')}
                                style={{
                                    padding: isMobile ? '10px 24px' : '12px 40px',
                                    borderRadius: '30px',
                                    border: 'none',
                                    background: orderType === 'Delivery' ? '#c40013' : '#fff',
                                    color: orderType === 'Delivery' ? '#fff' : '#333',
                                    fontSize: isMobile ? '13px' : '15px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    border: `2px solid ${orderType === 'Delivery' ? '#c40013' : '#ddd'}`,
                                    transition: 'all 0.2s',
                                }}
                            >
                                Delivery
                            </button>
                            <button
                                onClick={() => setOrderType('Pick-Up')}
                                style={{
                                    padding: isMobile ? '10px 24px' : '12px 40px',
                                    borderRadius: '30px',
                                    border: 'none',
                                    background: orderType === 'Pick-Up' ? '#c40013' : '#fff',
                                    color: orderType === 'Pick-Up' ? '#fff' : '#333',
                                    fontSize: isMobile ? '13px' : '15px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    border: `2px solid ${orderType === 'Pick-Up' ? '#c40013' : '#ddd'}`,
                                    transition: 'all 0.2s',
                                }}
                            >
                                Pick-Up
                            </button>
                        </div>

                        {/* Select Location */}
                        <h4 style={{ 
                            fontSize: '16px', 
                            marginBottom: '20px',
                            color: '#333',
                            textAlign: 'center',
                            fontWeight: '500'
                        }}>
                            Please select your location
                        </h4>

                        {/* Use Current Location Button */}
                        <button
                            onClick={handleUseCurrentLocation}
                            style={{
                                width: '100%',
                                padding: '14px',
                                borderRadius: '30px',
                                border: '2px solid #eee',
                                background: '#f8f8f8',
                                color: '#333',
                                fontSize: '15px',
                                fontWeight: '500',
                                cursor: 'pointer',
                                marginBottom: '25px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                            }}
                            onMouseEnter={(e) => e.target.style.background = '#efefef'}
                            onMouseLeave={(e) => e.target.style.background = '#f8f8f8'}
                        >
                            🎯 Use Current Location
                        </button>

                        {/* City Dropdown */}
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ 
                                display: 'block', 
                                fontSize: '14px', 
                                fontWeight: '600',
                                marginBottom: '8px',
                                color: '#333',
                                textAlign: 'left'
                            }}>
                                Select City / Region
                            </label>
                            <select
                                value={selectedCity}
                                onChange={(e) => {
                                    setSelectedCity(e.target.value)
                                    setSelectedArea(citiesData[e.target.value][0])
                                }}
                                style={{
                                    width: '100%',
                                    padding: '14px 18px',
                                    borderRadius: '30px',
                                    border: '2px solid #eee',
                                    fontSize: '15px',
                                    cursor: 'pointer',
                                    outline: 'none',
                                    appearance: 'none',
                                    background: '#fff url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23333\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E") no-repeat right 18px center',
                                }}
                            >
                                {Object.keys(citiesData).map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>

                        {/* Area Dropdown */}
                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ 
                                display: 'block', 
                                fontSize: '14px', 
                                fontWeight: '600',
                                marginBottom: '8px',
                                color: '#333',
                                textAlign: 'left'
                            }}>
                                Select Area / Sub Region
                            </label>
                            <select
                                value={selectedArea}
                                onChange={(e) => setSelectedArea(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '14px 18px',
                                    borderRadius: '30px',
                                    border: '2px solid #eee',
                                    fontSize: '15px',
                                    cursor: 'pointer',
                                    outline: 'none',
                                    appearance: 'none',
                                    background: '#fff url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23333\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E") no-repeat right 18px center',
                                }}
                            >
                                {citiesData[selectedCity].map((area) => (
                                    <option key={area} value={area}>{area}</option>
                                ))}
                            </select>
                        </div>

                        {/* Select Button */}
                        <button
                            onClick={handleLocationSelect}
                            style={{
                                width: '100%',
                                padding: '16px',
                                borderRadius: '30px',
                                border: 'none',
                                background: '#c40013',
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'background 0.2s',
                            }}
                            onMouseEnter={(e) => e.target.style.background = '#a3000f'}
                            onMouseLeave={(e) => e.target.style.background = '#c40013'}
                        >
                            Select
                        </button>
                    </div>
                </div>
            )}

            {/* Search Modal */}
            {showSearchModal && (
                <div
                    onClick={() => setShowSearchModal(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        paddingTop: '100px',
                        zIndex: 3000,
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: '#fff',
                            borderRadius: '16px',
                            padding: '24px',
                            maxWidth: '600px',
                            width: '90%',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h4 style={{ margin: 0, color: '#c40013', fontWeight: 'bold' }}>Search Menu</h4>
                            <button
                                onClick={() => setShowSearchModal(false)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: '#999',
                                }}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSearch}>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search for burgers, deals, drinks..."
                                    autoFocus
                                    style={{
                                        flex: 1,
                                        padding: '12px 16px',
                                        border: '2px solid #eee',
                                        borderRadius: '12px',
                                        fontSize: '15px',
                                        outline: 'none',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#c40013'}
                                    onBlur={(e) => e.target.style.borderColor = '#eee'}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        background: '#c40013',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '12px',
                                        padding: '12px 24px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        <div style={{ marginTop: '16px', fontSize: '13px', color: '#999' }}>
                            <div style={{ fontWeight: '600', marginBottom: '8px' }}>Popular searches:</div>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {['Zinger', 'Fries', 'Deals', 'Burger', 'Drinks'].map((term) => (
                                    <span
                                        key={term}
                                        onClick={() => {
                                            setSearchQuery(term)
                                        }}
                                        style={{
                                            padding: '6px 12px',
                                            background: '#f5f5f5',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            fontSize: '12px',
                                        }}
                                        onMouseEnter={(e) => e.target.style.background = '#e0e0e0'}
                                        onMouseLeave={(e) => e.target.style.background = '#f5f5f5'}
                                    >
                                        {term}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar