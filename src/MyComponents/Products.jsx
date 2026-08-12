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
        <div style={{ padding: '0 16px' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

                {all.map((section) => (
                    <div key={section.title} data-section={section.title}>

                        <h3 
                            className="fw-bold mt-4" 
                            style={{ 
                                fontSize: 'clamp(20px, 5vw, 28px)',
                                padding: '0 8px' 
                            }}
                        >
                            {section.title}
                        </h3>

                        <img
                            src={section.banner}
                            alt={section.title}
                            className="img-fluid my-3"
                            style={{ 
                                borderRadius: '20px',
                                width: '100%',
                                maxHeight: '300px',
                                objectFit: 'cover'
                            }}
                        />

                        {/* Responsive Grid */}
                        <div 
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
                                gap: '20px',
                                justifyItems: 'center',
                                marginBottom: '40px'
                            }}
                        >
                            {section.products.map((product) => (
                                <div key={product.id} style={{ width: '100%', maxWidth: '280px' }}>
                                    <div
                                        className="card"
                                        style={{
                                            width: "100%",
                                            boxShadow: "0px 4px 10px 2px rgba(68, 68, 68, 0.2)",
                                            borderRadius: "20px",
                                            border: 'none',
                                            transition: 'transform 0.2s, box-shadow 0.2s'
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
                                        <img
                                            src={product.image}
                                            className="card-img-top p-2"
                                            alt={product.name}
                                            style={{
                                                borderRadius: '20px',
                                                aspectRatio: '1/1',
                                                objectFit: 'cover'
                                            }}
                                        />

                                        <div className="card-body" style={{ textAlign: "center", padding: '16px' }}>
                                            <h5 
                                                className="fw-bold" 
                                                style={{ 
                                                    fontSize: 'clamp(14px, 4vw, 18px)',
                                                    marginBottom: '8px',
                                                    minHeight: '40px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                {product.name}
                                            </h5>

                                            <p 
                                                className="text-secondary" 
                                                style={{ 
                                                    fontSize: 'clamp(12px, 3vw, 14px)',
                                                    minHeight: '40px',
                                                    marginBottom: '12px'
                                                }}
                                            >
                                                {product.description}
                                            </p>

                                            <hr style={{ margin: '12px 0' }} />

                                            <h6 
                                                className="fw-bold" 
                                                style={{ 
                                                    fontSize: 'clamp(16px, 4vw, 18px)',
                                                    marginBottom: '12px',
                                                    color: '#c40013'
                                                }}
                                            >
                                                Rs. {product.price}
                                            </h6>

                                            <button
                                                className="btn btn-danger"
                                                style={{ 
                                                    borderRadius: "20px",
                                                    padding: '10px 24px',
                                                    fontWeight: 'bold',
                                                    fontSize: 'clamp(12px, 3vw, 14px)',
                                                    width: '100%',
                                                    maxWidth: '200px',
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
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products
