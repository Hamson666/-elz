# Ortie portfolio website

## Technologies utilisées

- **Languages** : HTML5, Javascript, Markdown
- **Frameworks** : Node.js, Vite.js, Astro, Tailwind CSS, jQuery
- **Hébergeur** : Alsace Réseau Neutre ?
- **Serveur** : Yunohost ?
- **Logiciel d'intégration continue** : Jenkins ?

## Comment utiliser GitHub

Compte GitHub

Clone

Commit

Push

## Comment ajouter du contenu

Les fichiers dans lequel mettre le contenu textuel sont les fichiers .md qui se trouvent dans les sous-dossiers du dossier /src/pages/  
Les images se trouvent dans les sous-dossiers du dossier /public/

Dedans selon le type de contenu (Patch, print, zine...) le contenu des fichiers .md ne sera pas le même

La manière la plus simple de faire un nouveau contenu (Nouveau patch, nouveau print, nouvelle image dans la galerie...)  
c'est encore de prendre un fichier .md déjà existant dans le dossier et de le modifier pour y mettre les infos qu'il faut,  
puis rajouter l'image correspondant dans le dossier /public/

**Exemple :**

Pour rajouter un zine :
- Copier un fichier /src/pages/zines/zine-**.md
- Coller et renommer avec le numéro du zine correspondant :
  - Exemple : Si le dernier zine c'est le zine-04.md, on renomme le fichier en zine-05.md
- L'ouvrir et modifier les infos :
  - Les infos d'en-tête (Dans ce cas le titre, la date, l'auteurse et l'image)
  - Le contenu en lui même (En language markdown, ici c'est la description du zine)
- Enregistrer ce fichier
- Ajouter l'image dans le dossier /public/zines/nom-du-fichier.PNG

Et voilà ! Une fois le site renvoyé sur GitHub, [Logiciel de CI] se chargera de rebuild le site,  
et quelques secondes/minutes après ce sera sur internet et tu pourras vérifier que tout est bon