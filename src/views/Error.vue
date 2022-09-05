<template>

  <div class="wrapper">

    <div class="page-header error-page">

      <div class="container">

        <div class="row">

          <div class="col-md-12 text-center">

            <h1 class="title">
              {{ title }}
            </h1>

            <p class="lead">
              {{ lead }}
            </p>

            <h4 class="description text-default">
              {{ description }}
            </h4>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Unknown Error'
    },

    lead: {
      type: String,
      default: 'The origin of this error is unknown.'
    },

    description: {
      type: String,
      default: 'Retry your request.'
    }
  }
}
</script>
<style></style>
