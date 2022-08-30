function checkData(fio: HTMLInputElement, mail: HTMLInputElement){
    let res = []
    if (isWhitespacesOrEmpty(fio.value)){
        res.push(fio)
    }
    if (mail.value.indexOf("@") === -1){
        res.push(mail)
    }
    return res
}

function isWhitespacesOrEmpty(value: string){
    return value.replace(" ", "").length === 0;

}

export default checkData;