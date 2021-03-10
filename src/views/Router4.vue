<template>
  <div>
    <botonRouter :msg=text :color=fondo></botonRouter>
  </div>
</template>
<script>

import BotonRouter from "@/components/BotonRouter.vue";
export default {
  name: "Home",
  components: {
    BotonRouter
  },
  data: function(){
    return {
      text: "Soy el Router 4",
      fondo: "rgb(17, 61, 207)",
    }
  },
};
</script>