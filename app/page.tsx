import Image from "next/image";
// Mengimpor ikon sosial media
import { SiGmail, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-[#0f172a] text-white font-sans min-h-screen selection:bg-yellow-500/30 scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0f172a]/80 backdrop-blur-xl z-[100] border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-12 py-6">
          <h1 className="text-xl font-bold tracking-tighter text-white">
            My Portofolio
          </h1>

          <div className="flex items-center gap-10">
            <div className="hidden md:flex items-center gap-10">
              <a href="#about" className="text-sm font-medium text-gray-400 hover:text-[#eab308] transition-colors">About me</a>
              <a href="#experience" className="text-sm font-medium text-gray-400 hover:text-[#eab308] transition-colors">Experience</a>
              <a href="#services" className="text-sm font-medium text-gray-400 hover:text-[#eab308] transition-colors">Services</a>
              <a href="#skills" className="text-sm font-medium text-gray-400 hover:text-[#eab308] transition-colors">Skills</a>
            </div>
            <a 
              href="#contact" 
              className="bg-[#eab308] text-black px-8 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for Fixed Navbar */}
      <div className="h-28"></div>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between py-20 px-12 max-w-7xl mx-auto gap-16 min-h-[80vh]">
        <div className="md:w-3/5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Hellooow, I'm <span className="text-[#eab308]">Alfi</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-[#a88d5e] font-medium italic">
              Information Systems Student | Data & Web Development
            </h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg max-w-xl">
            I'm passionate about turning data into meaningful insights and building simple, impactful digital experiences. 
            Currently exploring data analytics and front-end development while continuously improving problem-solving and communication skills.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <a href="#contact" className="bg-[#eab308] text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 group shadow-xl shadow-yellow-500/20">
              Contact me <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="/CV_Alfi.pdf" 
              download 
              className="border-2 border-[#eab308] text-[#eab308] px-10 py-4 rounded-xl font-bold hover:bg-[#eab308] hover:text-black transition-all"
            >
              Download CV
            </a>
          </div>
        </div>

{/* FOTO PROFIL */}
        <div className="md:w-2/5 flex justify-center relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
          <div className="relative w-80 h-80 md:w-[480px] md:h-[480px]">
            <div className="relative w-full h-full overflow-hidden border-4 border-[#eab308]/20 shadow-2xl rounded-[30%_70%_70%_30%/30%_30%_70%_70%]">
              <Image 
                src="/profil.jpg" 
                alt="Alfi Fauzi"
                fill
                sizes="(max-width: 768px) 320px, 480px"
                quality={100}
                className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="bg-[#1e293b]/30 py-32 px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold text-[#eab308] tracking-tighter">About me</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-xl text-gray-300 leading-relaxed">
            <p>
              I'm an Information Systems student with a strong interest in data analytics and digital technology. 
              I enjoy understanding problems from both analytical and human perspectives, then turning them into practical and impactful solutions.
            </p>
            <p className="italic text-[#eab308]/80 font-medium border-l-4 border-[#eab308] pl-6">
              "These experiences shaped how I approach challenges: structured, collaborative, and solution-oriented."
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - Updated Flow */}
      <section id="experience" className="py-32 px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold text-[#eab308] tracking-tighter sticky top-32">Experience</h2>
          </div>
          <div className="md:col-span-8 space-y-16">
            
            {/* 1. Accounting Practical Work Student */}
            <div className="relative pl-8 border-l-2 border-[#eab308]/30 group hover:border-[#eab308] transition-colors pb-4">
              <div className="absolute w-4 h-4 bg-[#eab308] rounded-full -left-[9px] top-1.5 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-bold text-white">Accounting Practical Work Student</h4>
                <span className="text-[#eab308] font-mono text-sm">Feb — Apr 2022</span>
              </div>
              <p className="text-[#a88d5e] mb-4 font-semibold italic text-sm">Dinas PPAPP Jakarta Barat - Internship</p>
              <div className="text-gray-400 space-y-3">
                <p className="text-sm">During my internship, I supported the agency’s administrative and financial activities, including:</p>
                <ul className="list-disc ml-5 space-y-2 text-sm leading-relaxed">
                  <li>Compiling population data as part of the agency’s programs.</li>
                  <li>Calculating and preparing financial accountability reports (LPJ) for the PPAPP office.</li>
                  <li>Organizing and archiving official correspondence to ensure smooth administration.</li>
                  <li>Creating and managing a database of incoming and outgoing letters.</li>
                  <li>Compiling salary records for Dasawisma staff in West Jakarta.</li>
                </ul>
              </div>
            </div>

            {/* 2. Event Division Staff FIKTI SPACE */}
            <div className="relative pl-8 border-l-2 border-[#eab308]/30 group hover:border-[#eab308] transition-colors pb-4">
              <div className="absolute w-4 h-4 bg-[#eab308] rounded-full -left-[9px] top-1.5 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-bold text-white">Event Division Staff FIKTI SPACE</h4>
                <span className="text-[#eab308] font-mono text-sm">Dec 2023 — July 2024</span>
              </div>
              <p className="text-[#a88d5e] mb-4 font-semibold italic text-sm">BEM FIKTI Universitas Gunadarma</p>
              <ul className="list-disc ml-5 space-y-2 text-gray-400 text-sm leading-relaxed">
                <li>Served as Event Division Staff for FIKTI Space, an annual sports event organized by BEM FIKTI.</li>
                <li>Assisted in planning and organizing event agendas and activity flows.</li>
                <li>Supported on-site event execution to ensure activities ran according to the schedule.</li>
                <li>Coordinated with other divisions to maintain smooth event operations.</li>
                <li>Assisted in handling operational issues during the event.</li>
              </ul>
            </div>

            {/* 3. Chief Organizer CYBER SPACE */}
            <div className="relative pl-8 border-l-2 border-[#eab308]/30 group hover:border-[#eab308] transition-colors pb-4">
              <div className="absolute w-4 h-4 bg-[#eab308] rounded-full -left-[9px] top-1.5 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-bold text-white">Chief Organizer CYBER SPACE</h4>
                <span className="text-[#eab308] font-mono text-sm">Sept - Oct 2024</span>
              </div>
              <p className="text-[#a88d5e] mb-4 font-semibold italic text-sm">Student Gathering Event</p>
              <ul className="list-disc ml-5 space-y-2 text-gray-400 text-sm leading-relaxed">
                <li>Led and successfully organized the first “Cyber Space” student gathering for Information Systems students.</li>
                <li>Managed and coordinated 6 divisions with a total of 45 committee members.</li>
                <li>Designed the event concept to facilitate knowledge sharing and networking among students.</li>
                <li>Organized discussion sessions featuring senior students to provide practical insights.</li>
                <li>Oversaw cross-division coordination, task distribution, and issue resolution.</li>
                <li>Strengthened leadership, organizational management, and communication skills.</li>
              </ul>
            </div>

            {/* 4. Head of Operations OLIMPIADE GUNADARMA */}
            <div className="relative pl-8 border-l-2 border-[#eab308]/30 group hover:border-[#eab308] transition-colors pb-4">
              <div className="absolute w-4 h-4 bg-[#eab308] rounded-full -left-[9px] top-1.5 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-bold text-white">Head of Operations OLIMPIADE GUNADARMA</h4>
                <span className="text-[#eab308] font-mono text-sm">May 2025 - Sept 2025</span>
              </div>
              <p className="text-[#a88d5e] mb-4 font-semibold italic text-sm">Operational Leadership</p>
              <ul className="list-disc ml-5 space-y-2 text-gray-400 text-sm leading-relaxed">
                <li>Ensured technical readiness and smooth execution of event operations.</li>
                <li>Led and coordinated Security, Medical, Logistics, and Catering divisions, managing 150 committee members.</li>
                <li>Appointed as Field Coordinator on the event day to oversee on-site operations.</li>
                <li>Resolved operational and technical issues through rapid decision-making in a dynamic environment.</li>
                <li>Collaborated with core committees to support an event involving 400+ committee members.</li>
              </ul>
            </div>

            {/* 5. Human Resources Development BEM FIKTI GUNADARMA */}
            <div className="relative pl-8 border-l-2 border-[#eab308]/30 group hover:border-[#eab308] transition-colors pb-4">
              <div className="absolute w-4 h-4 bg-[#eab308] rounded-full -left-[9px] top-1.5 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-bold text-white">Human Resources Development BEM FIKTI</h4>
                <span className="text-[#eab308] font-mono text-sm">Dec 2024 - Dec 2025</span>
              </div>
              <p className="text-[#a88d5e] mb-4 font-semibold italic text-sm">Organizational Development</p>
              <ul className="list-disc ml-5 space-y-2 text-gray-400 text-sm leading-relaxed">
                <li>Monitored member performance, participation, and discipline on a regular basis.</li>
                <li>Acted as a mediator in resolving internal member issues and interpersonal conflicts.</li>
                <li>Conducted volunteer recruitment processes for organizational programs and events.</li>
                <li>Planned and organized internal activities, including member outing events, to strengthen team bonding.</li>
                <li>Compiled monthly member performance evaluations and documentation for internal reporting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-[#1e293b]/20 py-32 px-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#eab308] mb-4 tracking-tighter">My Services</h2>
            <p className="text-gray-400 text-xl max-w-2xl">Helping turn data and ideas into clear, useful, and impactful digital solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Data Analytics", desc: "Analyzing complex datasets to drive business value and meaningful insights." },
              { title: "Web Development", desc: "Building responsive and modern web applications with user-friendly experiences." },
              { title: "Data Cleaning", desc: "Cleaning, organizing, and preparing raw data to ensure accuracy and usability." },
              { title: "Dashboard & Reporting", desc: "Building interactive dashboards to support monitoring and decisions." }
            ].map((s, i) => (
              <div key={i} className="p-8 bg-[#0f172a] border border-white/5 rounded-[2rem] hover:border-[#eab308]/50 transition-all group">
                <div className="w-12 h-12 bg-[#eab308]/10 text-[#eab308] rounded-xl mb-6 flex items-center justify-center font-bold text-lg border border-[#eab308]/20">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-[#eab308] transition-colors">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-32 px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold text-[#eab308] tracking-tighter">Skills</h2>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-4">
            {['Python', 'SQL', 'Data Analysis', 'Tableau', 'Next.js', 'React', 'Tailwind CSS', 'Figma', 'Leadership', 'Critical Thinking'].map((skill) => (
              <span key={skill} className="px-7 py-3 bg-[#1e293b]/50 border border-[#eab308]/20 rounded-full text-sm font-bold text-gray-300 hover:border-[#eab308] hover:text-[#eab308] transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-[#0f172a] text-white py-24 px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-8">
            <h2 className="text-6xl font-bold tracking-tighter text-[#eab308]">Contact</h2>
            <div className="space-y-6 text-xl font-medium">
              <a href="mailto:alfifauzinur@gmail.com" className="flex items-center gap-4 hover:text-[#eab308] transition-colors group">
                <SiGmail className="w-6 h-6 text-[#eab308] group-hover:scale-110 transition-transform" />
                <span>alfifauzinur@gmail.com</span>
              </a>
              <a href="https://instagram.com/alfifauzi__" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#eab308] transition-colors group">
                <SiInstagram className="w-6 h-6 text-[#eab308] group-hover:scale-110 transition-transform" />
                <span>@alfifauzi__</span>
              </a>
              <a href="https://linkedin.com/in/alfi-fauzi-00170b264" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#eab308] transition-colors group">
                <SiLinkedin className="w-6 h-6 text-[#eab308] group-hover:scale-110 transition-transform" />
                <span>LinkedIn: alfi fauzi</span>
              </a>
              {/* Link GitHub */}
                <a href="https://github.com/buleyyy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#eab308] transition-colors group">
                <SiGithub className="w-6 h-6 text-[#eab308] group-hover:scale-110 transition-transform" />
               <span>GitHub: buleyyy</span>
              </a>
            </div>
          </div>
          
          <div className="md:text-right space-y-4 self-end">
             <p className="font-bold italic text-3xl text-[#eab308]">My Portofolio</p>
             <p className="text-gray-600 text-sm tracking-[0.3em] uppercase">© 2026 ALFI FAUZI - ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </div>
  );
}