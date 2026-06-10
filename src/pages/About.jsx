import { useState } from 'react';

export default function About() {
  const [showResume, setShowResume] = useState(false);

  return (
    <main className="grid-background min-h-screen pt-32 md:pt-40 px-6 lg:px-12 pb-24">
      <section className="max-w-4xl mx-auto space-y-16 md:space-y-24">
        
        {/* Header */}
        <div className="space-y-6 text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl text-primary">About Me</h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
            I'm Chinmay J, a motivated Software Engineer with a strong foundation in full-stack web development, REST API architectures, and database design. I specialize in building scalable, secure backend systems using Java Spring Boot, Node.js, PostgreSQL, and Docker containerization.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => setShowResume(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-full font-label font-bold tracking-wide hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="material-symbols-outlined">description</span>
              View My Resume
            </button>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="font-headline text-3xl md:text-4xl text-primary border-b border-outline-variant/20 pb-4">Education</h2>
          
          <div className="space-y-6 md:space-y-10">
            <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 p-6 md:p-8 bg-surface-container-low rounded-xl forest-glow">
              <div>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-on-surface">B.E in Computer Science and Engineering</h3>
                <p className="text-base md:text-lg text-secondary mt-1">P.E.S. College of Engineering, Mandya, Karnataka</p>
              </div>
              <div className="w-full md:w-auto bg-surface-container-highest px-4 py-2 rounded-lg text-center">
                <span className="text-xs md:text-sm font-label font-bold tracking-widest uppercase">2022 - Present</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 p-6 md:p-8 bg-surface-container-low rounded-xl forest-glow">
              <div>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-on-surface">PUC (Pre-University)</h3>
                <p className="text-base md:text-lg text-secondary mt-1">Cauvery Excel PU College, Mandya, Karnataka</p>
              </div>
              <div className="w-full md:w-auto bg-surface-container-highest px-4 py-2 rounded-lg text-center">
                <span className="text-xs md:text-sm font-label font-bold tracking-widest uppercase">2020 - 2022</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 p-6 md:p-8 bg-surface-container-low rounded-xl forest-glow">
              <div>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-on-surface">10th (SSLC)</h3>
                <p className="text-base md:text-lg text-secondary mt-1">Chinmaya Vidyalaya, Mandya, Karnataka</p>
              </div>
              <div className="w-full md:w-auto bg-surface-container-highest px-4 py-2 rounded-lg text-center">
                <span className="text-xs md:text-sm font-label font-bold tracking-widest uppercase">2019 - 2020</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-headline text-3xl md:text-4xl text-primary border-b border-outline-variant/20 pb-4">Certifications</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary pt-1">military_tech</span>
                <p className="text-lg text-on-surface-variant">Web Development with React — <span className="font-bold text-on-surface">DLithe</span></p>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary pt-1">military_tech</span>
                <p className="text-lg text-on-surface-variant">Java Concepts and Object-Oriented Programming — <span className="font-bold text-on-surface">Infosys Springboard</span></p>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary pt-1">military_tech</span>
                <p className="text-lg text-on-surface-variant">Generative AI for Data Analytics — <span className="font-bold text-on-surface">Forage (2025)</span></p>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary pt-1">military_tech</span>
                <p className="text-lg text-on-surface-variant">Postman API Fundamentals Student Expert — <span className="font-bold text-on-surface">Postman (2025)</span></p>
              </li>
            </ul>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h2 className="font-headline text-3xl md:text-4xl text-primary border-b border-outline-variant/20 pb-4">Leadership</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary pt-1">groups</span>
                <p className="text-lg text-on-surface-variant">
                  <span className="font-bold text-on-surface">Co-Secretary, YRCW — PESCE Mandya:</span> Coordinated college events and managed volunteer teams.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary pt-1">lightbulb</span>
                <p className="text-lg text-on-surface-variant">
                  <span className="font-bold text-on-surface">Project Lead:</span> Led academic project teams, planned deliverables, and ensured code quality and deadlines.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary pt-1">workspace_premium</span>
                <p className="text-lg text-on-surface-variant">
                  <span className="font-bold text-on-surface">Best Student Award — ISTE:</span> Awarded for academics, leadership, and contributions.
                </p>
              </li>
            </ul>
          </div>

        </div>

      </section>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 md:p-6 lg:p-12 animate-in fade-in duration-300">
          <div className="bg-surface relative w-full max-w-5xl h-full md:h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-outline-variant/30">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant/20 bg-surface-container">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-on-surface">
                  Chinmay J - Resume
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href="/resume.pdf" 
                  download="Chinmay_J_Resume.pdf"
                  className="p-2 rounded-full hover:bg-surface-container-highest text-secondary transition-colors"
                  title="Download Resume"
                >
                  <span className="material-symbols-outlined">download</span>
                </a>
                <button 
                  onClick={() => setShowResume(false)}
                  className="p-2 rounded-full hover:bg-error/10 text-error transition-colors"
                  title="Close"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
            
            {/* Modal Body */}
            <div className="flex-1 w-full bg-surface-container-lowest overflow-hidden">
              <object 
                data="/resume.pdf" 
                type="application/pdf" 
                width="100%" 
                height="100%"
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full text-on-surface-variant space-y-4 p-8 text-center bg-surface-container-low">
                  <span className="material-symbols-outlined text-6xl text-primary/40">picture_as_pdf</span>
                  <p className="text-xl font-headline text-on-surface">Unable to display PDF</p>
                  <p className="text-secondary max-w-md">
                    Your browser might not support embedded PDFs, or the resume file hasn't been added yet.
                  </p>
                  <a 
                    href="/resume.pdf" 
                    download="Chinmay_J_Resume.pdf"
                    className="mt-4 px-6 py-3 bg-secondary text-on-secondary rounded-xl font-label font-bold inline-flex items-center gap-2 hover:bg-secondary/90 transition-colors"
                  >
                    <span className="material-symbols-outlined">download</span>
                    Download Resume Instead
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}