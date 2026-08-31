# Landing pages ERP - Tisserin Maison Individuelle

Maquettes de recette, hébergées sur GitHub Pages pour relecture.

**En ligne** : https://louisssmrt.github.io/lp-erp-tmi/

Trois pages, un seul gabarit. Seuls les titres, les textes et les visuels changent :

| Page | Métier |
|---|---|
| `petite-enfance.html` | Micro-crèches et lieux d'accueil de jeunes enfants |
| `medical.html` | Cabinets, maisons de santé et lieux de soin |
| `professions-reglementees.html` | Études, cabinets et bureaux recevant de la clientèle |

## Ce qui n'est pas fonctionnel ici

- **Le formulaire n'envoie rien.** Il reprend le balisage exact du formulaire de rappel du site
  (Contact Form 7), mais sans WordPress derrière il n'y a aucun traitement. À la mise en ligne sur
  le site, le bloc est remplacé par le code court prévu à cet effet.
- **Téléphone et email du pied de page** sont des valeurs à compléter.
- Les pages portent `noindex, nofollow`.

## Source

Ce dépôt ne contient que le **rendu**. Le gabarit, les fichiers de contenu, le script de build et
la documentation de conception vivent dans le workspace local, sous
`projets/SITES/TMI/landing-erp/`. Pour modifier une page, on édite son fichier de contenu et on
relance le build : ne pas éditer les `.html` de ce dépôt à la main, ils sont écrasés.
