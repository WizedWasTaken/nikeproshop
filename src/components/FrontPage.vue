<template>
  <div>
    <header>
      <img src="../assets/Slideshow-image-1.jpg" alt="" />
    </header>
    <div class="container">
      <p>
        Nike har siden deres spæde begyndelse i Oregon, været symbolet på
        innovation indenfor sportsverdenen.
      </p>
      <p>
        Fra løbesko til fodboldstøvler, over golfbolde og til snowboardtøj
        dækker de efterhånden hele paletten.
      </p>
      <p>
        Her hos Nike Pro Shop fokuserer vi selvfølgelig på Nike sko og sneakers,
        men vi forsøger også at snige lidt apparel ind i udvalget, når vi finder
        gode basic styles. I det hele taget gør vi alt hvad vi kan for at holde
        vores udvalg opdateret med de bedste styles fra Nike, både hvad angår
        deres innovative teknologier og populære silhuetter som P-6000, Air Max,
        VaporMax og den voksende Ultra serie, men vi forsøger også altid at have
        de vigtigste klassikere på vores hylder, som Air Force, Cortez, React
        Element og Pegasus.
      </p>
      <div class="shoe-wrapper">
        <div class="shoe-card">
          <img src="../assets/Nike-aqua.jpg" alt="Nike Aqua Picture" />
          <p>Nike Aqua</p>
        </div>
        <div class="shoe-card">
          <img src="../assets/Nike-aquamarine.jpg" alt="Nike Aqua Picture" />
          <p>Nike Aquamarine</p>
        </div>
        <div class="shoe-card">
          <img src="../assets/Nike-bauhaus.jpg" alt="Nike Aqua Picture" />
          <p>Nike Bauhaus</p>
        </div>
        <div class="shoe-card">
          <img
            src="../assets/Nike-blackwhite-thumb.jpg"
            alt="Nike Aqua Picture"
          />
          <p>Nike Black/White</p>
        </div>
        <div class="shoe-card">
          <img
            src="../assets/Nike-greenyellow-thumb.jpg"
            alt="Nike Aqua Picture"
          />
          <p>Nike Green/Yellow</p>
        </div>
        <div class="shoe-card">
          <img src="../assets/Nike-orange-thumb.jpg" alt="Nike Aqua Picture" />
          <p>Nike Orange</p>
        </div>
        <div class="shoe-card">
          <img src="../assets/Nike-pastel-thumb.jpg" alt="Nike Aqua Picture" />
          <p>Nike Pastel</p>
        </div>
        <div class="shoe-card">
          <img src="../assets/Nike-rainbow-thumb.jpg" alt="Nike Aqua Picture" />
          <p>Nike Rainbow</p>
        </div>
        <div class="shoe-card">
          <img
            src="../assets/Nike-whitered-thumb.jpg"
            alt="Nike Aqua Picture"
          />
          <p>Nike white/Red</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  img {
    width: 100%;
  }
}

.container {
  padding: 0 15px;

  p {
    margin-top: 1.3rem;
  }

  .shoe-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .shoe-card {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 5%;
      width: 80%;

      img {
        width: 100%;
        aspect-ratio: 2 / 1;
      }
    }
  }
}
</style>
