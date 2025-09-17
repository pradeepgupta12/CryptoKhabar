

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Shield, Mail, Phone, MapPin, Eye, Edit, Trash2, Download, UserCheck } from 'lucide-react';
import { privacyPolicy } from '../data/privacyPolicy';

const PrivacyPolicyPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const { privacy_policy } = privacyPolicy;

  // Structured data for the Privacy Policy page
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Crypto Khabar",
    "description": "Learn how Crypto Khabar collects, uses, shares, and protects your personal and non-personal information, including details on data collection, usage, sharing, storage, user rights, compliance, and contact information.",
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Khabar",
      "url": "https://cryptokhabar.net/"
    },
    "mainEntity": {
      "@type": "CreativeWork",
      "name": "Crypto Khabar Privacy Policy",
      "version": privacy_policy.version,
      "dateModified": privacy_policy.last_updated || '2025-09-11',
      "publisher": {
        "@type": "Organization",
        "name": privacy_policy.company.name,
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": privacy_policy.company.contact.email,
            "telephone": privacy_policy.company.contact.phone,
            "address": privacy_policy.company.contact.address
          }
        ]
      }
    }
  };

  const getRightIcon = (right) => {
    switch(right) {
      case 'access': return <Eye className="w-5 h-5" />;
      case 'correction': return <Edit className="w-5 h-5" />;
      case 'deletion': return <Trash2 className="w-5 h-5" />;
      case 'data_portability': return <Download className="w-5 h-5" />;
      default: return <UserCheck className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* SEO Metadata */}
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Privacy Policy - Crypto Khabar</title>
        <meta
          name="description"
          content="Learn how Crypto Khabar collects, uses, shares, and protects your personal and non-personal information, including details on data collection, usage, sharing, storage, user rights, compliance, and contact information."
        />
        <meta name="keywords" content="privacy policy, data protection, Crypto Khabar" />
        <meta name="author" content="Crypto Khabar Team" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://cryptokhabar.net/privacy-policy/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy - Crypto Khabar" />
        <meta property="og:description" content="Learn how Crypto Khabar collects, uses, shares, and protects your personal and non-personal information, including details on data collection, usage, sharing, storage, user rights, compliance, and contact information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptokhabar.net/privacy-policy/" />
        <meta property="og:image" content="https://cryptokhabar.net/images/preview.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
      </Helmet>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg md:text-xl opacity-90">{privacy_policy.company.name}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Version Info */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-600" />
            <div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Version {privacy_policy.version}
              </span>
            </div>
          </div>
          <div className="text-gray-600 text-sm">
            Last Updated: {new Date(privacy_policy.last_updated).toLocaleDateString('en-IN')}
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Company Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-gray-600 text-sm">{privacy_policy.company.contact.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p className="text-gray-600 text-sm">{privacy_policy.company.contact.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 text-red-600" />
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p className="text-gray-600 text-sm">{privacy_policy.company.contact.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Collection Section */}
        <div className="bg-white border rounded-lg mb-6 shadow-sm">
          <button
            onClick={() => toggleSection('data_collection')}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-bold text-gray-800">Data Collection</h2>
            {expandedSections.data_collection ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSections.data_collection && (
            <div className="px-6 pb-6">
              {/* Personal Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Personal Information</h3>
                <div className="grid gap-3">
                  {privacy_policy.data_collection.personal_information.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-800 capitalize">
                          {item.type.replace('_', ' ')}
                        </h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          item.required 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {item.required ? 'Required' : 'Optional'}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-Personal Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Non-Personal Information</h3>
                <div className="grid gap-3">
                  {privacy_policy.data_collection.non_personal_information.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 capitalize mb-2">
                        {item.type.replace('_', ' ')}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Cookies</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 text-sm">
                    Cookies are {privacy_policy.data_collection.cookies.enabled ? 'enabled' : 'disabled'} on our platform.
                  </p>
                </div>
                <div className="grid gap-3">
                  {privacy_policy.data_collection.cookies.types.map((cookie, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 capitalize mb-2">
                        {cookie.name.replace('_', ' ')}
                      </h4>
                      <p className="text-gray-600 text-sm">{cookie.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Data Usage Section */}
        <div className="bg-white border rounded-lg mb-6 shadow-sm">
          <button
            onClick={() => toggleSection('data_usage')}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-bold text-gray-800">How We Use Your Data</h2>
            {expandedSections.data_usage ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSections.data_usage && (
            <div className="px-6 pb-6">
              <div className="grid gap-4">
                {privacy_policy.data_usage.purposes.map((purpose, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 capitalize mb-2">
                      {purpose.purpose.replace('_', ' ')}
                    </h3>
                    <p className="text-gray-600 text-sm">{purpose.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Data Sharing Section */}
        <div className="bg-white border rounded-lg mb-6 shadow-sm">
          <button
            onClick={() => toggleSection('data_sharing')}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-bold text-gray-800">Data Sharing</h2>
            {expandedSections.data_sharing ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSections.data_sharing && (
            <div className="px-6 pb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Third Parties</h3>
              <div className="grid gap-4 mb-6">
                {privacy_policy.data_sharing.third_parties.map((party, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 capitalize mb-2">
                      {party.type.replace('_', ' ')}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">{party.description}</p>
                    {party.examples && (
                      <div className="flex flex-wrap gap-2">
                        {party.examples.map((example, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {example}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-medium text-yellow-800 mb-2">Legal Disclosure</h4>
                <p className="text-yellow-700 text-sm">{privacy_policy.data_sharing.legal_disclosure.description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Data Storage Section */}
        <div className="bg-white border rounded-lg mb-6 shadow-sm">
          <button
            onClick={() => toggleSection('data_storage')}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-bold text-gray-800">Data Storage & Security</h2>
            {expandedSections.data_storage ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSections.data_storage && (
            <div className="px-6 pb-6">
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-2">Storage Location</h3>
                  <p className="text-gray-600 text-sm">{privacy_policy.data_storage.location}</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-2">Retention Period</h3>
                  <p className="text-gray-600 text-sm">{privacy_policy.data_storage.retention_period}</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-3">Security Measures</h3>
                  <div className="space-y-3">
                    {privacy_policy.data_storage.security_measures.map((measure, index) => (
                      <div key={index} className="bg-green-50 border border-green-200 rounded p-3">
                        <h4 className="font-medium text-green-800 capitalize mb-1">
                          {measure.measure}
                        </h4>
                        <p className="text-green-700 text-sm">{measure.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Rights Section */}
        <div className="bg-white border rounded-lg mb-6 shadow-sm">
          <button
            onClick={() => toggleSection('user_rights')}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-bold text-gray-800">Your Rights</h2>
            {expandedSections.user_rights ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSections.user_rights && (
            <div className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4">
                {privacy_policy.user_rights.map((right, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      {getRightIcon(right.right)}
                      <h3 className="font-medium text-gray-800 capitalize">
                        {right.right.replace('_', ' ')}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Compliance Section */}
        <div className="bg-white border rounded-lg mb-6 shadow-sm">
          <button
            onClick={() => toggleSection('compliance')}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-bold text-gray-800">Compliance</h2>
            {expandedSections.compliance ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSections.compliance && (
            <div className="px-6 pb-6">
              <div className="grid gap-4">
                {privacy_policy.compliance.regulations.map((regulation, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 mb-2">{regulation.name}</h3>
                    <p className="text-gray-600 text-sm">{regulation.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Children's Privacy */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-orange-800 mb-3">Children's Privacy</h2>
          <p className="text-orange-700">{privacy_policy.children_privacy.policy}</p>
        </div>

        {/* Updates Section */}
        <div className="bg-white border rounded-lg mb-6 shadow-sm">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Policy Updates</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Notification</h3>
                <p className="text-gray-600 text-sm">{privacy_policy.updates.notification}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Effective Date</h3>
                <p className="text-gray-600 text-sm">{privacy_policy.updates.effective_date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Data Protection Officer</h3>
              <p className="text-gray-600">{privacy_policy.contact_information.data_protection_officer}</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Grievance Officer</h3>
              <p className="text-gray-800 font-medium">{privacy_policy.contact_information.grievance_officer.name}</p>
              <p className="text-gray-600 text-sm">{privacy_policy.contact_information.grievance_officer.email}</p>
              <p className="text-gray-600 text-sm">{privacy_policy.contact_information.grievance_officer.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;