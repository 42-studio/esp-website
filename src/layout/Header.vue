<template>

  <header>

    <base-nav class="navbar-main" id="navbar-main" type="transparent" effect="dark" expand>

      <template v-slot:brand>

        <router-link to="/" class="navbar-brand mr-lg-5">
          <brand-logo />
        </router-link>

      </template>

      <template v-slot:content-header="{ closeMenu }">
        <b-link @click="closeMenu">
          <i class="fa fa-times text-white" />
        </b-link>
      </template>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">

        <li class="nav-item">
          <router-link :to="{ name: 'solutions.overview' }" custom v-slot="{ navigate }">
            <b-button @click="navigate" role="link" class="nav-link" variant="link">
              Solutions
            </b-button>
          </router-link>
        </li>

        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">

          <template v-slot:title>

            <button role="button" class="btn nav-link btn-link" data-toggle="dropdown">
              <i class="fa fa-chevron-down fa-lg" />
              <span class="nav-link-inner--text">Products</span>
            </button>

          </template>

          <template v-slot:default>

            <div class="dropdown-menu-inner">

              <router-link :to="{ name: 'product.esp-platform' }" class="media d-flex align-items-center">
                <div class="icon">
                  <brand-icon primary="#E00C13" />
                </div>
                <div class="media-body ml-3">
                  <h6 class="heading text-primary mb-md-1">
                    ESP Platform
                  </h6>
                  <p class="description d-none d-md-inline-block mb-0">
                    Our Enterprise M.C.I.R Solution.
                  </p>
                </div>
              </router-link>

<!--              <router-link :to="{ name: 'product.exchange' }" class="media d-flex align-items-center">-->
<!--                <div class="icon">-->
<!--                  <brand-icon primary="#E09D0C" />-->
<!--                </div>-->
<!--                <div class="media-body ml-3">-->
<!--                  <h6 class="heading text-primary mb-md-1">-->
<!--                    Exchange-->
<!--                  </h6>-->
<!--                  <p class="description d-none d-md-inline-block mb-0">-->
<!--                    Security product coverage exchange.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </router-link>-->

<!--              <hr>-->

<!--              <router-link :to="{ name: 'product.cdm.builder' }" class="media d-flex align-items-center">-->
<!--                <div class="icon">-->
<!--                  <brand-icon primary="bluegrey" />-->
<!--                </div>-->
<!--                <div class="media-body ml-3">-->
<!--                  <h6 class="heading text-primary mb-md-1">-->
<!--                    FDM Builder-->
<!--                  </h6>-->
<!--                  <p class="description d-none d-md-inline-block mb-0">-->
<!--                    <strong>FREE</strong> Framework Description Model builder.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </router-link>-->

              <router-link :to="{ name: 'product.cdm.builder' }" class="media d-flex align-items-center">
                <div class="icon">
                  <brand-icon primary="#0C67E0" />
                </div>
                <div class="media-body ml-3">
                  <h6 class="heading text-primary mb-md-1">
                    CDM Builder
                  </h6>
                  <p class="description d-none d-md-inline-block mb-0">
                    <strong>FREE</strong> Capability Description Model builder.
                  </p>
                </div>
              </router-link>

            </div>

            <hr class="m-4">

            <div class="dropdown-menu-footer pt-0">

<!--              <router-link :to="{ name: 'solutions.cdm.schema' }" class="dropdown-item">-->
<!--                <i class="fa fa-graduation-cap fa-lg ml-2" />-->
<!--                VD Framework-->
<!--              </router-link>-->

              <router-link :to="{ name: 'solutions.cdm.schema' }" class="dropdown-item">
                <i class="fa fa-graduation-cap fa-lg ml-2" />
                Capability Description Model
              </router-link>

            </div>

          </template>

        </base-dropdown>

        <base-dropdown class="nav-item">

          <template v-slot:title>

            <button role="button" class="btn nav-link btn-link" data-toggle="dropdown">
              <i class="fa fa-chevron-down fa-lg" />
              <span class="nav-link-inner--text">About</span>
            </button>

          </template>

          <template v-slot:default>

            <router-link :to="{ name: 'about.story' }" class="dropdown-item">
              <i class="fa fa-project-diagram" />
              About Us
            </router-link>

            <router-link :to="{ name: 'about.licensing' }" class="dropdown-item">
              <i class="fa fa-cog" />
              License
            </router-link>

            <router-link :to="{ name: 'about.contact' }" class="dropdown-item">
              <i class="fa fa-cog" />
              Contact Information
            </router-link>

          </template>

        </base-dropdown>

        <li class="nav-item">
          <router-link :to="{ name: 'schedule.demo' }">
            <b-button variant="outline-white">
              Schedule A Demo
            </b-button>
          </router-link>
        </li>

      </ul>

    </base-nav>

  </header>

</template>

<script>

import BaseNav from '@/components/BaseNav'
import BaseDropdown from '@/components/BaseDropdown'

export default {

  name: 'LayoutHeader',

  components: {
    BaseNav,
    BaseDropdown
  }

}
</script>
