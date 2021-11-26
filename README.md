# TP EXPRESS TEMPLATE

## CONSIGNES GÉNÉRALES

Le projet correspondant aux cours du 27 novembre 2021.

NPM doit être installé sur votre machine.

Il vous faut cloner le repository, créer une branche à votre nom si vous voulez pousser sur github.

## PRÉREQUIS

- avec node et postgres d'installés
- Savoir utiliser npm
- Comprendre le JS
- Être réveillé
- Avoir bu un (ou plusieurs) café

## INITIALISATION

- Cloner le projet
- Installer les dépendances avec `npm install`
- Initialiser le projet avec `npm run db:create`, `npm run db:migrate`, `npm run db:seed` et `npm run test:db:create`
- Lancer les tests avec `npm test` et verifier qu'ils passent tous
- Lancer le server avec `npm start` et verifier qu'il se lance sur le port 3000
- Lancer le server de dev avec `npm run start:dev` et verifier qu'il se lance le port 3000

## TP : UN SITE WEB SIMPLE QUI FAIT DES CHOSES

- Étape 1 - Ajoutez sur la page accueil (`/`) le nombre d'utilisateurs créés ainsi que le nombre de paires de chaussures
  inscrites.
- Étape 2 - Créez une page d'index pour visualiser les utilisateurs sur `/users`, qui affiche la liste des utilisateurs
  et ajouter un lien depuis l'accueil (`/`) vers cette page (`/users`).
- Étape 3 - Créez une page 404 affichant un message plus sympa.
- Étape 4 - Créez une page de visualisation des utilisateurs (`/users/:id`), qui permet de visualiser les informations
  d'un utilisateur (son nom et ses chaussures).
- Étape 5 - Créez un formulaire de création d'un utilisateur (`/users/new`), qui va créer un utilisateur et qui redirige
  vers sa page (`/users/:id`) à la création.
- Étape 6 - Ajoutez des boutons supprimer à côté de chaque utilisateur sur la liste des utilisateurs, ainsi que sur la
  page de visualisation d'un utilisateur. 
