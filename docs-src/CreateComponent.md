# Créer son composant

1. Définir le Content Model dans [Contentful](https://app.contentful.com/spaces/919rtc7exzm8/content_types_new/fields)

    - Bien penser à suffixer le Model par __Section__, si celui-ci s'intégre directement dans une page. Par exemple : __Image Carousel Section__
    - Faire attention à ce que le champs soit marqué comme __Required__ si besoin
    - Activer la localisation du champs si besoin

2. Créer un fichier `/api/parser/image-carousel.js` qui servira à parser le contenu de cette nouvelle section.

3. Référencer ce fichier dans `/api/parser/parser-mapping.js`, et conditionner l'application du parsing sur l'id contentful (`imageCarouselSection`)

4. Créer le composant Vue `/components/image-carousel.vue`, les données Contentful seront directement passées via la props `data`.

5. Référencer ce dernier dans `/pages/_locale/_page.vue`
    - L'importer
    - L'ajouter dans `components`
    - Ajouter au mapping
        - Key: Contentful Component ID (`imageCarouselSection`)
        - Value: Component Name (`image-carousel`)
