// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf6f1]">
      <Header />

      <main className="flex-grow">
        <Outlet />  {/* This renders the current page (Home, BlogPost, About, etc.) */}
      </main>

      <footer className="bg-emerald-800 text-white py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">
            © 2025 Gout Proofing • Built by Jonathan & Mirrie with ❤️ and zero flares
          </p>
          <p className="text-sm opacity-80">
            Not medical advice • Always consult your doctor
          </p>
        </div>
      </footer>
    </div>
  );
}