import React, {ChangeEvent} from 'react'
import s from './AddItemForm.module.css'

type AddItemFormPropsType = {
    value: string
    addItem: () => void
    updateText: (text: string) => void
}

export const AddItemForm: React.FC<AddItemFormPropsType> = ({value, addItem, updateText, children}) => {

    const onButtonClick = () => addItem()

    const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateText(e.currentTarget.value)
    }

    return (
        <div className={s.body}>
            <textarea
                className={s.textarea}
                placeholder={'Say something...'}
                onChange={onInputChange}
                value={value}/>
            <div className={s.btn_wrapper}>
                <button onClick={onButtonClick} className={'btn'}>{children}</button>
            </div>
        </div>
    )
}