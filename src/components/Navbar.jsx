import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4">
      <nav className="glass-pill forest-glow border border-outline-variant/15 px-6 md:px-8 py-4 rounded-full flex items-center justify-between w-full max-w-4xl">
        <Link to="/" className="font-headline italic text-2xl text-primary font-bold">
          Chinmay J
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-label font-medium text-on-surface hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-label font-medium text-on-surface hover:text-primary transition-colors">About</Link>
          <Link to="/projects" className="text-label font-medium text-on-surface hover:text-primary transition-colors">Projects</Link>
          <Link to="/contact" className="text-label font-medium text-on-surface hover:text-primary transition-colors">Contact</Link>
        </div>
        <button className="md:hidden flex p-1" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined text-primary">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 glass-pill forest-glow border border-outline-variant/15 p-6 rounded-2xl flex flex-col gap-6 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-headline font-bold text-on-surface hover:text-primary transition-colors">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-headline font-bold text-on-surface hover:text-primary transition-colors">About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-xl font-headline font-bold text-on-surface hover:text-primary transition-colors">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl font-headline font-bold text-on-surface hover:text-primary transition-colors">Contact</Link>
        </div>
      )}
    </header>
  );
}
