<template>

  <div>

    <esp-background image="backgrounds/laptop.jpg" class="section-content padded page-header flex-column">

      <div class="header-body text-center">

        <h1 class="text-white">
          LICENSING
        </h1>

        <p class="text-lead text-white">
          Lorem Ipsum dulat, womba bomba whaka willy.
        </p>

      </div>

    </esp-background>

    <b-container class="py-8">

      <template v-for="(app, index) in licenses.applications">

        <div :key="`app-${index}`" class="licenses">

          <h3>{{ app.name }}</h3>

          <table class="ml-4 mb-4 mt-2" style="min-width: 320px">

            <tbody>

              <template v-for="(source, key) in app.sources">

                <tr :key="`app-${index}-source-${key}`">

                  <td>
                    <a :href="licenses.sources[source].link" :target="key">{{ licenses.sources[source].name }}</a>
                  </td>

                  <td>
                    <a :href="licenses.sources[source].license" :target="key">License</a>
                  </td>

                </tr>

              </template>

            </tbody>

          </table>

        </div>

      </template>

    </b-container>

  </div>

</template>

<script>
import licenses from '../../licenses.json'

export default {

  data: () => ({
    licenses: null
  }),

  beforeMount () {
    this.licenses = licenses
  }

}

</script>

<style lang="scss">

</style>
