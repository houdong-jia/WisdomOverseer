Vue.component("centerCard", {
  template: `
    <div class="center-card">
      <div class="center-card-map">
        <div class="center-card-map-left">
          <div class="map-l-t">
            <div class="map-data">
              <div class="map-desc" title="总书记视察东营任务台账">总书记视察东营任务台账</div>
              <div class="map-num">20/14</div>
            </div>
            <img src="./images/map-l-t.png" />
          </div>
          <div class="map-l-b">
            <div class="map-data">
              <div class="map-desc" title="领导批示办理">领导批示办理</div>
              <div class="map-num">15/10</div>
            </div>
            <img src="./images/map-l-b.png" />
          </div>
        </div>
        <div class="center-card-map-ring">
          <img src="./images/map-ring.png" />
        </div>
        <div class="center-card-map-right">
          <div class="map-r-t">
            <div class="map-data">
              <div class="map-desc" title="市委决策督查">市委决策督查</div>
              <div class="map-num">30/20</div>
            </div>
            <img src="./images/map-r-t.png" />
          </div>
          <div class="map-r-b">
            <div class="map-data">
              <div class="map-desc" title="创新实干争一流">创新实干争一流</div>
              <div class="map-num">20/14</div>
            </div>
            <img src="./images/map-r-b.png" />
          </div>
        </div>
      </div>
      <div class="center-card-module">
        <ul>
          <li>
            <div class="module-num">10</div>
            <div class="module-text">践行嘱托</div>
            <div class="module-icon jxzt"></div>
          </li>
          <li>
            <div class="module-num">15</div>
            <div class="module-text">东营元素</div>
            <div class="module-icon dyys"></div>
          </li>
          <li>
            <div class="module-num">13</div>
            <div class="module-text">要情关注</div>
            <div class="module-icon yqgz"></div>
          </li>
          <li>
            <div class="module-num">20</div>
            <div class="module-text">决策提醒</div>
            <div class="module-icon jctx"></div>
          </li>
          <li>
            <div class="module-num">18</div>
            <div class="module-text">挂图作战</div>
            <div class="module-icon gtzz"></div>
          </li>
          <li>
            <div class="module-num">9</div>
            <div class="module-text">督查调研</div>
            <div class="module-icon dcdy"></div>
          </li>
          <li>
            <div class="module-num">14</div>
            <div class="module-text">话说民生</div>
            <div class="module-icon hsms"></div>
          </li>
          <li>
            <div class="module-num">30</div>
            <div class="module-text">他山之石</div>
            <div class="module-icon tszs"></div>
          </li>
        </ul>
      </div>
      <div class="center-card-line">
        <div class="center-card-line-header">
          <div class="header-tilte">统计分析</div>
          <div class="header-legend">
            <div class="header-legend-dbj"> 
              <span></span>
              督办件
            </div>
            <div class="header-legend-csj">
              <span></span>
              超时件
            </div>
          </div>
        </div>
        <div id="center-card-line-main"></div>
      </div>
    </div>
  `,
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('center-card-line-main'));
    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: 16,
        left:"5%",
        right:"4%",
        bottom:30
      },
      xAxis: [{
        type: "category",
        data: ['单位名称', '单位名称', '单位名称', '单位名称', '单位名称', '单位名称', '单位名称', '单位名称', '单位名称'],
        axisLabel: {
          textStyle: {
            color: "#fff",
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(12,137,239,.5)"
          }
        }
      }],
      color: ["#3092EF", "#F75353"],
      yAxis: {
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,0.5)"
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color:"rgba(12,137,239,.3)"
          }
        }
      },
      series: [
        {
          name: '督办件',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36],
          barWidth: 10,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#146FF9' },
                  { offset: 1, color: '#14C7F9' }
                ]
              )
            }
          }
        },
        {
          name: '超时件',
          type: 'bar',
          data: [12, 30, 4, 7, 10, 13, 12, 30, 4],
          barWidth: 10,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#FC8B8B' },
                  { offset: 1, color: '#F94040' }
                ]
              )
            }
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    window.onresize = myChart.resize
  }
})