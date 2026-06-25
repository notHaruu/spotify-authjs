import "./globals.css";
import { inter } from "@/app/ui/fonts";
import NavItem from "@/components/navitem";
import { QueryClientContext } from "@/components/query-client-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientContext>

          {/* Background */}
          <div className="min-h-screen p-3 bg-gradient-to-t from-green-500 to-lime-400 rounded-2xl">

            {/* Layout */}
            <div className="flex min-h-[calc(100vh-24px)] gap-4 items-stretch">

              {/* SIDEBAR */}
              <aside className="w-64 shrink-0 bg-neutral-900 text-white p-4 rounded-xl border border-neutral-700 shadow-lg">
                <h2 className="text-3xl font-bold mb-6 pb-5 border-b-2 border-neutral-800">
                  Spotify Analytics
                </h2>

                <nav className="flex flex-col gap-2">
                  <NavItem href="/dashboard" label="Dashboard (WIP)" />
                  <NavItem href="/profile" label="Profile" />
                  <NavItem href="/settings" label="Settings (WIP)" />
                </nav>
              </aside>

              {/* MAIN */}
              <main className="flex-1 min-w-0 bg-neutral-900 p-6 rounded-xl border border-neutral-700 shadow-lg flex flex-col overflow-hidden">

                {/* IMPORTANT: width constraint wrapper */}
                <div className="w-full max-w-full min-w-0">
                  
                  {/* REAL TEXT WRAPPING RULES */}
                  <div className="break-words [overflow-wrap:anywhere] whitespace-normal">
                    {children}
                  </div>

                </div>

                {/* Footer */}
                <footer className="mt-auto pt-6 text-sm text-gray-500 border-t border-neutral-800">
                  © DevelopDoc | 2026
                </footer>

              </main>

            </div>
          </div>

        </QueryClientContext>
      </body>
    </html>
  );
}