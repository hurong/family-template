<template>
  <div class="management pt-20">
    <div class="famity-menu">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class Management extends Vue{
  title: string = 'Management Page!';
}
</script>
