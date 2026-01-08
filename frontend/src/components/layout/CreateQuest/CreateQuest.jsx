'use client'
const styles = require('./CreateQuest.module.css')
import { useRef, createContext, useContext, useEffect } from 'react'

export default function CreateQuest() {
    const inputRadio = useRef('')
    const inputText = useRef('')

    useEffect(() => {

    })

    return (
        <aside className={styles.newquest}>
            <h2>Quest Nova</h2>
                <input ref={inputText} type="text" placeholder='New Quest'/>
                
                 <div className={styles.typequest}>
                    <span>
                        <input ref={inputRadio} type="radio" name="typequest"/>
                          Quest Diaria
                    </span>

                    <span>
                        <input ref={inputRadio} type="radio" name="typequest"/>
                          Quest Secundaria
                    </span>

                    <span>
                        <input ref={inputRadio} type="radio" name="typequest"/>
                          Quest Opcional
                    </span>
                 </div>
        </aside>
    )
}