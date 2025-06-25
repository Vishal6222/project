import FeaturedProducts from '../components/FeaturedProducts';

export default function Home() {
  return (
    <>
      <section className="hero text-center py-5 bg-light" style={{ backgroundImage: "url('/images/Website.png')", backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat',height: '100vh',display:'flex',alignItems:'center',padding: '20px',color: 'white' }}>
        <div className="container">
          <a href="/products" className="btn btn-primary btn-lg">Shop Now</a>
        </div>
      </section>
      <FeaturedProducts />
      <section className="about-us text-center py-5 bg-light">
  <div className="container" style={{ maxWidth: "800px" }}>
    <h2 className="mb-4">About Us</h2>
    <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
      <strong>Streetwear for Real Life.</strong><br />
      Started in May 2025, our mission is to keep things real, comfortable, and stylish.
      We're into clean designs, quality fabrics, and everyday fits you’ll actually want to wear.
      Whether you're hitting the streets or just kicking back, we've got your back.<br /><br />
      <strong>Made for the culture. Made for you.</strong>
    </p>
  </div>
</section>
    </>
  );
}
