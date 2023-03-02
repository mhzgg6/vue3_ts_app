<template>
  <teleport to="body">
    <div id="center" v-if="isOpen">
      <h2><slot>this is a modal</slot></h2>
      <button class="btn2" @click="buttonClick">Close</button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import {} from 'vue'
type Props = {
  isOpen: boolean
}

withDefaults(defineProps<Props>(), {
  isOpen: false
})
// console.log(isOpen);


const emits = defineEmits(['close-dialog'])
const buttonClick = () => {
  emits('close-dialog', '打开')
}
</script>

<style scoped>
#center{
    width:200px;
    height:200px;
    border:2px solid rgb(105, 165, 56);
    text-align: center;
    border-radius: 2px;
    margin: 50px auto 0;
}
.btn2{
  background: #1971c9;
  border:none;
  padding: 8px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
</style>
