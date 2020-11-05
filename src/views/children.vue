<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
import { watchEffect } from 'vue';
export default {
    props: {
       name: String
    },
    setup(props) {
      console.log(props.name);
      watchEffect(() => {
          console.log(`name is: ` + props.name)
      })
    }
}
</script>

<style scoped>

</style>