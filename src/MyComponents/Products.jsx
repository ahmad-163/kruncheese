import React from 'react'

function Products(props) {
    const all = [
        {
            title: "Deals",
            banner: "/burgerbanner.jpg",
            products: [
                { id: 1, name: "Krisp & Sip Combo", description: "Krisp Burger + 345ml Drink", price: 349, image: "/burger.jpg", category: "Deals" },
                { id: 2, name: "Krisp Krave Combo", description: "Krisp Burger + Fries + Drink", price: 590, image: "/burger.jpg", category: "Deals" },
                { id: 3, name: "Wish Burger Deal", description: "Wish Burger + 345ml Drink", price: 599, image: "/burger.jpg", category: "Deals" },
                { id: 4, name: "Krisp Double Krunch Deal", description: "Burger + Chicken Piece + Drink", price: 620, image: "/burger.jpg", category: "Deals" },
                { id: 5, name: "Solo Box", description: "Stunner + Fried Chicken + Fries + Drink", price: 999, image: "/burger.jpg", category: "Deals" },
                { id: 6, name: "Pair Box", description: "2 Stunners + 2 Chicken Pieces + Fries + Drinks", price: 1660, image: "/burger.jpg", category: "Deals" },
            ],
        },

        {
            title: "Burgers",
            banner: "/burgerbanner.jpg",
            products: [
                { id: 7, name: "Krisp Burger", description: "Signature crispy chicken burger", price: 299, image: "/burger.jpg", category: "Burgers" },
                { id: 8, name: "Wish Burger", description: "Premium crispy chicken burger", price: 499, image: "/burger.jpg", category: "Burgers" },
                { id: 9, name: "Stunner Burger", description: "Loaded crispy chicken burger", price: 499, image: "/burger.jpg", category: "Burgers" },
                { id: 10, name: "Massive Burger", description: "Extra large crispy chicken burger", price: 849, image: "/burger.jpg", category: "Burgers" },
                { id: 11, name: "Zinger Burger", description: "Classic zinger burger", price: 589, image: "/burger.jpg", category: "Burgers" },
            ],
        },

        {
            title: "Wraps",
            banner: "/burgerbanner.jpg",
            products: [
                { id: 12, name: "Chicken Wrap", description: "Crispy chicken wrap", price: 399, image: "/burger.jpg", category: "Wraps" },
                { id: 13, name: "Spicy Wrap", description: "Spicy chicken wrap", price: 449, image: "/burger.jpg", category: "Wraps" },
            ],
        },

        {
            title: "Sides",
            banner: "/burgerbanner.jpg",
            products: [
                { id: 14, name: "Plain Fries", description: "Regular fries", price: 299, image: "/burger.jpg", category: "Sides" },
                { id: 15, name: "Loaded Fries", description: "Fries with sauces", price: 399, image: "/burger.jpg", category: "Sides" },
                { id: 16, name: "Chicken Strips", description: "Crispy chicken strips", price: 499, image: "/burger.jpg", category: "Sides" },
                { id: 17, name: "Chicken Wings", description: "Spicy crispy wings", price: 499, image: "/burger.jpg", category: "Sides" },
                { id: 18, name: "Krunch Trio", description: "3 Chicken Pieces", price: 740, image: "/burger.jpg", category: "Sides" },
                { id: 19, name: "9 Pcs Chicken Bucket", description: "9 Crispy Chicken Pieces", price: 1599, image: "/burger.jpg", category: "Sides" },
            ],
        },

        {
            title: "Dip",
            banner: "/burgerbanner.jpg",
            products: [
                { id: 20, name: "Garlic Mayo", description: "Creamy garlic dip", price: 70, image: "/burger.jpg", category: "Dip" },
                { id: 21, name: "Cheese Sauce", description: "Cheesy dip", price: 90, image: "/burger.jpg", category: "Dip" },
                { id: 22, name: "BBQ Sauce", description: "Smoky BBQ dip", price: 70, image: "/burger.jpg", category: "Dip" },
                { id: 23, name: "Hot Sauce", description: "Spicy hot dip", price: 70, image: "/burger.jpg", category: "Dip" },
            ],
        },

        {
            title: "Drinks",
            banner: "/burgerbanner.jpg",
            products: [
                { id: 24, name: "Pepsi 345ml", description: "Soft Drink", price: 120, image: "/burger.jpg", category: "Drinks" },
                { id: 25, name: "7UP 345ml", description: "Soft Drink", price: 120, image: "/burger.jpg", category: "Drinks" },
                { id: 26, name: "Mirinda 345ml", description: "Soft Drink", price: 120, image: "/burger.jpg", category: "Drinks" },
                { id: 27, name: "Mountain Dew 345ml", description: "Soft Drink", price: 120, image: "/burger.jpg", category: "Drinks" },
            ],
        },
    ];

    return (
        <div>
            {/* Container with consistent padding */}
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 16px' }}>

                {all.map((section) => (
                    <div key={section.title} data-section={section.title}>

                        <h3 
                            className="fw-bold mt-4" 
                            style={{ 
                                fontSize: 'clamp(22px, 5vw, 32px)',
                                marginBottom: '16px',
                                color: '#333'
                            }}
                        >
                            {section.title}
                        </h3>

                        {/* Banner - Fixed height for consistency */}
                        <img
                            src={section.banner}
                            alt={section.title}
                            className="img-fluid my-3"
                            style={{ 
                                borderRadius: '20px',
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                marginBottom: '24px'
                            }}
                        />

                        {/* Responsive Grid: 2 columns on mobile, 6 on desktop */}
                        <div 
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)', // Default: 2 columns for mobile
                                gap: '16px',
                                marginBottom: '48px'
                            }}
                            className="products-grid"
                        >
                            {section.products.map((product) => (
                                <div key={product.id}>
                                    <div
                                        className="card"
                                        style={{
                                            width: "100%",
                                            boxShadow: "0px 4px 10px 2px rgba(68, 68, 68, 0.2)",
                                            borderRadius: "16px",
                                            border: 'none',
                                            transition: 'transform 0.2s, box-shadow 0.2s',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)'
                                            e.currentTarget.style.boxShadow = '0px 6px 16px 4px rgba(68, 68, 68, 0.25)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = '0px 4px 10px 2px rgba(68, 68, 68, 0.2)'
                                        }}
                                    >
                                        {/* Image container with fixed aspect ratio */}
                                        <div style={{ 
                                            width: '100%', 
                                            paddingTop: '100%', // 1:1 aspect ratio
                                            position: 'relative',
                                            overflow: 'hidden',
                                            borderRadius: '16px 16px 0 0'
                                        }}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    padding: '8px'
                                                }}
                                            />
                                        </div>

                                        {/* Card body with fixed height structure */}
                                        <div 
                                            className="card-body" 
                                            style={{ 
                                                textAlign: "center", 
                                                padding: '12px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                flex: 1
                                            }}
                                        >
                                            <div>
                                                <h5 
                                                    className="fw-bold" 
                                                    style={{ 
                                                        fontSize: 'clamp(13px, 2.5vw, 16px)',
                                                        marginBottom: '6px',
                                                        height: '38px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        overflow: 'hidden',
                                                        lineHeight: '1.2'
                                                    }}
                                                >
                                                    {product.name}
                                                </h5>

                                                <p 
                                                    className="text-secondary" 
                                                    style={{ 
                                                        fontSize: 'clamp(11px, 2vw, 13px)',
                                                        height: '36px',
                                                        marginBottom: '8px',
                                                        overflow: 'hidden',
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical',
                                                        lineHeight: '1.4'
                                                    }}
                                                >
                                                    {product.description}
                                                </p>
                                            </div>

                                            <div>
                                                <hr style={{ margin: '8px 0' }} />

                                                <h6 
                                                    className="fw-bold" 
                                                    style={{ 
                                                        fontSize: 'clamp(15px, 3vw, 18px)',
                                                        marginBottom: '10px',
                                                        color: '#c40013'
                                                    }}
                                                >
                                                    Rs. {product.price}
                                                </h6>

                                                <button
                                                    className="btn btn-danger"
                                                    style={{ 
                                                        borderRadius: "20px",
                                                        padding: '8px 16px',
                                                        fontWeight: 'bold',
                                                        fontSize: 'clamp(11px, 2.2vw, 13px)',
                                                        width: '100%',
                                                        transition: 'all 0.2s'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.transform = 'scale(1.05)'
                                                        e.target.style.background = '#a3000f'
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.transform = 'scale(1)'
                                                        e.target.style.background = ''
                                                    }}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products
