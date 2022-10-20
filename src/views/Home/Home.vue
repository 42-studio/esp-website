<template>
  <div class="wrapper">
    <Heading />

    <CompanyValues />

    <Introduction />

    <esp-background
      image="backgrounds/night-city-2.jpg"
      color="#f7f7f7"
      class="skew-left-bottom"
    />

    <Analytics />

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
    />
  </div>
</template>

<script>
import Analytics from "./Section/Analytics";
import CompanyValues from "./Section/CompanyValues";
import RequestDemo from "./Section/RequestDemo";
import Introduction from "./Section/Introduction";
import Heading from "./Section/Heading";

export default {
  components: { Heading, Introduction, RequestDemo, CompanyValues, Analytics }
};
</script>

<style></style>
