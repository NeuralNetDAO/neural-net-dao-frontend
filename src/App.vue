<template>
  <v-app>
    <v-app-bar
      elevation="0"
      color="background"
    >
      <v-app-bar-title class="font-weight-bold">NeuralNet</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" variant="text" class="text-body-1">Home</v-btn>
      <v-btn to="/vision" variant="text" class="text-body-1">Vision</v-btn>
      <v-btn to="/mission" variant="text" class="text-body-1">Mission</v-btn>
      <v-btn to="/problems" variant="text" class="text-body-1">Problems</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="bg-surface text-center d-flex flex-column">
      <div class="pb-4 pt-4">
        <strong>NeuralNet</strong> — {{ new Date().getFullYear() }}
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --primary-color: #00A3FF;
  --secondary-color: #14B8A6;
}

body {
  font-family: 'Inter', sans-serif;
}
</style>
