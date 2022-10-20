<template>
  <header>
    <base-nav
      class="navbar-main"
      id="navbar-main"
      type="transparent"
      effect="dark"
      expand
    >
      <template v-slot:brand class="left">
        <router-link to="/" class="navbar-brand mr-lg-5">
          <brand-logo />
        </router-link>
      </template>

      <template v-slot:content-header="{ closeMenu }" class="right">
        <b-link @click="closeMenu">
          <i class="fa fa-times text-white" />
        </b-link>
      </template>

      <ul
        class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto right"
      >
        <li class="nav-item">
          <router-link :to="{ name: 'index' }" custom v-slot="{ navigate }">
            <b-button
              @click="navigate"
              role="link"
              class="nav-link"
              variant="link"
            >
              Home
            </b-button>
          </router-link>
        </li>

        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <template v-slot:title>
            <router-link :to="{ name: 'about.story' }">
              <button
                role="button"
                class="btn nav-link btn-link"
                data-toggle="dropdown"
              >
                <span class="nav-link-inner--text">About</span>
                <i class="fa fa-chevron-down fa-lg" />
              </button>
            </router-link>
          </template>

          <template v-slot:default>
            <router-link :to="{ name: 'about.story' }" class="dropdown-item">
              <i class="fa fa-info" />
              About us
            </router-link>

            <router-link :to="{ name: 'about.team' }" class="dropdown-item">
              <i class="fa-solid fa-users-line" />
              Team
            </router-link>

            <router-link :to="{ name: 'about.contact' }" class="dropdown-item">
              <i class="fa fa-address-book" />
              Contact
            </router-link>

            <router-link
              :to="{ name: 'about.licensing' }"
              class="dropdown-item"
            >
              <i class="fa fa-file" />
              Licenses
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

<style lang="scss">
.navbar-main {
  padding: 0 200px;
  display: flex;
  flex-direction: row;
}

.left {
  align-self: flex-start;
}
.right {
  align-self: flex-end;
}
</style>

<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";

export default {
  name: "LayoutHeader",

  components: {
    BaseNav,
    BaseDropdown
  }
};
</script>
