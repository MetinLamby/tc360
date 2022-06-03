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
      <p>you are signed in as {{this.$store.state.userData.email}}</p>
      <p>these are your roles: </p>
      <ul>
        <li v-for="item in this.$store.state.userData.roles" :key="item.id">
          {{item}}
        </li>
      </ul>
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
