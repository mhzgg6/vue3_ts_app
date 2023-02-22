<template>
  <div class="test">
    <h1>测试</h1>
    <h4>{{ title }}</h4>
    <h4>{{ user.name }}</h4>
    <button @click="change">按钮</button>
    <h4>{{ state }}</h4>
    <h4>{{ state1 }}</h4>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef, reactive } from 'vue'
type Person = {
  name: string,
  age: number,
  gender?: string
}

const title = ref<string>('hello world')
const user = reactive<Person>({
  name: 'mhz',
  age: 18
})

//  toRef
//  原始对象 非响应式 数据会变 视图不会更新
const obj = {
  name: '树哥',
  age: 18
}
const obj1 = reactive({
  name: 'mhz',
  age: 20
})
const state = toRef(obj, 'age')
const state1 = toRef(obj1, 'age')
const change = () => {
  state.value ++
  state1.value ++
  console.log('obj:', obj, 'state:', state);
}

</script>

<style lang="scss" scoped></style>
