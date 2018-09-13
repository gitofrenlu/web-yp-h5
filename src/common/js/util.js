
export function closeWindow(){
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
        window.location.href="about:blank";
    }else if(userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1){
        window.opener=null;window.open('about:blank','_self','').close();
    }else {
        window.opener = null;
        window.open("about:blank", "_self");
        window.close();
    }

}

export function toIndex() {
    location.href = `#/index`;
    location.reload();
}

export function setCookie(c_name,value,expiredays){
    var exdate=new Date()  
    exdate.setDate(exdate.getDate()+expiredays)  
    document.cookie=c_name+ "=" +escape(value)+  
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())  
}  
    
    //取回cookie  
export function getCookie(c_name){  
    if (document.cookie.length>0)  
    {  
    c_start=document.cookie.indexOf(c_name + "=")  
    if (c_start!=-1)  
    {   
    c_start=c_start + c_name.length+1   
    c_end=document.cookie.indexOf(";",c_start)  
    if (c_end==-1) c_end=document.cookie.length  
    return unescape(document.cookie.substring(c_start,c_end))  
    }   
    }  
    return ""  
}