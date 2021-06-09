<template>
  <div class="card" style="margin-bottom: 30px">
    <header class="card-header">
      <div class="card-header-title">
        <figure class="image is-24x24">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
            style="border-radius: 50%"
          />
        </figure>
        <span>&nbsp;Coupon Name {{ type }}</span>
      </div>
      <a
        class="card-header-icon"
        aria-label="more options"
        v-show="type === 'list'"
      >
        <span class="icon">
          <i class="gg-chevron-right"></i>
        </span>
      </a>
    </header>
    <div
      class="card-content"
      style="padding-top: 0px"
      @click="$router.push({ name: 'Post', params: { id: card.id } })"
    >
      <div class="content">
        <br />
        <b>15% discount</b> @shopname
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
    index: Number,
    type: String,
  },
}
</script>