<template>
  <div class="main">
    <div :style="{backgroundColor: color}" class="btn">
    {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: "BotonRouter",
  props: {
    msg: String,
    color: String
  },
  data: function(){
    return {

    }}
};
</script>

<style scoped lang="scss">
.main{
  display: flex;
  justify-content: center;
}
.btn {
  padding: 2rem;
  border: solid 1px rgb(82, 82, 82);
  box-shadow: 3px 3px 3px black;
  width: 30%;
  text-align: center;
  color:white;
  background-color: rgb(187, 111, 149);
}
</style>
