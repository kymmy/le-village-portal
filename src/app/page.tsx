"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

interface ProjectCard {
  title: string;
  subtitleFr: string;
  subtitleEn: string;
  subtitleColor: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  badge: string;
  badgeBg: string;
  cardBg: string;
  ctaColor: string;
  ctaFr: string;
  ctaEn: string;
  href: string;
  external: boolean;
  imageStyle: "cover" | "centered";
}

const projects: ProjectCard[] = [
  {
    title: "Le Village \u2013 Entourage",
    subtitleFr: "Ton entourage local",
    subtitleEn: "Your local circle",
    subtitleColor: "text-coral",
    descriptionFr:
      "Organiser facilement des sorties entre voisins et amis du quartier \u2014 parc, pique-nique, caf\u00e9, activit\u00e9s enfants. Fini les 42 messages WhatsApp.",
    descriptionEn:
      "Easily organize outings with neighbours and local friends \u2014 park, picnic, caf\u00e9, kids activities. No more 42 WhatsApp messages.",
    image: "/tribu-screenshot.png",
    badge: "Entourage",
    badgeBg: "bg-coral text-white",
    cardBg: "bg-entourage-coral-light",
    ctaColor: "text-coral",
    ctaFr: "D\u00e9couvrir l\u2019application",
    ctaEn: "Discover the app",
    href: "https://tribu.le-village-marseille.fr/",
    external: true,
    imageStyle: "cover",
  },
  {
    title: "Le Village \u2013 Little Movers",
    subtitleFr: "English Movement & Confidence Club",
    subtitleEn: "English Movement & Confidence Club",
    subtitleColor: "text-primary",
    descriptionFr:
      "Apprendre l\u2019anglais \u00e0 travers le mouvement, le jeu et la confiance en soi. Pour les enfants de 4 mois \u00e0 6 ans.",
    descriptionEn:
      "Learn English through movement, play and self-confidence. For children aged 4 months to 6 years.",
    image: "/little-movers-hero.jpg",
    badge: "Little Movers",
    badgeBg: "bg-primary text-primary-foreground",
    cardBg: "bg-teal-light",
    ctaColor: "text-primary",
    ctaFr: "Consulter le dossier",
    ctaEn: "View the dossier",
    href: "https://little-movers.le-village-marseille.fr",
    external: true,
    imageStyle: "cover",
  },
  {
    title: "Le Village \u2013 Amour Toujours",
    subtitleFr: "Initiative Solidaire Locale",
    subtitleEn: "Local Solidarity Initiative",
    subtitleColor: "text-amour-red",
    descriptionFr:
      "Encourager l\u2019entraide entre habitants \u2014 aide entre voisins, actions solidaires, soutien aux familles dans le besoin.",
    descriptionEn:
      "Encourage mutual aid between residents \u2014 neighbour help, solidarity actions, support for families in need.",
    image: "/ToujoursAmour.png",
    badge: "Amour Toujours",
    badgeBg: "bg-amour-red text-white",
    cardBg: "bg-amour-red-light",
    ctaColor: "text-amour-red",
    ctaFr: "Consulter le dossier",
    ctaEn: "View the dossier",
    href: "https://amour-toujours.le-village-marseille.fr",
    external: true,
    imageStyle: "centered",
  },
  {
    title: "Le Village \u2013 AI Hub",
    subtitleFr: "Apprendre l\u2019IA ensemble",
    subtitleEn: "Learning AI together",
    subtitleColor: "text-ai-hub-blue",
    descriptionFr:
      "Un espace tech pour d\u00e9couvrir, comprendre et utiliser l\u2019intelligence artificielle. Ressources et sessions cr\u00e9\u00e9es par notre communaut\u00e9.",
    descriptionEn:
      "A tech space to discover, understand and use artificial intelligence. Resources and sessions created by our community.",
    image: "/ai-hub-hero.svg",
    badge: "AI Hub",
    badgeBg: "bg-ai-hub-blue text-white",
    cardBg: "bg-ai-hub-blue-light",
    ctaColor: "text-ai-hub-blue",
    ctaFr: "Explorer l\u2019AI Hub",
    ctaEn: "Explore the AI Hub",
    href: "https://ai-hub-cyan.vercel.app",
    external: true,
    imageStyle: "centered",
  },
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Language Toggle */}
      <div className="fixed top-3 right-3 z-50 bg-card/80 backdrop-blur-sm rounded-full p-1 shadow-sm">
        <LanguageToggle />
      </div>

      {/* Header */}
      <header className="py-10 px-5 md:py-12 md:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Le Village
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-village-green italic text-xl mt-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Marseille
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg font-body"
        >
          {t(
            "Une initiative communautaire simple, inclusive et interg\u00e9n\u00e9rationnelle pour cr\u00e9er du lien entre voisins, parents et enfants \u00e0 travers des activit\u00e9s locales.",
            "A simple, inclusive and intergenerational community initiative to build connections between neighbours, parents and children through local activities."
          )}
        </motion.p>

        {/* Pillar Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >
          {[
            { emoji: "\ud83e\udd1d", label: t("Initiatives locales", "Local initiatives") },
            { emoji: "\ud83d\udc9b", label: t("B\u00e9n\u00e9voles du quartier", "Neighbourhood volunteers") },
            { emoji: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66", label: t("Communaut\u00e9 ouverte", "Open community") },
          ].map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-village-green-light text-village-green text-sm font-semibold font-body"
            >
              <span>{p.emoji}</span> {p.label}
            </span>
          ))}
        </motion.div>
      </header>

      {/* Project Cards */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-16 md:pb-20 grid md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.href}
            target={project.external ? "_blank" : undefined}
            rel={project.external ? "noopener noreferrer" : undefined}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`group block h-full rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-500 ${project.cardBg}`}
          >
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden">
              {project.imageStyle === "centered" ? (
                <div className="bg-amour-cream flex items-center justify-center w-full h-full">
                  <div className="relative w-48 md:w-56 h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                      sizes="224px"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 w-fit font-body ${project.badgeBg}`}
              >
                {project.badge}
              </span>
              <h2
                className="text-2xl font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </h2>
              <p
                className={`text-lg italic mb-3 ${project.subtitleColor}`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t(project.subtitleFr, project.subtitleEn)}
              </p>
              <p className="text-muted-foreground font-body leading-relaxed text-sm flex-1">
                {t(project.descriptionFr, project.descriptionEn)}
              </p>
              <div
                className={`mt-6 flex items-center gap-2 font-semibold font-body group-hover:gap-3 transition-all ${project.ctaColor}`}
              >
                {t(project.ctaFr, project.ctaEn)}
                <span className="text-xl">&rarr;</span>
              </div>
            </div>
          </motion.a>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 md:py-10 border-t border-border px-4">
        <p
          className="text-foreground font-bold text-lg mb-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Le Village
        </p>
        <p className="text-muted-foreground text-sm font-body mb-3">
          {t(
            "Dynamiser la vie locale et cr\u00e9er une communaut\u00e9 bienveillante \u2014 Marseille 11e & 12e",
            "Energize local life and build a caring community \u2014 Marseille 11th & 12th"
          )}
        </p>
        <Link
          href="/about"
          className="text-sm text-primary hover:underline font-body"
        >
          {t("En savoir plus sur Le Village", "Learn more about Le Village")} &rarr;
        </Link>
      </footer>
    </div>
  );
}
