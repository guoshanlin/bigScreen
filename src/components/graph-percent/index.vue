<template>
  <div class="graph-item fbox">
    <h3 class="graph-name fz12">{{row.name}}:</h3>
    <div class="flex graph-chart-item fz12">
      <div class="graph-chart-percent clearFix" :style="{width:row.percent +  '%'}">
        <div class="fl graph-percent t-left">{{row.percent + '%'}}</div>
        <div class="fr graph-num t-right">{{row.num}}</div>
      </div>
    </div>
    <div class="graph-icon">
      <Icon v-if="row.type == '1'" type="md-arrow-dropup" color="#FF0000" />
      <Icon v-else type="md-arrow-dropdown" color="#12AA3D" />
      <span class="fz12">{{row.floatNum + '%'}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "index",
      props: {
       row: {
         name: '',
         percent: '',
         num: '',
         floatNum: '',
         type: ''
       }
      },
    }
</script>

<style scoped>
  .graph-item{ width: 100%;}
  .graph-name{ width: 60px; text-align: right;white-space: nowrap; text-overflow: ellipsis; overflow: hidden; padding-right: 5px;}
  .graph-percent{ width: 40%;}
  .graph-num{ width: 59%;}
  .graph-chart-percent{background-color: #4F93DE; height: 100%;}
  .graph-chart-item{background-color: #5D6A77;}
  .graph-icon{ width: 75px; text-align: left; padding:0 5px;}
</style>
