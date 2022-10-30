<template>
  <div class="wrapper">
    <Heading />

    <Introduction />

    <WhiteSection class="white-section">
      <Understanding />
      <Analytics />
    </WhiteSection>

    <!-- <CompanyValues />

    <esp-background
      image="backgrounds/night-city-2.jpg"
      color="#f7f7f7"
      class="skew-left-bottom"
    />

    <esp-background
      image="backgrounds/node.jpg"
      color="#f7f7f7"
      class="skew-left"
    />

    <RequestDemo />

    <esp-background
      image="backgrounds/night-city-fence.jpg"
      color="#f7f7f7"
      class="skew-right-top"
    /> -->
  </div>
</template>

<script>
import Analytics from "./Section/Analytics";
import CompanyValues from "./Section/CompanyValues";
import RequestDemo from "./Section/RequestDemo";
import Introduction from "./Section/Introduction";
import Heading from "./Section/Heading";
import WhiteSection from "./Section/WhiteSection.vue";
import Understanding from "./Section/Understanding";

export default {
  components: {
    Heading,
    Introduction,
    WhiteSection,
    RequestDemo,
    CompanyValues,
    Analytics,
    Understanding
  }
};
</script>

<style>
.white-section {
  margin-bottom: 10rem;
}
</style>
