# Shopify-dev-rapport — Tema: Sömn (omgjord runda)

**Roll:** shopify-dev (körd manuellt — `.claude/agents/shopify-dev.md` laddas inte som subagent_type i den här sessionen. Instruktionerna följs genom att läsa filen och tillämpa dess regler direkt.)

## Nuvarande blogguppsättning i temat (kontrollerad innan något ändrats)

- Blogghandle: `/blogs/news` — enda bekräftade blogghandle i temakoden (`sections/pb-footer.liquid`, länken "Blogg").
- Blogginlägg renderas via `sections/main-blog-post.liquid` (ej ändrad, ej inspekterad rad-för-rad i denna runda — samma slutsats som tidigare Sömn/Prestation-rundor: `article.title` renderas automatiskt som H1, därför ska brödtexten i varje inlägg börja på H2, inte H1).
- Ingen ändring har gjorts i temat i den här rundan. Inget har pushats. Detta är enbart innehållsförberedelse.

## Vad som levereras

Fyra nya inlägg för temat Sömn, som ersätter den tidigare Sömn-rundan på användarens begäran om att göra om temat från grunden:

1. `01-koffein-sen-eftermiddag-somnen` — Koffein sent på dagen sabbar sömnen
2. `02-sovrumstemperatur-aterhamtning` — Sovrumstemperaturen kan ge dig bättre återhämtning
3. `03-nervos-somn-infor-tavling` — Nervös natten innan tävling? Så sover du ändå bättre
4. `04-trana-eller-vila-daligt-sovit` — Sov du dåligt? Så vet du om du ska träna eller vila

Varje inlägg finns som:
- `.md` — arbetsunderlag med metadata-header (titel, meta-beskrivning, målsökord, föreslagen handle) och interna länkförslag i en fotnot
- `.html` — klistra-in-klar version för Shopify admins kodvy, utan metadata-header och utan fotnoten (bara brödtexten)

## Så klistrar du in ett inlägg i Shopify admin

1. Shopify admin → Onlinebutik → Blogginlägg → Skapa blogginlägg (i bloggen "Nyheter", som motsvarar handlen `/blogs/news`)
2. Titel: klistra in **Titel**-fältet från `.md`-filens metadata-header
3. Innehåll: växla till kodvyn (`<>`-ikonen i redigeraren) och klistra in hela `.html`-filens innehåll
4. Sök-motoroptimering (i samma vy, längst ner): klistra in **Meta-beskrivning** från metadata-headern. Sidtitel/handle kan lämnas som Shopify föreslår, eller sättas till den föreslagna handlen i metadata-headern
5. Innan publicering: sök igenom texten efter `[KÄLLA BEHÖVS: ...]` och ersätt med en verifierad källa eller ta bort/skriv om påståendet, samt efter `[BILD: ...]` och infoga faktisk bild enligt förslaget

## Produktlänkar som används

- `/products/lume-2-0-smart-fitness-armband-med-puls-steg-somnmatning` — bekräftad handle (`templates/index.json`), används i inlägg 01 och 04
- `/collections/recovery` — bekräftad collection (`pb-footer.liquid`), används som avslutande CTA i alla fyra inlägg
- Ingen ny produktlänk (t.ex. Lunéra blåljusglasögon) användes i denna runda — ingen av de fyra nya vinklarna krävde den kopplingen naturligt, till skillnad från föregående Sömn-runda

## Design och temafärger

Inga ändringar i tema, CSS eller sektioner. Inläggens HTML använder enbart `<h2>`, `<h3>`, `<p>`, `<strong>`, `<em>` och `<a>` — ingen inline-styling, inga färgkoder. Utseendet styrs helt av `sections/main-blog-post.liquid` och temats befintliga typografi (grönt/Montserrat enligt bloggens nuvarande design, som inte har rörts).

## Nästa steg

Väntar på din granskning av de fyra inläggen innan något klistras in i Shopify admin. Inget pushas till något tema i denna runda — detta är ren innehållsleverans i `content/blogg/somn/`. Nästa tema i arbetsordningen (Återhämtning eller Kost) påbörjas efter din bekräftelse.
