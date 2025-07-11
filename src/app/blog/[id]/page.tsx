"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Article data (should match src/app/blog/page.tsx)
const articles = [
  {
    id: 1,
    title: "Les Avantages de la Gestion Professionnelle pour Votre Propriété de Location",
    thumbnail: "/images/blog/gestion-professionnelle-handshake.jpg",
    description: "Découvrez les nombreux avantages de confier la gestion de votre propriété de location à des professionnels pour maximiser vos revenus et réduire le stress.",
    date: "16 Juillet 2024",
    category: "Gestion Locative",
    readTime: "8 min",
    type: "article",
    content: `Investir dans une propriété de location peut être une entreprise lucrative, mais la gestion quotidienne peut s'avérer exigeante. Faire appel à une gestion professionnelle pour votre propriété de location présente de nombreux avantages, allant de la maximisation des revenus à la réduction du stress. Voici un aperçu détaillé des bénéfices de confier la gestion de votre propriété à des professionnels.\n\n1. Maximisation des Revenus\na. Tarification Optimisée\nLes gestionnaires professionnels utilisent des outils et des analyses de marché pour déterminer le prix optimal pour votre location. Ils ajustent les tarifs en fonction de la saison, de la demande locale et des événements spéciaux, ce qui permet de maximiser vos revenus.\n\nb. Taux d'Occupation Accru\nGrâce à une stratégie de marketing efficace et une gestion rigoureuse des réservations, les gestionnaires professionnels peuvent maintenir un taux d'occupation élevé tout au long de l'année. Ils savent comment attirer et fidéliser les locataires, ce qui se traduit par moins de périodes de vacance.\n\n2. Marketing et Publicité Efficaces\na. Présence en Ligne Améliorée\nLes sociétés de gestion immobilière possèdent l'expertise pour optimiser la visibilité de votre propriété sur diverses plateformes de location comme Airbnb, Booking.com et Vrbo. Elles créent des annonces attrayantes avec des photos professionnelles et des descriptions convaincantes.\n\nb. Utilisation des Réseaux Sociaux\nLes gestionnaires professionnels utilisent également les réseaux sociaux pour promouvoir votre propriété, atteignant ainsi un public plus large et augmentant les chances de réservation.\n\n3. Gestion Administrative Simplifiée\na. Gestion des Réservations et Paiements\nLa gestion des réservations, des contrats de location et des paiements peut être complexe et chronophage. Les gestionnaires professionnels prennent en charge ces tâches, assurant une expérience fluide pour vous et vos locataires.\n\nb. Conformité Légale\nLes gestionnaires professionnels veillent à ce que votre propriété soit conforme aux réglementations locales et nationales. Ils gèrent les licences, les taxes et les assurances nécessaires pour éviter tout problème juridique.\n\n4. Maintenance et Entretien\na. Entretien Régulier\nLes sociétés de gestion immobilière effectuent des inspections régulières pour s'assurer que votre propriété est bien entretenue. Elles s'occupent des réparations nécessaires et de l'entretien préventif, ce qui prolonge la durée de vie de votre investissement.\n\nb. Réparations Rapides\nEn cas de problème, les gestionnaires professionnels ont des contacts avec des prestataires de services fiables et peuvent organiser des réparations rapidement, minimisant ainsi les désagréments pour vos locataires.\n\n5. Service Client et Satisfaction des Locataires\na. Communication Efficace\nLes gestionnaires professionnels assurent une communication rapide et efficace avec les locataires. Ils répondent aux questions, résolvent les problèmes et fournissent des informations utiles, garantissant une expérience positive pour les locataires.\n\nb. Amélioration de l'Expérience Locataire\nUn bon service client améliore la satisfaction des locataires, ce qui se traduit par des avis positifs et des recommandations. Les gestionnaires professionnels savent comment créer une expérience mémorable pour vos locataires, augmentant ainsi les chances de réservations répétées.\n\n6. Réduction du Stress et Gain de Temps\na. Moins de Gestion Quotidienne\nGérer une propriété de location peut être stressant, surtout si vous avez d'autres engagements. Confier cette tâche à des professionnels vous libère du temps et réduit le stress associé à la gestion quotidienne.\n\nb. Expertise et Tranquillité d'Esprit\nLes gestionnaires professionnels possèdent l'expertise et l'expérience nécessaires pour gérer efficacement votre propriété. Vous pouvez avoir l'esprit tranquille en sachant que votre investissement est entre de bonnes mains.\n\nConclusion\nFaire appel à une gestion professionnelle pour votre propriété de location offre de nombreux avantages, notamment la maximisation des revenus, une meilleure visibilité en ligne, une gestion administrative simplifiée, un entretien régulier, un service client exceptionnel et une réduction du stress. En confiant la gestion de votre propriété à des experts, vous pouvez profiter pleinement des revenus de votre investissement sans les tracas quotidiens.`
  },
  {
    id: 2,
    title: "Comment Préparer Votre Propriété pour la Location Saisonnière",
    thumbnail: "/images/blog/preparer-propriete.jpg",
    description: "Un guide complet pour préparer votre propriété pour la location saisonnière, du nettoyage à l'aménagement et aux équipements.",
    date: "16 Juillet 2024",
    category: "Conseils",
    readTime: "7 min",
    type: "article",
    content: `Se lancer dans la location saisonnière peut être une excellente source de revenus, mais pour réussir, il est crucial de préparer votre propriété de manière optimale. Que vous louiez un appartement, une maison de vacances ou un chalet, une préparation minutieuse vous aidera à attirer des locataires et à garantir des avis positifs. Voici un guide complet pour préparer votre propriété pour la location saisonnière.\n\n1. Nettoyage en Profondeur et Entretien\na. Nettoyage Professionnel\nEngagez des professionnels pour un nettoyage en profondeur avant d'accueillir vos premiers invités. Cela inclut le dépoussiérage, le lavage des vitres, le nettoyage des tapis et des meubles, ainsi que la désinfection des salles de bains et de la cuisine.\n\nb. Entretien Régulier\nEffectuez des vérifications régulières de l'état de votre propriété. Assurez-vous que les appareils électroménagers fonctionnent correctement, que les robinets ne fuient pas et que les systèmes de chauffage et de climatisation sont en bon état.\n\n2. Aménagement et Décoration\na. Mobilier Confortable et Fonctionnel\nInvestissez dans des meubles confortables et fonctionnels. Les locataires apprécient les espaces bien aménagés où ils peuvent se détendre. Assurez-vous que les lits sont confortables et que le salon est accueillant.\n\nb. Décoration Attrayante\nOptez pour une décoration neutre mais attrayante. Utilisez des couleurs apaisantes et des œuvres d'art simples pour créer une ambiance agréable. Des touches locales, comme des photos ou des objets artisanaux, peuvent ajouter du charme à votre propriété.\n\nc. Literie et Linge de Maison de Qualité\nFournissez des draps, des serviettes et des couvertures de haute qualité. Avoir plusieurs jeux de literie et de serviettes permet de les remplacer facilement entre les séjours.\n\n3. Équipements et Commodités\na. Cuisine Équipée\nUne cuisine bien équipée est un atout majeur pour les locations saisonnières. Assurez-vous d'avoir tous les ustensiles de base, des casseroles, des poêles, une bouilloire, un grille-pain, et des appareils comme un micro-ondes et une cafetière.\n\nb. Divertissements\nProposez une connexion Wi-Fi rapide et fiable. Pensez à fournir une télévision avec des chaînes câblées ou des services de streaming, des jeux de société, des livres et des guides touristiques de la région.\n\nc. Produits de Première Nécessité\nFournissez des articles de toilette de base comme du savon, du shampoing et du papier toilette. Une petite attention comme une corbeille de bienvenue avec des snacks locaux ou du vin peut aussi faire une grande différence.\n\n4. Sécurité et Confort\na. Sécurité\nInstallez des détecteurs de fumée et de monoxyde de carbone, et assurez-vous qu'ils sont en état de fonctionnement. Fournissez des extincteurs et un kit de premiers secours. Vérifiez que toutes les portes et fenêtres se ferment correctement et que les systèmes de verrouillage sont sécurisés.\n\nb. Instructions et Guide de Bienvenue\nPréparez un guide de bienvenue contenant des informations sur la propriété, le Wi-Fi, les numéros d'urgence, et les instructions pour utiliser les appareils électroménagers. Incluez des recommandations de restaurants, d'attractions locales et de moyens de transport.\n\n5. Gestion des Réservations et Communication\na. Plateformes de Réservation\nListez votre propriété sur plusieurs plateformes de location saisonnière comme Airbnb, Booking.com, et Vrbo pour maximiser votre visibilité. Assurez-vous que les descriptions sont complètes et que les photos sont de haute qualité.\n\nb. Communication avec les Locataires\nRépondez rapidement aux demandes des locataires. Fournir des réponses claires et rapides peut améliorer vos chances de recevoir des réservations et de satisfaire vos clients.\n\nc. Politiques de Maison Claires\nÉtablissez des règles de maison claires et concises. Cela peut inclure des politiques sur le tabagisme, les animaux de compagnie, les fêtes et les heures de silence. Communiquez ces règles avant l'arrivée des locataires pour éviter toute confusion.\n\nConclusion\nPréparer votre propriété pour la location saisonnière demande du temps et des efforts, mais ces préparations sont essentielles pour attirer des locataires et recevoir des avis positifs. En suivant ces conseils, vous pouvez transformer votre propriété en une destination attrayante et rentable pour les vacanciers. Une attention méticuleuse aux détails et une gestion proactive de votre location saisonnière vous assureront le succès à long terme.`
  },
  {
    id: 3,
    title: "Optimiser la Rentabilité de Votre Location Saisonnière",
    thumbnail: "/images/blog/optimiser-rentabilite.jpg",
    description: "Découvrez des stratégies clés pour maximiser la rentabilité de votre location saisonnière, de l'optimisation de votre annonce au marketing efficace.",
    date: "16 Juillet 2024",
    category: "Investissement",
    readTime: "6 min",
    type: "article",
    content: `La location saisonnière est devenue une source de revenus attrayante pour de nombreux propriétaires. Cependant, maximiser la rentabilité de votre location saisonnière nécessite une stratégie bien pensée, allant de la création d'une annonce attrayante à l'optimisation du SEO et à la gestion efficace des réservations. Dans cet article, nous vous guiderons à travers les étapes essentielles pour optimiser la rentabilité de votre location saisonnière sur des plateformes comme Airbnb.\n\n1. Créer une Annonce Attrayante\na. Rédiger une Description Captivante\nLa description de votre location doit être claire, concise et attrayante. Utilisez des mots-clés pertinents pour améliorer le référencement (SEO) de votre annonce sur Airbnb. Par exemple, si votre location est proche de la plage, assurez-vous de mentionner cela dans le titre et la description.\n\nb. Prendre des Photos de Haute Qualité\nLes photos sont l'un des éléments les plus importants de votre annonce. Engagez un photographe professionnel si possible, ou suivez des guides en ligne pour prendre des photos claires, bien éclairées et attractives. Les photos doivent montrer chaque pièce, ainsi que des détails spéciaux qui rendent votre propriété unique.\n\nc. Mettre en Avant les Commodités\nListez toutes les commodités disponibles dans votre location. Les voyageurs recherchent souvent des éléments spécifiques tels que le Wi-Fi, un parking gratuit, une cuisine équipée, ou une vue sur la mer. Plus vous serez précis, plus votre annonce sera attractive.\n\n2. Optimiser le SEO de Votre Annonce\na. Utiliser des Mots-clés Pertinents\nIntégrez des mots-clés pertinents dans le titre, la description et les légendes des photos de votre annonce. Par exemple, si votre location est une villa à Nice, utilisez des mots-clés comme "villa à Nice", "location saisonnière à Nice", et "vacances à Nice".\n\nb. Mettre à Jour Régulièrement Votre Annonce\nAirbnb favorise les annonces mises à jour régulièrement. Modifiez votre annonce périodiquement, ajoutez de nouvelles photos ou actualisez les descriptions pour rester en tête des résultats de recherche.\n\nc. Encourager les Avis Positifs\nLes avis jouent un rôle crucial dans le classement de votre annonce. Encouragez vos invités satisfaits à laisser des avis positifs. Plus vous aurez d'avis 5 étoiles, mieux votre annonce sera classée.\n\n3. Gérer Efficacement les Réservations\na. Utiliser un Système de Gestion des Réservations\nUn bon système de gestion des réservations vous aide à suivre les disponibilités, les réservations et les paiements. Cela évite les doubles réservations et vous permet de gérer plusieurs plateformes de manière efficace.\n\nb. Offrir un Service Client Exceptionnel\nRépondez rapidement aux demandes des invités et soyez disponible pour résoudre les problèmes. Un excellent service client peut entraîner des avis positifs et des réservations récurrentes.\n\nc. Ajuster les Prix Dynamiquement\nUtilisez des outils de tarification dynamique pour ajuster vos prix en fonction de la demande saisonnière, des événements locaux et de la concurrence. Cela vous permet de maximiser vos revenus en périodes de forte demande et d'attirer des réservations en basse saison.\n\n4. Promouvoir Votre Location\na. Utiliser les Réseaux Sociaux\nLes réseaux sociaux sont un excellent moyen de promouvoir votre location saisonnière. Créez des pages dédiées sur Facebook, Instagram et autres plateformes pertinentes. Publiez régulièrement des photos, des témoignages d'invités et des promotions spéciales.\n\nb. Collaborer avec des Influenceurs\nEnvisagez de collaborer avec des influenceurs ou des blogueurs de voyage. Une critique positive ou une mention sur leurs plateformes peut augmenter considérablement la visibilité de votre location.\n\nc. Créer un Site Web Personnel\nUn site web dédié à votre location peut vous donner plus de contrôle sur le contenu et les réservations. Utilisez le SEO pour attirer du trafic organique et offrez des promotions spéciales pour les réservations directes.\n\nConclusion\nOptimiser la rentabilité de votre location saisonnière demande une attention constante et une stratégie bien définie. En créant une annonce attrayante, en optimisant le SEO, en gérant efficacement les réservations et en promouvant activement votre propriété, vous pouvez augmenter vos revenus et assurer le succès de votre location saisonnière. Investir du temps et des efforts dans ces domaines portera ses fruits à long terme.`
  }
];

export default function ArticlePage() {
  const params = useParams();
  const id = Number(params.id);
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">Retour au blog</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section Background */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/gestion-professionnelle-handshake.jpg"
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-900/90 to-blue-900/95" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/80 to-blue-900/50" />
        </div>
        <div className="absolute top-6 left-6 z-20">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full font-medium shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
        </div>
        {/* Article title overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold mb-4 backdrop-blur-md border border-blue-400/20">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 max-w-4xl py-16">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100 dark:border-gray-700"
        >
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-blue-900 dark:prose-headings:text-blue-400">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("#")) {
                // Handle headers
                const level = paragraph.match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s/, '');
                const HeaderTag = `h${level}`;
                return (
                  <HeaderTag key={i} className="text-2xl font-bold text-blue-900 dark:text-blue-400 mt-8 mb-4">
                    {text}
                  </HeaderTag>
                );
              } else if (paragraph.startsWith("-")) {
                // Handle bullet points
                return (
                  <ul key={i} className="list-disc pl-6 my-4 space-y-2">
                    {paragraph.split("\n").map((item, j) => (
                      <li key={j} className="text-gray-700 dark:text-gray-300">
                        {item.replace(/^-\s/, '')}
                      </li>
                    ))}
                  </ul>
                );
              } else {
                // Regular paragraphs
                return (
                  <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </motion.article>

        {/* Share and Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex items-center gap-4">
            <span className="text-gray-600 dark:text-gray-400 font-medium">Partager:</span>
            <div className="flex items-center gap-3">
              {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
                <button
                  key={platform}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center transition-all duration-300"
                >
                  {platform === 'Twitter' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>}
                  {platform === 'Facebook' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
                  {platform === 'LinkedIn' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                </button>
              ))}
            </div>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition-all duration-300"
          >
            <span>Plus d'articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
} 