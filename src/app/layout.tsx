import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

// Fonte variável: os eixos wght e MONO geram as variações de texto, display e mono.
const recursive = Recursive({
  variable: "--font-recursive",
  subsets: ["latin"],
  axes: ["MONO"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: profile.url,
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
};

// Aplica o tema antes da primeira pintura para evitar flash e trata os cliques do
// tema e do menu mobile por delegação, sem precisar do runtime do React no cliente.
const themeScript = `(function(){var d=document,r=d.documentElement;try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))r.classList.add("dark")}catch(e){}d.addEventListener("click",function(e){var el=e.target.closest("[data-theme-toggle],[data-menu-toggle],#mobile-menu a");if(!el)return;if(el.hasAttribute("data-theme-toggle")){var n=r.classList.toggle("dark");try{localStorage.setItem("theme",n?"dark":"light")}catch(e){}return}var b=d.querySelector("[data-menu-toggle]"),m=d.getElementById("mobile-menu"),o=el===b&&m.hidden;m.hidden=!o;b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Fechar menu":"Abrir menu")})})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${recursive.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
