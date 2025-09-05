import { useState } from "react";
import contactData from "../data/contactData";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const iconMap = {
  FaEnvelope: FaEnvelope,
  FaPhone: FaPhone,
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaTwitter: FaTwitter,
  FaLinkedin: FaLinkedin,
  FaFacebook: FaFacebook,
};

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen mt-12 bg-gray-100 pt-16 p-6">
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          {contactData.askMeQuestion?.description && (
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {contactData.askMeQuestion.description}
            </p>
          )}
          {contactData.info?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactData.info.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={index}
                    className="relative bg-gradient-to-br from-blue-50 to-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      {item.icon && Icon && (
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl shadow-md">
                          <Icon />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        {item.type && (
                          <h3 className="font-semibold text-gray-800 text-lg">
                            {item.type}
                          </h3>
                        )}
                        {item.value && (
                          <p className="text-gray-600 text-sm mt-1 break-words">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {contactData.social?.length > 0 && (
            <div className="mt-8">
              <div className="flex space-x-4">
                {contactData.social.map((social, index) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`${social.color} text-2xl hover:scale-110 transition-transform duration-200`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon && Icon && <Icon />}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* Ask Me a Question Form */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          {contactData.askMeQuestion?.title && (
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {contactData.askMeQuestion.title}
            </h2>
          )}
          {submitted ? (
            contactData.askMeQuestion?.successMessage && (
              <div className="text-green-600 font-semibold text-lg">
                ✅ {contactData.askMeQuestion.successMessage}
              </div>
            )
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                {contactData.askMeQuestion?.labels?.name && (
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {contactData.askMeQuestion.labels.name}
                  </label>
                )}
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                />
              </div>
              <div>
                {contactData.askMeQuestion?.labels?.email && (
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {contactData.askMeQuestion.labels.email}
                  </label>
                )}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                />
              </div>
              <div>
                {contactData.askMeQuestion?.labels?.message && (
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {contactData.askMeQuestion.labels.message}
                  </label>
                )}
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                />
              </div>
              {contactData.askMeQuestion?.submitButton && (
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {contactData.askMeQuestion.submitButton}
                </button>
              )}
            </form>
          )}
        </section>
      </main>
    </div>
  );
}

export default ContactUs;