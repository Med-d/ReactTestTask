import React, {Dispatch, SetStateAction} from 'react';
import './participationForm.css';
import checkData from "../checkData";

interface Props{
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>
}

const ParticipationForm = ({active, setActive}: Props) => {
    return (
        <div className={active ? "modalForm active" : "modalForm"} onClick={() => setActive(false)}>
            <div className="modalFormContent" onClick={e => e.stopPropagation()}>
                <div className="form-header flex-item">
                    <h2>Заявка на участие</h2>
                </div>
                <div className="fio-input flex-item">
                    <input type="text" placeholder="ФИО" id="fio"/>
                    <div hidden className="fio-input-incorrect incorrect-sign">Введите имя</div>
                </div>
                <div className="mail-input flex-item">
                    <input type="text" placeholder="E-mail" id="mail"/>
                    <div hidden className="incorrect-sign" id="mail-input-incorrect">E-mail адресс некорректный</div>
                </div>
                    <button
                        className="send-btn flex-item"
                        onClick={() => {
                            const name = document.getElementById("fio") as HTMLInputElement;
                            const mail = document.getElementById("mail") as HTMLInputElement;
                            checkCorrectInputs(name, mail, (ok: boolean) => {
                                if(ok){
                                    sendData(name, mail).then(r => console.log(r)).catch(e => {
                                        console.log("К сожалению пока это только болванка")
                                    });
                                    setActive(false);
                                }
                                name.value = "";
                                mail.value = "";
                            });
                        }}
                    >
                        Отправить
                    </button>
            </div>
        </div>
    )
};

function checkCorrectInputs(name: HTMLInputElement, mail: HTMLInputElement, callback: (ok: boolean) => void){
    for(let i of [name, mail]){
        i.className = "";
    }
    const res = checkData(name, mail);
    for(let i of res){
        i.className = "incorrect"
    }
    if (res.length === 0)
        callback(true);
    else
        callback(false);
}

async function sendData(name: HTMLInputElement, mail: HTMLInputElement){
    return await fetch(`https://meddd.my/api/register?name=${name.value}&mail=${mail.value}`, {method: "POST"});
}

export default ParticipationForm;