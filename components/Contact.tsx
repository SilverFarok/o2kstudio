import { auditMailto, contactEmail } from "@/content/landing";

export function Contact() {
  return (
    <section id="contact" className="section-space scroll-mt-8 bg-panel" aria-labelledby="contact-heading">
      <div className="container-page grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <h2 id="contact-heading" className="section-title">
            Start with a short website audit
          </h2>
          <p className="mt-5 max-w-md leading-7 text-muted">
            Send your website URL and a short note. I’ll reply by email with the next
            step.
          </p>
          <a className="mt-6 inline-block text-sm font-bold text-accent hover:underline" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>
        <div className="rounded-md border border-line bg-white p-6 shadow-soft sm:p-8">
          {/* TODO: Replace this visual-only form with a configured form action when a backend is needed. */}
          <form aria-label="Website audit request" className="grid gap-5">
            <label className="grid gap-2 text-sm font-bold text-ink">
              Website URL
              <input
                className="rounded-md border border-line px-4 py-3 font-normal text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-accent"
                type="url"
                name="website"
                placeholder="https://yourwebsite.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Email
              <input
                className="rounded-md border border-line px-4 py-3 font-normal text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-accent"
                type="email"
                name="email"
                placeholder="you@company.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Message
              <textarea
                className="min-h-28 resize-y rounded-md border border-line px-4 py-3 font-normal text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-accent"
                name="message"
                placeholder="Tell me briefly what you would like to improve."
              />
            </label>
            <div>
              <a href={auditMailto} className="button-primary">
                Email your audit request
              </a>
              <p className="mt-3 text-xs leading-5 text-muted">
                This opens your email app. No form data is sent from this website.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
