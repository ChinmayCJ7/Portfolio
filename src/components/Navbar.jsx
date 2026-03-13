import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-pill forest-glow border border-outline-variant/15 px-8 py-4 rounded-full flex items-center gap-12">
        <Link to="/" className="font-headline italic text-2xl text-primary font-bold">
          Chinmay J
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-label font-medium text-on-surface hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-label font-medium text-on-surface hover:text-primary transition-colors">About</Link>
          <Link to="/projects" className="text-label font-medium text-on-surface hover:text-primary transition-colors">Projects</Link>
          <Link to="/contact" className="text-label font-medium text-on-surface hover:text-primary transition-colors">Contact</Link>
        </div>
        <button className="md:hidden flex">
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>
      </nav>
    </header>
  );
}
