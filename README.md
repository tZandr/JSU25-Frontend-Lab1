# JSU25S - React.JS Webbapplication
Recept app av Alexander Tjernström

# Vad gör appen?
Applikationen gör att användaren kan scrolla igenom en lista recept och kan klicka på recepten för att få en fullständig instruktion. Man kan också skapa och ladda upp ett eget recept genom att klicka på +-tecknet i övre högre hörnet.

Det går även att söka recept, som live-filtrerar recepten i appen. Det finns även en filtreringsfunktion på svårighetsgrad. Det är tänkt att kunna söka på "cuisine" och max antal minter också.

# Vilket API används?
Applikationen använder sig av dummyjsons recept-API.

# Hur används CRUD i appen?
CREATE sker när man trycker på "Save Recipe" på sidan man lägger till recept. Receptet postas då till API:t, "prependas" och man navigeras tillbaka till hemskärmen där nya receptet nu ligger högst upp.

READ sker sekunden appen laddar genom att ladda alla recept som redan finns i API.
Medan API:t laddas står det "loading...".

UPDATE/PUT, samt DELETE finns om man klickar på ett recept och trycker på antingen edit eller delete. Edit gör om alla fält i receptet till inputs/textareas genom useState ocb ternaries, och sparar under tiden den tidigare sparade informationen i en draft som raderas om man trycker save, eller läggs tillbaka i receptet om redigeringen avbryts.

DELETE ligger bredvid edit och använder också useState, samt ternary funktion för att bekräfta raderingen av receptet.
