<template>

  <div>
    <div class="bg-blue-200 py-6 pl-8 flex justify-end gap-2">
      <router-link to="/home" class="px-2 ml-8 bg-blue-500 rounded">Home</router-link>
      <router-link to="/about" class="px-2 mr-8 bg-blue-500 rounded">About</router-link>
    </div>

    <router-view></router-view>
  </div>

</template>
