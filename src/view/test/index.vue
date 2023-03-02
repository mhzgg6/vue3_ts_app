<template>
  <div class="test">
    <h1>测试</h1>
    <h4>{{ title }}</h4>
    <h4>{{ user.name }}</h4>
    <button @click="change">按钮</button>
    <h4>{{ state }}</h4>
    <h4>{{ state1 }}</h4>
    <h4>count</h4>
    <span>{{ count }}</span
    >--
    <span>{{ relCount }}</span>
    <h4>-----watch------</h4>
    <h4>{{ str }}</h4>
    <h4>{{ age }}</h4>
    <h4>{{ tom.age }}-{{ tom.name }}</h4>

    <h3>打开弹框</h3>
    <div id="modal"></div>
    <button class="btn1" @click="openModal">打开模态框</button>
    <modal :isOpen="modalIsOpen" @close-dialog="onCloseDialog">
      My Modal!!!
    </modal>

    <Children ref="childRef" :title="title" @changeTitle="changeTitle">
      <template v-slot:content="tip">
        <div>hhh</div>
        <div>{{ tip.age }}</div>
      </template>
    </Children>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef, reactive, computed, watch } from 'vue'
import Children from './Children.vue'
import Modal from "./Teleport.vue"

type Person = {
  name: string
  age: number
  gender?: string
}

const tip = ref('dddd')
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
  state.value++
  state1.value++
  console.log('obj:', obj, 'state:', state)
}

const count = ref(200)
const relCount = computed(() => count.value + 1)

//  监听多个 ref
const str = ref('彼时此刻')
const age = ref(18)
setTimeout(() => {
  str.value = '哈哈哈哈哈哈'
  age.value = 20
}, 2000)

watch([str, age], (newVal, oldVal) => {
  console.log('watch-str:', newVal, oldVal)
  console.log('watch-str:', newVal, oldVal)
})
//  监听reactive
const tom = reactive({
  name: 'tom',
  age: 100
})
setTimeout(() => {
  tom.age = 200
}, 2000)
watch(
  () => tom.age,
  (newVal, oldVal) => {
    console.log('watch-tom:', newVal, oldVal)
  }
)

const changeTitle = (msg: string) => {
  console.log(msg, 'msg')
}

//  通过 ref 获取子组件属性
const childRef = ref<HTMLElement | null>(null)
// console.log(childRef.value?.date);


//添加响应式对象控制是否显示
const modalIsOpen = ref(false)
  //打开模态框事件
  const openModal = () => {
    modalIsOpen.value = true
  }
  //关闭模态框事件
  const onCloseDialog = () => {
    modalIsOpen.value = false
  }

</script>

<style lang="scss" scoped></style>
