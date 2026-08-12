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
        <div className="container">

            

            {all.map((section) => (
                <div key={section.title} data-section={section.title}>

                    <h3 className="fw-bold mt-4">{section.title}</h3>

                    <img
                        src={section.banner}
                        alt={section.title}
                        className="img-fluid rounded-4 my-3"
                    />

                    <div className="row">
                        {section.products.map((product) => (
                            <div className="col-md-3 mb-4" key={product.id}>
                                <div
                                    className="card"
                                    style={{
                                        width: "220px",
                                        boxShadow: "0px 4px 10px 2px rgba(68, 68, 68, 0.2)",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        className="card-img-top rounded-4 p-2"
                                        alt={product.name}
                                    />

                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <h5 className="fw-bold">{product.name}</h5>

                                        <p className="text-secondary">
                                            {product.description}
                                        </p>

                                        <hr />

                                        <h6 className="fw-bold">
                                            Rs. {product.price}
                                        </h6>

                                        <button
                                            className="btn btn-danger px-4"
                                            style={{ borderRadius: "20px" }}
                                        >
                                            <b>Add to Cart</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products