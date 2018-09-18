<template>
  <div class="header c fz14">
    <Row>
      <i-col span="8">
        <div class="t-left m-l10 header-item">
          <Row type="flex">
            <i-col>
              <div class="login-img">
                <img src="../../assets/u23.png"/>
              </div>
            </i-col>
            <i-col>
              <div class="login-name">2018雁栖湖企业家论坛 <br>伟大时代 光明未来</div>
            </i-col>
          </Row>
        </div>
      </i-col>
      <i-col span="8">
        <div class="t-left m-l10 header-item t-center">
          <h3 class="c theme-name">{{title}}</h3>
          <div class="c theme-plan">目标传播量:<span>150,000,000</span>人次</div>
        </div>
      </i-col>
      <i-col span="8">
        <div class="t-left m-l10 header-item t-right header-time">2018/09/05 08:15:07 星期三</div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      title: ''
    },
    methods: {}
  }
</script>

<style scoped>
  .header {
    height: 100px;
  }

  .header-item {
    height: 100px;
  }

  .login-img {
    height: 100%;
    width: 106px;
  }

  .login-name {
    margin-left: 5px;
    height: 100px;
    font-weight: bold;
    padding: 15px 0px;
    line-height: 25px;
  }

  .login-img img {
    height: 80px;
    width: 100%;
    padding: 15px 0px;
  }

  .theme-name {
    line-height: 50px;
    font-size: 32px;
  }

  .theme-plan {
    line-height: 50px;
  }

  .theme-plan span {
    display: inline-block;
    margin: 0px 5px;
    font-size: 20px;
    color: #FF9342
  }

  .header-time {
    padding: 15px 5px;
    line-height: 20px;
    font-weight: bold;
    height: 50px;
  }
</style>
