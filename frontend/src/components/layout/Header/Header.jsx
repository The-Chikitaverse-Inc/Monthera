const styles = require('./Header.module.css')
import Image from 'next/image'

//* Components
import { MoneyCounter } from '@/components/ui/MoneyCounter/MoneyCounter'
import LoginButtom from '@/components/ui/LoginButtom/LoginButtom'

export function Header() {
    return (
        <header className={styles.header}>
            <Image src='/logotheoretical.png' width={75} height={75} alt='Logo temporaria'/>
            <h1>Monthera</h1>
            <MoneyCounter/>
            <LoginButtom/>
        </header>
    )
}