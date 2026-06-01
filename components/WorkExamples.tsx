import { Icon } from "@/components/Icons";
import { workExamples } from "@/content/landing";

export function WorkExamples() {
  return (
    <section id="work" className="section-space scroll-mt-8" aria-labelledby="work-heading">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id="work-heading" className="section-title">
            Recent work and related experience
          </h2>
          <p className="mt-4 leading-7 text-muted">
            A few selected examples connected to practical website development, support,
            and industrial website review work.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {workExamples.map((example) => (
            <article key={example.title} className="rounded-md border border-line bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-accent">
                <Icon name={example.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-7 text-xl font-bold tracking-[-0.025em] text-ink">{example.title}</h3>
              <p className="mt-2 text-sm font-semibold text-accent">{example.type}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{example.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
