import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

export default function Home() {
  return (
    <main className="grid-background min-h-screen pt-32 px-6 lg:px-12">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-4">
            <div className="dot-matrix text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter opacity-90 leading-none">
              Chinmay J
            </div>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl text-primary leading-[1.1] -tracking-[0.02em]">
              Hello, I'm Chinmay. <br />
              <span className="italic text-on-surface-variant font-light">A Software Engineer.</span>
            </h1>
          </div>
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed">
              Motivated Software Engineer with hands-on experience in full-stack web development, REST API design, JWT authentication, and database-driven applications.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
            <Link to="/projects" className="bg-primary text-on-primary px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-bold forest-glow hover:bg-primary-container transition-all active:scale-95 flex items-center gap-2">
              View Projects
              <span className="material-symbols-outlined text-xl">arrow_outward</span>
            </Link>
            <Link to="/contact" className="border border-outline-variant/30 text-primary px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-surface-container-low transition-all active:scale-95">
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden forest-glow group">
            <img 
              src={profileImage}
              alt="Chinmay Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
            />
          </div>
          
          <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-lg forest-glow border border-outline-variant/10 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" data-weight="fill">code</span>
              </div>
              <div>
                <p className="text-sm font-label text-outline uppercase tracking-widest">Specialization</p>
                <p className="text-lg font-headline font-bold text-primary">Full-Stack Craft</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/20 rounded-tr-xl"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-24 md:mt-40 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-surface-container-low p-10 rounded-lg space-y-6">
            <span className="material-symbols-outlined text-4xl text-secondary">terminal</span>
            <h3 className="font-headline text-3xl text-primary">Languages & Tools</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Java, JavaScript, Python, HTML, CSS. Using tools like Git, GitHub, Docker, Postman, Maven, and VS Code. AWS Cloud deployment.
            </p>
          </div>
          
          <div className="bg-surface-container p-10 rounded-lg space-y-6 md:translate-y-8">
            <span className="material-symbols-outlined text-4xl text-secondary">web</span>
            <h3 className="font-headline text-3xl text-primary">Frontend Web</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Building dynamic, highly interactive interfaces with React.js, TailwindCSS, and efficient DOM manipulation.
            </p>
          </div>
          
          <div className="bg-surface-container-high p-10 rounded-lg space-y-6">
            <span className="material-symbols-outlined text-4xl text-secondary">database</span>
            <h3 className="font-headline text-3xl text-primary">Backend & Data</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Java Spring Boot (Spring Security, Spring Data JPA) and Node.js REST API design. Row-level multi-tenancy, JWT stateless auth with RBAC, PostgreSQL (AWS RDS), MongoDB, and Flyway migrations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
