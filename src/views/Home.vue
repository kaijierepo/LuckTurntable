<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>{{count}} {{obj.name}}</h2>
    <Son :name="obj.name + 111" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref, reactive, readonly } from 'vue'
import Son from './children'

export default {
  name: 'Home',
  components: { Son },
  setup() {
    const count = ref(0)
    // setInterval(() => {
    //   count.value++
    // }, 1000)
    const obj = reactive({ name: 'jacklove' })
    console.log('######################')
    
    // const count1 = ref(1)
    // const state = reactive({ count1 })

    // const count2 = ref(2)
    // state.count1 = count2.value
    // console.log(state.count1)

    const original = reactive({ count: 0 })
    const copy = readonly(original)
    console.log(copy)

    return {
      count,
      obj
    }
  }
}
</script>
