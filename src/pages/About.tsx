import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaUsers, FaChartLine, FaShieldAlt, FaClock, FaAward, FaRocket } from "react-icons/fa";

export const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero bg-primary text-primary-content py-20">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">About Our Platform</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We're revolutionizing restaurant management with cutting-edge technology 
              that helps restaurant owners focus on what matters most - their customers.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-base-content mb-8">Our Mission</h2>
            <p className="text-xl text-base-content/70 leading-relaxed mb-12">
              To empower restaurant owners with intuitive, powerful tools that streamline operations, 
              increase profitability, and enhance customer experiences. We believe technology should 
              simplify, not complicate your business.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">Why Choose Us</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Built by restaurant industry experts who understand your challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaUsers className="text-2xl text-primary" />
                </div>
                <h3 className="card-title justify-center text-xl mb-2">Easy Staff Management</h3>
                <p className="text-base-content/70">
                  Streamline scheduling, track performance, and manage payroll with our intuitive staff management tools.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaChartLine className="text-2xl text-primary" />
                </div>
                <h3 className="card-title justify-center text-xl mb-2">Real-time Analytics</h3>
                <p className="text-base-content/70">
                  Make data-driven decisions with comprehensive reports and real-time insights into your business performance.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-2xl text-primary" />
                </div>
                <h3 className="card-title justify-center text-xl mb-2">Secure & Reliable</h3>
                <p className="text-base-content/70">
                  Your data is protected with enterprise-grade security and 99.9% uptime guarantee.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaClock className="text-2xl text-primary" />
                </div>
                <h3 className="card-title justify-center text-xl mb-2">24/7 Support</h3>
                <p className="text-base-content/70">
                  Our dedicated support team is available around the clock to help you succeed.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaAward className="text-2xl text-primary" />
                </div>
                <h3 className="card-title justify-center text-xl mb-2">Industry Leading</h3>
                <p className="text-base-content/70">
                  Trusted by thousands of restaurants worldwide, from small cafes to large chains.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaRocket className="text-2xl text-primary" />
                </div>
                <h3 className="card-title justify-center text-xl mb-2">Quick Setup</h3>
                <p className="text-base-content/70">
                  Get up and running in minutes, not weeks. Our onboarding process is simple and straightforward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-base-content/70">Restaurants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-base-content/70">Orders Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-base-content/70">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-base-content/70">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Restaurant?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful restaurants already using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-accent btn-lg">Start Free Trial</button>
            <button className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};