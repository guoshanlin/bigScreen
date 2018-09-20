<template>
    <div class="border-box">
      <div class="border-top-right"></div>
      <div class="border-bottom-right"></div>
      <div class="hf">
        <slot></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  /*边框四角加粗，颜色加深*/
  .border-box{
    border:2px solid #4E90DA;
    min-width: 60px;
    min-height:60px;
    position: relative;
  }
  .border-box:before{
    content: '';
    position: absolute;
    width:20px;
    height: 20px;
    top:-4px;
    left:-4px;
    border-left: 3px solid #FFFFFF;
    border-top: 3px solid #FFFFFF;
  }
  .border-top-right{
    position: absolute;
    width:20px;
    height: 20px;
    top:-4px;
    right:-4px;
    border-right: 3px solid #FFFFFF;
    border-top: 3px solid #FFFFFF;
  }
  .border-bottom-right{
    position: absolute;
    width:20px;
    height: 20px;
    right: -4px;
    bottom:-4px;
    border-right: 3px solid #FFFFFF;
    border-bottom: 3px solid #FFFFFF;
  }
  .border-box:after{
    content: '';
    position: absolute;
    width:20px;
    height: 20px;
    left: -4px;
    bottom:-4px;
    border-left: 3px solid #FFFFFF;
    border-bottom: 3px solid #FFFFFF;
  }
</style>
