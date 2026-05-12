import { ResumeProvider } from './context/ResumeContext';
// Представим, что эти компоненты мы создадим далее
// import Editor from './features/editor/Editor';
// import Preview from './features/preview/Preview';

function App() {
    return (
        <ResumeProvider>
            <div style={{ display: 'flex', minHeight: '100vh', gap: '20px', padding: '20px' }}>
                <section style={{ flex: 1, borderRight: '1px solid #ddd', paddingRight: '20px' }}>
                    <h2>Редактор</h2>
                    {/* <Editor /> */}
                </section>

                <section style={{ flex: 1 }}>
                    <h2>Предпросмотр</h2>
                    {/* <Preview /> */}
                </section>
            </div>
        </ResumeProvider>
    );
}

export default App;