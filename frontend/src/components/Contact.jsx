import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, MapPin } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const contactChannels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent. Thanks for reaching out — I'll reply soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border-b border-white/15 bg-transparent py-4 text-lg text-white placeholder:text-zinc-600 transition-colors duration-300 focus:border-white focus:outline-none";

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative px-6 py-28 md:px-12 md:py-36 lg:px-20 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-20 max-w-4xl"
        >
          <span className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
            <span className="inline-block h-px w-8 bg-zinc-600" />
            05 — Contact
          </span>
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-8xl">
            Let's Create
            <br />
            Something.
          </h2>
          <p className="mt-8 text-lg text-zinc-400">
            Have an opportunity or want to collaborate? Get in touch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Contact info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5"
          >
            {contactChannels.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="group flex items-center gap-5 border-t border-white/10 py-7">
                  <Icon className="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-[var(--accent)]" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      {c.label}
                    </div>
                    <div className="mt-1 text-lg text-white">{c.value}</div>
                  </div>
                  {c.href && (
                    <ArrowUpRight className="ml-auto h-5 w-5 text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  )}
                </div>
              );
              return (
                <motion.div key={c.label} variants={fadeUp}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      data-testid={`contact-${c.label.toLowerCase()}`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div data-testid={`contact-${c.label.toLowerCase()}`}>
                      {inner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            onSubmit={submit}
            data-testid="contact-form"
            className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7"
          >
            <input
              data-testid="contact-input-name"
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Your name"
              className={inputClass}
            />
            <input
              data-testid="contact-input-email"
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              placeholder="Your email"
              className={inputClass}
            />
            <textarea
              data-testid="contact-input-message"
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Your message"
              rows={4}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit"
              className="group mt-2 flex items-center justify-center gap-2 bg-white px-8 py-4 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && (
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
