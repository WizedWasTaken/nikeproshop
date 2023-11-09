<template>
  <footer>
    <div class="stores">
      <h2>Nike Pro Shop Stores</h2>
      <h3>København</h3>
      <p>Rådhusstræde 6, st.</p>
      <p>1466 København K</p>
      <h3>Aarhus</h3>
      <p>Søndergade 70</p>
      <p>8000 Aarhus</p>
      <h3>Odense</h3>
      <p>Vestergade 23</p>
      <p>5000 Odense</p>
    </div>
    <div class="open-times">
      <h2>Åbningstider:</h2>
      <p>Mandag - fredag: 10:00 - 18:00</p>
      <p>Lørdag: 10:00 - 13:00</p>
      <br />
      <p>Telefon: (+45) 33 91 18 18</p>
      <p>E-mail: online@NikeProShop.dk</p>
    </div>
    <div class="social-media">
      <h3>Nike Pro Shop på de sociale medier:</h3>
      <div class="icons">
        <img src="../assets/FacebookIcon.png" alt="" />
        <img src="../assets/InstagramIcon.png" alt="" />
        <img src="../assets/TwitterIcon.png" alt="" />
      </div>

      <div class="links">
        <router-link to="/contact">Kontakt</router-link>
        <router-link to="/about">Om Nike Pro Shop</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
$background-color: #ffa500;

footer {
  background-color: $background-color;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 5px 100px;

  h3 {
    margin: 10px 0px;
  }

  p {
    font-size: 1rem;
    margin: 3px 0px;
  }

  .icons {
    display: flex;
    justify-content: space-around;
  }

  .links {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;

    a {
      color: white;
      text-decoration: none;
    }
  }
}

@media screen and (min-width: 923px) {
  footer {
    flex-direction: row;

    .open-times,
    .social-media,
    .stores {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 30%;
      }

      .links {
        width: 100%;
        flex-direction: column;
        text-align: center;

        a {
          margin-top: 2%;
          text-decoration: underline !important;
        }
      }
    }

    div {
      width: 30%;
    }
  }
}
</style>
