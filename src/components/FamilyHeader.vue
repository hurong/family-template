<template>
  <header>
    <select v-model="selectedLanguage" class="mt-20">
      <option disabled value="">请选择</option>
      <option value="zh-CN">中文(Chinese)</option>
      <option value="en-US">英文(English)</option>
    </select>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator';
import Vue from 'vue';

@Component({})
export default class FamilyHeader extends Vue {
  selectedLanguage: string = 'zh-CN';

  @Watch('selectedLanguage')
  onLanguageChange(newVal: string, oldVal: string) {
    this.$store.commit('CHANGE_LANGUAGE', newVal);
    this.$i18n.locale = newVal;
  }
  
}
</script>