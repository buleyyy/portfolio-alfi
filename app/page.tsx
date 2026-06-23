"use client";

import Image from "next/image";
import { SiGmail, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { useScrollAnimations } from "./useInView";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useScrollAnimations();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["about", "experience", "services", "skills", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
  ];

  const experiences = [
    {
      title: "Accounting Practical Work Student",
      date: "Feb — Apr 2022",
      org: "Dinas PPAPP Jakarta Barat",
      badge: "Internship",
      badgeColor: "bg-blue-500/20 text-blue-400",
      items: [
        "Compiled population data as part of the agency's programs.",
        "Calculated and prepared financial accountability reports (LPJ).",
        "Organized and archived official correspondence.",
        "Created and managed a database of incoming and outgoing letters.",
        "Compiled salary records for Dasawisma staff in West Jakarta.",
      ],
    },
    {
      title: "Event Division Staff — FIKTI SPACE",
      date: "Dec 2023 — Jul 2024",
      org: "BEM FIKTI Universitas Gunadarma",
      badge: "Organization",
      badgeColor: "bg-purple-500/20 text-purple-400",
      items: [
        "Served as Event Division Staff for FIKTI Space annual sports event.",
        "Assisted in planning and organizing event agendas and activity flows.",
        "Supported on-site event execution according to schedule.",
        "Coordinated with other divisions for smooth operations.",
      ],
    },
    {
      title: "Chief Organizer — CYBER SPACE",
      date: "Sept — Oct 2024",
      org: "Student Gathering Event",
      badge: "Leadership",
      badgeColor: "bg-amber-500/20 text-amber-400",
      items: [
        'Led the first "Cyber Space" student gathering for IS students.',
        "Managed 6 divisions with 45 committee members.",
        "Designed event concept for knowledge sharing and networking.",
        "Organized discussion sessions with senior students.",
        "Oversaw cross-division coordination and issue resolution.",
      ],
    },
    {
      title: "Head of Operations — OLIMPIADE GUNADARMA",
      date: "May — Sept 2025",
      org: "Operational Leadership",
      badge: "Leadership",
      badgeColor: "bg-amber-500/20 text-amber-400",
      items: [
        "Ensured technical readiness and smooth event operations.",
        "Led Security, Medical, Logistics, and Catering divisions (150 members).",
        "Appointed as Field Coordinator on event day.",
        "Resolved operational issues through rapid decision-making.",
        "Collaborated with core committees (400+ members event).",
      ],
    },
    {
      title: "Human Resources Development — BEM FIKTI",
      date: "Dec 2024 — Dec 2025",
      org: "Organizational Development",
      badge: "Organization",
      badgeColor: "bg-purple-500/20 text-purple-400",
      items: [
        "Monitored member performance, participation, and discipline.",
        "Mediated internal member issues and interpersonal conflicts.",
        "Conducted volunteer recruitment for programs and events.",
        "Planned internal activities and member outing events.",
        "Compiled monthly performance evaluations and documentation.",
      ],
    },
  ];

  const services = [
    { title: "Data Analytics", desc: "Analyzing complex datasets to drive business value and meaningful insights." },
    { title: "Web Development", desc: "Building responsive and modern web applications with user-friendly experiences." },
    { title: "Data Cleaning", desc: "Cleaning, organizing, and preparing raw data to ensure accuracy and usability." },
    { title: "Dashboard & Reporting", desc: "Building interactive dashboards to support monitoring and decisions." },
  ];

  const skillCategories = [
    {
      label: "Technical",
      skills: ["Python", "SQL", "Data Analysis", "Next.js", "React"],
    },
    {
      label: "Tools",
      skills: ["Tableau", "Tailwind CSS", "Figma"],
    },
    {
      label: "Soft Skills",
      skills: ["Leadership", "Critical Thinking"],
    },
  ];

  return (
    <div className="bg-[#0a0b14] text-white font-sans min-h-screen">
      {/* ========== NAVBAR ========== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
            ? "glass shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Alfi</span>
            <span className="text-white/60">.dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium transition-colors py-1 ${activeSection === l.href.slice(1)
                    ? "text-[#eab308]"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {l.label}
                {activeSection === l.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#eab308] rounded-full" />
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#eab308] text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-400 transition-all hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenu ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 glass ${mobileMenu ? "max-h-80 border-t border-white/5" : "max-h-0"
            }`}
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenu(false)}
                className="block text-gray-300 hover:text-[#eab308] transition-colors py-2 text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="block bg-[#eab308] text-black px-6 py-2.5 rounded-full text-sm font-bold text-center mt-2"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#eab308]/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/8 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            {/* Hero Text */}
            <div className="md:w-3/5 space-y-8 animate-fade-in-up relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eab308]/20 bg-[#eab308]/5 text-[#eab308] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#eab308] animate-pulse" />
                Available for work
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Hello, I&apos;m{" "}
                  <span className="gradient-text">Alfi Fauzi</span>
                </h1>
                <p className="text-lg md:text-xl text-[#a88d5e] font-medium">
                  Information Systems Student — Data & Web Development
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-xl">
                Passionate about turning data into meaningful insights and building
                simple, impactful digital experiences. Currently exploring data
                analytics and front-end development.
              </p>

              {/* Stats */}
              <div className="flex gap-8 pt-2">
                {[
                  { num: "5+", label: "Experiences" },
                  { num: "10+", label: "Skills" },
                  { num: "4", label: "Services" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold gradient-text">{s.num}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="bg-[#eab308] text-black px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition-all flex items-center gap-2 group shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/30"
                >
                  Contact me
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="/CV_Alfi.pdf"
                  download
                  className="border border-white/10 bg-white/5 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 hover:border-[#eab308]/30 transition-all"
                >
                  Download CV
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs text-gray-600 uppercase tracking-widest">Follow</span>
                <div className="w-8 h-px bg-gray-700" />
                {[
                  { icon: <SiGithub />, href: "https://github.com/buleyyy" },
                  { icon: <SiLinkedin />, href: "https://linkedin.com/in/alfi-fauzi-00170b264" },
                  { icon: <SiInstagram />, href: "https://instagram.com/alfifauzi__" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#eab308] hover:border-[#eab308]/30 hover:bg-[#eab308]/5 transition-all hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="md:w-2/5 flex justify-center relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="absolute inset-0 bg-[#eab308]/10 blur-[100px] rounded-full animate-pulse-glow" />
              {/* Decorative ring */}
              <div className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] border border-[#eab308]/10 rounded-full animate-spin-slow" />
              <div className="absolute w-[370px] h-[370px] md:w-[470px] md:h-[470px] border border-dashed border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

              <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
                <div className="w-full h-full overflow-hidden rounded-full border-2 border-[#eab308]/20 shadow-2xl glow-yellow">
                  <Image
                    src="/profil.jpg"
                    alt="Alfi Fauzi"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    priority
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-gray-700 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#eab308] rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="py-28 md:py-36 px-6 md:px-12 border-t border-white/5 bg-dots relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4 scroll-animate">
            <span className="text-xs text-[#eab308] uppercase tracking-[0.3em] font-semibold">Introduction</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#eab308] to-transparent rounded-full mt-6" />
          </div>

          <div className="md:col-span-8 space-y-6 scroll-animate delay-200">
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m an Information Systems student with a strong interest in data analytics
              and digital technology. I enjoy understanding problems from both analytical and
              human perspectives, then turning them into practical and impactful solutions.
            </p>
            <blockquote className="relative pl-6 border-l-2 border-[#eab308]/40 italic text-[#eab308]/70 text-lg">
              <span className="absolute -left-3 -top-2 text-4xl text-[#eab308]/20">&ldquo;</span>
              These experiences shaped how I approach challenges: structured, collaborative,
              and solution-oriented.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE SECTION ========== */}
      <section id="experience" className="py-28 md:py-36 px-6 md:px-12 border-t border-white/5 relative bg-grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <span className="text-xs text-[#eab308] uppercase tracking-[0.3em] font-semibold">Career Path</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
              My <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#eab308] to-transparent rounded-full mt-6 mx-auto" />
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`scroll-animate delay-${(i % 4) * 100 + 100} glass-card rounded-2xl p-6 md:p-8 card-lift group`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-[#eab308] transition-colors">
                        {exp.title}
                      </h4>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 italic">{exp.org}</p>
                  </div>
                  <span className="text-xs text-[#eab308] font-mono bg-[#eab308]/5 px-3 py-1 rounded-full border border-[#eab308]/10 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-gray-400 leading-relaxed">
                  {exp.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-[#eab308]/50 mt-1.5 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section id="services" className="py-28 md:py-36 px-6 md:px-12 border-t border-white/5 bg-dots relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <span className="text-xs text-[#eab308] uppercase tracking-[0.3em] font-semibold">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              Helping turn data and ideas into clear, useful, and impactful digital solutions.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#eab308] to-transparent rounded-full mt-6 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className={`scroll-animate-scale delay-${(i + 1) * 100} border-gradient p-7 card-lift group cursor-default`}
              >
                <div className="relative z-10">

                  <div className="text-[#eab308]/30 font-bold text-5xl absolute top-0 right-2 select-none">
                    0{i + 1}
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-[#eab308] transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SKILLS SECTION ========== */}
      <section id="skills" className="py-28 md:py-36 px-6 md:px-12 border-t border-white/5 bg-grid relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <span className="text-xs text-[#eab308] uppercase tracking-[0.3em] font-semibold">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
              Skills & <span className="gradient-text">Tools</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#eab308] to-transparent rounded-full mt-6 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className={`scroll-animate delay-${(i + 1) * 200} glass-card rounded-2xl p-6`}
              >
                <h3 className="text-sm font-bold text-[#eab308] uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#eab308]" />
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-300 hover:border-[#eab308]/40 hover:text-[#eab308] hover:bg-[#eab308]/5 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT / FOOTER ========== */}
      <footer id="contact" className="relative py-28 md:py-36 px-6 md:px-12 border-t border-white/5 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#eab308]/5 blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="text-xs text-[#eab308] uppercase tracking-[0.3em] font-semibold">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-3 tracking-tight">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              Have a project in mind? Let&apos;s discuss and bring your ideas to life.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto scroll-animate delay-200">
            {[
              { icon: <SiGmail className="w-5 h-5" />, label: "alfifauzinur@gmail.com", href: "mailto:alfifauzinur@gmail.com" },
              { icon: <SiInstagram className="w-5 h-5" />, label: "@alfifauzi__", href: "https://instagram.com/alfifauzi__" },
              { icon: <SiLinkedin className="w-5 h-5" />, label: "Alfi Fauzi", href: "https://linkedin.com/in/alfi-fauzi-00170b264" },
              { icon: <SiGithub className="w-5 h-5" />, label: "buleyyy", href: "https://github.com/buleyyy" },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-4 glass-card rounded-xl hover:border-[#eab308]/30 transition-all group card-lift"
              >
                <span className="text-[#eab308] group-hover:scale-110 transition-transform">{c.icon}</span>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{c.label}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xl font-bold">
              <span className="gradient-text">Alfi</span>
              <span className="text-white/40">.dev</span>
            </p>
            <p className="text-gray-600 text-xs tracking-[0.2em] uppercase">
              © 2026 Alfi Fauzi · All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}