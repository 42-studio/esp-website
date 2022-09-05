<template>

  <esp-background image="backgrounds/fibre.jpg" class="section-content padded contact-us">

    <div class="container m-4">

      <div class="article-info">

        <h2 class="title text-white">
          Contact ESPROFILER
        </h2>

        <p class="description text-white">
          Still unsure how our products &amp; services can help <br/>
          your business with Cyber Security?
        </p>

        <p class="description text-white">
          We are more than happy to speak to you and give you a live demo.
        </p>

        <div class="info info-horizontal">

          <div class="icon icon-shape icon-shape-primary shadow rounded-circle text-white">
            <i class="fa fa-phone" />
          </div>

          <div class="description">

            <h4 class="info-title text-white">
              Contact by Phone
            </h4>

            <p class="description ml-3 text-white lead">
              +44 (0)20 3778 1580
              <br>
              Mon - Fri, 8:00-22:00
            </p>

          </div>

        </div>

      </div>

      <div class="article-form">

        <b-form @submit.prevent="send">

          <b-card bg-variant="secondary" style="opacity: 0.95;">

            <div class="swapper" :class="{ 'swapped': form.success }">

              <div class="swap-to">

                <i class="fa fa-check text-success mb-5" style="font-size: 5rem" />

                <p class="display-3">
                  Message received
                </p>

                <p>
                  We will be in touch soon, thank you.
                </p>

                <brand-icon primary="#E00C13" width="64px" height="64px" class="mt-5" />

              </div>

              <label class="w-100">

                First Name

                <b-input-group class="mt-2">

                  <b-input-group-prepend is-text>
                    <i class="fas fa-user-circle" />
                  </b-input-group-prepend>

                  <b-form-input v-model="form.input.firstName" :state="form.error.state('firstName')" required />

                  <b-form-invalid-feedback>
                    {{ form.error.get('firstName') }}
                  </b-form-invalid-feedback>

                </b-input-group>

              </label>

              <label class="w-100">

                Last Name

                <b-input-group class="mt-2">

                  <b-input-group-prepend is-text>
                    <i class="far fa-user-circle" />
                  </b-input-group-prepend>

                  <b-form-input v-model="form.input.lastName" :state="form.error.state('lastName')" />

                  <b-form-invalid-feedback>
                    {{ form.error.get('lastName') }}
                  </b-form-invalid-feedback>

                </b-input-group>

              </label>

              <label class="w-100">

                Email address

                <b-input-group class="mt-2">

                  <b-input-group-prepend is-text>
                    <i class="fa fa-at" />
                  </b-input-group-prepend>

                  <b-form-input v-model="form.input.email" :state="form.error.state('email')" type="email" required />

                  <b-form-invalid-feedback>
                    {{ form.error.get('email') }}
                  </b-form-invalid-feedback>

                </b-input-group>

              </label>

              <label class="w-100">

                Phone Number

                <b-input-group class="mt-2">

                  <b-input-group-prepend is-text>
                    <i class="fa fa-phone" />
                  </b-input-group-prepend>

                  <b-form-input v-model="form.input.phoneNumber" :state="form.error.state('phoneNumber')" required />

                  <b-form-invalid-feedback>
                    {{ form.error.get('phoneNumber') }}
                  </b-form-invalid-feedback>

                </b-input-group>

              </label>

              <label class="w-100">

                Company Name

                <b-input-group class="mt-2">

                  <b-input-group-prepend is-text>
                    <i class="fa fa-building" />
                  </b-input-group-prepend>

                  <b-form-input v-model="form.input.companyName" :state="form.error.state('companyName')" required />

                  <b-form-invalid-feedback>
                    {{ form.error.get('companyName') }}
                  </b-form-invalid-feedback>

                </b-input-group>

              </label>

              <label class="w-100">

                Job Title

                <b-input-group class="mt-2">

                  <b-input-group-prepend is-text>
                    <i class="fa fa-briefcase" />
                  </b-input-group-prepend>

                  <b-form-input v-model="form.input.jobTitle" :state="form.error.state('jobTitle')" required />

                  <b-form-invalid-feedback>
                    {{ form.error.get('jobTitle') }}
                  </b-form-invalid-feedback>

                </b-input-group>

              </label>

              <label class="w-100">

                Your message

                <b-input-group class="mt-2">

                  <b-input-group-prepend is-text>
                    <i class="fa fa-comment" />
                  </b-input-group-prepend>

                  <b-form-textarea v-model="form.input.message" :state="form.error.state('message')" required />

                  <b-form-invalid-feedback>
                    {{ form.error.get('message') }}
                  </b-form-invalid-feedback>

                </b-input-group>

              </label>

              <input-newsletter v-model="form.input.marketing" />

              <div class="spacer" />

              <div class="text-right mt-2">

                <b-button type="submit" :variant="condition.state" :disabled="form.loading" class="swapper" :class="{ 'swapped': form.loading }">

                  <div class="swap-to">
                    <b-spinner small />
                  </div>

                  <span>
                    {{ condition.text }}
                    <i :class="condition.icon" class="ml-3" />
                  </span>

                </b-button>

              </div>

            </div>

          </b-card>

        </b-form>

      </div>

    </div>

  </esp-background>

</template>

<script>
import Form from '@/utility/Form'

export default {

  name: 'ViewContact',

  data: () => ({

    form: new Form({
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      companyName: '',
      phoneNumber: '',
      message: '',
      marketing: false
    })

  }),

  computed: {

    condition () {
      if (this.form.error.fatal) {
        return {
          state: 'danger',
          text: 'Retry',
          icon: 'fa fa-redo'
        }
      }

      if (this.form.success) {
        return {
          state: 'success',
          text: 'Success',
          icon: 'fa fa-check'
        }
      }

      return {
        state: 'primary',
        text: 'Send Message',
        icon: 'far fa-paper-plane'
      }
    }

  },

  methods: {

    send () {
      this.form.submit(input => this.$http.post('contact', input))
    }

  }

}
</script>

<style lang="scss">

.contact-us {

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;

  .container {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    background-color: rgba(10, 10, 10, 0.2);
    backdrop-filter: blur(15px);
    border-radius: 12px;

    > div {
      padding: 2.5vw;
      flex-grow: 1;
      width: 50%;
    }
  }

  .article-info {

    .info {

      padding: 0;
      margin: 0;

      &:first-child {
        margin-top: 30px;
      }

      .info-title {
        margin-top: 20px;
      }

      .icon {
        margin-top: 19px;
      }

    }

  }

  .article-form {

    form, .card {
      height: 100%;
      margin: 0;
    }

  }

  @media screen and (max-width: 1200px) {

    .container {

      > div {
        padding: 4vw;
        width: 100%;
      }

    }

  }

}

</style>
