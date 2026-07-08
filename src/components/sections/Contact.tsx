import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Globe, Send, CheckCircle2, XCircle, X } from "lucide-react";

export function Contact() {
  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name,
          email,
          message,
        }),
      });

      const result = await response.json();
      if (response.status === 200 && result.success) {
        setStatus("success");
        showToast("success", "Message sent successfully! I'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        showToast("error", "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
      showToast("error", "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-14 relative max-w-7xl mx-auto px-4 sm:px-6 z-20">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 z-9999 w-[90%] max-w-sm">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md border ${
                toast.type === "success"
                  ? "bg-emerald-50/95 dark:bg-emerald-950/90 border-emerald-200 dark:border-emerald-800/50"
                  : "bg-rose-50/95 dark:bg-rose-950/90 border-rose-200 dark:border-rose-800/50"
              }`}>
              {toast.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
              )}
              <p
                className={`text-sm font-semibold flex-1 ${
                  toast.type === "success" ? "text-emerald-700 dark:text-emerald-300" : "text-rose-700 dark:text-rose-300"
                }`}>
                {toast.message}
              </p>
              <button
                onClick={() => setToast(null)}
                className={`shrink-0 p-1 rounded-lg transition-colors ${
                  toast.type === "success"
                    ? "hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400"
                    : "hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400"
                }`}>
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-left mb-6 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Get In Touch</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
        {/* Contact Info & Socials */}
        <div className="md:col-span-5 space-y-4">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="p-5 h-full border border-white/50 dark:border-slate-700/50 border-t-4 border-t-blue-500/60 rounded-2xl bg-white/50 dark:bg-slate-900/50 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 duration-300 hover:shadow-md dark:hover:bg-slate-800/60 relative overflow-hidden">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Let's Connect</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:vaishali.techie@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-slate-200/50 dark:border-slate-700/50 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Email Me</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">vaishali.techie@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/vaishalisharma1805/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-slate-200/50 dark:border-slate-700/50 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Connect on</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">LinkedIn</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 w-full max-w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full">
            <div className="p-5 md:p-6 w-full max-w-full border border-white/50 dark:border-slate-700/50 rounded-2xl bg-white/50 dark:bg-slate-900/50 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 duration-300 hover:shadow-md dark:hover:bg-slate-800/60 box-border overflow-hidden relative">
              <form className="space-y-4 w-full flex flex-col" onSubmit={handleSubmit}>
                <div className="space-y-1 w-full">
                  <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all shadow-sm dark:shadow-none box-border text-sm"
                  />
                </div>

                <div className="space-y-1 w-full">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all shadow-sm dark:shadow-none box-border text-sm"
                  />
                </div>

                <div className="space-y-1 w-full">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell me about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all shadow-sm dark:shadow-none resize-none box-border text-sm"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/70 text-white font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed box-border">
                  {status === "submitting" ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
