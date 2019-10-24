/* 导入add方法 */
var {add} = require("./node01");
var Vue = require("./vue.min");

/*编写MVVM的mode部分以及Vm（ViewModel）部分*/
const vm = new Vue({
    el: "#app",/*vm接管了app区的管理*/
    data: {/*mode数据*/
        name: "传智播客",
        num1: 0,
        num2: 0,
        size: 20,
        result: 0,
        url:"https://www.baidu.com"
    },
    methods: {
        change: function () {
            this.result = add(Number.parseInt(this.num1) , Number.parseInt(this.num2))
            // alert("计算结果：" + this.result)
        }
    }
});