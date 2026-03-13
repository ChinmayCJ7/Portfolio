export default function About() {
  return (
    <main className="grid-background min-h-screen pt-40 px-6 lg:px-12 pb-24">
      <section className="max-w-4xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="space-y-6 text-center">
          <h1 className="font-headline text-5xl md:text-7xl text-primary">About Me</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            I'm Chinmay J, a motivated Software Engineer with a strong foundation in full-stack web development, SDLC, OOP, and problem solving.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-12">
          <h2 className="font-headline text-4xl text-primary border-b border-outline-variant/20 pb-4">Education</h2>
          
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 p-8 bg-surface-container-low rounded-xl forest-glow">
              <div>
                <h3 className="text-2xl font-headline font-bold text-on-surface">B.E in Computer Science and Engineering</h3>
                <p className="text-lg text-secondary mt-1">P.E.S. College of Engineering, Mandya, Karnataka</p>
              </div>
              <div className="bg-surface-container-highest px-4 py-2 rounded-lg">
                <span className="text-sm font-label font-bold tracking-widest uppercase">2022 - Present</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 p-8 bg-surface-container-low rounded-xl forest-glow">
              <div>
                <h3 className="text-2xl font-headline font-bold text-on-surface">PUC (Pre-University)</h3>
                <p className="text-lg text-secondary mt-1">Cauvery Excel PU College, Mandya, Karnataka</p>
              </div>
              <div className="bg-surface-container-highest px-4 py-2 rounded-lg">
                <span className="text-sm font-label font-bold tracking-widest uppercase">2020 - 2022</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 p-8 bg-surface-container-low rounded-xl forest-glow">
              <div>
                <h3 className="text-2xl font-headline font-bold text-on-surface">10th (SSLC)</h3>
                <p className="text-lg text-secondary mt-1">Chinmaya Vidyalaya, Mandya, Karnataka</p>
              </div>
              <div className="bg-surface-container-highest px-4 py-2 rounded-lg">
                <span className="text-sm font-label font-bold tracking-widest uppercase">2019 - 2020</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <h2 className="font-headline text-4xl text-primary border-b border-outline-variant/20 pb-4">Certifications</h2>
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

          <div className="space-y-8">
            <h2 className="font-headline text-4xl text-primary border-b border-outline-variant/20 pb-4">Leadership</h2>
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
    </main>
  );
}