<template>
  <div class="about">
    <h1 v-cloak>This is an about page</h1>
    <BasicButton>
      点击我
    </BasicButton>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  setup() {
    import('vue').then(res => console.log(res))
    // console.log(Vue)
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment,
    }
  },
}
</script>

<style>
[v-cloak] {
    background: red;
  /* display: none; */
}

</style>
