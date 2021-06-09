<template>
  <div class="card" style="margin-bottom: 30px">
    <header class="card-header">
      <div
        class="card-header-title"
      >
        <figure class="image is-24x24">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
            style="border-radius: 50%"
          />
        </figure>
        <span
          >&nbsp;{{
            card.name.length > 20 ? card.name.substring(0, 20) + "..." : card.name
          }}</span
        >
      </div>
      <a
        class="card-header-icon"
        aria-label="more options"
        v-if="type == 'list'"
        @click="toggleCard(index)"
      >
        <span class="icon">
          <i class="gg-chevron-down"></i>
        </span>
      </a>
    </header>
    <div
      class="card-image"
      v-show="activeCard == index"
    >
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div
      class="card-content"
      style="padding-bottom: 0px"
      v-show="activeCard == index"
    >
      <div class="content">
        <h4>Product Name</h4>
        Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <br />
        <a href="#">#mobile</a>
        <a href="#">#electronic</a>
      </div>
    </div>

    <div
      class="card-content"
      style="padding-top: 0px"
    >
      <div class="content">
        <br/>
        <b>1,250 $</b>
        <br />@shopname
        <br />
      </div>
    </div>
    <footer class="card-footer" v-if="type == 'list'">
      <router-link to="/cart" class="card-footer-item">Buy</router-link>
      <a href="#" class="card-footer-item"></a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
    index: Number,
    type: String,
  },
  data() {
    return {
      activeCard: undefined,
    };
  },
  methods: {
    toggleCard(i) {
      console.log(this.activeCard);
      if (this.activeCard === undefined) this.activeCard = i;
      else if (this.activeCard !== i) this.activeCard = i;
      else this.activeCard = undefined;
    },
  },
};
</script>
