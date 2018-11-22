<template>
  <div>
    <h1>{{ msg }}</h1>
    {{user.uid}}
    {{today}}

  </div>
</template>
<script>

import firebase from 'firebase'

export default {
  props: ["today", "user"],
  name: 'app',
  data () {
    return {
      msg: 'MessageBoard Component'
    }
  },
  methods: {

  },
    created() {

    }
}
</script>

<style lang="scss">

</style>
