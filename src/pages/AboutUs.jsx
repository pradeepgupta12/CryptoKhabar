


import React, { useState } from 'react';
import { Mail, Phone, MapPin, Users, Target, Eye, Heart, Twitter, Linkedin, Facebook, ArrowRight, Star, Award, TrendingUp, Shield } from 'lucide-react';
import aboutUsData from "../data/aboutUsData";

function AboutUs() {
  const [expandedCards, setExpandedCards] = useState({});

  const getServiceIcon = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('news') || titleLower.includes('market')) return <TrendingUp className="w-8 h-8" />;
    if (titleLower.includes('analysis') || titleLower.includes('research')) return <Target className="w-8 h-8" />;
    if (titleLower.includes('security') || titleLower.includes('safe')) return <Shield className="w-8 h-8" />;
    if (titleLower.includes('award') || titleLower.includes('premium')) return <Award className="w-8 h-8" />;
    return <Star className="w-8 h-8" />;
  };

  const toggleCard = (index) => {
    setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 mt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              About Crypto Khabar
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto italic">
              "{aboutUsData.company.tagline}"
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-white/20">
                <p className="text-lg">Trusted by thousands of crypto enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Company Mission & Vision */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {aboutUsData.company.mission}
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {aboutUsData.company.vision}
              </p>
            </div>
          </div>
        </section>
        {/* Core Values */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at {aboutUsData.company.name}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutUsData.company.values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                  <span className="text-lg font-semibold text-gray-800">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* What We Do */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive crypto solutions designed to keep you informed and ahead of the market
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {aboutUsData.whatWeDo.map((service, index) => {
              const isExpanded = expandedCards[index] || false;
              // const isLongContent = service.description.length > 100;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-auto min-h-[200px]"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      {getServiceIcon(service.title)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      {isExpanded ? (
                        <div className="max-h-40 overflow-y-auto mb-4 pr-2">
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {service.description}
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-600 leading-relaxed text-lg mb-4 line-clamp-2">
                          {service.description}
                        </p>
                      )}
                      <div
                        className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform cursor-pointer"
                        onClick={() => toggleCard(index)}
                      >
                        <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* Our Team */}
        <section className="bg-white rounded-3xl shadow-xl p-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind {aboutUsData.company.name}'s success
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutUsData.team.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-blue-200 transition-all">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Team Member
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3 text-lg">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative p-6 sm:p-8 md:p-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
                Ready to join the crypto revolution? We'd love to hear from you.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
              {/* Contact Info */}
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">Email Us</h3>
                      <p className="text-gray-200 text-sm sm:text-base">{aboutUsData.contact.email}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">Call Us</h3>
                      <p className="text-gray-200 text-sm sm:text-base">{aboutUsData.contact.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">Visit Us</h3>
                      <p className="text-gray-200 leading-relaxed text-sm sm:text-base">{aboutUsData.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Follow Our Journey</h3>
                <div className="flex justify-center space-x-4 sm:space-x-6">
                  <a
                    href={aboutUsData.contact.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-blue-300 transition-colors" />
                  </a>
                  <a
                    href={aboutUsData.contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-blue-300 transition-colors" />
                  </a>
                  <a
                    href={aboutUsData.contact.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-blue-300 transition-colors" />
                  </a>
                </div>
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Stay Updated</h4>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    Follow us on social media for the latest crypto news, market analysis, and exclusive insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;