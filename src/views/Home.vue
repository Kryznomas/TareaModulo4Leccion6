<template>
  <div class="home">
    <BotonRouter msg="Hola, soy el Home" />
  </div>
</template>

<script>

import BotonRouter from "@/components/BotonRouter.vue";

export default {
  name: "Home",
  components: {
    BotonRouter
  }
};
</script>
<style scoped lang="scss">

</style>
