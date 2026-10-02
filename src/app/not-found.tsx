import Link from "next/link";

export default function NotFound() {
  return (
    <main className="gutter grid flex-1 content-center justify-items-start gap-6 py-24">
      <p className="kicker rotate-[1.5deg] bg-accent px-3 py-1.5 text-on-accent">erro 404</p>
      <h1 className="type-display text-[clamp(52px,12vw,128px)] leading-[0.9]">Página não encontrada.</h1>
      <Link href="/" className="btn btn-solid">
        Voltar para o início
      </Link>
    </main>
  );
}
