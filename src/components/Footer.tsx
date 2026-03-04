export function Footer() {
  return (
    <footer className="bg-forest-dark py-10 lg:py-12">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-forest rounded-[10px] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F0EDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="M8 7c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4" />
                <path d="M8 13h5a2 2 0 0 1 0 4H8" />
              </svg>
            </div>
            <span className="font-serif text-[1.15rem] text-sage tracking-tight">AI Scribe</span>
            <span className="text-sage/30 text-sm ml-1">&copy; {new Date().getFullYear()} SonderMind, Inc.</span>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-sage/40 hover:text-sage transition-colors duration-200">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-sage/40 hover:text-sage transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
