import "./globals.css";
import {
  inter
} from "@/app/ui/fonts"
import NavItem from "@/components/navitem"
import { QueryClientContext } from "@/components/query-client-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <QueryClientContext>
        <div className="flex min-h-screen p-2 bg-linear-to-t from-green-500 to-lime-400 rounded-lg divide-x-5 divide-neutral-800">
          
          {/* Sidebar */}
          <aside className="w-64 bg-neutral-900 text-white p-4">
          <h2 className="text-3xl font-bold mb-6">Spotify Analytics</h2>

          <nav className="flex flex-col gap-2">
            <NavItem href="/dashboard" label="Dashboard" />
            <NavItem href="/profile" label="Profile" />
            <NavItem href="/settings" label="Settings" />
          </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-6 bg-neutral-900">
            {children}
          </main>

        </div>
        <div className="flex min-h-auto p-2 bg-linear-to-t from-green-500 to-lime-400 rounded-lg divide-x-5 divide-neutral-800 mt-10">
          {/* Footer */}
          <footer className="flex-1 p-6 bg-neutral-900">
            © DevelopDoc | 2026
          </footer>
        </div>
        </QueryClientContext>
      </body>
    </html>
  );
}