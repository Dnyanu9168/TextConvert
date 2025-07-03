import React from "react";

export default function Veggies() {
  return (
    <>
      <div>
        {/* <!-- Hero Section --> */}
        <section className="bg-light text-center p-5">
          <div className="container">
            <h1>Welcome to Fresh Veggies</h1>
            <p className="lead">
              Organic. Healthy. Delivered fresh to your doorstep!
            </p>
          </div>
        </section>

        {/* <!-- Product Section --> */}
        <section id="products" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Our Vegetables</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg"
                    className="card-img-top"
                    alt="Tomato"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Tomato</h5>
                    <p className="card-text">
                      Fresh farm tomatoes at just ₹30/kg.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://5.imimg.com/data5/EB/VU/MY-36173194/fresh-potato-500x500.png"
                    className="card-img-top"
                    alt="Potato"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Potato</h5>
                    <p className="card-text">Golden potatoes for ₹25/kg.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://img3.exportersindia.com/product_images/bc-full/2020/3/183839/2-1583311450_p_5192565_1074551.jpeg"
                    className="card-img-top"
                    alt="Carrot"
                  />{" "}
                  <div className="card-body text-center">
                    <h5 className="card-title">Carrot</h5>
                    <p className="card-text">Crunchy carrots only ₹40/kg.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About Section --> */}
        <section id="about" className="bg-success text-white p-5">
          <div className="container text-center">
            <h2>About Us</h2>
            <p>
              We provide fresh, organic vegetables grown with love and care from
              local farms. Our mission is to deliver healthy food to your table.
            </p>
          </div>
        </section>

        {/* <!-- Contact Section --> */}
        <section id="contact" className="p-5">
          <div className="container">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button className="btn btn-success">Send Message</button>
              </div>
            </form>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <footer className="bg-dark text-white text-center p-3">
          <p>&copy; 2025 Fresh Veggies. All rights reserved.</p>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </div>
    </>
  );
}
