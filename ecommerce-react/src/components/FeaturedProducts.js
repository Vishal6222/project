export default function FeaturedProducts() {
  const items = [
    { id: 1, title: "Oversized T-Shirt", price: 799, image: "/images/Social1.png" },
    { id: 2, title: "Regular", price: 1499, image: "/images/regular3.png" },
    { id: 3, title: "Streetwear Sweatpants", price: 1299, image: "/images/z2.jpg" }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Best Sellers</h2>
        <div className="row">
          {items.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.title}/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text mt-auto"><strong>₹{product.price}</strong></p>
                  <a href="/products" className="btn btn-outline-primary mt-2">View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
