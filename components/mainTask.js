Vue.component("mainTask", {
    data() {
        taskList = [
            "推动学习贯彻习近平总书记重要讲话精神和重要指示批示精神",
            "推动学习贯彻习近平总书记重要讲话精神和重要指示批示精神",
            "推动学习贯彻习近平总书记重要讲话精神和重要指示批示精神",
            "推动学习贯彻习近平总书记重要讲话精神和重要指示批示精神",
            "推动学习贯彻习近平总书记重要讲话精神和重要指示批示精神"
        ];
    },
    methods: {

    },
    mounted() {

    },
    template: `
    <div class="task-container">
        <div class="header">
            <div class="headerText">重点工作</div>
            <div class="headerMore"></div>
        </div>
        <div class="headerBottom">
            <div class="headerLeftLine"></div>
            <div class="headerLine"></div>
        </div>
        <div class="task-list">
            <div class="task-item" v-for="(content,index) in taskList" :key="index" :value="index">
                <div class="task-item-icon"></div>
                {{content}}
            </div>
        </div>
    </div>`

})