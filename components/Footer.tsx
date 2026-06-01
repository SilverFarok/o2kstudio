import { contactEmail } from "@/content/landing";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page flex flex-col gap-4 py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-ink">
            O2K <span className="text-accent">Studio</span>
          </p>
          <p className="mt-1">Frontend / WordPress development for industrial websites</p>
        </div>
        <div className="sm:text-right">
          <a href={`mailto:${contactEmail}`} className="font-semibold text-accent hover:underline">
            {contactEmail}
          </a>
          <p className="mt-1">© {new Date().getFullYear()} O2K Studio</p>
        </div>
      </div>
    </footer>
  );
}
