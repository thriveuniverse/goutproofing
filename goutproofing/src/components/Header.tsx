// src/components/Header.tsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-emerald-600 text-white py-6 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Site Title */}
        <Link to="/" className="text-3xl font-black hover:opacity-90">
          Gout Proofing
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-8 text-lg">
          <Link to="/" className="hover:opacity-80 transition">
            Home
          </Link>
          <Link to="/blog/01-gout-introduction" className="hover:opacity-80 transition">
            Blog
          </Link>
          <Link to="/about" className="hover:opacity-80 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}