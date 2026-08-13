import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSentSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSentSuccess(false), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-100 uppercase">
          GET IN TOUCH
        </h2>
        <div className="flex-1 h-[1px] bg-[#272730]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-[#121216] border border-[#272730] p-8 space-y-6">
          <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest border-b border-[#272730] pb-2">
            SEND DIRECT MESSAGE
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-wider text-slate-400">YOUR NAME</label>
            <input
              type="text"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full bg-black/60 border border-[#272730] p-3 font-mono text-xs text-slate-100 focus:outline-none focus:border-amber-400"
              placeholder="e.g. Alex Mercer"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-wider text-slate-400">EMAIL ADDRESS</label>
            <input
              type="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full bg-black/60 border border-[#272730] p-3 font-mono text-xs text-slate-100 focus:outline-none focus:border-amber-400"
              placeholder="alex@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-wider text-slate-400">MESSAGE</label>
            <textarea
              required
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full bg-black/60 border border-[#272730] p-3 font-mono text-xs text-slate-100 focus:outline-none focus:border-amber-400 resize-none"
              placeholder="Your inquiry or project request..."
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full py-4 bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {sending ? (
              <span>SENDING... <i className="fas fa-spinner fa-spin ml-2" /></span>
            ) : (
              <span>TRANSMIT MESSAGE <i className="fas fa-paper-plane ml-2" /></span>
            )}
          </button>

          {sentSuccess && (
            <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs text-center">
              ✔ Message transmitted successfully! Thank you.
            </div>
          )}
        </form>

        {/* Contact Info Deck */}
        <div className="space-y-6">
          <div className="bg-[#121216] border border-[#272730] p-8 space-y-6">
            <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest border-b border-[#272730] pb-2">
              CONTACT INFORMATION
            </div>

            <div className="border-l-2 border-amber-400 pl-4 space-y-1">
              <div className="font-mono text-[10px] text-slate-500 uppercase">EMAIL ADDRESS</div>
              <a href="mailto:mehul09mayank@gmail.com" className="font-mono text-sm text-slate-200 hover:text-amber-400 transition-colors">
                mehul09mayank@gmail.com
              </a>
            </div>

            <div className="border-l-2 border-emerald-400 pl-4 space-y-1">
              <div className="font-mono text-[10px] text-slate-500 uppercase">PHONE NUMBER</div>
              <a href="tel:+918102208365" className="font-mono text-sm text-slate-200 hover:text-emerald-400 transition-colors">
                +91 8102 208365
              </a>
            </div>

            <div className="border-l-2 border-cyan-400 pl-4 space-y-1">
              <div className="font-mono text-[10px] text-slate-500 uppercase">LINKEDIN</div>
              <a href="https://linkedin.com/in/mehul-mayank44" target="_blank" rel="noreferrer" className="font-mono text-sm text-slate-200 hover:text-cyan-400 transition-colors">
                linkedin.com/in/mehul-mayank44
              </a>
            </div>

            <div className="border-l-2 border-purple-400 pl-4 space-y-1">
              <div className="font-mono text-[10px] text-slate-500 uppercase">GITHUB</div>
              <a href="https://github.com/mehul9mayank" target="_blank" rel="noreferrer" className="font-mono text-sm text-slate-200 hover:text-purple-400 transition-colors">
                github.com/mehul9mayank
              </a>
            </div>

            <div className="border-l-2 border-slate-500 pl-4 space-y-1">
              <div className="font-mono text-[10px] text-slate-500 uppercase">LOCATION</div>
              <div className="font-mono text-sm text-slate-200">
                Chandigarh, Punjab, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
