// 成功返回的数据模型
class SuccessModel {
    constructor(data) {
        // 成功的标志
        this.errno = 0
        if (data != null) {
            this.data = data
        }
    }
}

module.exports = SuccessModel


// new SuccessModel()  // { errno: 0 }
// new SuccessModel({...})  // { errno: 0, data: {...}}