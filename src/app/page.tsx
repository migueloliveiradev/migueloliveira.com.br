import { Header } from "@/components/header";
import { Wordmark } from "@/components/wordmark";
import { experience, profile, projects, skills } from "@/data/profile";

function SectionTitle({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 lg:mb-14">
      <p className="kicker text-muted">{kicker}</p>
      <h2 className="type-display mt-3 text-[clamp(44px,9vw,96px)] leading-[0.92] text-balance">{children}</h2>
    </div>
  );
}

export default function Home() {
  const lastLine = profile.headline.length - 1;

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="gutter grid gap-x-[4vw] gap-y-10 pt-10 pb-20 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.15fr_1fr] lg:content-center">
          <h1 className="type-display grid text-[clamp(52px,14vw,132px)] leading-[0.88] lg:text-[clamp(64px,7.6vw,124px)]">
            {profile.headline.map((line, i) => (
              <span key={line} className={i === lastLine ? "text-accent" : undefined}>
                {line}
              </span>
            ))}
          </h1>

          <div className="grid content-end gap-8">
            <p className="max-w-[34ch] text-[19px] leading-[1.4]">{profile.summary}</p>

            <div className="flex flex-wrap gap-3">
              <a href="#projetos" className="btn btn-solid">
                Ver projetos
              </a>
              <a href="#contato" className="btn btn-line">
                Entrar em contato
              </a>
            </div>

            <dl className="rounded-box border-[2.5px] border-border bg-surface shadow-[4px_4px_0_var(--c-accent)]">
              <div className="flex items-center justify-between gap-3 border-b-[2.5px] border-border px-4 py-3">
                <dt className="kicker">agora</dt>
                <span className="flex items-center gap-2 kicker text-muted">
                  <span className="size-2 rounded-full bg-block outline-[1.5px] outline-border outline" aria-hidden="true" />
                  {profile.location}
                </span>
              </div>
              {profile.now.map((item) => (
                <div key={item.label} className="grid grid-cols-[7.5rem_1fr] gap-3 border-b-[1.5px] border-border/20 px-4 py-3 last:border-0">
                  <dt className="kicker pt-0.5 text-muted">{item.label}</dt>
                  <dd className="type-strong">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="kicker justify-self-start rotate-[1.5deg] bg-accent px-3 py-1.5 text-[13px] text-on-accent lg:col-span-full">
            {profile.role} · {profile.location}
          </p>
        </section>

        {/* Sobre */}
        <section id="sobre" className="gutter rule-t py-20 lg:py-28">
          <div className="grid gap-x-[6vw] lg:grid-cols-[minmax(0,560px)_1fr]">
            <SectionTitle kicker="01 · sobre">Quem escreve o código.</SectionTitle>
            <div className="lg:pt-8">
              <div className="space-y-5 text-[19px] leading-[1.5]">
                {profile.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="kicker mt-10 text-muted">ferramentas do dia a dia</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="type-strong inline-flex min-h-9 items-center rounded-full border-[1.5px] border-border px-3 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="gutter rule-t py-20 lg:py-28">
          <SectionTitle kicker="02 · projetos">Coisas que eu construí.</SectionTitle>
          <ul className="grid gap-x-10 md:grid-cols-2">
            {projects.map((project, i) => (
              <li key={project.title} className="rule-t grid content-start gap-4 py-6">
                <p className="kicker flex flex-wrap items-center gap-2 text-[11px] text-muted">
                  <span className="rounded-full bg-accent px-2 py-0.5 text-on-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {project.tags.join(" · ")}
                </p>
                <h3 className="type-display text-[clamp(28px,4vw,40px)] leading-[1.02] tracking-[-0.015em] text-balance">
                  {project.title}
                </h3>
                <p className="max-w-[48ch] leading-[1.5] text-muted">{project.description}</p>
                {(project.href || project.repo) && (
                  <div className="flex flex-wrap gap-3 pt-1">
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noreferrer" className="btn btn-block text-sm">
                        Ver online ↗
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-line text-sm">
                        Código ↗
                      </a>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Experiência */}
        <section id="experiencia" className="gutter rule-t py-20 lg:py-28">
          <SectionTitle kicker="03 · experiência">Por onde passei.</SectionTitle>
          <ol>
            {experience.map((item) => (
              <li
                key={`${item.company}-${item.period}`}
                className="rule-t grid gap-x-10 gap-y-2 py-6 md:grid-cols-[12rem_1fr_1.2fr]"
              >
                <p className="kicker pt-2 text-muted">{item.period}</p>
                <div>
                  <h3 className="type-display text-[clamp(26px,3vw,34px)] leading-[1.05] tracking-[-0.015em]">
                    {item.role}
                  </h3>
                  <p className="kicker mt-2 inline-block bg-block px-2.5 py-1 text-on-block">{item.company}</p>
                </div>
                <p className="leading-[1.5] text-muted md:pt-2">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contato */}
        <section
          id="contato"
          className="gutter rule-t grid content-center gap-x-[6vw] gap-y-8 py-24 lg:min-h-[80svh] lg:grid-cols-[minmax(0,560px)_1fr]"
        >
          <div>
            <p className="kicker text-muted">04 · contato</p>
            <h2 className="type-display mt-3 text-[clamp(52px,12vw,128px)] leading-[0.9]">Bora conversar.</h2>
          </div>
          <div className="grid content-end gap-6">
            <p className="max-w-[42ch] text-[19px] leading-[1.45]">
              Tem um projeto em mente ou quer trocar uma ideia? Minha caixa de entrada está sempre aberta.
            </p>
            <div className="grid gap-2">
              <p className="kicker text-muted">e-mail</p>
              <div className="flex flex-wrap items-center gap-2 rounded-box border-[2.5px] border-border bg-surface py-1 pr-1 pl-4">
                <span className="type-strong min-w-[15rem] flex-1 py-2 break-words">{profile.email}</span>
                <a href={`mailto:${profile.email}`} className="btn btn-solid">
                  Enviar e-mail
                </a>
              </div>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="type-strong underline decoration-[1.5px] underline-offset-4 hover:text-accent"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="gutter rule-t grid gap-4 pt-16 pb-12">
        <Wordmark className="text-[clamp(36px,8vw,72px)] leading-none" />
        <p className="type-display text-[clamp(22px,4vw,32px)] leading-[1.05] tracking-[-0.02em] text-muted">
          {profile.summary}
        </p>
        <p className="kicker mt-6 text-muted">
          © {new Date().getFullYear()} {profile.name} · feito com Next.js
        </p>
      </footer>
    </>
  );
}
