<template>
  <div class="test-children"> 
    <p>{{ title }}</p>
    <button @click="onChangeTitle">ssssss</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
type Props = {
  title: string
}

const date = ref(1111)
withDefaults(defineProps<Props>(), {
  title: 'gg'
})

const emits = defineEmits(['changeTitle'])
const onChangeTitle = () => {
  emits('changeTitle', '黄石路')
}

//  defineExpose  获取子组件的示例和内部属性
//  在 script-setup 模式下 数据默认return 给 template 使用 不会暴露到组件外 
//  将方法 变量暴露给父组件使用 父组件才可以通过 ref api 拿到子组件暴露的数据
defineExpose({
  date
})
</script>

<style lang='scss' scoped>
</style>