"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import skillsData from "../data/skills.json";
import coursesData from "../data/courses.json";

/* ------------------------------------------------------------------ */
/*  Small hook: reveal elements on scroll (respects reduced motion)    */
/* ------------------------------------------------------------------ */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/*  Section label — mono, lives in the margin                          */
/* ------------------------------------------------------------------ */
function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="font-[family-name:var(--font-mono)] text-[var(--pen)] text-sm tracking-[0.2em]">
        {index}
      </span>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      <span className="flex-1 h-px bg-[var(--ink)] opacity-15 translate-y-[-2px]" />
    </div>
  );
}

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const experience = [
  {
    role: "Backend Software Engineer Intern",
    org: "Springer Capital",
    place: "Remote",
    dates: "Dec 2025 — Feb 2026",
    notes: [
      "Completed employer-led training in AI/ML, Azure, Django/DRF, PostgreSQL, and Python.",
      "Proposed a RESTful ETL service in Flask with DLT checkpointing so HubSpot deal extractions restart after failures without losing data.",
    ],
  },
  {
    role: "AI Validation Expert",
    org: "Snorkel AI",
    place: "Remote",
    dates: "Sep 2025 — Dec 2025",
    notes: [
      "Compared AI-generated code across Python, JavaScript, and TypeScript — grading logic, style, and explanations against user prompts to measure performance.",
      "Improved Python repositories by re-prompting models for stronger submissions, mapping recurring failure patterns when models tried to shortcut accepted solutions.",
    ],
  },
  {
    role: "Software Engineer Intern (REU)",
    org: "Limbitless Solutions @ UCF",
    place: "Orlando, FL",
    dates: "May 2025 — Jul 2025",
    notes: [
      "Helped build a prosthetic-training game in Unreal Engine and C++ for kids with limb differences.",
      "Grounded in research on best practices, using electromyography (EMG) controls to reduce rates of prosthetic abandonment.",
    ],
  },
  {
    role: "Data Structures & Algorithms TA",
    org: "Stony Brook University",
    place: "Stony Brook, NY",
    dates: "Jan 2024 — May 2026",
    notes: [
      "Guide students through data structures and algorithms each week, breaking down hard problems and showing how to approach them.",
      "Wrote 100+ LeetCode-style practice problems and ran recitations for 60+ students on core CS concepts.",
    ],
  },
  {
    role: "Calculus IV Teaching Assistant",
    org: "Stony Brook University",
    place: "Stony Brook, NY",
    dates: "Aug 2024 — Dec 2024",
    notes: [
      "Held weekly office hours helping students grasp systems of differential equations, conceptualizing problems and the patterns that emerge in applied differential equations.",
    ],
  },
];

export default function Home() {
  useReveal();

  const [activeCategory, setActiveCategory] =
    useState<keyof typeof skillsData>("programming");
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [showCourses, setShowCourses] = useState(false);
  const [activeCourseTab, setActiveCourseTab] = useState<"CS" | "AMS">("CS");
  const [activeSection, setActiveSection] = useState("about");

  // Track which section is in view for the nav.
  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const subject = encodeURIComponent("Portfolio Contact Form");
      const body = encodeURIComponent(
        `Email: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:toniliang10@gmail.com?subject=${subject}&body=${body}`;
      setSubmitStatus("success");
      setFormData({ email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSkillIcon = (name: string): React.ReactNode => {
    const deviconSlug: Record<string, string> = {
      Python: "python/python-original.svg",
      JavaScript: "javascript/javascript-original.svg",
      TypeScript: "typescript/typescript-original.svg",
      Java: "java/java-original.svg",
      C: "c/c-original.svg",
      "C++": "cplusplus/cplusplus-original.svg",
      Rust: "rust/rust-original.svg",
      SQL: "postgresql/postgresql-original.svg",
      Ruby: "ruby/ruby-original.svg",
      HTML: "html5/html5-original.svg",
      CSS: "css3/css3-original.svg",
      "React.js": "react/react-original.svg",
      "Next.js": "nextjs/nextjs-original.svg",
      "Node.js": "nodejs/nodejs-original.svg",
      "Spring Boot": "spring/spring-original.svg",
      Django: "django/django-plain.svg",
      Flask: "flask/flask-original.svg",
      Prisma: "prisma/prisma-original.svg",
      "Express.js": "express/express-original.svg",
      Angular: "angularjs/angularjs-original.svg",
      "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
      FastAPI: "fastapi/fastapi-original.svg",
      Pandas: "pandas/pandas-original.svg",
      NumPy: "numpy/numpy-original.svg",
      PyTorch: "pytorch/pytorch-original.svg",
      TensorFlow: "tensorflow/tensorflow-original.svg",
      "scikit-learn": "scikitlearn/scikitlearn-original.svg",
      SciPy: "scipy/scipy-original.svg",
      Matplotlib: "matplotlib/matplotlib-original.svg",
      MongoDB: "mongodb/mongodb-original.svg",
      PostgreSQL: "postgresql/postgresql-original.svg",
      AWS: "amazonwebservices/amazonwebservices-original-wordmark.svg",
      Docker: "docker/docker-original.svg",
      "Unreal Engine": "unrealengine/unrealengine-original.svg",
      GitHub: "github/github-original.svg",
      Cursor: "/local-cursor",
      Postman: "postman/postman-original.svg",
      Jest: "jest/jest-plain.svg",
    };

    const slug = deviconSlug[name];
    if (slug === "/local-cursor") {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src="/cursor.svg" alt="" className="w-5 h-5" aria-hidden />;
    }
    if (slug === "/local-zod") {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src="/zod.svg" alt="" className="w-5 h-5" aria-hidden />;
    }
    if (slug) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}`}
          alt=""
          aria-hidden
          className="w-5 h-5"
        />
      );
    }
    return (
      <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--ink-soft)]">
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  };

  const categoryMeta: Record<keyof typeof skillsData, string> = {
    programming: "Languages",
    frameworks: "Frameworks & Libraries",
    tools: "Tools & Platforms",
  };

  return (
    <div className="min-h-screen text-[var(--ink)]">
      {/* ============================= NAV ============================= */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-[var(--ink)]/10 bg-[var(--paper)]/85 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
          <a
            href="#about"
            className="font-[family-name:var(--font-mono)] text-sm tracking-tight"
          >
            <span className="text-[var(--pen)]">T</span>L
            <span className="text-[var(--ink-faint)]">/portfolio</span>
          </a>
          <ul className="hidden sm:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`font-[family-name:var(--font-mono)] text-xs tracking-wide transition-colors ${
                    activeSection === item.id
                      ? "text-[var(--pen)]"
                      : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Red margin rule (notebook paper) */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 bottom-0 left-6 md:left-[max(1.5rem,calc((100vw-64rem)/2))] w-px bg-[var(--pen)]/35 z-40"
      />

      <main className="mx-auto max-w-5xl px-6">
        {/* ============================ ABOUT ============================ */}
        <section
          id="about"
          className="min-h-screen flex items-center pt-24 pb-16"
        >
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center w-full">
            {/* Text */}
            <div>
              <p className="rise rise-1 font-[family-name:var(--font-mono)] text-sm text-[var(--ink-soft)] tracking-wide mb-5">
                {/* honest coordinates: where this person sits */}
                Hi, my name is
              </p>

              <h1 className="font-[family-name:var(--font-display)] font-bold leading-[0.92] tracking-tight text-[clamp(3rem,9vw,6.2rem)]">
                <span className="rise rise-1 block">Toni</span>
                <span className="rise rise-2 block">Liang</span>
              </h1>

              <p className="rise rise-3 mt-7 text-lg md:text-xl leading-relaxed text-[var(--ink-soft)] max-w-xl">
                Stony Brook graduate, soon starting an M.S. in Computer Science
                at Georgia Tech, working at the intersection of{" "}
                <span className="text-[var(--ink)] font-medium whitespace-nowrap">
                  Computer Science
                </span>{" "}
                <span className="text-[var(--ink)] font-medium whitespace-nowrap">
                  ∩ Applied Mathematics
                </span>
                . I build with care and purpose — and spend a lot of time
                teaching others to do the same.
              </p>

              <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#education"
                  className="group inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] px-6 py-3 text-sm font-medium tracking-wide hover:bg-[var(--pen)] transition-colors"
                >
                  View the work
                  <span className="transition-transform group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
                <span className="relative inline-block">
                  <a
                    href="https://drive.google.com/file/d/1ZTjswVwLrW0z8YmqFK2xj1S09CZREVZv/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="font-[family-name:var(--font-mono)] text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] px-1"
                  >
                    Résumé ↗
                  </a>
                  {/* the one pen annotation — circling the résumé */}
                  <svg
                    className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+1rem)] overflow-visible pointer-events-none"
                    viewBox="0 0 160 56"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      className="pen-stroke"
                      style={{ ["--len" as string]: 420 }}
                      strokeWidth={2.4}
                      d="M22 30 C 6 18, 30 6, 80 6 C 142 6, 156 20, 152 32 C 148 46, 110 52, 60 52 C 16 52, 6 42, 22 26 C 26 22, 32 20, 40 19"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Photo plate — Fig. 1 */}
            <div className="rise rise-3 justify-self-center md:justify-self-end">
              <figure className="relative">
                <div className="relative w-64 md:w-80 aspect-[1637/1712] border border-[var(--ink)] bg-[var(--paper-edge)] overflow-hidden">
                  <Image
                    src="/portfolio-pfp.png"
                    alt="Toni Liang"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <figcaption className="mt-3 font-[family-name:var(--font-mono)] text-xs text-[var(--ink-soft)] flex justify-between">
                  <span>Fig. 1</span>
                  <span>New York, NY</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ========================== EDUCATION ========================== */}
        <section id="education" className="py-24 reveal">
          <SectionLabel index="01 / EDU" title="Education" />

          <div className="space-y-5">
          {/* Georgia Tech — incoming master's */}
          <div className="border border-[var(--ink)]/15 bg-[var(--paper-edge)]/60">
            <div className="grid md:grid-cols-[auto_1fr]">
              {/* Crest */}
              <div className="flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-[var(--ink)]/15">
                <Image
                  src="/georgia-tech-logo.svg"
                  alt="Georgia Institute of Technology"
                  width={140}
                  height={140}
                  unoptimized
                  className="object-contain w-28 h-28 md:w-36 md:h-36"
                />
              </div>

              {/* Record */}
              <div className="p-8">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                    Georgia Institute of Technology
                  </h3>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--pen)] tracking-wide">
                    incoming
                  </span>
                </div>
                <p className="mt-1 text-[var(--ink-soft)]">
                  M.S. Computer Science · Specialization: AI &amp; Machine
                  Learning
                </p>

                <dl className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-6 font-[family-name:var(--font-mono)] text-sm">
                  <div>
                    <dt className="text-[var(--ink-faint)] text-xs tracking-wide">
                      Term
                    </dt>
                    <dd className="mt-1 text-base">Aug 2026 — May 2028</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--ink-faint)] text-xs tracking-wide">
                      Location
                    </dt>
                    <dd className="mt-1 text-base">Atlanta, GA</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Stony Brook — B.S., completed */}
          <div className="border border-[var(--ink)]/15 bg-[var(--paper-edge)]/60">
            <div className="grid md:grid-cols-[auto_1fr]">
              {/* Crest */}
              <div className="flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-[var(--ink)]/15">
                <Image
                  src="/sbu-logo.png"
                  alt="Stony Brook University"
                  width={140}
                  height={140}
                  className="object-contain w-28 h-28 md:w-36 md:h-36"
                />
              </div>

              {/* Record */}
              <div className="p-8">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                  Stony Brook University
                </h3>
                <p className="mt-1 text-[var(--ink-soft)]">
                  B.S. Computer Science · Applied Mathematics &amp; Statistics
                </p>

                {/* Transcript-style data row */}
                <dl className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-6 font-[family-name:var(--font-mono)] text-sm">
                  <div>
                    <dt className="text-[var(--ink-faint)] text-xs tracking-wide">
                      GPA
                    </dt>
                    <dd className="mt-1 text-base">3.66 / 4.00</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--ink-faint)] text-xs tracking-wide">
                      Graduated
                    </dt>
                    <dd className="mt-1 text-base">May 2026</dd>
                  </div>
                  <div className="relative">
                    <dt className="text-[var(--ink-faint)] text-xs tracking-wide">
                      Honors
                    </dt>
                    <dd className="mt-1 text-base inline-flex items-center gap-2">
                      Dean&apos;s List
                      {/* margin checkmark — the TA's tick */}
                      <span
                        aria-hidden
                        className="text-[var(--pen)] text-lg leading-none"
                      >
                        ✓
                      </span>
                    </dd>
                  </div>
                </dl>

                <button
                  onClick={() => setShowCourses((p) => !p)}
                  className="mt-7 font-[family-name:var(--font-mono)] text-sm border border-[var(--ink)] px-4 py-2 hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
                  aria-expanded={showCourses}
                >
                  {showCourses ? "− Hide coursework" : "+ Relevant coursework"}
                </button>
              </div>
            </div>

            {/* Coursework drawer */}
            {showCourses && (
              <div className="border-t border-[var(--ink)]/15">
                <div className="flex font-[family-name:var(--font-mono)] text-sm border-b border-[var(--ink)]/15">
                  {(["CS", "AMS"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveCourseTab(tab)}
                      className={`px-5 py-3 transition-colors ${
                        activeCourseTab === tab
                          ? "text-[var(--pen)] border-b-2 border-[var(--pen)] -mb-px"
                          : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                      }`}
                    >
                      {tab === "CS" ? "Computer Science" : "Applied Math"}
                    </button>
                  ))}
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-10 px-8 py-6 font-[family-name:var(--font-mono)] text-sm">
                  {(activeCourseTab === "CS"
                    ? coursesData.cs
                    : coursesData.ams
                  ).map((course: { code: string; title: string }) => (
                    <li
                      key={course.code}
                      className="flex items-baseline gap-3 py-1.5 border-b border-dashed border-[var(--ink)]/10"
                    >
                      <span className="text-[var(--pen)] shrink-0 w-20">
                        {course.code}
                      </span>
                      <span className="text-[var(--ink-soft)]">
                        {course.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          </div>
        </section>

        {/* ============================ SKILLS ============================ */}
        <section id="skills" className="py-24 reveal">
          <SectionLabel index="02 / SKL" title="Skills" />

          {/* Category switch — tab row, not pills */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 border-b border-[var(--ink)]/15 pb-3 mb-8 font-[family-name:var(--font-mono)] text-sm">
            {(Object.keys(skillsData) as Array<keyof typeof skillsData>).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`transition-colors ${
                    activeCategory === cat
                      ? "text-[var(--pen)]"
                      : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  }`}
                >
                  {categoryMeta[cat]}
                  <span className="ml-2 text-[var(--ink-faint)]">
                    {String(skillsData[cat].length).padStart(2, "0")}
                  </span>
                </button>
              )
            )}
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {skillsData[activeCategory].map((skill, i) => (
              <li
                key={skill.name}
                className="group flex items-center gap-3 border border-[var(--ink)]/15 bg-[var(--paper)] px-4 py-3 hover:border-[var(--pen)] transition-colors"
                style={{ animation: "rise-in 0.5s ease-out backwards", animationDelay: `${i * 35}ms` }}
              >
                <span className="flex items-center justify-center w-6 h-6 shrink-0">
                  {renderSkillIcon(skill.name)}
                </span>
                <span className="text-sm font-medium truncate">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ========================== EXPERIENCE ========================== */}
        <section id="experience" className="py-24 reveal">
          <SectionLabel index="03 / EXP" title="Experience" />

          <ol className="space-y-5">
            {experience.map((job, i) => (
              <li
                key={i}
                className="border border-[var(--ink)]/15 border-l-2 border-l-[var(--pen)] bg-[var(--paper-edge)]/60 p-6 md:p-8 transition-colors hover:border-[var(--ink)]/30"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--ink-faint)] tracking-wide">
                    {job.dates} · {job.place}
                  </p>
                </div>
                <p className="text-[var(--pen)] font-[family-name:var(--font-mono)] text-sm mt-1">
                  {job.org}
                </p>
                <div className="mt-4 space-y-3 max-w-2xl">
                  {job.notes.map((note, j) => (
                    <p
                      key={j}
                      className="text-[var(--ink-soft)] leading-relaxed"
                    >
                      {note}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ============================ CONTACT ============================ */}
        <section id="contact" className="py-24 reveal">
          <SectionLabel index="04 / MSG" title="Get in touch" />

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Details — definition list */}
            <div>
              <p className="text-lg text-[var(--ink-soft)] leading-relaxed max-w-md">
                Open to new-grad and internship roles in backend, ML, and
                anywhere math meets software. The fastest way to reach me is the
                form — or directly below.
              </p>

              <dl className="mt-10 font-[family-name:var(--font-mono)] text-sm space-y-5">
                {[
                  { k: "Email", v: "toniliang10@gmail.com" },
                  { k: "Location", v: "New York, NY" },
                  { k: "Reply", v: "Within 24 hours" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-baseline gap-4 border-b border-dashed border-[var(--ink)]/15 pb-3"
                  >
                    <dt className="text-[var(--ink-faint)] w-20 shrink-0">
                      {row.k}
                    </dt>
                    <dd>{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Form — carded */}
            <form
              onSubmit={handleSubmit}
              className="space-y-7 border border-[var(--ink)]/15 bg-[var(--paper-edge)]/60 p-6 md:p-8"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block font-[family-name:var(--font-mono)] text-xs text-[var(--ink-soft)] tracking-wide mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-[var(--paper)] border border-[var(--ink)]/30 px-3 py-2 text-[var(--ink)] placeholder-[var(--ink-faint)] focus:outline-none focus:border-[var(--pen)] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-[family-name:var(--font-mono)] text-xs text-[var(--ink-soft)] tracking-wide mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="What would you like to talk about?"
                  className="w-full bg-[var(--paper)] border border-[var(--ink)]/30 px-3 py-2 text-[var(--ink)] placeholder-[var(--ink-faint)] focus:outline-none focus:border-[var(--pen)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] px-6 py-3 text-sm font-medium tracking-wide hover:bg-[var(--pen)] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Opening mail…" : "Send message"}
                <span aria-hidden>→</span>
              </button>

              {submitStatus === "success" && (
                <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--ink-soft)]">
                  Your mail client should be open. Looking forward to it.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--pen)]">
                  Something went wrong — email me directly at
                  toniliang10@gmail.com.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* ============================= FOOTER ============================= */}
      <footer className="border-t border-[var(--ink)]/15 mt-12">
        <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="font-[family-name:var(--font-mono)] text-xs text-[var(--ink-soft)]">
            <p>
              <span className="text-[var(--pen)]">T</span>L · Toni Liang
            </p>
            <p className="mt-1 text-[var(--ink-faint)]">
              © 2026 · Built with Next.js
            </p>
          </div>

          <div className="flex items-center gap-5">
            {[
              {
                href: "https://www.linkedin.com/in/toniliang10/",
                label: "LinkedIn",
              },
              { href: "https://github.com/toniliang-10", label: "GitHub" },
              {
                href: "https://drive.google.com/file/d/1ZTjswVwLrW0z8YmqFK2xj1S09CZREVZv/view?usp=sharing",
                label: "Résumé",
              },
              {
                href: "https://www.instagram.com/toni.liang_/",
                label: "Instagram",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-[family-name:var(--font-mono)] text-sm text-[var(--ink-soft)] hover:text-[var(--pen)] transition-colors"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
