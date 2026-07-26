# shopify-dev-rapport — Tema: Prestation

**Roll:** shopify-dev (körd manuellt, se `content/blogg/somn/05-shopify-dev-rapport.md` för den fullständiga genomgången av hur bloggen är uppsatt i temat — samma struktur gäller oförändrat här, ingen ny research krävdes.)

Ingen temafil har ändrats eller pushats. Ren innehållsleverans i `content/blogg/prestation/`.

## Sammanfattning (oförändrat sedan tema Sömn)

- `templates/article.json` renderar `article.title` som H1 automatiskt — brödtexten i alla 4 filerna börjar därför på H2, ingen H1 i innehållet.
- Blogghandle antas vara `/blogs/news` (enda bekräftade handle i `pb-footer.liquid`). De inbördes länkarna mellan Prestation-inläggen förutsätter att artiklarna får handles enligt förslagen i varje fil (`starkare-vissa-dagar`, `vagar-inte-lyfta-tungt`, `greppet-sviker-marklyft`, `tappar-sugen-traning`).
- Samma inklistringsprocedur som för Sömn: Titel → admin-titelfältet, brödtext under första `---` → redigerarens innehållsfält (kodvy om formatering inte följer med vid vanlig inklistring), `[BILD: ...]`-raden → ersätts med riktig bild, Meta-beskrivning/Titel → SEO-fälten.
- `[KÄLLA BEHÖVS]`-markeringar i de här 4 filerna gäller specifikt: nervsystemets roll i dagsformsvariation (inlägg 1), skadestatistik för styrketräning (inlägg 2), och andelen som slutar träna inom 3–6 månader (inlägg 4, togs bort helt ur texten snarare än att gissa).

## Nytt i den här rundan

- Ingen ny produktlänk introducerades utöver Lume 2.0 (redan bekräftad handle, återanvänds från Sömn-temat).
- Massage-pistolens koppling till "aktivering innan tunga lyft" (inlägg 2) övervägdes men uteslöts ur texten eftersom produktens URL-handle fortfarande inte är bekräftad i temakoden — samma öppna punkt som noterades i `content/blogg/somn/00-seo-research.md` och `content/blogg/00-seo-research.md`. Om du vill ha den kopplingen med, verifiera handeln i Shopify Admin så lägger jag till en rad i inlägg 2.
- Greppstyrketränare (produktresearch S5, ej lanserad) nämns INTE som produkt i inlägg 3, korrekt enligt regeln att bara länka lanserade produkter.

Inget pushat till något tema. Nästa tema (Återhämtning eller Kost) väntar på din bekräftelse.
