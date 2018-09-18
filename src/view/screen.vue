<template>
  <div class="bg-screen">
    <div class="wrapper-border fz14">
      <v-header title="问鼎雁栖湖"></v-header>
      <Row :gutter="10">
        <i-col span="5" class="">
          <div class="m-t10">
            <div class="chart-circle" id="chart-circle1" style="height: 140px;"></div>
            <h3 class="t-center c fz20">达成率</h3>
          </div>
          <div class="m-t30 m-r10">
            <Row class="c fz16 t-center" :gutter="10">
              <i-col span="8">
                <div id="gauge1" class="chart-gauge"></div>
              </i-col>
              <i-col span="8">
                <div id="gauge2" class="chart-gauge"></div>
              </i-col>
              <i-col span="8">
                <div id="gauge3" class="chart-gauge"></div>
              </i-col>
            </Row>
          </div>
          <div class="choose-radio t-left m-t20">
            <RadioGroup type="button" value="1">
              <Radio label="1">直播平台</Radio>
              <Radio label="2">主流媒体</Radio>
              <Radio label="3">百团大战</Radio>
            </RadioGroup>
          </div>
          <div class="m-t20 m-r30">
            <div class="bg-tip side-item-title c t-left">传播总量Top10</div>
            <div class="top-chart top-chart-left t-left c">
              <graph-percent v-for="i in [1,2,3,4,5,6,7,8,9,10]" :row="rows[i%2]" :key="i" class="m-b25"></graph-percent>
            </div>
          </div>
        </i-col>
        <i-col span="14" class="">
            <div class="bg-border m-t10 c p-20">
                <Row>
                 <i-col span="12">
                   <i-border class="m-r20">
                     <div class="fbox fz20 c p-20">
                       <div class="flex">
                           <div class="fz32">1,000</div>
                           <div>今日浏览量(万)</div>
                       </div>
                       <div class="flex">
                         <div class="fz32">11,010</div>
                         <div>实际浏览总量(万)</div>
                       </div>
                     </div>
                   </i-border>
                 </i-col>
                 <i-col span="12">
                   <i-border class="m-l20">
                     <div class="fbox fz20 c p-20">
                       <div class="flex">
                         <div class="fz32">10,923</div>
                         <div>渠道总数</div>
                       </div>
                       <div class="flex">
                         <div class="fz32">300,000,000</div>
                         <div>预计传播量</div>
                       </div>
                     </div>
                   </i-border>
                 </i-col>
               </Row>
                <Row class="m-t20" :gutter="10">
                  <i-col span="8">
                     <div class="amount-item fz14">
                       <div class="fz24">1,244,563</div>
                       <div class="fz20">直播平台传播总量</div>
                     </div>
                  </i-col>
                  <i-col span="8">
                    <div class="amount-item fz14">
                      <div class="fz24">1,244,563</div>
                      <div class="fz20">直播平台传播总量</div>
                    </div>
                  </i-col>
                  <i-col span="8">
                    <div class="amount-item fz14">
                      <div class="fz24">1,244,563</div>
                      <div class="fz20">直播平台传播总量</div>
                    </div>
                  </i-col>
                </Row>
            </div>
            <div class="chart-item m-t10">
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
                   <RadioGroup type="button" value="12H">
                     <Radio label="12H">最近12小时</Radio>
                     <Radio label="7D">最近7天</Radio>
                   </RadioGroup>
                 </div>
              </div>
              <div class="bg-border m-t10 c p-10">
                <div id="amount-chart" class="chart-items"></div>
              </div>
            </div>
            <div class="chart-item m-t10">
              <div class="t-left">
                <div class="line-tip-item c"> <span class="border-tip" style="border-bottom-color: #B82D43"></span> 直播平台回传数</div>
                <div class="line-tip-item c"> <span class="border-tip" style="border-bottom-color: #4387B9"></span> 主流媒体回传数</div>
                <div class="line-tip-item c"> <span class="border-tip" style="border-bottom-color: #13AB3E"></span> 百团大战回传数</div>
              </div>
              <div class="bg-border m-t10 c p-20">
                 <div id="channel-chart" class="chart-items"></div>
              </div>
            </div>
        </i-col>
        <i-col span="5" class="">
          <div class="m-t10">
            <div class="chart-circle" id="chart-circle2"></div>
            <h3 class="t-center c fz20">回传率</h3>
          </div>
          <div class="m-t30 m-r10">
            <Row class="c fz16 t-center" :gutter="10">
              <i-col span="8">
                <div id="gauge4" class="chart-gauge"></div>
              </i-col>
              <i-col span="8">
                <div id="gauge5" class="chart-gauge"></div>
              </i-col>
              <i-col span="8">
                <div id="gauge6" class="chart-gauge"></div>
              </i-col>
            </Row>
          </div>
          <div class="choose-radio t-left m-t20 m-l25 ">
            <RadioGroup type="button" value="1">
              <Radio label="1">企业</Radio>
            </RadioGroup>
          </div>
          <div class="m-t20 m-l25 m-r5">
            <div class="bg-tip side-item-title c t-left">企业传播量</div>
            <div class="top-chart top-chart-right t-left c">
              <Carousel autoplay :autoplay-speed="10000" v-model="value2" loop radius-dot arrow="never" dots="outside">
                <CarouselItem>
                    <graph-percent v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14]" :row="rows[i%2]" :key="i" class="m-b10"></graph-percent>
                </CarouselItem>
                <CarouselItem>
                    <graph-percent v-for="i in [2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :row="rows[i%2]" :key="i" class="m-b10"></graph-percent>
                </CarouselItem>
              </Carousel>
            </div>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  import vHeader from '../components/header.vue';
  import iBorder from '../components/border';
  import graphPercent from '../components/graph-percent';

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
        value2: 0
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
            radius: [60, 70],
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
      }
    },
    destroyed() {
      clearInterval(this.timer);
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
  .amount-item{width: 100%;background-color: #233E5A; position: relative; padding: 15px 0;}
  .amount-item>div{line-height: 40px;}
  .amount-item:before{ content: '';position: absolute; width: 3px; height: 100%;background-color: #4581C2; left: 0px; top: 0px;}
  .line-tip-item{ display: inline-block;}
  .line-tip-item .border-tip{ display: inline-block;width: 30px; height: 29px; border-bottom: 3px solid;}
  .line-tip-item .border-tip-text{display: inline-block;width: 30px; height: 29px;border-bottom: 3px dashed; }
  .line-tip-item .border-tip-bar{display: inline-block;width: 30px; height: 24px;border-bottom: 8px solid; }
  .choose-radio .ivu-radio-wrapper.ivu-radio-group-item.ivu-radio-default{background-color:inherit; color: #ffffff}
  .choose-radio .ivu-radio-wrapper.ivu-radio-wrapper-checked{background-color: #589EE3!important;}
  .chart-items{height: 230px; width: 100%;}
  .chart-gauge{width: 100%;height:110px;}
  .chart-circle{width: 100%;height:140px;}
  .side-item-title{height: 40px;line-height: 40px; text-indent: 20px;}

  .top-chart-left {padding: 30px 0 10px;}
  .top-chart-right{padding: 23px 0;}
</style>
