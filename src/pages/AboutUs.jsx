// src/pages/AboutUs.jsx
import aboutUsData from "../data/aboutUsData";

function AboutUs() {
  return (
    <div className="w-full min-h-screen mt-12 bg-gray-100 pt-16 p-6">
      <main className="max-w-6xl mx-auto space-y-12">
        {/* Company Info */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            About {aboutUsData.company.name}
          </h1>
          <p className="text-gray-700 mb-4 italic">
            "{aboutUsData.company.tagline}"
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            {aboutUsData.company.mission}
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Vision:</strong> {aboutUsData.company.vision}
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Core Values</h3>
            <ul className="list-disc pl-6 text-gray-600">
              {aboutUsData.company.values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutUsData.whatWeDo.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aboutUsData.team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
                <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> {aboutUsData.contact.email}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> {aboutUsData.contact.phone}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Address:</strong> {aboutUsData.contact.address}
          </p>
          <div className="flex space-x-4">
            <a
              href={aboutUsData.contact.social.twitter}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href={aboutUsData.contact.social.linkedin}
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={aboutUsData.contact.social.facebook}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
