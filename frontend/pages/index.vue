<template>
  <div
    class="container"
    style="padding: 0px 10px; height: 90%; overflow: auto"
  >
    <LoadingCard v-if="loading" :loading="loading"></LoadingCard>
    <template v-else v-for="(card, index) in postCards">
      <PostCard :card="card" type="list" :index="index"></PostCard>
    </template>
  </div>
</template>

<script>
import LoadingCard from "@/components/LoadingCard.vue";
import PostCard from "@/components/PostCard.vue";

export default {
  name: "Home",
  components: {
    LoadingCard,
    PostCard,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    this.loading = false;
  },
  computed: {
    postCards() {
      return [
        {
          id: 5,
          name: "KIM",
        },
        {
          id: 6,
          name: "JO",
        },
        {
          id: 6,
          name: "QO",
        },
        {
          id: 6,
          name: "WO",
        },
      ];
    },
  },
};
</script>
