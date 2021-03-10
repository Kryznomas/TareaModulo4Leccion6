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
      text: "Soy el Router 1",
      fondo: "rgb(255, 127, 80)",
    }
  },
};
</script>

