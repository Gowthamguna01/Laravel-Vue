<template>
    <div>
      <h1>Hello Vue! from Gowtham happy</h1>
      <nav>
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view></router-view> <!-- Add this to display routed components -->
    </div>
  </template>
