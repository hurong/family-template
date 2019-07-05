<template>
  <div class="content">
    <!-- <div class="family-title">{{ title }}
    </div> -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class App extends Vue {
  title: string = 'Family';
}
</script>

<style>
.family-title {
  color: #39a0ce;
  text-align: center;
  font-size: 20px;
  box-sizing: border-box;
}
</style>

