<template>
  <div class="home pt-20">
    <div class="famity-menu">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  title: string = 'Home Page!';
}
</script>
