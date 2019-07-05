<template>
  <div class="aside">
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/management">Management</router-link>
    </nav>
  </div>
</template>

<style>
.aside {
  width: 240px;
  color: #544747;
  position: fixed;
  left: 0;
  top: 0;
}
</style>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';

@Component({})
export default class LeftMenu extends Vue {
}
</script>


