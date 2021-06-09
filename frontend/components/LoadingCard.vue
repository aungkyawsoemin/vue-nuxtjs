<template>
  <div class="animationLoading" v-show="loading === true">
    <div id="animate-container">
      <div id="one"></div>
      <div id="two"></div>
      <div id="three"></div>
    </div>
    <div id="four"></div>
    <div id="five"></div>
    <div id="six"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.animationLoading {
  background: #fff;
  border: 1px solid;
  border-color: #e5e6e9;
  border-radius: 3px;
  display: block;
  padding: 12px;
  height: 160px;
}
@keyframes animate {
  from {
    transition: none;
  }
  to {
    background-color: #f6f7f8;
    transition: all 0.3s ease-out;
  }
}

#one,
#two,
#three,
#four,
#five,
#six {
  position: relative;
  background-color: #CCC;
  height: 6px;
  animation-name: animate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

#one {
  left: 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

#two {
  left: 50px;
  top: -33px;
  width: 25%;
}

#Three {
  left: 50px;
  top: -20px;
  width: 15%;
}

#four {
  left: 0px;
  top: 30px;
  width: 80%;
}

#five {
  left: 0px;
  top: 45px;
  width: 90%;
}

#six {
  left: 0px;
  top: 60px;
  width: 50%;
}
</style>


