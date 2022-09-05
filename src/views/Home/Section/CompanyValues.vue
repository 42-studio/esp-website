<template>

  <div class="pb-6">

    <div class="bg-dark bg-svg-lines text-white py-8">

      <div class="container mx-auto text-center py-8">

        <h3 class="text-center display-3 text-white">
          "Cybersecurity is Complex"
        </h3>

        <h4 class="text-white">
          We believe it shouldn’t be.
        </h4>

        <p class="lead">
          Identifying security gaps and finding solutions to resolve them is challenging.
          <br>
          Combined with ever-evolving threats, the absence of comparable product metrics,
          and variations in business operations. The above statement becomes understandable.
        </p>

      </div>

    </div>

    <div class="challenges mt--6">

      <div>

        <i class="fa fa-users iconic" />

        <h5 class="display-5">
          Board
        </h5>

        <p>Is our investment satisfying our risk appetite?</p>

      </div>

      <div>

        <i class="fa fa-user-shield iconic" />

        <h5 class="display-5">
          Chief Security Office
        </h5>

        <p>
          How do we get the most from our security budget?
        </p>

      </div>

      <div>

        <i class="fa fa-eye iconic" />

        <h5 class="display-5">
          Security Operations
        </h5>

        <p>
          How do we measure success and failure?
        </p>

      </div>

      <div>

        <i class="fa fa-shield-alt iconic" />

        <h5 class="display-5">
          Security Vendors
        </h5>

        <p>
          How can we convey our products benefits?
        </p>

      </div>

    </div>
  </div>

</template>

<style lang="scss">

.pointed {

  display: flex;
  flex-direction: row;
  margin: 14px 0;
  text-align: left;

  i {
    line-height: 2.5rem;
    font-size: 2rem;
  }

  p {
    margin: 0;
    padding-left: 14px;
  }

}

.features {

  .title,
  .category {
    margin-left: 25px;
    color: #8d8d8d;
  }

  h6 {
    text-transform: uppercase;
  }

  .info {
    text-align: left;
    padding: 10px;
  }

}

.challenges {

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1000px;
  margin: auto;
  text-align: center;

  i.iconic {
    font-size: 4rem;
    margin: 24px auto 32px;
    color: #f5365c;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 14px 14px 32px;
    background-color: white;
  }

}

@media only screen and (max-width: 1280px) {
  .challenges {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 1580px) {

  .features {
    padding-top: 0;
  }

}

@media only screen and (max-width: 800px) {

  .challenges {
    grid-template-columns: 1fr;
  }

}

</style>
