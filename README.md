# Formation Vue.js : programmation avancée

Vous découvrirez en profondeur les bonnes pratiques de développement des applications VueJS version 3. Outre l'organisation du code et la méthodologie de développement, vous verrez l'intégration de design system, la gestion des styles, des tableaux, et des formulaires. Vous intégrerez VueJS avec d'autres librairies.

## Objectifs pédagogiques

- Structurer son code VueJS avec les composables et store
- Comprendre la réactivité en profondeur
- Maitriser les aspects asynchrones
- Savoir gérer les aspects de traitement de formulaires
- Maitriser le routing en profondeur
- Comprendre les problématiques de déploiements

## Public concerné

Architectes, développeurs et chefs de projets web.

## Prérequis

Connaissances de base du framework de VueJS, des technologies du web et des
outils modernes de développement front-end.

## Programme de la formation

### Structure d'un projet VueJS

- Ecrire son code avec Tailwind
- Les types de composant : layout, route, containers, widgets,
- Décomposer un composant en plusieurs composants : la délégation
- Factoriser et réutiliser la partie javascript de composant : le composable
- Les types de composant : layout, route, containers, widgets

**Travaux Pratiques**

Récupération d'un projet VueJS existant fil rouge réalisé avec Nuxt.

### La réactivité

- La notion de getter, setter et proxy en ECMAScript
- La réactivité avec la notation Options API
- La réactivité avec la notation Composition API
- Differences entre ref, reactive
- La notion de computed, writable computed
- Utilisation de watch
- Utilisation de shallowRef, triggerRef, customRef, markRaw et readonly

**Travaux Pratiques**

Refactoring de quelques éléments réactifs du projet fil rouge

### Communication

- Communication entre composants
- Rappels sur defineProps, defineEmits, defineModel
- Ecoulement des attributs d'un composant sur son template.
- Slot et named slot
- Les modificateurs d'événements, prédéfinies et personnalisés
- provide et inject
- Ecoulement des attributs d'un composant sur son template
- Teleports
- Communication avec une store : Pinia
- Options Store, Setup Store
- State, Getters, Actions, Plugins
- Utilisation de store en dehors des composants

**Travaux Pratiques**

- Gestion des titres de pages dans le projet fil rouge.

### Aspects asynchrones

- Rappel sur les callback, promises, async/await, import dynamique
- Lazy loading des composants
- Cas des routes
- Suspense et Async Components

**Travaux Pratiques**

Rendre toutes les routes lazy et faire un affichage d'appel d'API back-end avec
Suspense et un composant d'affichage asynchrone.

### Traitement de formulaire

- Ecriture d'un composant input personnalisé.
- Validation synchrone et asynchrone
- Notion de dirty et untouched
- Écriture d'un composant input personnalisé
- Messages d'erreur

**Travaux Pratiques**

Refactorer le formulaire d'ajout du projet.

### Le routing

- Les guards
- Les transitions
- Les vérifications et les effets lors de changement de route
- Les routes avec URL dynamiques

**Travaux Pratiques**

Refactorer le projet pour intégrer des guards sur des pages nécessitant
l'authentification.

### Performances

- throttle et debounce
- rendu de listes volumineuses
- conversion de variable reactive constante en variable non reactive.
- v-for avec key
- recalcul excessif de computed
- Conversion de variable réactive constante en variable non réactive
- reactivité profonde avec des objets complexes
- Recalcul excessif de computed

**Travaux Pratiques**

Reprendre le formulaire et intégrer le debounce pour une validation asynchrone.

### Outils

- WebSocket
- ESLint, Prettier, et outils de linting spécifiques à Vue
- TailwindCSS
- Intégration avec d'autres librairies (ex: D3, Leaflet)

**Travaux Pratiques**

Etude de l'intégration de Leaflet dans VueJS avec Nuxt.
