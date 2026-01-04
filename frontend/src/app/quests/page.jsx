const styles = require('./quests.module.css')

export default function Quest() {
    return (
        <>
            <aside className={styles.newquest}>
                <h2>Quest Nova</h2>
                
            </aside>
            <main className={styles.quests}>
                <div>
                    <h3>Quest Principal</h3>
                </div>
                <div>
                    <h3>Quest Secundaria</h3>
                </div>
                <div>
                    <h3>Quest Opcional</h3>
                </div>
            </main>
        </>
    )
}