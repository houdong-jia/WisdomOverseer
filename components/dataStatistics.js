Vue.component("dataStatistics", {
    data() {
        return {
            staList: [
                {
                    name: "督办事项",
                    data: 100,
                },
                {
                    name: "进行中",
                    data: 40,
                },
                {
                    name: "已完成",
                    data: 80,
                },
                {
                    name: "已超时",
                    data: 40,
                },
            ]
        }
    },
    methods: {
    },
    mounted() {
        
    },
    template: `
    <div class="sta-container">
        <div class="headerText">数据统计</div>
        <div class="headerBottom">
            <div class="headerLeftLine"></div>
            <div class="headerLine"></div>
        </div>
        <div class="list">
            <div class="list-item" 
            v-for="(item,index) in staList" 
            :key="index" 
            :value="index"
            :class="item.name==='督办事项'?'dbsx':(item.name==='进行中'?'under':(item.name==='已完成'?'complete':'outTime'))"
            >
                <div class="item-icon " id="sxtjIcon">
                    <div class="item-icon-top" />
                    <div class="item-icon-h1" />
                    <div class="item-icon-h2" />
                </div>
                <div class="list-item-name">{{item.name}}</div>
                <div class="list-item-data">{{item.data}}</div>
            </div>
        </div>
    </div>`

})