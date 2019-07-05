<template>
  <div class="management">
    <div class="famity-menu">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class Management extends Vue{
  title: string = 'Management Page!';
}
</script>
