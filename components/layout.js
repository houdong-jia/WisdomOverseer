Vue.component("Layout",{
  template:`
    <div class="layout">
      <div class="layout-header">
        <div class="layout-header-left">
          {{dateTime}}
        </div>
        <div class="layout-header-center">
          智慧督查
        </div>
        <div class="layout-header-right">
          <select>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </select>
          <div class="layout-header-work-bench">
            <span></span>
            工作台
          </div>
        </div>
      </div>
      <div class="layout-content">
        <div class="layout-content-left">
          <slot name="left"/>
        </div>
        <div class="layout-content-center">
          <slot name="center"/>
        </div>
        <div class="layout-content-right">
          <slot name="right"/>
        </div>
      </div>
    </div>
  `,

  data(){
    return{
      dateTime:""
    }
  },
  mounted(){
    this.showTime()
  },
  methods:{
    showTime() {
      this.dateTime = this.getTime()
      this.timeInterval = setInterval(() => {
        this.dateTime = this.getTime()
      }, 1000)
    },
    getTime() {
      let nowDate = new Date();
      let year = nowDate.getFullYear()
      let month = (nowDate.getMonth() + 1) >= 10 ? (nowDate.getMonth() + 1) : '0' + (nowDate.getMonth() + 1);
      let day = nowDate.getDate() >= 10 ? nowDate.getDate() : '0' + nowDate.getDate();
      let hour = nowDate.getHours() >= 10 ? nowDate.getHours() : '0' + nowDate.getHours();
      let minutes = nowDate.getMinutes() >= 10 ? nowDate.getMinutes() : '0' + nowDate.getMinutes();
      let seconds = nowDate.getSeconds() >= 10 ? nowDate.getSeconds() : '0' + nowDate.getSeconds();
      return year+'年'+month+'月'+day+'日   '+ hour + ':' + minutes + ':' + seconds;
    },
  }
})