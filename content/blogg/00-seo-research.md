# SEO-research — 5 blogginlägg om återhämtning och prestation

**Roll:** seo-expert (körd manuellt — se anteckning längst ner)
**Metod:** Ingen tillgång till ett faktiskt sökordsverktyg (Ahrefs/Semrush/Google Keyword Planner) i den här sessionen. Researchen bygger på riktiga websökningar (juli 2026) för att se vad som faktiskt rankar idag, vilka domäner som dominerar, och vilka frågor som verkar sökas på i praktiken. Konkurrensbedömningarna nedan är därför **kvalitativa uppskattningar (Låg/Medel/Hög), inte exakta volymsiffror** — att hitta på precisa sökvolymer vore att bryta mot brand.md:s regel om att aldrig hitta på siffror.

## Övergripande observation

De breda huvudtermerna inom det här området (”träningsvärk”, ”återhämtning efter träning”, ”överträning”, ”sömn och träning”) domineras redan av tunga aktörer: **1177, Doktor.se, Netdoktor** (medicinska auktoritetsdomäner, näst intill omöjliga att slå på en bred medicinsk fråga) och **SATS, STC, Actic, Styrkelabbet, Tyngre** (stora tränings-varumärken med etablerad domänauktoritet). En ny Shopify-blogg konkurrerar inte om förstaplatsen på de bredaste sökningarna inom rimlig tid.

Strategin här är därför: **samma fem problemområden ur briefen, men var och en inramad som en smalare, mer specifik fråga** som de stora aktörerna inte redan äger ordagrant — samtidigt som frågan har tydlig köp-intent (läsaren är redan någon som tränar seriöst och letar efter en lösning, inte bara en definition).

---

## 1. Varför känns du fortfarande stel trots att du vilat en hel dag?

- **Målsökord:** stel trots vila
- **Relaterade sökord:** vila hjälper inte mot stelhet, aktiv återhämtning vs passiv vila, varför blir jag inte mindre öm av att vila
- **Konkurrens:** Låg–medel. Innehåll om ”aktiv vs. passiv återhämtning” finns (Runner's World, Reumatikerförbundet), men ingen äger specifikt vinkeln ”jag vilade och blev inte bättre” — det är en igenkännbar frustration utan ett dedikerat svar idag.
- **Briefram:** Varför återhämtningen inte räcker trots vila

## 2. Träningsvärk som inte släpper efter en vecka — vad det kan betyda

- **Målsökord:** träningsvärk går inte bort
- **Relaterade sökord:** träningsvärk flera dagar, ihållande muskelömhet träning, skillnad träningsvärk och skada
- **Konkurrens:** Hög på huvudtermen (1177, Doktor.se, Testmottagningen ligger redan top 3–10 med korta medicinska sammanfattningar). Vår realistiska position är inte topp 3 på ”träningsvärk” — men den längre, mer specifika frågan (”går inte bort efter en vecka”) är smalare och mindre täckt, och vår målgrupp (seriöst tränande, inte oroliga nybörjare) är en annan läsare än den 1177 skriver för.
- **Briefram:** Stelhet och muskelömhet som inte släpper
- **Viktigt:** Innehållet får INTE diagnosticera. Artikeln beskriver skillnaden i känsla (diffus vs. skarp/lokaliserad smärta) och uppmanar mjukt till vårdkontakt vid osäkerhet — utan att själva ge medicinska bedömningar.

## 3. Du gör allt rätt på gymmet men utvecklas inte — sömnen kan vara skälet

- **Målsökord:** sömn träningsresultat
- **Relaterade sökord:** tränar hårt men utvecklas inte sömn, hur mycket sömn behöver man som tränar hårt, djupsömn muskelåterhämtning
- **Konkurrens:** Medel–hög på breda ”sömn och träning”-artiklar (SATS, Styrkelabbet, Tyngre täcker ämnet brett och bra). Vinkeln ”du gör allt rätt förutom sömnen” är smalare, mer personlig, och leder naturligt vidare mot en återhämtningsrutin snarare än att bara förklara sömnfysiologi.
- **Briefram:** Sömn kopplat till träningsresultat

## 4. Tränar hårt, utvecklas inte — så skiljer du en platå från överträning

- **Målsökord:** tränar hårt utvecklas inte
- **Relaterade sökord:** överträning tecken, stagnerad träningsutveckling, vilopuls överträning
- **Konkurrens:** Medel. Etablerat innehåll finns (privatetrainingonline, idrottsdoktorn, vital.se) men är brett upplagt kring själva definitionen av överträning. Vår vinkel är smalare och mer praktisk: en checklista för att skilja en normal platå (helt vanligt, kräver bara tålamod eller programändring) från faktisk underåterhämtning (kräver mer vila).
- **Briefram:** Att träna hårt men inte utvecklas (överträning/underåterhämtning)

## 5. Så vet du om du återhämtar dig snabbt nog när du tränar 5–6 gånger i veckan

- **Målsökord:** återhämtning mellan pass
- **Relaterade sökord:** träna varje dag återhämtning, hur ofta kan man träna samma muskelgrupp, återhämtningstid mellan träningspass
- **Konkurrens:** Hög på den breda termen, men vinkeln är avgränsad till en specifik, mer köp-redo delmängd: personer som redan tränar högfrekvent (5–6 pass/vecka) och aktivt letar efter hur de ska strukturera återhämtningen för att kunna fortsätta hålla den frekvensen, snarare än nybörjare som undrar om träning över huvud taget är säkert.
- **Briefram:** Återhämtning mellan pass när man tränar ofta

---

## Interna länkmål som hittades i temat

- `/collections/recovery` (Återhämtning) — bekräftad handle, används i `pb-footer.liquid`
- `/collections/equipment` (Träningsutrustning) — bekräftad handle
- `/collections/all` — bekräftad, används genomgående i temat
- Massagepistolen har en färdig produktsida (`templates/product.massage-pistol.json`), men den exakta URL-handlen (`/products/...`) kunde inte bekräftas från temakoden ensam — **shopify-dev bör verifiera handeln i Shopify Admin innan länkarna publiceras.**
- Vadkompressionsstrumporna har INGEN live produktsida än (bara `products/vadkompressionsstrumpor.md` som planeringsunderlag, se `products/oversikt.md`) — därför länkas den produkten INTE i inläggen, bara till den generella återhämtningskollektionen.

## Anteckning om arbetssättet

`seo-expert` finns i `.claude/agents/` men laddas inte som en Agent `subagent_type` i den här sessionen (samma kända begränsning som för `tiktok-growth`, se minnesanteckning `custom-subagents-not-loading`). Researchen ovan är gjord genom att läsa agentens instruktionsfil manuellt och följa dess regler (köp-intent före ren volym, inga medicinska påståenden, hitta aldrig på siffror) med hjälp av riktiga websökningar för konkurrensbilden.
