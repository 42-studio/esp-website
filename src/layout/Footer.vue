<template>

  <footer class="bg-gradient-dark skew skew-left-top skew-pull-top pt-8">

    <b-container fluid="md">

      <b-row>
        <div class="mx-auto mb-6">
          <brand-logo />
        </div>
      </b-row>

      <b-row>

        <b-col sm="6" lg="3">

          <h5 class="text-uppercase text-white mb-4">
            About Us
          </h5>

          <router-link :to="{ name: 'about.story' }" class="d-block text-light py-1">
            Our Story
          </router-link>

          <router-link :to="{ name: 'about.contact' }" class="d-block text-light py-1">
            Contact
          </router-link>

        </b-col>

        <b-col sm="6" lg="3">

          <h5 class="text-uppercase text-white mb-3">
            Social
          </h5>

          <a href="https://linkedin.com/company/esprofiler" target="_blank" class="d-block text-light py-1">
            LinkedIn
          </a>

        </b-col>

        <b-col md="12" lg="6">

          <h5 class="text-uppercase text-white mb-4">
            Newsletter
          </h5>

          <p class="text-light">
            Stay up-to date with our latest developments.
          </p>

          <modal-mailing-list />

        </b-col>

      </b-row>

      <hr class="bg-white opacity-3 my-4 w-100">

      <b-row class="justify-content-center">

        <router-link :to="{ name: 'info.conditions' }" class="nav-link text-light">
          Terms &amp; conditions
        </router-link>

        <router-link :to="{ name: 'info.privacy' }" class="nav-link text-light">
          Privacy policy
        </router-link>

        <router-link :to="{ name: 'info.legal' }" class="nav-link text-light">
          Legal notice
        </router-link>

      </b-row>
      <b-row class="justify-content-center footer-text-dark">
        <span class="small">ESPROFILER LIMITED, A COMPANY REGISTERED IN ENGLAND AND WALES WITH COMPANY NUMBER: 12711421, VAT NUMBER: 378676921</span>
      </b-row>

    </b-container>

  </footer>

</template>

<script>

import ModalMailingList from '@/components/Modals/MailingList'
export default {

  name: 'LayoutFooter',
  components: { ModalMailingList }

}

</script>
<style>
 .footer-text-dark {
   color: #464d58;
 }
</style>
