<template>
  <div class="home pt-20">
    <div class="famity-menu">
      <h2>{{ title }}</h2>
    </div>
    <div class="flex-center">
      <tel-info></tel-info>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TelInfo from '@/viewComponents/home/TelInfo.vue';
import { TranslateResult } from 'vue-i18n';

@Component({
  components: {
    TelInfo,
  },
})
export default class Home extends Vue {
  get title(): string|TranslateResult {
    return this.$t('common.home');
  }
}
</script>

