<template>
  <div id="main-con">
    <h3>Kundeservice</h3>
    <div class="container">
      <img src="../assets/History-of-Nike.jpg" alt="" />
      <div class="text">
        <p>
          Vi sidder klar ved telefonen samt chatsupport alle ugens dage, hvis du
          skulle have brug for hjælp.
        </p>
        <br />
        <p>Vores åbningstider på telefonen er:</p>
        <p>Mandag-Fredag: 9-18</p>
        <p>Lørdag-Søndag: 10-14</p>
        <br />
        <p>
          Du kan kontakte os på nedenstående telefonnummer i ovenstående
          tidsrum, eller på mail hvor vi svarer indenfor 24 timer på alle
          hverdage.
        </p>
        <p>Telefon: (+45) 33 91 18 18</p>
        <p>E-mail: online@NikeProShop.dk</p>
      </div>
    </div>
    <h3>Fortrydelsesret</h3>
    <p>
      Du har 30 dages fortrydelsesret. Det gør sig både gældende ved køb i vores
      fysiske shops og på vores webshop. Fortrydelsesretten løber fra den dag,
      du foretager dit køb i butikken eller modtager din webordre.
    </p>
    <h3>Bytte- og returregler</h3>
    <p>• Bytteret på alle varer i op til 180 dage</p>
    <p>• Fuld returret på alle varer i op til 30 dage</p>
    <p>
      • Alle varer som er købt online, kan sendes gratis retur med vedlagt
      returlabel
    </p>
    <p>
      • Alle varer som er købt online, kan også byttes/returneres i vores
      fysiske butikker*
    </p>
    <p>
      *Det er kun muligt at returnere/ombytte en vare i Magasin, hvis den
      oprindeligt blev købt der.
    </p>
    <h3>Gratis retur</h3>
    <p>
      Vi vedlægger altid en gratis returlabel i alle vores forsendelser i
      Danmark, så du helt uden omkostninger kan sende din webordre retur til
      vores lager, hvis varerne mod forventning ikke skulle passe dig. Du
      klistrer blot returlabelen på den kasse (ikke den originale skoæske), du
      modtog varerne i og afleverer pakken hos din lokale pakkeshop eller
      postbutik.
    </p>
    <p>
      *Husk at få en kvittering for indleveringen af pakken med fra
      pakkeshoppen, da det er din dokumentation for, at du har sendt pakken
      korrekt retur.
    </p>
  </div>
</template>

<style lang="scss" scoped>
#main-con {
  padding: 0 100px;
}

.container {
  display: flex;

  img {
    width: 30vw;
    aspect-ratio: 3 / 1;
    margin: 0 3px;
  }
}

@media screen and (max-width: 923px) {
  .container {
    flex-direction: column !important;

    img {
      width: 100%;
      aspect-ratio: 1 / 1;
    }
  }
}
</style>
