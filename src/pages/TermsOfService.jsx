import React from 'react';
import { termsAndService } from '../data/termsAndService';

function TermsOfService() {
  const sections = [
    { key: 'introduction', title: 'Introduction', content: termsAndService.introduction.description },
    { 
      key: 'useOfService', 
      title: 'Use of Service', 
      content: (
        <div>
          <p className="mb-4">{termsAndService.useOfService.ageRestriction}</p>
          <p className="mb-4">{termsAndService.useOfService.permittedUse}</p>
          <h4 className="font-semibold text-lg mb-2">Prohibited Actions:</h4>
          <ul className="list-disc pl-6 space-y-2">
            {termsAndService.useOfService.prohibitedActions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      )
    },
    { 
      key: 'intellectualProperty', 
      title: 'Intellectual Property', 
      content: (
        <div>
          <p className="mb-4">{termsAndService.intellectualProperty.ownership}</p>
          <p className="mb-4">{termsAndService.intellectualProperty.license}</p>
          <p>{termsAndService.intellectualProperty.restrictions}</p>
        </div>
      )
    },
    { 
      key: 'thirdPartyServices', 
      title: 'Third-Party Services', 
      content: (
        <div>
          <p className="mb-4">{termsAndService.thirdPartyServices.description}</p>
          <p className="mb-4">{termsAndService.thirdPartyServices.responsibility}</p>
          <p>{termsAndService.thirdPartyServices.disclaimer}</p>
        </div>
      )
    },
    { 
      key: 'userContent', 
      title: 'User Content', 
      content: (
        <div>
          <p className="mb-4">{termsAndService.userContent.commentsAndSubmissions}</p>
          <p>{termsAndService.userContent.contentGuidelines}</p>
        </div>
      )
    },
    { 
      key: 'disclaimerOfWarranties', 
      title: 'Disclaimer of Warranties', 
      content: (
        <div>
          <p className="mb-4">{termsAndService.disclaimerOfWarranties.asIsBasis}</p>
          <p>{termsAndService.disclaimerOfWarranties.marketData}</p>
        </div>
      )
    },
    { 
      key: 'limitationOfLiability', 
      title: 'Limitation of Liability', 
      content: (
        <div>
          <p className="mb-4">{termsAndService.limitationOfLiability.general}</p>
          <p>{termsAndService.limitationOfLiability.financialAdvice}</p>
        </div>
      )
    },
    { 
      key: 'termination', 
      title: 'Termination', 
      content: (
        <div>
          <p className="mb-4">{termsAndService.termination.rightToSuspend}</p>
          <p>{termsAndService.termination.effectOfTermination}</p>
        </div>
      )
    },
    { 
      key: 'privacyPolicy', 
      title: 'Privacy Policy', 
      content: (
        <div>
          <p className="mb-4">{termsAndService.privacyPolicy.description}</p>
          <p>Read our full <a href={termsAndService.privacyPolicy.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
        </div>
      )
    },
    { 
      key: 'cookies', 
      title: 'Cookies', 
      content: termsAndService.cookies.usage 
    },
    { 
      key: 'governingLaw', 
      title: 'Governing Law', 
      content: termsAndService.governingLaw.jurisdiction 
    },
    { 
      key: 'changesToTerms', 
      title: 'Changes to Terms', 
      content: (
        <div>
          <p className="mb-4">{termsAndService.changesToTerms.description}</p>
          <p>{termsAndService.changesToTerms.notification}</p>
        </div>
      )
    },
    { 
      key: 'subscriptionAndNewsletters', 
      title: 'Subscription and Newsletters', 
      content: termsAndService.subscriptionAndNewsletters.description 
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 mt-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">Terms of Service</h1>
          <p className="mt-4 text-lg sm:text-xl text-center text-gray-200">
            Last Updated: {termsAndService.lastUpdated} | {termsAndService.websiteName}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {sections.map((section) => (
          <div 
            key={section.key} 
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>
            <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}
      </main>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Contact Us</h2>
          <div className="text-center space-y-4">
            <p className="text-sm sm:text-base">{termsAndService.contactInformation.email}</p>
            <p className="text-sm sm:text-base">{termsAndService.contactInformation.phone}</p>
            <p className="text-sm sm:text-base break-words">{termsAndService.contactInformation.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;