<template>
  <div class="management pt-20">
    <div class="famity-menu">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';

export default class Management extends Vue{
  get title(): string|TranslateResult {
    return this.$t('common.management');
  }
}
</script>
