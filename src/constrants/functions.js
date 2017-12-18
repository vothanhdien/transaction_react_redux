/**
 * Created by vtdien on 12/17/2017.
 */
export const  showError = (text)=>{
    if(document.getElementsByClassName("info-success").length > 0){
        document.getElementsByClassName("info-success")[0].classList.add("info-error");
        document.getElementsByClassName("info-success")[0].classList.remove("info-error");
    }else if(document.getElementsByClassName("info-hide").length > 0){
        document.getElementsByClassName("info-hide")[0].classList.add("info-error");
        document.getElementsByClassName("info-hide")[0].classList.remove("info-hide");
    }
    document.getElementById("info-text").innerHTML = text;
};

export const showSuccess = (text)=>{
    if(document.getElementsByClassName("info-error").length > 0){
        document.getElementsByClassName("info-error")[0].classList.add("info-success");
        document.getElementsByClassName("info-error")[0].classList.remove("info-error");
    }else if(document.getElementsByClassName("info-hide").length > 0){
        document.getElementsByClassName("info-hide")[0].classList.add("info-success");
        document.getElementsByClassName("info-hide")[0].classList.remove("info-hide");
    }
    document.getElementById("info-text").innerHTML = text;
};

export const convertTime = time=>{
    let date = new Date(time);
    let res;
    res = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " "
        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return res;
};