

import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

// Sample contact data
const contactData = {
  askMeQuestion: {
    title: "Contact Us",
    description: "Get in touch with us. We'd love to hear from you.",
    successMessage: "Thank you for your message! We'll get back to you soon.",
    labels: {
      name: "Name",
      email: "Email", 
      mobile: "Mobile",
      message: "Message"
    },
    submitButton: "Send Message"
  },
  info: [
    { type: "Email", value: "hello@example.com", icon: "Mail" },
    { type: "Phone", value: "+91 98765 43210", icon: "Phone" },
    { type: "Location", value: "Mumbai, India", icon: "MapPin" }
  ],
  social: [
    { icon: "Twitter", url: "#", color: "text-blue-500" },
    { icon: "Linkedin", url: "#", color: "text-blue-600" },
    { icon: "Facebook", url: "#", color: "text-blue-700" }
  ]
};

const iconMap = {
  Mail: Mail,
  Phone: Phone,
  MapPin: MapPin,
  Twitter: Twitter,
  Linkedin: Linkedin,
  Facebook: Facebook
};

const countryCodes = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
];

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", {
      ...formData,
      mobile: `${formData.countryCode}${formData.mobile}`,
    });
    setSubmitted(true);
    setFormData({ name: "", email: "", countryCode: "+91", mobile: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Structured data for the contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Crypto Khabar",
    "url": "https://cryptokhabar.net/contact/",
    "description": contactData.askMeQuestion.description || "Get in touch with Crypto Khabar for inquiries, feedback, or support.",
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Khabar",
      "url": "https://cryptokhabar.net/",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": contactData.info.find(item => item.type === "Email")?.value || "hello@example.com",
          "telephone": contactData.info.find(item => item.type === "Phone")?.value || "+91 98765 43210",
          "contactType": "customer support"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* SEO Metadata */}
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us - Crypto Khabar</title>
        <meta
          name="description"
          content={contactData.askMeQuestion.description || "Get in touch with Crypto Khabar for inquiries, feedback, or support."}
        />
        <meta name="keywords" content="contact us, crypto khabar, cryptocurrency, support, inquiries" />
        <meta name="author" content="Crypto Khabar Team" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://cryptokhabar.net/contact/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us - Crypto Khabar" />
        <meta property="og:description" content={contactData.askMeQuestion.description || "Get in touch with Crypto Khabar for inquiries, feedback, or support."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptokhabar.net/contact/" />
        <meta property="og:image" content="https://cryptokhabar.net/images/preview.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {contactData.askMeQuestion?.title}
          </h1>
          <p className="text-lg text-gray-600">
            {contactData.askMeQuestion?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-4 mb-8">
              {contactData.info?.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    {Icon && (
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                    )}
                    <div>
                      <h3 className="font-medium text-gray-800">{item.type}</h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-medium text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {contactData.social?.map((social, index) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      {Icon && <Icon size={18} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Message</h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-lg font-medium">
                  ✅ {contactData.askMeQuestion?.successMessage}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {contactData.askMeQuestion?.labels?.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {contactData.askMeQuestion?.labels?.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {contactData.askMeQuestion?.labels?.mobile}
                  </label>
                  <div className="flex gap-3">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-1/3 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-2/3 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                      placeholder="Mobile number"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {contactData.askMeQuestion?.labels?.message}
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  {contactData.askMeQuestion?.submitButton}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;