import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-16 px-6 border-t border-outline-variant/15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-on-surface font-headline italic text-2xl font-bold">Chinmay J</p>
          <p className="text-outline text-sm">© 2026 Chinmay J. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a href="https://linkedin.com/in/chinmay-j" target="_blank" rel="noopener noreferrer" className="text-on-surface hover:text-secondary transition-colors font-label font-medium">LinkedIn</a>
          <a href="https://github.com/ChinmayCJ7" target="_blank" rel="noopener noreferrer" className="text-on-surface hover:text-secondary transition-colors font-label font-medium">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
