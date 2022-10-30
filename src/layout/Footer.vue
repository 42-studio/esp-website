<template>
  <footer>
    <div class="footer-wrapper">
      <b-row>
        <div class="mx-auto mb-5">
          <brand-logo />
        </div>
      </b-row>

      <b-row>
        <b-col sm="6" lg="3">
          <h5 class="text-white font-weight-bold title-footer">
            About Us
          </h5>

          <router-link
            :to="{ name: 'about.story' }"
            class="d-block footer-links py-1"
          >
            Our Story
          </router-link>

          <router-link
            :to="{ name: 'about.contact' }"
            class="d-block footer-links py-1"
          >
            Contact
          </router-link>
        </b-col>

        <b-col sm="6" lg="3">
          <h5 class="text-white font-weight-bold title-footer">
            Social
          </h5>

          <a
            href="https://linkedin.com/company/esprofiler"
            target="_blank"
            class="d-block footer-links py-1"
          >
            LinkedIn
          </a>
        </b-col>

        <b-col md="12" lg="6">
          <h5 class="text-white font-weight-bold title-footer">
            Newsletter
          </h5>

          <p class="text-light">
            Stay up-to date with our latest developments.
          </p>

          <modal-mailing-list />
        </b-col>
      </b-row>

      <HorizontalRule class="mt-6 " />

      <b-row class="justify-content-center legal-links-container">
        <router-link :to="{ name: 'info.privacy' }" class="nav-link text-light">
          Privacy Policy
        </router-link>

        <router-link
          :to="{ name: 'info.conditions' }"
          class="nav-link text-light"
        >
          Terms &amp; Conditions
        </router-link>

        <router-link :to="{ name: 'info.legal' }" class="nav-link text-light">
          Legal Notice
        </router-link>
      </b-row>
      <b-row class="justify-content-center footer-text-dark my-4">
        <span class="small text-center"
          >ESPROFILER LIMITED, A COMPANY REGISTERED IN ENGLAND AND WALES WITH
          COMPANY NUMBER: 12711421, VAT NUMBER: 378676921</span
        >
      </b-row>
    </div>
  </footer>
</template>

<script>
import ModalMailingList from "@/components/Modals/MailingList";
import HorizontalRule from "./HorizontalRule.vue";
export default {
  name: "LayoutFooter",
  components: { ModalMailingList, HorizontalRule }
};
</script>

<style>
footer {
  padding: 0 var(--body-padding);
}

.footer-wrapper {
  max-width: 1920px;
  margin: 0 auto;
}

.title-footer {
  margin-top: 2rem;
}

.footer-links {
  font-size: 1rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6) !important;
  transition: color 200ms ease;
}

.footer-links:hover {
  color: rgba(255, 255, 255, 1) !important;
}

.legal-links-container {
  gap: 3rem;
}

.footer-text-dark {
  color: #464d58;
}
</style>
