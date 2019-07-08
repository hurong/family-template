<template>
  <div class="tel-query-info">
    <div class="form-group row">
      <label class="col-4">
        <span>{{ $t('home.01') }}:</span>
      </label>
      <div class="col-8">
        <input 
          v-model="telNumber"
          type="text" 
          class="form-control" 
          :placeholder="$t('home.02')" >
        <button type="button" class="btn" @click="queryTelInfo">
          <i class="iconfont iconRectangleCopy1"></i>
        </button>
      </div>
    </div>
    <div class="box mt-30">
      <div class="box-header">
        <h4>{{ $t('home.03') }}</h4>
      </div>
      <div class="box-body">
        <div class="form-group row">
          <label class="col-4">
            <span>{{ $t('home.04') }}:</span>
          </label>
          <div class="col-8">
            <input type="text" class="form-control" readonly v-model="telInfo.province">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-4">
            <span>{{ $t('home.05') }}:</span>
          </label>
          <div class="col-8">
            <input type="text" class="form-control" readonly v-model="telInfo.catName">
          </div>
        </div>
        <div class="form-group row">
          {{ telBasicInfo }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getTelArea } from '@/api/index';

@Component
export default class TelInfo extends Vue{
  telNumber:string = '';
  telInfo: {
    province: string,
    catName: string,
  } = {
    province: '',
    catName: '',
  };
  telBasicInfo: string = '';

  queryTelInfo() {
    getTelArea(this.telNumber)
    .then(res => {
      this.telBasicInfo = String(res).replace('__GetZoneResult_ = ', '');
    })
    .catch(error => {
      console.error(error);
    })
  }
}
</script>

<style lang="less" scoped>
.tel-query-info {
  width: 400px;
}
</style>