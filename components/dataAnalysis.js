Vue.component("dataAnalysis", {

    template: `
    <div class="ana-container">
        <div class="headerText">数据分析</div>
        <div class="headerBottom">
            <div class="headerLeftLine"></div>
            <div class="headerLine"></div>
        </div>
        <div class="data-show">
            <div class="left-data">
                <div class="legend">
                    <div class="PercentageData">
                      25%
                  </div>
                  <div class="legendName">
                      数据指标3
                  </div>
                  <div class="legendIcon" style="background-color: rgb(51,214,149)"></div>
                </div>
            <div class="legend">
                <div class="PercentageData">
                    25%
                </div>
                <div class="legendName">
                    数据指标4
                </div>
                <div class="legendIcon" style="background-color: rgb(5,160,154)"></div>
            </div>
            </div>
            <div class="center-data">
                <div id="dataPieChart"></div>
                <img src="./images/bing-bg.png">
            </div>
            <div class="right-data">
                <div class="legend">
                    <div class="PercentageData">
                        25%
                    </div>
                    <div class="legendName">
                        经济运行指标
                    </div>
                <div class="legendIcon" style="background-color: rgb(247,181,0)"></div>
            </div>
            <div class="legend">
                <div class="PercentageData">
                    25%
                </div>
                <div class="legendName">
                    数据指标2
                </div>
                <div class="legendIcon" style="background-color: rgb(37,134,245)"></div>
        </div>
            </div>
        </div>
        <div class="buttons">
            <div class="btn" @click="">经济运行指标</div>
            <div class="btn" @click="">预留</div>
            <div class="btn" @click="">预留</div>
            <div class="btn" @click="">预留</div>
        </div>
    </div>`,
    data() {
        return {
            dataA: [
                { value: 0.25, name: '经济运行指标' },
                { value: 0.25, name: '数据指标2' },
                { value: 0.25, name: '数据指标3' },
                { value: 0.25, name: '数据指标4' }
            ],
            isSeleted: false,
        }
    },
    methods: {
        chartsInit(data) {
            var chartDom = document.getElementById('dataPieChart');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                tooltip: {
                    trigger: 'item'
                },
                color: ['rgb(247, 181, 0)', 'rgb(37, 134, 245)', ' rgb(5, 160, 154)', 'rgb(51, 214, 149)'],
                series: [
                    {
                        name: '数据分析',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        labelLine: {
                            show: false
                        },
                        data: data,
                    }
                ]
            };

            option && myChart.setOption(option);
        }
    },
    mounted() {
        this.chartsInit(this.dataA)
        btnList = document.getElementsByClassName('btn')
        btnList[0].style.backgroundImage = "url('./images/tab-xz.png')";
        for (let i = 0; i < btnList.length; i++) {
            btnList[i].onmouseover = function () {
                btnList[0].style.backgroundImage = "url('./images/tab.png')";
                btnList[i].style.backgroundImage = "url('./images/tab-xz.png')";
                this.isSeleted = true;
            };
            btnList[i].onmouseout = function () {
                if (i !== 0){
                    btnList[0].style.backgroundImage = "url('./images/tab-xz.png')";
                    btnList[i].style.backgroundImage = "url('./images/tab.png')";
                    this.isSeleted = false;
                }
            };
        }
    }
})