import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero bg-primary text-primary-content py-20">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <div className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-base-content mb-6">Contact Information</h2>
                <p className="text-base-content/70 text-lg mb-8">
                  We're always ready to help you succeed. Choose the best way to reach us.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-base-content mb-1">Phone Support</h3>
                    <p className="text-base-content/70 mb-2">Call us for immediate assistance</p>
                    <p className="text-primary font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-base-content mb-1">Email Support</h3>
                    <p className="text-base-content/70 mb-2">Send us your questions anytime</p>
                    <p className="text-primary font-medium">support@restaurant-manager.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-base-content mb-1">Office Location</h3>
                    <p className="text-base-content/70 mb-2">Visit us at our headquarters</p>
                    <p className="text-primary font-medium">123 Business District<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-base-content mb-1">Business Hours</h3>
                    <p className="text-base-content/70 mb-2">When our team is available</p>
                    <p className="text-primary font-medium">
                      Mon-Fri: 9:00 AM - 6:00 PM<br />
                      Sat-Sun: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <FaHeadset className="text-xl text-accent" />
                  <h3 className="font-semibold text-lg text-base-content">24/7 Emergency Support</h3>
                </div>
                <p className="text-base-content/70 mb-3">
                  For critical issues affecting your restaurant operations
                </p>
                <p className="text-accent font-medium">emergency@restaurant-manager.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-base-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-base-content mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input input-bordered focus:input-primary w-full"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input input-bordered focus:input-primary w-full"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input input-bordered focus:input-primary w-full"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered focus:textarea-primary w-full h-32 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-base-content mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-base-content/70">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              <div className="collapse collapse-plus bg-base-100 shadow-sm">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title text-lg font-medium">
                  How quickly can I get started?
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">
                    You can set up your restaurant management system in under 10 minutes. Our onboarding process is designed to get you up and running immediately.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100 shadow-sm">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-medium">
                  Do you offer training for my staff?
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">
                    Yes! We provide comprehensive training materials, video tutorials, and live training sessions to ensure your team is comfortable with the platform.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100 shadow-sm">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-medium">
                  What if I need help during peak hours?
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">
                    Our 24/7 emergency support is available for critical issues. We understand that restaurant operations can't wait, so we're always here when you need us most.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100 shadow-sm">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-medium">
                  Can I integrate with my existing POS system?
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">
                    Absolutely! Our platform integrates with most popular POS systems. Contact our team to discuss your specific integration requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};