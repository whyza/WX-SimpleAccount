export default Component({
    data: {
        mobileNumber: '12655324',
        qqNumber: '01223',
        mobileTip: true,
        qqTip: true
    },
    /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
    methods: {
        onInput(e) {
            let type = e.target.dataset.type;
            let number = e.detail.value;

            this.setData({
                [type + 'Number']: number
            });
            this.validate(number, type);
        },
        onBlur(e) {
            let type = e.target.dataset.type;
            let number = e.detail.value;
            this.validate(number, type);
        },
        clearInput(e) {
            let type = e.currentTarget.dataset.type;
            this.setData({
                [type + 'Number']: "",
                [type + 'Tip']: false
            });
        },
        validate(number, type) {
            if (type === "mobile") {
                this.validateTelephone(number);
            }

            if (type === "qq") {
                this.validateQQ(number);
            }
        },
        validateTelephone(number) {
            let regPhone = /^1(3|4|5|7|8)\d{9}$/;
            let tip = false;
            if (!regPhone.test(number) && number.length > 0) {
                // 输入7位以上开始校验手机号码
                tip = true;
            }
            this.setData({
                mobileTip: tip
            });
        },
        validateQQ(number) {
            let tip = false;
            let regQQ = /^[1-9]\d{4,10}$/;
            if (!regQQ.test(number) && number.length > 0) {
                // 输入4位以上开始qq号码
                tip = true;
            }
            this.setData({
                qqTip: tip
            });
        }
    }
});