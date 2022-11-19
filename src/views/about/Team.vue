<template>
  <div class="padding-container">
    <div class="wrapper">
      <div class="top-container">
        <div class="title-container">
          <h1>Meet the Team</h1>
          <p class="subtitle">
            We are a team with extensive experience delivering security to enterprises.
            We have sold, implemented and displaced a wide array of security products across the largest enterprises.
            We have felt customers' pain and seen first-hand how security investment is broken.
            <br>
            We are passionate about solving it.
          </p>
        </div>
        <img src="@/assets/img/brain.svg" alt="brain" class="brain">
      </div>

      <div class="members-grid">
        <TeamMember
          title="Co-Founder & CEO"
          name="Louis Holt"
          description="With over a decade of cyber security experience across government and enterprise.
            Louis specialised in security value realisation, helping enterprise customers architect,
            deploy and operationalise security products."
          linkedin="https://www.linkedin.com/in/louis-holt-79738b113"
        >
          <img
            src="https://www.freeiconspng.com/thumbs/cat-png/cat-png-17.png"
            alt="cat"
            id="liam-chen-img"
          >
        </TeamMember>

        <TeamMember
          is-right="true"
          title="Co-Founder & Project Lead"
          name="Marc Newton"
          description="Over 16 year's experience in developing enterprise-class web applications. Marc brings his expertise in industry 4.0, analytics and indie game start-ups to produce our cutting-edge reactive web platforms"
          linkedin="https://www.linkedin.com/in/marcandrewnewton/"
        >
          <img
            src="https://www.killarneycat.com/wp-content/uploads/sites/257/2022/04/9-copy.png"
            alt="cat"
            id="amalia-crouch-img"
          >
        </TeamMember>

        <TeamMember
          title="Board Advisor"
          name="Sounil Yu"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie."
          linkedin="https://linkedin.com/joshlucpoll"
        >
          <img
            src="@/assets/img/Sounil.png"
            alt="cat"
            id="justin-donovan-img"
          >
        </TeamMember>

        <TeamMember
          is-right="true"
          title="Board Advisor"
          name="Amy Lemberger"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie."
          linkedin="https://linkedin.com/joshlucpoll"
        >
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG.png"
            alt="cat"
            id="rachelle-key-img"
          >
        </TeamMember>

        <TeamMember
          title="Board Advisor"
          name="Paul Murgatroyd"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere est. Cras consectetur nisi tellus, sed dapibus massa auctor ac. Praesent non dolor leo. Donec eu ante vel eros faucibus molestie."
          linkedin="https://www.linkedin.com/in/paulmurgatroyd/"
        >
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG.png"
            alt="cat"
            id="rachelle-key-img"
          >
        </TeamMember>

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
import TeamMember from '../../components/TeamMember.vue'

export default {
  components: {
    TeamMember
  }
}
</script>
