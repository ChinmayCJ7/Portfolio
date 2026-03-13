export default function Contact() {
  return (
    <main className="grid-background min-h-screen pt-40 px-6 lg:px-12 flex items-center justify-center">
      <section className="max-w-4xl mx-auto space-y-24 w-full">
        
        {/* Header */}
        <div className="space-y-6 text-center">
          <h1 className="font-headline text-5xl md:text-7xl text-primary">Contact Me</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Get in touch for building exceptional digital experiences or discussing engineering solutions.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-outline-variant/20">
          
          <a href="mailto:chinmay94486@gmail.com" className="bg-surface-container-low p-10 rounded-xl forest-glow group hover:bg-surface-container transition-all flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" data-weight="fill">mail</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary">Email</h3>
            <p className="text-lg text-secondary mt-1">chinmay94486@gmail.com</p>
          </a>

          <a href="tel:+919449475936" className="bg-surface-container-low p-10 rounded-xl forest-glow group hover:bg-surface-container transition-all flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" data-weight="fill">phone</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary">Phone</h3>
            <p className="text-lg text-secondary mt-1">+91 9449475936</p>
          </a>

          <a href="https://linkedin.com/in/chinmay-j" target="_blank" rel="noopener noreferrer" className="bg-surface-container-low p-10 rounded-xl forest-glow group hover:bg-surface-container transition-all flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" data-weight="fill">work</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary">LinkedIn</h3>
            <p className="text-lg text-secondary mt-1">linkedin.com/in/chinmay-j</p>
          </a>

          <a href="https://github.com/ChinmayCJ7" target="_blank" rel="noopener noreferrer" className="bg-surface-container-low p-10 rounded-xl forest-glow group hover:bg-surface-container transition-all flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" data-weight="fill">code</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary">GitHub</h3>
            <p className="text-lg text-secondary mt-1">github.com/ChinmayCJ7</p>
          </a>

        </div>

      </section>
    </main>
  );
}
