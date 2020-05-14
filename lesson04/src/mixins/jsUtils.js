/**
 *  @description: 准备需要混入的js方法
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

export default {
    methods: {
        // 为小于10的数字补零
        addPrefixZero(num) {
            return num ? (Number(num) < 10 ? '0' + num : num.toString()) : ''
        },
        // 去除全部空格
        removeAllSpaces(str) {
            return str ? (str.toString() || '').split(' ').join('') : ''
        },
    },
}
