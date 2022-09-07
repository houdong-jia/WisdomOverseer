Vue.component("inspectionReport", {
    data() {
        insList = [
            {
                type:"重点工作",
                content:"推动学习贯彻习近平总书记重要讲话精神和重要指示批示精神"
            },
            {
                type:"重点工作",
                content:"推动学习贯彻习近平总书记重要讲话精神和重要指示批示精神"
            },
            {
                type:"领导批示",
                content:"推动学习贯彻习近平总书记重要讲话精神和重要指示批示精神"
            },
            {
                type:"领导批示",
                content:"推动学习贯彻习近平总书记重要讲话精神和重要指示批示精神"
            },
            {
                type:"会议交办事项",
                content:"推动学习贯彻习近平总书记重要讲话精神和重要指示批示精神"
            },
        ];
    },
    methods: {

    },
    mounted() {

    },
    template: `
    <div class="ins-container">
        <div class="header">
            <div class="headerText">督查专报</div>
            <div class="headerMore"></div>
        </div>
        <div class="headerBottom">
            <div class="headerLeftLine"></div>
            <div class="headerLine"></div>
        </div>
        <div class="ins-list">
            <div class="ins-item" v-for="(item,index) in insList" :key="index" :value="index">
                <div class="ins-item-type" :class="item.type==='重点工作'? 'zdgz' : (item.type==='领导批示'? 'ldps': 'hyjbsx')"></div>
                {{item.content}}
            </div>
        </div>
    </div>`

})