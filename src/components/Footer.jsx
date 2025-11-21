export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rotate-45 bg-white" />
              <span className="text-white font-semibold">Vercel</span>
            </div>
            <p className="mt-3 text-sm text-white/60">Make the web. Faster.</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Products</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Vercel</li>
              <li>Next.js</li>
              <li>Analytics</li>
              <li>Edge</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Docs</li>
              <li>Templates</li>
              <li>Changelog</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Vercel, Inc.</p>
          <div className="flex gap-4">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
