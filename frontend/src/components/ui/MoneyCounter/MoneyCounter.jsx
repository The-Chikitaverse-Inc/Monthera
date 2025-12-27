const styles = require('./MoneyCounter.module.css')
import Image from 'next/image'

export function MoneyCounter() {
    //Todo: Fazer a parte do back-end desse projeto
    return (
        <span className={styles.moneycounter}>
            <Image src='/money.svg' width={40} height={40} alt='Imagem de um sifrão represetando a moeda desse site'/>
                <h5>0</h5>
        </span>
    )
}