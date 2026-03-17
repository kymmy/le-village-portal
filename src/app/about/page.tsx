"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

const projects = [
  {
    nameFr: "Entourage",
    nameEn: "Entourage",
    subtitleFr: "Ton entourage local",
    subtitleEn: "Your local circle",
    descFr:
      "Une application gratuite pour organiser des sorties entre voisins et amis du quartier. Parc, pique-nique, activites enfants... fini les groupes WhatsApp interminables. On propose, on rassemble, on profite.",
    descEn:
      "A free app to organize outings with neighbours and local friends. Park, picnic, kids activities... no more endless WhatsApp groups. Propose, gather, enjoy.",
    color: "bg-coral/10 border-coral/30",
    dot: "bg-coral",
    href: "https://coco-app-three.vercel.app",
  },
  {
    nameFr: "Little Movers",
    nameEn: "Little Movers",
    subtitleFr: "English Movement & Confidence Club",
    subtitleEn: "English Movement & Confidence Club",
    descFr:
      "Des cours de mouvement en anglais pour les tout-petits (4 mois a 6 ans) le dimanche matin. Yoga parent-enfant, danse en portage, parcours moteur. Petits groupes, approche premium, lien familial.",
    descEn:
      "English movement classes for little ones (4 months to 6 years) on Sunday mornings. Parent-child yoga, babywearing dance, motor skills courses. Small groups, premium approach, family bonding.",
    color: "bg-primary/10 border-primary/30",
    dot: "bg-primary",
    href: "https://little-movers.vercel.app",
  },
  {
    nameFr: "Amour Toujours",
    nameEn: "Amour Toujours",
    subtitleFr: "Initiative Solidaire Locale",
    subtitleEn: "Local Solidarity Initiative",
    descFr:
      "Un projet solidaire pour encourager l'entraide entre habitants. Diners solidaires, collectes roses chez les commercants partenaires, cafe des entrepreneurs, degustations caritatives. Tous les benefices soutiennent les familles dans le besoin.",
    descEn:
      "A solidarity project to encourage mutual aid between residents. Solidarity dinners, pink collection bins at partner shops, entrepreneur meetups, charity tastings. All proceeds support families in need.",
    color: "bg-amour-red/10 border-amour-red/30",
    dot: "bg-amour-red",
    href: "https://amour-toujours.vercel.app",
  },
];

const values = [
  {
    titleFr: "Simple",
    titleEn: "Simple",
    descFr: "Pas de paperasse, pas de structure lourde. Juste des voisins qui s'organisent.",
    descEn: "No paperwork, no heavy structure. Just neighbours organizing together.",
  },
  {
    titleFr: "Inclusive",
    titleEn: "Inclusive",
    descFr: "Ouvert a tous, sans distinction. Familles, enfants, aines, nouveaux arrivants.",
    descEn: "Open to everyone, without distinction. Families, children, seniors, newcomers.",
  },
  {
    titleFr: "Locale",
    titleEn: "Local",
    descFr: "Ancre dans les quartiers de Marseille 11e et 12e. On connait nos voisins, on fait vivre notre quartier.",
    descEn: "Rooted in the neighbourhoods of Marseille 11th and 12th. We know our neighbours, we bring life to our area.",
  },
  {
    titleFr: "Intergenerationnelle",
    titleEn: "Intergenerational",
    descFr: "Des activites qui reunissent toutes les generations. Enfants, parents, grands-parents.",
    descEn: "Activities that bring all generations together. Children, parents, grandparents.",
  },
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            <ArrowLeft size={18} />
            {t("Retour", "Back")}
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <span className="text-xs text-muted-foreground tracking-widest uppercase font-body">
              Le Village
            </span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-16 pb-12 px-6 text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("Qu'est-ce que Le Village ?", "What is Le Village?")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed font-body"
        >
          {t(
            "Le Village est une initiative communautaire a Marseille 11e et 12e. L'idee est simple : creer du lien entre voisins, parents et enfants a travers des activites locales. Pas une association formelle, pas une entreprise. Juste des gens du quartier qui s'organisent pour que la vie locale soit plus riche, plus solidaire, plus joyeuse.",
            "Le Village is a community initiative in Marseille's 11th and 12th districts. The idea is simple: build connections between neighbours, parents and children through local activities. Not a formal association, not a company. Just local people organizing to make neighbourhood life richer, more supportive, more joyful."
          )}
        </motion.p>
      </header>

      {/* Values */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("Nos valeurs", "Our values")}
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.titleFr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-5 border border-border"
            >
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t(v.titleFr, v.titleEn)}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {t(v.descFr, v.descEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("Les projets", "The projects")}
        </motion.h2>
        <p className="text-muted-foreground font-body mb-8">
          {t(
            "Le Village regroupe plusieurs projets independants, chacun porte par des benevoles du quartier.",
            "Le Village brings together several independent projects, each led by neighbourhood volunteers."
          )}
        </p>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.nameFr}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`block rounded-2xl border p-6 transition-shadow hover:shadow-lg ${p.color}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-3 h-3 rounded-full ${p.dot}`} />
                <h3
                  className="text-xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(p.nameFr, p.nameEn)}
                </h3>
              </div>
              <p
                className="text-sm italic text-muted-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t(p.subtitleFr, p.subtitleEn)}
              </p>
              <p className="text-sm text-foreground/80 font-body leading-relaxed">
                {t(p.descFr, p.descEn)}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("Comment participer ?", "How to get involved?")}
        </motion.h2>
        <div className="space-y-4 font-body">
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              1
            </span>
            <p className="text-foreground pt-1">
              {t(
                "Visitez l'un des projets qui vous interesse. Tout est gratuit et ouvert.",
                "Visit one of the projects that interests you. Everything is free and open."
              )}
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              2
            </span>
            <p className="text-foreground pt-1">
              {t(
                "Inscrivez-vous a une sortie, participez a un evenement, ou proposez une idee.",
                "Sign up for an outing, attend an event, or suggest an idea."
              )}
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              3
            </span>
            <p className="text-foreground pt-1">
              {t(
                "Parlez-en a vos voisins. Le Village grandit par le bouche-a-oreille.",
                "Tell your neighbours. Le Village grows through word of mouth."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 px-6 border-t border-border">
        <p
          className="text-foreground font-bold text-lg mb-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Le Village
        </p>
        <p className="text-sm text-muted-foreground font-body">
          Marseille 11e & 12e
        </p>
      </footer>
    </div>
  );
}
