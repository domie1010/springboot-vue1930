const base = {
    get() {
        return {
            url : "http://localhost:8080/cheliangguanli/",
            name: "cheliangguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cheliangguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "车辆管理系统"
        } 
    }
}
export default base
