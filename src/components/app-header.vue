<template>
  <header class="main-header flex items-center justify-between">
    <div class="logo uppercase">
      <h2>Mister Toy</h2>
    </div>
    <nav class="flex gap-1">
      <router-link class="link" to="/">Home</router-link> |
      <router-link class="link" to="/toy">Toys</router-link> |
      <router-link class="link" to="/toy/chart">Charts</router-link>
    </nav>
  </header>
</template>
