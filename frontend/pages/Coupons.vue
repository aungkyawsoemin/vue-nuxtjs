<template>
  <div class="container" style="padding: 0px 10px; height: 90%; overflow: auto">
    <template v-for="(card, index) in 10">
      <CouponCard :card="card" :index="index" type="list"></CouponCard>
    </template>
  </div>
</template>

<script>
import CouponCard from "@/components/CouponCard.vue";

export default {
  components: { CouponCard },
};
</script>