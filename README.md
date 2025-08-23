
UppfartsMek — Enkel statisk webbplats

Filer i denna paket:
- index.html (Startsida)
- services.html (Tjanster/priser)
- about.html (Om oss + kontaktformulär)
- styles.css (CSS)
- script.js (små JS-funktioner)
- assets/* (plats för logga och bilder)

Kontaktformulär:
- För enkel uppsättning använd Formspree: https://formspree.io
- Byt ut action i about.html till din Formspree-endpoint eller implementera en Firebase Function.

Deploy till Firebase Hosting (kort guide):
1. Installera Firebase CLI: `npm install -g firebase-tools`
2. Logga in: `firebase login`
3. Initiera projekt: `firebase init` -> välj "Hosting" -> ange public folder som "public" eller punkt till mappen där dessa filer ligger.
4. Kopiera filerna till public-mappen och kör: `firebase deploy --only hosting`

Optimera bilder:
- Ersätt assets/* med webp/jpg-optimerade bilder (max 100 KB vardera) för snabb laddning.
- Byt ut logo-placeholder med din logotyp (SVG/PNG med transparent bakgrund).

Byt telefonnummer och e-post i HTML-filer till dina faktiska kontaktuppgifter innan du publicerar.
