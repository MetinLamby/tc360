<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->


<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo3.png">
      <HelloWorld msg="Solaris Bank Terms & Conditions UI Copy"/>
    </div>
    <!-- <v-container> -->
      <p>{{this.$store.state.userData.email}} has roles: {{this.$store.state.userData.roles}}</p>
    <!-- </v-container> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
