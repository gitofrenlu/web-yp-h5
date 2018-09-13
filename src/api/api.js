import axios from 'axios';
import {closeWindow} from '@/common/js/util';

let backBase = "/business"

let base = '' + backBase;
// let base = backBase;


let instance = axios.create({
    timeout: 30000 // request timeout
});

instance.interceptors.request.use(config => {
    let options = {
        'Content-Type':'application/json;charset=UTF-8',
        'x-wx_yp_openid':localStorage.getItem("yp-openid")
    }
	config.headers = $.extend(options, config.headers);
	return config
}, error => {
	return Promise.reject(error)
});

let err_code={
    success:0,
    need_open_dd : 10,
    need_login:100
}

instance.interceptors.response.use((response) => {

	let code = response.data.code
    let msg = response.data.message

    let ContentType
    let header = response.headers
    for (let i in header){
	    if(i == "content-type"){
            ContentType = header[i]
        }
    }

    if (code == err_code.need_login) {
        location.href = `#/index`;
        location.reload();
    }
    if (code != err_code.success && msg == "") {
        response.data.message = "操作失败，请重试"
    }

    return response;

}, (error) => {
    return Promise.reject(error);
});


// 封装axios的post请求
export function fetch(url, param,type="post") {
    return new Promise((resolve, reject) => {
        if( type == "post"){
            instance.post(url, param)
                .then(response => {
                    resolve(response.data);
                }).catch((error) => {
                if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout')!=-1){
                    this.$dialog.toast({mes:"网络连接超时，请稍后重试"})
                }
                reject(error);
            });
        }
        if( type == "get"){
            let params = {
                params :param
            }
            instance.get(url, params)
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout')!=-1){
                        this.$dialog.toast({mes:"网络连接超时，请稍后重试"})
                    }
                    reject(error);
                });
        }

    })
}
//utils
export const getGoods = () => { return fetch(`${base}/getGoods`,{},'get')};
export const getOrderList = param => { return fetch(`${base}/getOrderList`,param,'post')};
export const getUserInfo = () =>{return fetch(`${base}/getUserInfo`,{},'get')}
export const setUserInfo = param =>{return fetch(`${base}/setUserInfo`,param,'post')}
export const addCart = param =>{return fetch(`${base}/addCart`,param,'post')}

export const concelOrder = param =>{return fetch(`${base}/concelOrder`,param,'post')}
