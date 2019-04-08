export default Component({
    data: {
        countdown: 5,
        computeTime: 5,
        isEnd: false
    },
    /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
    methods: {
        onRunCount(e) {
            let detail = e.detail;
            this.setData({
                computeTime: detail.computeTime
            });
        },
        onEndCount() {
            this.setData({
                isEnd: true
            });
        },
        countAgain() {
            let countdown = this.data.countdown + 1;
            if (this.data.isEnd) {
                this.setData({
                    countdown: countdown,
                    isEnd: false
                });
            }
        }
    }
});