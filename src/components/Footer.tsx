export function Footer() {
  return (
    <footer className="bg-forest-dark border-t border-white/[0.06] py-14 lg:py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-forest rounded-[10px] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C12 2 9 6 9 9C9 10.5 10 11.5 12 12C14 11.5 15 10.5 15 9C15 6 12 2 12 2Z" fill="#F0EDFF" />
                  <path d="M5.5 7C5.5 7 4 11.5 5 14C5.6 15.3 7 15.8 9 15.2C8.8 13.1 7.5 11 5.5 7Z" fill="#F0EDFF" />
                  <path d="M18.5 7C18.5 7 20 11.5 19 14C18.4 15.3 17 15.8 15 15.2C15.2 13.1 16.5 11 18.5 7Z" fill="#F0EDFF" />
                  <path d="M3 14.5C3 14.5 6.5 16 9 15.5C10.5 15.2 11 14 11 12.5C9 13 6.5 13.5 3 14.5Z" fill="#F0EDFF" />
                  <path d="M21 14.5C21 14.5 17.5 16 15 15.5C13.5 15.2 13 14 13 12.5C15 13 17.5 13.5 21 14.5Z" fill="#F0EDFF" />
                  <path d="M8 19C8 19 8.5 15 10 13.5C11 12.5 12 12.5 12 12.5C12 12.5 13 12.5 14 13.5C15.5 15 16 19 16 19C14 20.5 10 20.5 8 19Z" fill="#F0EDFF" />
                </svg>
              </div>
              <span className="font-serif text-[1.15rem] text-sage tracking-tight">Bard</span>
              <span className="text-xs text-white/30 font-sans ml-1.5 self-end mb-0.5">by SonderMind</span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-[200px]">
              Your clinical documentation companion.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#how-it-works" className="text-sm text-white/50 hover:text-sage transition-colors duration-300">How It Works</a></li>
              <li><a href="#features" className="text-sm text-white/50 hover:text-sage transition-colors duration-300">Features</a></li>
              <li><a href="#pricing" className="text-sm text-white/50 hover:text-sage transition-colors duration-300">Pricing</a></li>
              <li><a href="#security" className="text-sm text-white/50 hover:text-sage transition-colors duration-300">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#mission" className="text-sm text-white/50 hover:text-sage transition-colors duration-300">Mission</a></li>
              <li><a href="https://www.sondermind.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-sage transition-colors duration-300">SonderMind</a></li>
              <li><a href="https://www.sondermind.com/careers" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-sage transition-colors duration-300">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-white/50 hover:text-sage transition-colors duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-sage transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-sage transition-colors duration-300">BAA</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/20 text-xs">&copy; {new Date().getFullYear()} SonderMind, Inc. All rights reserved.</span>
          <span className="text-white/15 text-xs">HIPAA Compliant &middot; SOC 2 Type II Certified</span>
        </div>
      </div>
    </footer>
  )
}
