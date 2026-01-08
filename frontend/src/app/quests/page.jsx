const styles = require('./quests.module.css')
import CreateQuest from '@/components/layout/CreateQuest/CreateQuest'

export default function Quest() {
    return (
        <>
            <CreateQuest/>
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