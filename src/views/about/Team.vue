<template>
  <div class="padding-container">
    <div class="wrapper">
      <div class="top-container">
        <div class="title-container">
          <h1>Meet the team behind ESP</h1>
          <p class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor
            ac. Praesent non dolor leo. Donec eu ante vel eros faucibus
            molestie.
          </p>
        </div>
        <img src="@/assets/img/brain.svg" alt="brain" class="brain" />
      </div>

      <div class="members-grid">
        <TeamMember
          position="Chief Executive Officer"
          name="Liam Chen"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie."
          linkedin="https://linkedin.com/joshlucpoll"
          email="hello@joshlucpoll.com"
          twitter="https://twitter.com/joshlucpoll"
          facebook="https://facebook.com"
          ><img
            src="https://www.freeiconspng.com/thumbs/cat-png/cat-png-17.png"
            alt="cat"
            id="liam-chen-img"
        /></TeamMember>
        <TeamMember
          is-right="true"
          position="Chief Operating Officer"
          name="Amalia Crouch"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie."
          linkedin="https://linkedin.com/joshlucpoll"
          email="hello@joshlucpoll.com"
          facebook="https://facebook.com"
          ><img
            src="https://www.killarneycat.com/wp-content/uploads/sites/257/2022/04/9-copy.png"
            alt="cat"
            id="amalia-crouch-img"
        /></TeamMember>
        <TeamMember
          position="Chief Technology Officer"
          name="Justin Donovan"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie."
          linkedin="https://linkedin.com/joshlucpoll"
          email="hello@joshlucpoll.com"
          ><img
            src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png"
            alt="cat"
            id="justin-donovan-img"
        /></TeamMember>
        <TeamMember
          is-right="true"
          position="Board Advisor"
          name="Rachelle Key"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie."
          linkedin="https://linkedin.com/joshlucpoll"
          email="hello@joshlucpoll.com"
          twitter="https://twitter.com/joshlucpoll"
          ><img
            src="https://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG.png"
            alt="cat"
            id="rachelle-key-img"
        /></TeamMember>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#liam-chen-img {
  position: absolute;
  width: 120%;
  object-fit: contain;
  transform: rotate(-45deg) translate(40%, 15%);
}
#amalia-crouch-img {
  position: absolute;
  width: 120%;
  object-fit: contain;
  transform: rotate(-45deg) translate(0, 15%);
}
#justin-donovan-img {
  position: absolute;
  width: 120%;
  object-fit: contain;
  transform: rotate(-45deg) translate(-5%, 15%);
}
#rachelle-key-img {
  position: absolute;
  width: 100%;
  object-fit: contain;
  transform: rotate(-45deg) translate(20%, 20%);
}

.padding-container {
  padding: 6rem var(--body-padding);

  .wrapper {
    position: relative;
    max-width: 1920px;
    min-height: calc(100vh - 400px);
    margin: 0 auto;

    .top-container {
      margin: 5rem 0;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;

      .title-container {
        text-align: center;
        max-width: 600px;
      }
    }

    .brain {
      filter: drop-shadow(0px 0px 75px #5b349d);
      animation: breath 3s ease-in infinite alternate;
      width: 18rem;
    }

    .members-grid {
      display: grid;
      gap: 4rem;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
  }
}

@include media-breakpoint-up(xl) {
  .padding-container {
    .wrapper {
      .top-container {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        .title-container {
          text-align: left;
        }
      }
    }
  }
}

@keyframes breath {
  from {
    filter: drop-shadow(0px 0px 75px #5b349d);
  }
  to {
    filter: drop-shadow(0px 0px 5px #5b349d);
  }
}
</style>

<script>
import TeamMember from "../../components/TeamMember.vue";

export default {
  components: {
    TeamMember
  }
};
</script>
