<template>
  <div class="container-fluid" style="margin-top: 30px">
    <div class="card">
      <div
        class="card-content"
        style="padding-top: 10px"
        @click="$router.push('/')"
      >
        <div class="content">Your cart is empty...</div>
      </div>
      <footer class="card-footer">
        <router-link to="/" class="card-footer-item">Products</router-link>
        <a href="#" class="card-footer-item"></a>
      </footer>
    </div>
    <hr/>
    <PostCard :card="card" type="cart" :index="card.id"></PostCard>
    <hr/>
    <CouponCard type="cart"/>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import CouponCard from "@/components/CouponCard.vue";

export default {
  components: {
    PostCard,
    CouponCard,
  },
  data: () => ({
    card: {
      id: 1,
      name: "Product Name",
    },
  }),
};
</script>
