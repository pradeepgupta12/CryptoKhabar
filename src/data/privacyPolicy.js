export const privacyPolicy = {
  privacy_policy: {
    version: "1.0",
    last_updated: "2025-09-08",
    company: {
      name: "Crypto Khabar",
      contact: {
        email: "support@cryptokhabar.com",
        phone: "+91-123-456-7890",
        address: "123, Crypto Street, Mumbai, India"
      }
    },
    data_collection: {
      personal_information: [
        {
          type: "name",
          description: "Full name provided during registration or profile creation.",
          required: false
        },
        {
          type: "email",
          description: "Email address for account creation, notifications, and communication.",
          required: true
        },
        {
          type: "phone_number",
          description: "Phone number for account verification or customer support.",
          required: false
        },
        {
          type: "wallet_address",
          description: "Cryptocurrency wallet addresses for transaction tracking or rewards.",
          required: false
        }
      ],
      non_personal_information: [
        {
          type: "device_information",
          description: "Device type, operating system, and browser information for improving user experience."
        },
        {
          type: "usage_data",
          description: "Pages visited, time spent, and interactions with the platform."
        },
        {
          type: "location_data",
          description: "Approximate location based on IP address for region-specific content."
        }
      ],
      cookies: {
        enabled: true,
        types: [
          {
            name: "essential_cookies",
            description: "Required for website functionality and user authentication."
          },
          {
            name: "analytics_cookies",
            description: "Used to analyze user behavior and improve services."
          },
          {
            name: "advertising_cookies",
            description: "Used to deliver personalized advertisements."
          }
        ]
      }
    },
    data_usage: {
      purposes: [
        {
          purpose: "service_delivery",
          description: "To provide and maintain Crypto Khabar services, including news updates and account management."
        },
        {
          purpose: "personalization",
          description: "To customize content, such as cryptocurrency news and market updates, based on user preferences."
        },
        {
          purpose: "analytics",
          description: "To analyze usage patterns and improve platform performance."
        },
        {
          purpose: "marketing",
          description: "To send promotional content and advertisements with user consent."
        },
        {
          purpose: "legal_compliance",
          description: "To comply with legal obligations and prevent fraudulent activities."
        }
      ]
    },
    data_sharing: {
      third_parties: [
        {
          type: "analytics_providers",
          description: "Third-party services like Google Analytics for usage analysis.",
          examples: ["Google Analytics", "Mixpanel"]
        },
        {
          type: "advertising_partners",
          description: "Partners for delivering targeted advertisements.",
          examples: ["Google Ads", "Coinzilla"]
        },
        {
          type: "payment_processors",
          description: "For processing payments or cryptocurrency transactions.",
          examples: ["Stripe", "CoinPayments"]
        }
      ],
      legal_disclosure: {
        description: "Data may be shared with law enforcement or regulatory authorities when required by law."
      }
    },
    data_storage: {
      location: "Secure servers located in India and other jurisdictions compliant with data protection laws.",
      retention_period: "Data is retained only as long as necessary for the purposes outlined or as required by law.",
      security_measures: [
        {
          measure: "encryption",
          description: "Data is encrypted during transmission and storage using industry-standard protocols."
        },
        {
          measure: "access_control",
          description: "Access to personal data is restricted to authorized personnel only."
        },
        {
          measure: "regular_audits",
          description: "Regular security audits to ensure data protection."
        }
      ]
    },
    user_rights: [
      {
        right: "access",
        description: "Users can request a copy of their personal data."
      },
      {
        right: "correction",
        description: "Users can request corrections to inaccurate or incomplete data."
      },
      {
        right: "deletion",
        description: "Users can request deletion of their personal data, subject to legal obligations."
      },
      {
        right: "opt_out",
        description: "Users can opt out of marketing communications or non-essential data collection."
      },
      {
        right: "data_portability",
        description: "Users can request their data in a structured, machine-readable format."
      }
    ],
    compliance: {
      regulations: [
        {
          name: "GDPR",
          description: "Compliance with General Data Protection Regulation for EU users."
        },
        {
          name: "IT Act 2000",
          description: "Compliance with India's Information Technology Act and related rules."
        }
      ]
    },
    children_privacy: {
      policy: "Crypto Khabar does not knowingly collect data from individuals under 18 years of age. If such data is collected, it will be deleted upon discovery."
    },
    updates: {
      notification: "Users will be notified of significant updates to this policy via email or platform announcements.",
      effective_date: "Changes take effect immediately unless otherwise stated."
    },
    contact_information: {
      data_protection_officer: "dpo@cryptokhabar.com",
      grievance_officer: {
        name: "Amit Sharma",
        email: "grievance@cryptokhabar.com",
        phone: "+91-987-654-3210"
      }
    }
  }
};