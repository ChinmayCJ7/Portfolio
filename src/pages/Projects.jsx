export default function Projects() {
  return (
    <main className="grid-background min-h-screen pt-32 md:pt-40 px-6 lg:px-12 pb-24">
      <section className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        
        {/* Header */}
        <div className="space-y-6 text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl text-primary">Key Projects</h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            A selection of my recent full-stack applications and collaborative endeavors.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          
          {/* Project 1: College ERP */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 bg-surface-container-low p-6 md:p-10 rounded-xl forest-glow group hover:bg-surface-bright transition-colors duration-500">
            <div className="lg:w-1/3 min-w-[280px]">
              <div className="flex items-start gap-4 mb-4">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">school</span>
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary">College ERP System</h2>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-surface-container-highest px-3 py-1 rounded-sm text-label text-sm uppercase tracking-widest text-on-surface">React.js</span>
                <span className="bg-surface-container-highest px-3 py-1 rounded-sm text-label text-sm uppercase tracking-widest text-on-surface">Node.js</span>
                <span className="bg-surface-container-highest px-3 py-1 rounded-sm text-label text-sm uppercase tracking-widest text-on-surface">MongoDB</span>
                <span className="bg-surface-container-highest px-3 py-1 rounded-sm text-label text-sm uppercase tracking-widest text-on-surface">JWT</span>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-6">
              <p className="text-xl text-on-surface leading-relaxed">
                Built a full-stack academic management platform designed for comprehensive university operation and role mapping.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary pt-1">check_circle</span>
                  <p className="text-lg text-on-surface-variant">Designed RESTful APIs with JWT-based authentication and role-based access control.</p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary pt-1">check_circle</span>
                  <p className="text-lg text-on-surface-variant">Developed modular backend services with CRUD operations, validation, exception handling, and secure data flow.</p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary pt-1">check_circle</span>
                  <p className="text-lg text-on-surface-variant">Optimized database queries and improved scalability through structured debugging and clean architecture.</p>
                </li>
              </ul>
              <div className="pt-4">
                <a href="https://github.com/ChinmayCJ7/CollegeERP" target="_blank" rel="noopener noreferrer" className="border border-outline border-outline-variant/30 text-on-surface px-6 py-3 rounded-full text-md font-bold hover:bg-surface-container-high transition-all active:scale-95 inline-flex items-center gap-2">
                  View on GitHub
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: LostFinder */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 bg-surface-container-low p-6 md:p-10 rounded-xl forest-glow group hover:bg-surface-bright transition-colors duration-500">
            <div className="lg:w-1/3 min-w-[280px]">
              <div className="flex items-start gap-4 mb-4">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">search</span>
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary">LostFinder</h2>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-surface-container-highest px-3 py-1 rounded-sm text-label text-sm uppercase tracking-widest text-on-surface">HTML</span>
                <span className="bg-surface-container-highest px-3 py-1 rounded-sm text-label text-sm uppercase tracking-widest text-on-surface">CSS</span>
                <span className="bg-surface-container-highest px-3 py-1 rounded-sm text-label text-sm uppercase tracking-widest text-on-surface">JavaScript</span>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-6">
              <p className="text-xl text-on-surface leading-relaxed">
                Developed a front-end web application for reporting lost and found items.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary pt-1">check_circle</span>
                  <p className="text-lg text-on-surface-variant">Implemented client-side validation, event-driven programming, and dynamic DOM updates.</p>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary pt-1">check_circle</span>
                  <p className="text-lg text-on-surface-variant">Improved usability and performance while maintaining clean, maintainable UI code.</p>
                </li>
              </ul>
              <div className="pt-4">
                <a href="https://github.com/ChinmayCJ7/LostFinder" target="_blank" rel="noopener noreferrer" className="border border-outline border-outline-variant/30 text-on-surface px-6 py-3 rounded-full text-md font-bold hover:bg-surface-container-high transition-all active:scale-95 inline-flex items-center gap-2">
                  View on GitHub
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
