<template>
  <div class="main-component">
    <MainComponentHeader />
    <MainComponentSlider />
    <MainComponentThird />
    <MainComponentFooter />
  </div>
</template>

<script>
import MainComponentHeader from "@/components/MainComponent/components/MainComponentHeader";
import MainComponentSlider from "@/components/MainComponent/components/MainComponentSlider";
import MainComponentThird from "@/components/MainComponent/components/MainComponentThird";
import MainComponentFooter from "@/components/MainComponent/components/MainComponentFooter";

export default {
  components: {
    MainComponentHeader,
    MainComponentSlider,
    MainComponentThird,
    MainComponentFooter
  }
};
</script>
