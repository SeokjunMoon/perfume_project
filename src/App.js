import styles from './App.module.css';
import Layout from './components/main_layout/Layout'
import FlatButton from './components/flat_button/FlatButton'

function App() {
    return (
        <Layout className={styles.App}>
            <div className={styles.header}>
                <div className={styles.title}>Blooming fragrance</div>

                <div>안녕하세요<br/>향료를 직접 조합해</div>
                <div>나만의 향수를 만드는</div>
                <div>Blooming fragrance 입니다</div>
                <div >세상에 유일한 향기를 만들어보세요</div>
            </div>

            <FlatButton color='#4C956C' highlight='#74D3AE'>make perfume</FlatButton>
        </Layout>
    );
}

export default App;
