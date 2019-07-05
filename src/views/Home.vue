<template>
  <div class="home">
    <div class="famity-menu">
      <h3>{{ title }}</h3>
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
