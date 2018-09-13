/**
 * Created by renlu on 2018/5/9.
 */

export function validCode(code) {
    // 合同号长度校验必须是20位、合同号第一位必须是字母。
    let regx = /^[a-zA-Z]{1}[A-Za-z0-9]{19}$/
    if(!regx.test(code)){
        return false
    }
    return true
}
export function isCardNo(card) {
// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(!reg.test(card)) {
        return false;
    }
    return true
}