import { Icon } from "@/components/Icons";
import { problems } from "@/content/landing";

export function ProblemCards() {
  return (
    <section className="section-space bg-panel" aria-labelledby="problems-heading">
      <div className="container-page">
        <div className="max-w-xl">
          <h2 id="problems-heading" className="section-title">
            Website issues that can cost manufacturers trust and inquiries
          </h2>
          <p className="mt-4 leading-7 text-muted">
            Small usability, content, and technical gaps can make a capable industrial
            company look harder to trust or harder to contact.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="flex min-h-72 flex-col rounded-md border border-line bg-white p-5 transition-colors hover:border-blue-200 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-accent">
                  <Icon name={problem.icon} className="h-5 w-5" />
                </div>
                <h3 className="pt-1 text-base font-bold leading-6 tracking-[-0.015em] text-ink">
                  {problem.title}
                </h3>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted">{problem.description}</p>
              <p className="mt-auto border-t border-line pt-4 text-sm leading-6 text-ink">
                <span className="font-bold text-accent">Impact:</span> {problem.impact}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
