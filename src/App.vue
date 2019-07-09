<template>
  <div class="content">
    <family-header></family-header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FamilyHeader from '@/components/FamilyHeader.vue';

@Component({
  components: {
    FamilyHeader,
  }
})
export default class App extends Vue {
  title: string = 'Family';
}
</script>

<style lang="less" scoped>
@bgColor: #f5f5f5;
.content {
  background-color: @bgColor;
}
</style>


