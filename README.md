# Portfolio de Marwen Jdidi

Portfolio personnel développé avec React pour présenter mon profil, mes compétences et une sélection de projets full-stack/front-end.

## Demo

- Production: https://marwen-portfolio.onrender.com/

## Objectif du projet

Ce projet sert de vitrine technique et produit:

- Présenter mon profil de développeur (front-end / back-end).
- Mettre en avant des projets réels déployés.
- Permettre un contact direct via un formulaire intégré.
- Proposer une expérience bilingue (FR/EN).

## Fonctionnalités principales

- Navigation one-page fluide vers les sections (`Skills`, `Projects`, `Contact`).
- Internationalisation français/anglais avec bascule via drapeaux.
- Affichage de projets avec:
  - image de preview,
  - liens code/app,
  - modal vidéo (YouTube) pour les démos.
- Section "JavaScript & Responsive apps" avec modal et carrousel d'images.
- Formulaire de contact relié à EmailJS.
- Notifications utilisateur (succès/erreur) avec Toast.
- Animations d'apparition au scroll sur les cartes projets.

## Stack technique

- React 18
- SCSS (Sass)
- Create React App (react-scripts)
- i18next + react-i18next
- react-scroll
- framer-motion
- react-intersection-observer
- react-icons
- react-toastify
- emailjs-com

## Architecture globale

L'application est organisée autour de composants UI réutilisables, sans backend interne (le portfolio est statique côté front, avec intégration EmailJS pour le formulaire).

- `App` compose la structure principale (`NavBar` + `Home`).
- `Home` orchestre les sections métier: présentation, compétences, projets, contact.
- `Projects` + `Project` gèrent le rendu des cartes projets et des actions (app/code/demo).
- `JavaScriptOnly` gère une galerie de projets avec modal interne et carrousel.
- `i18n.js` centralise la configuration des langues.

## Arborescence des dossiers

```text
portfolio-/
  public/                 # assets statiques (images, icônes, manifest, etc.)
  src/
    components/
      about/              # composant "About" (historique / non principal actuellement)
      home/               # page principale + sections + formulaire
      iframe/             # composant expérimental/non utilisé actuellement
      intro/              # composant intro (non branché dans App)
      javaScriptOnly/     # projets JS-only + modal/carrousel
      modal/              # ancienne modal générique (non branchée)
      navbar/             # navigation + switch langue
      projects/           # liste projets + carte projet
    locales/
      fr.json             # traductions FR
      en.json             # traductions EN
    App.js                # composition principale
    i18n.js               # config i18next
    index.js              # point d'entrée React + ToastContainer global
  package.json
  README.md
```

## Fichiers clés et responsabilités

- `src/index.js`
  - Monte l'application React.
  - Déclare un `ToastContainer` global.

- `src/App.js`
  - Compose les blocs de haut niveau de l'UI.

- `src/i18n.js`
  - Enregistre les ressources FR/EN.
  - Définit la langue par défaut (`fr`) et la langue fallback (`en`).

- `src/components/navbar/NavBar.jsx`
  - Navigation one-page (`react-scroll`).
  - Menu mobile burger.
  - Bascule de langue avec drapeaux.

- `src/components/home/Home.jsx`
  - Section Hero/Présentation.
  - Section compétences.
  - Section projets (`Projects`).
  - Section JavaScript-only (`JavaScriptOnly`).
  - Formulaire de contact via EmailJS.

- `src/components/projects/Projects.jsx`
  - Source de vérité des projets affichés (titre, description, image, liens).

- `src/components/projects/Project.jsx`
  - Carte projet animée (`framer-motion`).
  - Gestion ouverture/fermeture démo vidéo.

- `src/components/javaScriptOnly/JavaScriptOnly.jsx`
  - Projets JS avec modal détaillée et navigation d'images.

## Librairies installées (explication)

### Librairies utilisées dans l'application

- `react`, `react-dom`: base UI.
- `sass`: styles SCSS.
- `i18next`, `react-i18next`: internationalisation.
- `react-scroll`: scroll fluide vers sections.
- `react-world-flags`: icônes drapeaux FR/GB.
- `react-icons`: icônes UI et tech stack.
- `framer-motion`: animations de cartes.
- `react-intersection-observer`: déclenchement d'animations au viewport.
- `react-toastify`: feedback utilisateur non bloquant.
- `emailjs-com`: envoi de mails sans backend dédié.

### Librairies présentes mais peu/pas exploitées actuellement

- `react-router-dom`: non utilisée dans la version actuelle (application one-page).
- `@fortawesome/*`: non utilisée actuellement (remplacée par `react-icons`).
- `js-file-download`: non utilisée dans le code actuel.
- `@testing-library/*`, `web-vitals`: incluses par défaut via CRA/testing.

## Choix techniques et justification

- One-page architecture: rapide à parcourir pour un recruteur.
- i18n natif: permet un ciblage FR/EN sans dupliquer les composants.
- Assets statiques dans `public/`: simplicité d'accès via chemins absolus.
- EmailJS: simplifie le contact sans déployer un backend dédié.
- Animations ciblées: améliore la perception de qualité sans surcharger l'UX.

## Installation locale

### Prérequis

- Node.js 18+ recommandé
- npm 8+

### Démarrer le projet

```bash
npm install
npm start
```

Application disponible sur `http://localhost:3000`.

### Build production

```bash
npm run build
```

Le build est généré dans `build/`.

## Variables sensibles / configuration

Le formulaire de contact repose sur EmailJS (`serviceId`, `templateId`, `publicKey`).

Recommandation d'amélioration:

- déplacer ces identifiants dans des variables d'environnement (`.env`) au lieu de les laisser en dur dans `Home.jsx`.

Exemple:

```env
REACT_APP_EMAILJS_SERVICE_ID=...
REACT_APP_EMAILJS_TEMPLATE_ID=...
REACT_APP_EMAILJS_PUBLIC_KEY=...
```

## Déploiement

Le projet est déployé sur Render en mode front statique.

Points d'attention en production:

- Respect strict de la casse des noms de fichiers (Linux est case-sensitive).
- Vérifier que tous les assets référencés existent dans `public/` avec le même nom exact.

## Pistes d'amélioration

- Ajouter une vraie couche tests (unitaires + composants + e2e).
- Nettoyer les dépendances non utilisées pour réduire le bundle.
- Factoriser certaines données (projets) dans un fichier JSON dédié.
- Ajouter une CI simple (lint + test + build).
- Externaliser les contenus (CMS léger ou fichier de config unique).

## Auteur

- Marwen Jdidi
- LinkedIn: https://www.linkedin.com/in/marwen-dev-react-js
- GitHub: https://github.com/MarwenCode
