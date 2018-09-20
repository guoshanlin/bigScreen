<template>
  <div class="bg-screen c">
    <div class="wrapper-border fz14 hf">
      <v-header title="问鼎雁栖湖"></v-header>
      <div style="height: calc(100% - 80px)">
        <div class="height-upper">
          <Row :gutter="10" class="hf">
            <i-col span="5" class="hf">
              <div class="height-calculation">
                <div class="hp60">
                  <div class="chart-circle hp70" id="chart-circle1"></div>
                  <h3 class="t-center c fz20 hp30">达成率</h3>
                </div>
                <div class="hp40">
                  <Row class="c fz16 t-center hf" :gutter="10">
                    <i-col span="8" class="hf">
                      <div id="gauge1" class="chart-gauge hf"></div>
                    </i-col>
                    <i-col span="8" class="hf">
                      <div id="gauge2" class="chart-gauge hf"></div>
                    </i-col>
                    <i-col span="8" class="hf">
                      <div id="gauge3" class="chart-gauge hf"></div>
                    </i-col>
                  </Row>
                </div>
              </div>
            </i-col>
            <i-col span="14" class="hf">
              <div class="height-calculation bg-border p-10">
                <Row class="hp50">
                  <i-col span="12" class="hf">
                    <i-border class="m-r20 hf">
                      <div class="fbox fz20 hf c p-10">
                        <div class="flex hf">
                          <div class="fz24 hp50">1,000</div>
                          <div class="td-render hp50">今日浏览量(万)</div>
                        </div>
                        <div class="flex hf">
                          <div class="fz24 hp50">11,010</div>
                          <div class="td-render hp50">实际浏览总量(万)</div>
                        </div>
                      </div>
                    </i-border>
                  </i-col>
                  <i-col span="12" class="hf">
                    <i-border class="m-l20 hf">
                      <div class="fbox fz20 c hf p-10">
                        <div class="flex hf">
                          <div class="fz24 hp50">10,923</div>
                          <div class="hp50">渠道总数</div>
                        </div>
                        <div class="flex hf">
                          <div class="fz24 hp50">300,000,000</div>
                          <div class="hp50">预计传播量</div>
                        </div>
                      </div>
                    </i-border>
                  </i-col>
                </Row>
                <Row class="m-t20" :gutter="10" style="height: calc(50% - 20px)">
                  <i-col span="8" class="hf">
                    <div class="amount-item hf">
                      <div class="fz24 hp50">1,244,563</div>
                      <div class="fz20 hp50">直播平台传播总量</div>
                    </div>
                  </i-col>
                  <i-col span="8" class="hf">
                    <div class="amount-item fz20 hf">
                      <div class="fz24 hp50">1,244,563</div>
                      <div class="hp50">直播平台传播总量</div>
                    </div>
                  </i-col>
                  <i-col span="8" class="hf">
                    <div class="amount-item fz20 hf">
                      <div class="fz24 hp50">1,244,563</div>
                      <div class="hp50">直播平台传播总量</div>
                    </div>
                  </i-col>
                </Row>
              </div>
            </i-col>
            <i-col span="5" class="hf">
              <div class="height-calculation">
                <div class="hp60">
                  <div class="chart-circle hp70" id="chart-circle2"></div>
                  <h3 class="t-center c fz20 m-t5 hp30">回传率</h3>
                </div>
                <div class="hp40">
                  <Row class="c fz16 t-center hf" :gutter="10">
                    <i-col span="8" class="hf">
                      <div id="gauge4" class="chart-gauge hf"></div>
                    </i-col>
                    <i-col span="8" class="hf">
                      <div id="gauge5" class="chart-gauge hf"></div>
                    </i-col>
                    <i-col span="8" class="hf">
                      <div id="gauge6" class="chart-gauge hf"></div>
                    </i-col>
                  </Row>
                </div>
              </div>
            </i-col>
          </Row>
        </div>
        <div class="height-lower">
          <Row :gutter="10" class="hf">
            <i-col span="5" class="hf">
              <div class="height-calculation">
                <div class="choose-radio t-left m-t10">
                  <RadioGroup type="button" value="1" size="small">
                    <Radio label="1">直播平台</Radio>
                    <Radio label="2">主流媒体</Radio>
                    <Radio label="3">百团大战</Radio>
                  </RadioGroup>
                </div>
                <div class="m-t5 m-r30" style="height: calc(100% - 35px);">
                  <div class="bg-tip side-item-title c t-left">传播总量Top10</div>
                  <div class="top-chart top-chart-left t-left c m-b5" id="top-chart-left">
                    <graph-percent v-for="i in [1,2,3,4,5,6,7,8,9,10]" :row="rows[i%2]" :key="i" :style=" {marginBottom: leftBottom}"></graph-percent>
                  </div>
                </div>
              </div>
            </i-col>
            <i-col span="14" class="hf">
              <div class="height-calculation">
                <div class="chart-item hp50">
                  <div class="fbox">
                    <div class="flex t-left">
                      <div class="line-tip-item c"> <span class="border-tip" style="border-bottom-color: #FFCC00"></span> 当前</div>
                      <div class="line-tip-item c"> <span class="border-tip-text" style="border-bottom-color: #B82D43"></span> 直播平台</div>
                      <div class="line-tip-item c"> <span class="border-tip-text" style="border-bottom-color: #4387B9"></span> 主流媒体</div>
                      <div class="line-tip-item c"> <span class="border-tip-text" style="border-bottom-color: #13AB3E"></span> 百团大战</div>
                      <div class="line-tip-item c"> <span class="border-tip-bar" style="border-bottom-color: #B82D43"></span> 增幅</div>
                      <div class="line-tip-item c"> <span class="border-tip-bar" style="border-bottom-color: #13AB3E"></span> 跌幅</div>
                    </div>
                    <div class="choose-radio">
                      <!--<RadioGroup @on-change="orderStatusChange" v-model="timePickerTwo.day" type="button">-->
                      <RadioGroup type="button" value="12H" size="small" class="m-t10">
                        <Radio label="12H">最近12小时</Radio>
                        <Radio label="7D">最近7天</Radio>
                      </RadioGroup>
                    </div>
                  </div>
                  <div class="bg-border m-t5 c chart-box">
                    <div id="amount-chart" class="chart-items"></div>
                  </div>
                </div>
                <div class="chart-item hp50">
                  <div class="t-left">
                    <div class="line-tip-item c"> <span class="border-tip" style="border-bottom-color: #B82D43"></span> 直播平台回传数</div>
                    <div class="line-tip-item c"> <span class="border-tip" style="border-bottom-color: #4387B9"></span> 主流媒体回传数</div>
                    <div class="line-tip-item c"> <span class="border-tip" style="border-bottom-color: #13AB3E"></span> 百团大战回传数</div>
                  </div>
                  <div class="bg-border m-t5 c chart-box">
                    <div id="channel-chart" class="chart-items"></div>
                  </div>
                </div>
              </div>
            </i-col>
            <i-col span="5" class="hf">
              <div class="height-calculation">
                <div class="choose-radio t-left m-l25 m-t10">
                  <RadioGroup type="button" value="1" size="small">
                    <Radio label="1">企业</Radio>
                  </RadioGroup>
                </div>
                <div class="m-t5 m-l25 m-r5" style="height: calc(100% - 35px);">
                  <div class="bg-tip side-item-title c t-left">企业传播量</div>
                  <div class="top-chart top-chart-right t-left m-b5 c" id="top-chart-right">
                    <Carousel autoplay :autoplay-speed="10000" v-model="value2" radius-dot arrow="never" dots="outside" class="hf">
                      <CarouselItem class="hf">
                        <graph-percent v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14]" :row="rows[i%2]" :key="i" class="" :style=" {marginBottom: rightBottom }"></graph-percent>
                      </CarouselItem>
                      <CarouselItem class="hf">
                        <graph-percent v-for="i in [2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :row="rows[i%2]" :key="i" class=" " :style=" {marginBottom:rightBottom}"></graph-percent>
                      </CarouselItem>
                    </Carousel>
                  </div>
                </div>
              </div>
            </i-col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from 'components/header';
  import iBorder from 'components/border';
  import graphPercent from 'components/graph-percent';

  export default {
    name: "screen",
    data() {
      return {
        initChart: {},
        timer: {},
        rows:[{
          name: '斗鱼斗鱼',
          percent:98,
          num: '538,746,21',
          floatNum: 16.61,
          type: '0'
        },{
          name: '快手',
          percent: 100,
          num: '213,174,821',
          floatNum: 3.14,
          type: '1'
        }],
        value2: 0,
        leftBottom: '5px',
        rightBottom: '5px'
      }
    },
    components: {
      vHeader,
      iBorder,
      graphPercent
    },
    methods: {
      loadAmountCharts () {
        let data = ["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"]
        let option = {
          color: ["#00ADFF"],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          xAxis: {
            show: true,
            type: 'category',
            axisLabel: {
              color: "#fff"
            },
            data: data,
            axisLine: {
              lineStyle: {
                color: '#38668C'
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: [
            {
              type: 'value',
              scale: true,
              name: '浏览量(万)',
              nameTextStyle: {
                color: '#fff'
              },
              axisLabel: {
                color: "#fff"
              },
              splitLine: {
                lineStyle: {
                  type: 'dotted',
                  color: '#515151'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#38668C'
                }
              },
              min: 0,
              max: 30000,
              interval: 6000,
            },
            {
              type: 'value',
              name: '增长量(%)',
              nameTextStyle: {
                color: '#fff'
              },
              scale: true,
              min: 0,
              max: 100,
              interval: 20,
              axisLabel: {
                color: "#fff"
              },
              axisLine: {
                lineStyle: {
                  color: '#38668C'
                }
              },
              splitLine: {
                lineStyle: {
                  type: 'dotted',
                  color: '#515151'
                }
              },
            },
          ],
          grid: {
            top: '15%',
            left: '1%',
            right: '1%',
            bottom: '5%',
            width: '98%',
            height: '80%',
            containLabel: true
          },
          series: [
            {
              name:'当前浏览量',
              showSymbol: false,
              type: 'line',
              itemStyle: {
                normal: {
                  color: "#FFCC00"
                }
              },
              lineStyle: {
                normal: {
                  color: "#FFCC00"
                }
              },
              data:data.map((v)=>{
                return Math.floor(Math.random() * 30000)
              })
            },
            {
              name: '直播平台浏览量',
              showSymbol: false,
              type: 'line',
              itemStyle: {
                normal: {
                  color: "#B82D43"
                }
              },
              lineStyle: {
                normal: {
                  color: "#B82D43"
                }
              },
              data:data.map((v)=>{
                return Math.floor(Math.random() * 30000)
              })
            },
            {
              name: '主流媒体浏览量',
              showSymbol: false,
              type: 'line',
              itemStyle: {
                normal: {
                  color: "#4387B9"
                }
              },
              lineStyle: {
                normal: {
                  color: "#4387B9"
                }
              },
              data:data.map((v)=>{
                return Math.floor(Math.random() * 30000)
              })
            },
            {
              name: '百团大战浏览量',
              showSymbol: false,
              type: 'line',
              itemStyle: {
                normal: {
                  color: "#13AB3E"
                }
              },
              lineStyle: {
                normal: {
                  color: "#13AB3E"
                }
              },
              data:data.map((v)=>{
                return Math.floor(Math.random() * 30000)
              })
            },
            {
              yAxisIndex: 1,
              name:'直播平台浏览量',
              type:'bar',
              itemStyle: {
                normal: {
                  color:(data)=>{
                    if(data.value < 50 ) return "#13AB3E"
                    return '#B82D43'
                  }
                }
              },
              barWidth: '20%',
              data:data.map((v)=>{
                return Math.floor(Math.random() * 100)
              })
            },
            {
              yAxisIndex: 1,
              name:'主流媒体浏览量',
              type:'bar',
              barWidth: '20%',
              itemStyle: {
                normal: {
                  color:(data)=>{
                    if(data.value < 50 ) return "#13AB3E"
                    return '#B82D43'
                  }
                }
              },
              data:data.map((v)=>{
                return Math.floor(Math.random() * 100)
              })
            },
            {
              yAxisIndex: 1,
              name:'百团大战浏览量',
              type:'bar',
              barWidth: '20%',
              itemStyle: {
                normal: {
                  color:(data)=>{
                   if(data.value < 50 ) return "#13AB3E"
                    return '#B82D43'
                  }
                }
              },
              data:data.map((v)=>{
                return Math.floor(Math.random() * 100)
              })
            }
          ]
        }
        this.initChart.amountChart.setOption(option)
      },
      loadChannelChart () {
        let data = ["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"]
        let option = {
          color: ["#00ADFF"],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          xAxis: {
            show: true,
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: "#fff"
            },
            data: data,
            axisLine: {
              lineStyle: {
                color: '#38668C'
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis:   {
            type: 'value',
            scale: true,
            name: '回传渠道数',
            nameTextStyle: {
              color: '#fff'
            },
            axisLabel: {
              color: "#fff"
            },
            splitLine: {
              lineStyle: {
                type: 'dotted',
                color: '#515151'
              }
            },
            min: 0,
            axisLine: {
              lineStyle: {
                color: '#38668C'
              }
            },
          },
          grid: {
            top: '15%',
            left: '1%',
            right: '1%',
            bottom: '5%',
            width: '98%',
            height: '80%',
            containLabel: true
          },
          series: [
            {
              name:'直播平台回传数',
              showSymbol: false,
              type: 'line',
              itemStyle: {
                normal: {
                  color: "#B82D43"
                }
              },
              lineStyle: {
                normal: {
                  color: "#B82D43"
                }
              },
              data:data.map((v)=>{
                return Math.floor(Math.random() * 3500)
              })
            },
            {
              name: '主流媒体回传数',
              showSymbol: false,
              type: 'line',
              itemStyle: {
                normal: {
                  color: "#4387B9"
                }
              },
              lineStyle: {
                normal: {
                  color: "#4387B9"
                }
              },
              data:data.map((v)=>{
                return Math.floor(Math.random() * 3500)
              })
            },
            {
              name: '百团大战回传数',
              showSymbol: false,
              type: 'line',
              itemStyle: {
                normal: {
                  color: "#13AB3E"
                }
              },
              lineStyle: {
                normal: {
                  color: "#13AB3E"
                }
              },
              data:data.map((v)=>{
                return Math.floor(Math.random() * 3500)
              })
            },
          ]
        }
        this.initChart.channelChart.setOption(option)
      },
      loadGaugeChart () {
        let option = {
          series: [
            {
              name: '业务',
              type: 'gauge',
              radius: '100%',
              startAngle: 180,
              endAngle: 0,
              axisLine: {
                show: true,
                lineStyle: {
                  color: [[0.8, '#4581C2'], [1, '#0E3257']],
                  width: 10
                }
              },
              splitLine: {show: false},
              axisTick: {show: false},
              axisLabel: {show: false},
              splitLabel: {show: false},
              pointer: {show: false},
              title: {
                color: '#fff',
                offsetCenter: [0, '55%'],
                fontSize: 16,
                lineHeight: 20
              },
              detail: {
                formatter:'{value}%',
                color: '#fff',
                offsetCenter: [0, '-6%'],
                fontSize: 16,
                lineHeight: 20
              },
              data: [{value: '80', name: '直播平台'}]
            }
          ],
        };
        this.initChart.gauge1.setOption(option)
        option.series[0].axisLine.lineStyle.color[0][0] = 0.9619;
        option.series[0].data[0].value = 96.19
        this.initChart.gauge4.setOption(option)

        option.series[0].axisLine.lineStyle.color[0][0] = 0.7
        option.series[0].data[0].value = 0.7 * 100
        option.series[0].data[0].name = '主流媒体'
        this.initChart.gauge2.setOption(option)
        option.series[0].axisLine.lineStyle.color[0][0] = 0.9875;
        option.series[0].data[0].value = 98.75
        this.initChart.gauge5.setOption(option)

        option.series[0].axisLine.lineStyle.color[0][0] = 0.66;
        option.series[0].data[0].value = 0.66 * 100
        option.series[0].data[0].name = '百团大战'
        this.initChart.gauge3.setOption(option)
        option.series[0].axisLine.lineStyle.color[0][0] = 1;
        option.series[0].data[0].value = 100
        this.initChart.gauge6.setOption(option)
      },
      loadCircleChart () {
        let option = {
          title: {
            text: '75%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: "#0bb6f0",
              fontSize: 24
            }
          },
          legend: {
            show: false
          },
          toolbox: {
            show: false
          },
          series:{
            type: 'pie',
            clockWise: false,
            radius: ['80%', '100%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 25,
              itemStyle: {
                normal: {
                  color: 'rgba(44,59,70,0)', //未完成的圆环的颜色
                }

              }
            },{
              value: 75,
              itemStyle: {
                normal: {
                  color: '#4581C2', //未完成的圆环的颜色
                }

              }
            }
            ]
          }
        }
        this.initChart.circle1.setOption(option)
        option.title.text = '98.2%'
        option.series.data[0].value = 1.8
        option.series.data[1].value=  98.2
        this.initChart.circle2.setOption(option)
      },
      getBottom (num) {
        let o = document.getElementById("top-chart-left");
        if(num == 14)  o = document.getElementById("top-chart-right")
        let str = '5px'
        if(o.offsetHeight - num * 21 - 28 > num)str = parseInt((o.offsetHeight - num * 21 - 28) / num) + 'px'
        if(num == 14) this.rightBottom = str
        if(num == 10) this.leftBottom = str
      }
    },
    destroyed() {
      clearInterval(this.timer);
      window.onresize = () => {}
    },
    mounted () {
      this.$nextTick(()=>{
        this.initChart.amountChart = this.echarts.init(document.getElementById('amount-chart'))
        this.initChart.channelChart = this.echarts.init(document.getElementById('channel-chart'))
        this.initChart.gauge1 = this.echarts.init(document.getElementById('gauge1'))
        this.initChart.gauge2 = this.echarts.init(document.getElementById('gauge2'))
        this.initChart.gauge3 = this.echarts.init(document.getElementById('gauge3'))
        this.initChart.gauge4 = this.echarts.init(document.getElementById('gauge4'))
        this.initChart.gauge5 = this.echarts.init(document.getElementById('gauge5'))
        this.initChart.gauge6 = this.echarts.init(document.getElementById('gauge6'))
        this.initChart.circle1 = this.echarts.init(document.getElementById('chart-circle1'))
        this.initChart.circle2 = this.echarts.init(document.getElementById('chart-circle2'))
        this.loadAmountCharts()
        this.loadChannelChart()
        this.loadGaugeChart()
        this.loadCircleChart()
        this.getBottom(10)
        this.getBottom(14)
        window.onresize = () => {
          this.getBottom(10)
          this.getBottom(14)
          for (let key in this.initChart) {
            this.initChart[key].resize()
          }
        }
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.loadAmountCharts()
          this.loadChannelChart()
          this.loadGaugeChart()
          this.loadCircleChart()
        }, 60 * 1000);
      })
    }
  }
</script>

<style scoped>
  .side-left,.side-right{ width: 22%; min-height:5px; margin-left: 5px }
  .content{ width:54%;}
  .amount-item{width: 100%;background-color: #233E5A; position: relative; padding: 10px 0;}
  .amount-item>div{line-height: 40px;}
  .amount-item:before{ content: '';position: absolute; width: 3px; height: 100%;background-color: #4581C2; left: 0px; top: 0px;}
  .line-tip-item{ display: inline-block;}
  .line-tip-item .border-tip{ display: inline-block;width: 30px; height: 29px; border-bottom: 3px solid;}
  .line-tip-item .border-tip-text{display: inline-block;width: 30px; height: 29px;border-bottom: 3px dashed; }
  .line-tip-item .border-tip-bar{display: inline-block;width: 30px; height: 24px;border-bottom: 8px solid; }
  .choose-radio .ivu-radio-wrapper.ivu-radio-group-item.ivu-radio-default{background-color:inherit; color: #ffffff}
  .choose-radio .ivu-radio-wrapper.ivu-radio-wrapper-checked{background-color: #589EE3!important;}
  .chart-items{height:100%; width: 100%;}
  .chart-gauge{width: 100%;}
  .chart-circle{width: 100%;}
  .side-item-title{height: 40px;line-height: 40px; text-indent: 20px;}

  .chart-box{ height:calc(100% - 40px);padding: 10px 0;}
  .chart-box:last-child{padding: 5px 20px 0 0;}
  .top-chart-left {height: calc(100% - 45px); padding: 18px 0 10px;}
  /*.top-chart-left .graph-item {margin-bottom: 18px;}*/
  .top-chart-right{height: calc(100% - 45px); padding: 10px 0;}
  .top-chart-right .ivu-carousel-dots li button{background:#fff;}
  .top-chart-right .ivu-carousel-dots li button{background:#fff;}
  .bg-screen{height: 100%; min-height: 700px;}
  .height-calculation{height: 100%;}
  .height-upper{height: 36%;}
  .height-lower{height: 64%;}
</style>
