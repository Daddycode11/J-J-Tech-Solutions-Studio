import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue to-sky-400 flex items-center justify-center shadow-glow-blue">
                <span className="text-white font-display font-bold text-sm">J&J</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-base">J&J Tech Solutions Studio</span>
              </div>
            </div>
            <p className="text-brand-muted font-body text-sm leading-relaxed max-w-xs mb-6">
              We build modern websites and digital business systems for local businesses across the Philippines.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/18jCi9b2tp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-brand-border hover:border-brand-blue/50 bg-brand-surface flex items-center justify-center text-brand-muted hover:text-brand-blue transition-all duration-200 hover:shadow-glow-blue"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/63"
                className="w-9 h-9 rounded-lg border border-brand-border hover:border-green-500/50 bg-brand-surface flex items-center justify-center text-brand-muted hover:text-green-400 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 tracking-wide">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-muted hover:text-white text-sm font-body transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.facebook.com/share/18jCi9b2tp/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-muted hover:text-brand-blue text-sm font-body transition-colors">
                  <span>📘</span> Facebook Page
                </a>
              </li>
              <li>
                <a href="mailto:hello@jjtechstudio.com"
                  className="flex items-center gap-2 text-brand-muted hover:text-brand-blue text-sm font-body transition-colors">
                  <span>✉️</span> jjtechsolutionsstudio@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/63"
                  className="flex items-center gap-2 text-brand-muted hover:text-green-400 text-sm font-body transition-colors">
                  <span>💬</span> WhatsApp / Viber
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-xs font-body">
            © {new Date().getFullYear()} J&J Tech Solutions Studio. All rights reserved.
          </p>
          <p className="text-brand-muted text-xs font-body">
            Built with for local businesses in the Philippines 🇵🇭
          </p>
        </div>
      </div>
    </footer>
  );
}