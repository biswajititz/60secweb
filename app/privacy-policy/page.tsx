"use client";
import { useState, useEffect, useRef } from "react";
import { Shield, Mail, ArrowUp, ChevronRight } from "lucide-react";

interface Subsection {
  heading: string;
  intro?: string;
  list?: string[];
  outro?: string;
}

interface Section {
  id: string;
  number: string;
  title: string;
  body?: string[];
  intro?: string;
  list?: string[];
  outro?: string;
  subsections?: Subsection[];
}

const SECTIONS: Section[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    body: [
      "At 60 Sec Pty. Ltd. (\u201c60 Sec\u201d, \u201cwe\u201d, \u201cour\u201d, or \u201cus\u201d), protecting your privacy is important to us. This Privacy Policy explains how we collect, use, store, process, and protect the personal information you provide while using the 60 Sec mobile application (\u201cApp\u201d).",
      "By accessing or using our App, you agree to the practices described in this Privacy Policy.",
      "This Privacy Policy applies to every user who accesses or interacts with the App. Users are encouraged to carefully read this policy before submitting any personal information.",
      "We are committed to maintaining the confidentiality and security of our users\u2019 information while delivering a smooth and personalized experience.",
      "Your use of the App is subject to this Privacy Policy as well as our Terms and Conditions. Any capitalized term not defined here shall carry the same meaning as stated in the Terms.",
    ],
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    subsections: [
      {
        heading: "Automatically Collected Information",
        intro:
          "When you use the App, certain technical information may be automatically collected, including:",
        list: [
          "IP address",
          "Device and browser information",
          "Server logs",
          "Device interaction data",
          "Usage activity within the App",
        ],
        outro:
          "This information helps us improve functionality, security, and user experience.",
      },
      {
        heading: "Personal Information",
        intro:
          "To provide services effectively, we may collect information such as:",
        list: [
          "Name",
          "Email address",
          "Phone number",
          "Device details",
          "Location and timezone information",
          "Any information voluntarily shared through emails, support requests, or communications with us",
        ],
        outro:
          "We may store communications sent to us for support, operational, or security purposes. Your data may be processed or stored on servers located outside your country of residence. Unless legally required otherwise, personal data may be removed from our systems within a reasonable period after account deletion or service termination.",
      },
      {
        heading: "Third-Party Services and Links",
        intro:
          "The App may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices, content, or policies of external platforms.",
        outro:
          "Once you leave the App and access third-party services, your information becomes subject to their respective privacy policies. We encourage users to review those policies independently.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    number: "03",
    title: "How We Use Your Information",
    intro: "We use collected information to:",
    list: [
      "Provide and improve App services",
      "Personalize user experience",
      "Respond to inquiries and support requests",
      "Send important updates, notifications, or service-related communications",
      "Monitor App performance and analytics",
      "Improve security and prevent misuse",
      "Conduct research, reporting, and business analysis",
      "Support marketing and promotional activities where permitted by law",
    ],
    outro:
      "Communication may occur through email, SMS, phone calls, or in-app notifications.",
  },
  {
    id: "sharing-and-disclosure",
    number: "04",
    title: "Sharing and Disclosure of Information",
    body: [
      "We do not sell or rent your personal information to third parties.",
      "We may share information with trusted service providers, partners, or affiliated companies that assist us in operating the App, provided they comply with confidentiality and data protection obligations.",
      "In cases involving mergers, acquisitions, restructuring, or sale of business assets, user information may be transferred as part of the business transaction.",
    ],
    intro: "We may disclose information when required to:",
    list: [
      "Comply with legal obligations or lawful requests",
      "Enforce our Terms or policies",
      "Protect the rights, safety, or property of 60 Sec, users, or others",
      "Investigate fraud, security breaches, or illegal activity",
    ],
  },
  {
    id: "data-security",
    number: "05",
    title: "Data Security",
    body: [
      "We implement commercially reasonable physical, technical, and administrative safeguards to help protect your information against unauthorized access, misuse, alteration, or disclosure.",
      "While we strive to maintain secure systems, no method of online transmission or storage is completely secure. Therefore, we cannot guarantee absolute security of information transmitted through the internet or mobile networks.",
      "Users are responsible for maintaining the confidentiality of their account credentials. If you suspect unauthorized access to your account, please contact us immediately.",
    ],
  },
  {
    id: "changes",
    number: "06",
    title: "Changes to This Privacy Policy",
    body: [
      "We may update or modify this Privacy Policy from time to time. Any updates will be posted within the App or on our official platforms.",
      "Your continued use of the App after updates are published indicates your acceptance of the revised Privacy Policy.",
    ],
  },
  {
    id: "your-rights",
    number: "07",
    title: "User Rights",
    intro: "Depending on applicable laws, you may have the right to:",
    list: [
      "Access the personal information we hold about you",
      "Request correction of inaccurate information",
      "Request deletion of your personal data",
      "Withdraw consent for specific data processing activities",
      "Request restriction of certain processing activities",
    ],
    outro:
      "To make a privacy-related request, please contact us at support@60sec.com.au. Please note that certain services may become unavailable if required information is withdrawn or deleted.",
  },
  {
    id: "limitation-of-liability",
    number: "08",
    title: "Limitation of Liability",
    body: [
      "60 Sec makes reasonable efforts to ensure the accuracy and reliability of content and services provided through the App; however, we do not guarantee that all information will always be complete, accurate, or error-free.",
      "The App and its content are provided on an \u201cas is\u201d basis without warranties of any kind, whether express or implied.",
      "References to third-party products, businesses, or services within the App are provided for informational purposes only and do not imply endorsement or recommendation by 60 Sec.",
    ],
  },
];

function List({ items }: { items: string[] }) {
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

export default function PrivacyPolicy() {
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
          Legal &middot; Last updated July 2026
        </p>
        <h1 className="font-display mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900 max-w-2xl">
          Privacy Policy
        </h1>
        <p className="font-body mt-4 max-w-xl text-[15px] leading-relaxed text-stone-600">
          How 60 Sec collects, uses, and protects your information across our
          mobile application &mdash; explained in eight short sections.
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
                  className={`mt-0.5 font-display text-[11px] tabular-nums ${
                    activeId === s.id ? "text-blue-950" : "text-stone-400"
                  }`}
                >
                  {s.number}
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
                <span className="font-display text-sm text-blue-950 tabular-nums">
                  {s.number}
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-stone-900">
                  {s.title}
                </h2>
              </div>

              {s.body &&
                s.body.map((p, i) => (
                  <p
                    key={i}
                    className="font-body mt-3 text-[15px] leading-relaxed text-stone-700"
                  >
                    {p}
                  </p>
                ))}

              {s.intro && (
                <p className="font-body mt-3 text-[15px] leading-relaxed text-stone-700">
                  {s.intro}
                </p>
              )}
              {s.list && <List items={s.list} />}
              {s.outro && (
                <p className="font-body mt-4 text-[15px] leading-relaxed text-stone-700">
                  {s.outro}
                </p>
              )}

              {s.subsections &&
                s.subsections.map((sub, i) => (
                  <div key={i} className="mt-8 first:mt-6">
                    <h3 className="font-body flex items-center gap-1.5 text-[15px] font-semibold text-stone-900">
                      <ChevronRight size={14} className="text-blue-950" />
                      {sub.heading}
                    </h3>
                    {sub.intro && (
                      <p className="font-body mt-2 text-[15px] leading-relaxed text-stone-700">
                        {sub.intro}
                      </p>
                    )}
                    {sub.list && <List items={sub.list} />}
                    {sub.outro && (
                      <p className="font-body mt-3 text-[15px] leading-relaxed text-stone-700">
                        {sub.outro}
                      </p>
                    )}
                  </div>
                ))}
            </section>
          ))}

          {/* Closing contact card */}
          <div className="rounded-xl border border-stone-200 bg-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-body font-semibold text-stone-900">
                Questions about this policy?
              </p>
              <p className="font-body mt-1 text-sm text-stone-600">
                We&apos;re happy to walk you through how your data is handled.
              </p>
            </div>
            <a
              href="mailto:support@60sec.com.au"
              className="font-body inline-flex items-center justify-center gap-2 rounded-full bg-blue-950 px-5 py-2.5 text-sm font-medium text-[#FAF8F4] hover:bg-blue-900 transition-colors whitespace-nowrap"
            >
              <Mail size={14} /> support@60sec.com.au
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
