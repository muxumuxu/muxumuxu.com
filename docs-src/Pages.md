# Pages

L'ajout de nouvelles pages au site se fait de la manière suivante.

Depuis Contentful, depuis l'onglet __Content__, il faut créer une nouvelle __Entry__ de type __Page Container__.

Une nouvelle page apparait qui permet la configuration de cette page, voici les champs requis :

| Field Name    | Usage |
|:------------- |:------|
| Title         | Ce champ n'a pas d'usage dans l'application front, il permet de retrouver la page dans Contentful |
| Route         | la route qui permet d'accèder à cette page (par exemple : `a-propos`) |
| Head          | ce champ ne peut contenir que des componsants de type __Page Head__. Il permet de configurer le titre d'un page ainsi que les meta disponibles dans la balise `<head>` d'une page |
| Sections      | C'est dans ce champs que nous allons ajouter les composants. Ce champ n'accepte que les __ContentType__ finissant par __Section__  |
