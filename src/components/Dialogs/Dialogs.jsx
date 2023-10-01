import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let DialogsItemsDataElement = props.state.DialogsItemsData.map(n => <DialogItem name={n.name} id={n.id}/>)
    let MessageDataElement = props.state.MessageData.map(m => <Message mess={m.message}/>)
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {DialogsItemsDataElement}
            </div>
            <div className={c.messages}>
                {MessageDataElement}
            </div>
        </div>
    )
}

export default Dialogs;