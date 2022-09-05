<template>

  <div>

    <template v-if="subscribed.email">

      Thank you for registering your interest.<br>
      <small>You are signed up to receive newsletters.</small>

    </template>

    <template v-else>

      <v-modal ref="modal">

        <template v-slot:action="{ open }">

          <b-form inline @submit.prevent="open" novalidate>

            <b-input-group class="w-100">

              <b-input-group-prepend is-text>
                <i class="fa fa-at" />
              </b-input-group-prepend>

              <b-form-input block v-model="form.input.email" type="email" placeholder="Contact e-mail address..." />

              <b-input-group-append>
                <b-button type="submit" variant="primary" :disabled="!validEmail">
                  SUBSCRIBE
                </b-button>
              </b-input-group-append>

            </b-input-group>

          </b-form>

        </template>

        <template v-slot:default>

          <b-card style="max-width: 800px" class="m-auto text-left">

            <template #header>

              <h4 class="text-4xl m-0">
                Mailing List Subscription
              </h4>

              <div class="fa fa-times-circle text-danger btn-close" @click="exit" />

            </template>

            <!-- Begin Mailchimp Signup Form -->

            <b-form ref="subscribe" @submit.prevent="subscribe" action="http://localhost/8008135" method="post"
                    novalidate
            >

              <p class="mb-2 text-xl">
                Subscribe <strong>{{ form.input.email }}</strong> to ESProfiler services?
              </p>

              <div class="text-left">

                <h5 class="text-md my-4">
                  Marketing Permissions
                </h5>

                <p class="text-xs mb-4">
                  Please confirm methods of contact we may use:
                </p>

                <b-form-group name="gdrp" class="pl-2">
                  <b-form-checkbox name="email" id="gdpr_email" v-model="can.email">
                    Email
                  </b-form-checkbox>
                </b-form-group>

                <p class="my-4 small">
                  You can unsubscribe at any time by clicking the link in the footer of our emails. For information
                  about our privacy practices, please visit our website.
                </p>

                <p class="small">
                  We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your
                  information will be transferred to Mailchimp for processing.<br>
                  To learn more about Mailchimp privacy practices, <a href="https://mailchimp.com/legal/"
                                                                      target="_blank" class="text-underline"
                  >click here.</a>
                </p>

              </div>

              <b-card-footer class="text-right">

                <b-button type="submit" value="Subscribe" name="subscribe" class="mt-2 ml-auto" variant="success"
                          :disabled="!can.email"
                >
                  Subscribe
                </b-button>

              </b-card-footer>

              <template v-if="form.error.count > 0">

                <div class="alert mt-1 bg-red-700">
                  {{ form.error.message }}
                </div>

              </template>

            </b-form>

            <!-- End Mailchimp Signup Form -->

          </b-card>

        </template>

      </v-modal>

    </template>

  </div>

</template>

<script>

import Form from '@/utility/Form'

export default {

  name: 'ModalMailingList',

  data: () => ({

    form: new Form({
      email: ''
    }),

    can: {
      email: false
    },

    subscribed: {
      email: ''
    }

  }),

  computed: {

    validEmail () {
      const mail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      return mail.test(this.form.input.email)
    }

  },

  mounted () {
    this.subscribed.email = localStorage ? (localStorage.getItem('network.email') || '') : ''
  },

  methods: {

    async subscribe () {
      // const headers = new Headers()
      // headers.append('Content-Type', 'application/json')

      const request = await this.form.submit(input => this.$http.post('subscribe', input))

      if (request.success) {
        if (localStorage) {
          localStorage.setItem('network.email', this.form.input.email)
        }

        // Set copy of subscribed e-mail
        this.subscribed.email = this.form.input.email.slice()

        this.exit()
      }

      // fetch('https://api.esprofiler.com/pes/v1/pub/subscribe', {
      //   method: 'POST',
      //   headers: headers,
      //   body: JSON.stringify(vm.input)
      // }).then(response => {
      //   if (response.ok) {
      //     if (localStorage) {
      //       localStorage.setItem('network.email', vm.input.email)
      //     }
      //
      //     this.subscribed.email = vm.input.email.slice()
      //
      //     vm.exit()
      //   }
      //
      //   return response.json()
      // }).then(data => {
      //   if (data.status === 'FAILED') {
      //     this.error = data
      //   }
      // }).catch(error => {
      //   console.error(error)
      // })
    },

    exit () {
      this.form.reset()
      this.$refs.modal.close()
    }

  }

}

</script>
