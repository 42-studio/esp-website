<template>
  <header>
    <base-nav id="navbar-main" type="transparent" effect="dark" expand>
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
          <router-link :to="{ name: 'index' }" custom v-slot="{ navigate }">
            <b-button @click="navigate" role="link" class="nav-link" variant="link">
              Home
            </b-button>
          </router-link>
        </li>

        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">

          <template v-slot:title>

            <router-link :to="{ name: 'about.story' }">
              <button role="button" class="btn nav-link btn-link" data-toggle="dropdown">
                <span class="nav-link-inner--text">Use Cases</span>
                <i class="fa fa-chevron-down fa-lg" />
              </button>
            </router-link>

          </template>

          <template v-slot:default>
            <router-link :to="{ name: 'use-case.ownership' }" class="dropdown-item">
              <font-awesome-icon icon="fa-solid fa-boxes-stacked" />
              What do we own?
            </router-link>

            <router-link :to="{ name: 'use-case.capability' }" class="dropdown-item">
              <font-awesome-icon icon="fa-solid fa-shield-halved" />
              What should it do?
            </router-link>

            <router-link :to="{ name: 'use-case.utilisation' }" class="dropdown-item">
              <font-awesome-icon icon="fa-solid fa-circle-nodes" />
              What is deployed?
            </router-link>

            <router-link :to="{ name: 'use-case.gaps-overlaps' }" class="dropdown-item">
              <font-awesome-icon icon="fa-solid fa-ranking-star" />
              Where are our gaps & overlaps?
            </router-link>

            <router-link :to="{ name: 'about.efficacy' }" class="dropdown-item">
              <font-awesome-icon icon="fa-solid fa-bomb" />
              Is it working?
            </router-link>

          </template>
        </base-dropdown>

        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <template v-slot:title>
            <router-link :to="{ name: 'about.story' }">
              <button
                role="button"
                class="btn nav-link btn-link"
                data-toggle="dropdown"
              >
                <span>About</span>
                <i class="fa fa-chevron-down fa-lg" />
              </button>
            </router-link>
          </template>

          <template v-slot:default>
            <router-link :to="{ name: 'about.story' }" class="dropdown-item">
              <i class="fa fa-info" />
              Our Story
            </router-link>

            <router-link :to="{ name: 'about.team' }" class="dropdown-item">
              <font-awesome-icon icon="fa-solid fa-people-group" />
              Team
            </router-link>

            <router-link :to="{ name: 'about.contact' }" class="dropdown-item">
              <font-awesome-icon icon="fa-solid fa-envelope" />
              Contact
            </router-link>

          </template>
        </base-dropdown>

        <li class="nav-item demo-btn">
          <router-link :to="{ name: 'schedule.demo' }">
            <button class="button">
              Schedule a Demo
            </button>
          </router-link>
        </li>
      </ul>
    </base-nav>
  </header>
</template>

<style lang="scss">
header {
  z-index: 10;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;

  padding: 0 var(--body-padding);

  display: flex !important;
  justify-content: center;
  align-items: center;

  background: rgb(22, 12, 40, 0.6);
  background: linear-gradient(
      180deg,
      rgba(22, 12, 40, 1) 0%,
      rgba(22, 12, 40, 0.5) 78%,
      rgba(22, 12, 40, 0) 100%
  );
}

.button {
  width: 10rem;
  height: 2.7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 52px !important;
  background-color: var(--primary);
  color: white;
  outline: none;
  border: none;
  text-align: unset;

  transition: all 200ms ease;
}

.button:hover {
  background-color: var(--primary);
  transform: scale(1.05);
}

.navbar-collapse {
  width: auto !important;
}

@media (max-width: 992px) {
  .demo-btn {
    margin-top: 1rem;
  }
}
</style>

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
