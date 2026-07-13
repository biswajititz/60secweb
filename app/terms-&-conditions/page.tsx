"use client";

import { useState, useEffect, useRef } from "react";
import { Scale, Mail, ArrowUp, ChevronRight } from "lucide-react";

interface Section {
  id: string;
  letter: string;
  title: string;
  intro?: string;
  body?: string[];
  bullets?: string[];
  bulletsIntro?: string;
  bulletsOutro?: string;
  subLists?: { intro: string; items: string[] }[];
  outro?: string[];
}

// const SECTIONS: Section[] = [
//   {
//     id: "definitions",
//     letter: "A",
//     title: "Definitions",
//     body: [
//       "\u201cApp\u201d means the 60Sec mobile application, website, and any related services operated by 60Sec Pty Ltd.",
//       "\u201cContent\u201d means news articles, summaries, videos, images, text, graphics, sponsored materials, advertisements, and other materials available through the App.",
//       "\u201cUser\u201d, \u201cYou\u201d, or \u201cYour\u201d refers to any person accessing or using the App.",
//       "\u201cSponsored Content\u201d means content identified as advertisements, promotional material, sponsored articles, paid partnerships, or branded campaigns.",
//       "\u201cThird-Party Sources\u201d include publishers, news agencies, media organizations, websites, APIs, or content providers whose materials may be referenced, summarized, or linked within the App.",
//     ],
//   },
//   {
//     id: "acceptance",
//     letter: "B",
//     title: "Acceptance of Terms",
//     bulletsIntro: "You agree to these Terms by:",
//     bullets: [
//       "Downloading the App",
//       "Creating an account",
//       "Browsing content",
//       "Using any feature or service offered by 60Sec",
//     ],
//     subLists: [
//       {
//         intro: "You may only use the App if:",
//         items: [
//           "You are at least 18 years old, or have parental consent where legally permitted",
//           "You have legal capacity to enter into a binding agreement",
//           "Your use complies with applicable laws",
//         ],
//       },
//     ],
//     outro: ["If You do not agree with these Terms, You must discontinue use of the App immediately."],
//   },
//   {
//     id: "provision",
//     letter: "C",
//     title: "Provision of the App",
//     body: [
//       "60Sec provides a digital news aggregation and summarization platform designed to assist users in discovering and consuming news content efficiently.",
//     ],
//     bulletsIntro: "The App may:",
//     bullets: [
//       "Summarize publicly available news content",
//       "Provide links to original publisher websites",
//       "Personalize content recommendations",
//       "Display sponsored or advertising content",
//     ],
//     subLists: [
//       {
//         intro: "Users acknowledge that:",
//         items: [
//           "Summaries are generated for informational purposes only",
//           "Original content remains the property of its respective publishers",
//           "Accessing external websites is entirely at the User\u2019s discretion",
//         ],
//       },
//       {
//         intro: "60Sec does not guarantee:",
//         items: ["Completeness", "Timeliness", "Accuracy", "Availability of linked third-party content"],
//       },
//     ],
//     outro: [
//       "60Sec does not claim ownership of third-party news articles, photographs, videos, or other original materials.",
//       "60Sec acts solely as an intermediary platform facilitating access to publicly available information.",
//     ],
//   },
//   {
//     id: "user-accounts",
//     letter: "D",
//     title: "User Accounts",
//     body: ["To access certain features, You may be required to create an account."],
//     bulletsIntro: "You agree that:",
//     bullets: [
//       "Information provided is accurate and current",
//       "Login credentials remain confidential",
//       "You are responsible for activities occurring under Your account",
//     ],
//     outro: ["We reserve the right to suspend or terminate accounts that violate these Terms."],
//   },
//   {
//     id: "content-use",
//     letter: "E",
//     title: "Content Use",
//     body: [
//       "Users are granted a limited, revocable, non-exclusive license to access and use the App for personal, non-commercial purposes.",
//     ],
//     bulletsIntro: "You agree not to:",
//     bullets: [
//       "Reproduce content without authorization",
//       "Redistribute summaries commercially",
//       "Modify copyrighted material",
//       "Scrape or extract data from the App",
//       "Reverse engineer the platform",
//       "Interfere with the App\u2019s operation",
//     ],
//     outro: ["Any unauthorized use may result in termination of access."],
//   },
//   {
//     id: "content-policy",
//     letter: "F",
//     title: "Content Policy",
//     bulletsIntro: "Users shall not upload, publish, or distribute content that:",
//     bullets: [
//       "Violates laws",
//       "Infringes intellectual property rights",
//       "Is defamatory, obscene, hateful, or threatening",
//       "Is discriminatory, misleading, or fraudulent",
//       "Is harmful to minors",
//       "Promotes illegal activities",
//       "Contains malicious software",
//     ],
//     outro: ["60Sec reserves the right to remove any content deemed inappropriate or unlawful."],
//   },
//   {
//     id: "third-party-content",
//     letter: "G",
//     title: "Third-Party Content",
//     body: [
//       "The App may display or link to third-party websites, services, publishers, and advertisements.",
//     ],
//     bulletsIntro: "60Sec:",
//     bullets: [
//       "Does not endorse third-party views",
//       "Is not responsible for their accuracy",
//       "Assumes no liability for external websites",
//       "Does not guarantee availability of linked materials",
//     ],
//     outro: ["Users access third-party services entirely at their own risk."],
//   },
//   {
//     id: "sponsored-content",
//     letter: "H",
//     title: "Sponsored Content",
//     body: ["Sponsored materials may appear within the App."],
//     bulletsIntro: "Sponsored Content will be clearly identified using labels such as:",
//     bullets: ["Sponsored", "Advertisement", "Partner Content", "Paid Promotion"],
//     outro: [
//       "Any transactions conducted with advertisers are solely between Users and advertisers.",
//       "60Sec bears no responsibility for products or services offered by third parties.",
//     ],
//   },
//   {
//     id: "intellectual-property",
//     letter: "I",
//     title: "Intellectual Property",
//     body: [
//       "All trademarks, logos, software, designs, branding, databases, and proprietary technologies associated with 60Sec are owned by 60Sec Pty Ltd or its licensors.",
//     ],
//     bulletsIntro: "Users may not:",
//     bullets: ["Copy", "Distribute", "Reproduce", "Sublicense", "Modify", "Sell", "Exploit"],
//     outro: [
//       "This applies to any portion of the platform without written permission.",
//       "Third-party content remains owned by respective publishers and copyright holders.",
//     ],
//   },
//   {
//     id: "privacy",
//     letter: "J",
//     title: "Privacy",
//     body: [
//       "Our collection and processing of personal information is governed by our Privacy Policy.",
//       "By using the App, You consent to the practices described therein.",
//       "You acknowledge responsibility for safeguarding Your device and account credentials.",
//     ],
//   },
//   {
//     id: "limitation-of-liability",
//     letter: "K",
//     title: "Limitation of Liability",
//     body: ["The App is provided on an \u201cas is\u201d and \u201cas available\u201d basis."],
//     bulletsIntro: "To the fullest extent permitted by law, 60Sec Pty Ltd disclaims all warranties including:",
//     bullets: [
//       "Uninterrupted service",
//       "Error-free operation",
//       "Suitability for a particular purpose",
//       "Accuracy of summaries",
//       "Compatibility with all devices",
//     ],
//     subLists: [
//       {
//         intro: "60Sec shall not be liable for:",
//         items: [
//           "Indirect damages",
//           "Consequential losses",
//           "Business interruption",
//           "Lost profits",
//           "Data loss",
//           "Reputational damage",
//         ],
//       },
//     ],
//     outro: ["Your use of the App is entirely at Your own risk."],
//   },
//   {
//     id: "disclaimer",
//     letter: "L",
//     title: "Disclaimer",
//     body: [
//       "News summaries generated by 60Sec are intended solely for informational purposes.",
//       "Users are encouraged to consult original publishers for complete reporting.",
//     ],
//     bulletsIntro: "60Sec does not provide:",
//     bullets: ["Legal advice", "Financial advice", "Investment recommendations", "Medical advice"],
//     outro: ["Reliance on information available through the App is solely at the User\u2019s discretion."],
//   },
//   {
//     id: "termination",
//     letter: "M",
//     title: "Termination",
//     bulletsIntro: "60Sec may suspend or terminate access immediately if:",
//     bullets: [
//       "You violate these Terms",
//       "Your activities are unlawful",
//       "Access poses security risks",
//       "Regulatory requirements demand suspension",
//     ],
//     outro: [
//       "Users may discontinue use of the App at any time.",
//       "Termination does not affect rights accrued prior to termination.",
//     ],
//   },
//   {
//     id: "governing-law",
//     letter: "N",
//     title: "Governing Law",
//     body: [
//       "These Terms shall be governed by the laws of Victoria, Australia.",
//       "Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Victoria, Australia.",
//       "Parties agree to attempt good-faith negotiations before commencing formal legal proceedings.",
//     ],
//   },
//   {
//     id: "changes",
//     letter: "O",
//     title: "Changes to Terms",
//     body: [
//       "We reserve the right to modify these Terms at any time.",
//       "Updated Terms will be published within the App and on our website.",
//       "Continued use following updates constitutes acceptance of the revised Terms.",
//     ],
//   },
//   {
//     id: "contact",
//     letter: "P",
//     title: "Contact Information",
//     body: ["For legal notices, complaints, or questions regarding these Terms, please contact:"],
//   },
// ];


const SECTIONS: Section[] = [
  {
    id: "eligibility",
    letter: "A",
    title: "Eligibility",
    body: [
      "You must be at least 13 years of age, or the minimum legal age required in your jurisdiction, to use the App.",
      "By using 60Sec, you represent that you meet these requirements.",
    ],
  },
  {
    id: "user-account",
    letter: "B",
    title: "User Account",
    body: [
      "To use certain features of the App, you must verify your email address using a One-Time Password (OTP).",
    ],
    bulletsIntro: "You agree to:",
    bullets: [
      "Provide a valid email address.",
      "Keep your account information accurate.",
      "Maintain the security of your account.",
      "Notify us immediately if you believe your account has been used without your permission.",
    ],
    outro: ["You are responsible for all activities conducted through your account."],
  },
  {
    id: "acceptable-use",
    letter: "C",
    title: "Acceptable Use",
    bulletsIntro: "You agree not to:",
    bullets: [
      "Use the App for any unlawful purpose.",
      "Attempt to gain unauthorized access to our systems.",
      "Reverse engineer, modify or copy the App.",
      "Interfere with the operation or security of the App.",
      "Use automated tools or bots to access the App without permission.",
      "Upload or transmit malicious software or harmful code.",
    ],
  },
  {
    id: "news-content",
    letter: "D",
    title: "News Content",
    body: ["60Sec provides summaries and links to news from third-party publishers."],
    bullets: [
      "News content remains the property of its respective owners.",
      "We do not claim ownership of third-party content.",
      "We do not guarantee the accuracy, completeness or timeliness of news published by third parties.",
      "Users should refer to the original publisher for the complete article and official information.",
    ],
  },
  {
    id: "intellectual-property",
    letter: "E",
    title: "Intellectual Property",
    body: [
      "The 60Sec application, including its design, logo, software, user interface and original content, is owned by 60Sec or its licensors and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute or create derivative works without our prior written permission.",
    ],
  },
  {
    id: "availability-of-service",
    letter: "F",
    title: "Availability of Service",
    body: [
      "We strive to keep the App available at all times. However, we do not guarantee uninterrupted or error-free service.",
      "We may suspend, modify or discontinue any part of the App at any time without prior notice.",
    ],
  },
  {
    id: "updates",
    letter: "G",
    title: "Updates",
    body: [
      "We may release updates, bug fixes, security improvements or new features from time to time.",
      "Some updates may be required for the continued use of the App.",
    ],
  },
  {
    id: "disclaimer",
    letter: "H",
    title: "Disclaimer",
    body: ["The App is provided on an \u201cas is\u201d and \u201cas available\u201d basis."],
    bulletsIntro: "To the maximum extent permitted by law, we make no warranties regarding:",
    bullets: [
      "Accuracy of news content",
      "Availability of the service",
      "Reliability",
      "Fitness for a particular purpose",
      "Non-infringement",
    ],
    outro: ["Your use of the App is at your own risk."],
  },
  {
    id: "limitation-of-liability",
    letter: "I",
    title: "Limitation of Liability",
    bulletsIntro:
      "To the fullest extent permitted by law, 60Sec, its owners, employees and affiliates shall not be liable for any direct, indirect, incidental, special, consequential or punitive damages arising from:",
    bullets: [
      "Your use of the App",
      "Inability to access the App",
      "Errors or omissions in news content",
      "Third-party services",
      "Technical failures or interruptions",
    ],
  },
  {
    id: "third-party-services",
    letter: "J",
    title: "Third-Party Services",
    bulletsIntro: "The App may use third-party services including:",
    bullets: [
      "Firebase Authentication",
      "Firebase Cloud Messaging",
      "Firebase Analytics (if enabled)",
      "News API providers",
    ],
    outro: [
      "Your use of these services may also be subject to their respective terms and privacy policies.",
    ],
  },
  {
    id: "account-suspension-or-termination",
    letter: "K",
    title: "Account Suspension or Termination",
    bulletsIntro: "We reserve the right to suspend or terminate your access to the App if you:",
    bullets: [
      "Violate these Terms.",
      "Engage in fraudulent or abusive activity.",
      "Use the App in a way that may harm other users or our services.",
    ],
  },
  {
    id: "privacy",
    letter: "L",
    title: "Privacy",
    body: [
      "Your use of the App is also governed by our Privacy Policy.",
      "By using 60Sec, you acknowledge that you have read and understood our Privacy Policy.",
    ],
  },
  {
    id: "changes-to-these-terms",
    letter: "M",
    title: "Changes to These Terms",
    body: [
      "We may revise these Terms from time to time.",
      "Updated Terms will become effective when published within the App or on our website.",
      "Continued use of the App after changes are posted constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    id: "governing-law",
    letter: "N",
    title: "Governing Law",
    body: [
      "These Terms shall be governed by and interpreted in accordance with the laws applicable in the jurisdiction where the App operator is established, without regard to conflict of law principles.",
    ],
  },
  {
    id: "contact-us",
    letter: "O",
    title: "Contact Us",
    body: [
      "If you have any questions regarding these Terms and Conditions, please contact us:",
      "60Sec Support",
      "Email: support@60sec.app",
    ],
  },
  {
    id: "acceptance",
    letter: "P",
    title: "Acceptance",
    body: [
      "By creating an account, verifying your email via OTP and using the 60Sec App, you acknowledge that you have read, understood and agree to be bound by these Terms and Conditions.",
    ],
  },
];
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-stone-700">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-950" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TermsAndConditions() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const [showTop, setShowTop] = useState<boolean>(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen  font-[system-ui]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');
        // .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

    

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 border-b border-stone-200">
        <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-blue-950">
          Effective Date: July 12, 2026
        </p>
        <h1 className="font-display mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900 max-w-2xl">
          Terms and Conditions
        </h1>
        <p className="font-body mt-4 max-w-xl text-[15px] leading-relaxed text-stone-600">
          Welcome to 60Sec. These Terms and Conditions
          (&quot;Terms&quot;) govern your use of the 60Sec mobile application
          (&quot;App&quot;, &quot;Service&quot;, &quot;we&quot;, &quot;our&quot;, or
          &quot;us&quot;).
        </p>
        <p className="font-body mt-4 max-w-xl text-[15px] leading-relaxed text-stone-600">
          By downloading, accessing or using the App, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the App.
        </p>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12">
        {/* TOC */}
        <nav className="hidden md:block">
          <div className="sticky top-24 space-y-1">
            <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-stone-400 mb-3">
              On this page
            </p>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`font-body group flex w-full items-start gap-2 rounded-md px-2.5 py-1.5 text-left text-sm transition-colors ${
                  activeId === s.id
                    ? "bg-blue-950/[0.08] text-blue-950 font-medium"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                <span
                  className={`mt-0.5 font-display text-[11px] ${
                    activeId === s.id ? "text-blue-950" : "text-stone-400"
                  }`}
                >
                  {s.letter}
                </span>
                <span className="leading-snug">{s.title}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Sections */}
        <div className="space-y-16 max-w-2xl">
          {SECTIONS.map((s) => (
            <section
              key={s.id}
              id={s.id}
              ref={(el) => {
                sectionRefs.current[s.id] = el;
              }}
              className="scroll-mt-24"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-sm text-blue-950">{s.letter}</span>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-stone-900">
                  {s.title}
                </h2>
              </div>

              {s.body &&
                s.body.map((p, i) => (
                  <p key={i} className="font-body mt-3 text-[15px] leading-relaxed text-stone-700">
                    {p}
                  </p>
                ))}

              {s.bulletsIntro && (
                <p className="font-body mt-3 text-[15px] leading-relaxed text-stone-700">
                  {s.bulletsIntro}
                </p>
              )}
              {s.bullets && <Bullets items={s.bullets} />}

              {s.subLists &&
                s.subLists.map((sub, i) => (
                  <div key={i} className="mt-6">
                    <p className="font-body flex items-center gap-1.5 text-[15px] font-medium text-stone-900">
                      <ChevronRight size={14} className="text-blue-950" />
                      {sub.intro}
                    </p>
                    {sub.items.length > 0 && <Bullets items={sub.items} />}
                  </div>
                ))}

              {s.outro &&
                s.outro.map((p, i) => (
                  <p key={i} className="font-body mt-4 text-[15px] leading-relaxed text-stone-700">
                    {p}
                  </p>
                ))}

              {s.id === "contact" && (
                <div className="mt-4 rounded-lg border border-stone-200 bg-white p-4 font-body text-[15px] text-stone-700 space-y-1">
                  <p className="font-medium text-stone-900">60Sec Pty Ltd</p>
                  <p>Email: support@60sec.com.au</p>
                  <p>Website: www.60sec.com.au</p>
                </div>
              )}
            </section>
          ))}

          {/* Closing contact card */}
          <div className="rounded-xl border border-stone-200 bg-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-body font-semibold text-stone-900">
                Questions about these Terms?
              </p>
              <p className="font-body mt-1 text-sm text-stone-600">
                Reach out to our legal team for clarification or notices.
              </p>
            </div>
            <a
              href="mailto:legal@60sec.com.au"
              className="font-body inline-flex items-center justify-center gap-2 rounded-full bg-blue-950 px-5 py-2.5 text-sm font-medium text-[#FAF8F4] hover:bg-blue-900 transition-colors whitespace-nowrap"
            >
              <Mail size={14} /> legal@60sec.com.au
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 text-[#FAF8F4] shadow-lg transition-all ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}
