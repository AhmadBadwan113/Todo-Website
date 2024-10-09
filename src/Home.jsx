import Navbar from "./Navbar"
import TodoList from "./TodoList"
import Footer from "./Footer"

export default function Home() {

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
                <div style={{
                    flex: '1'
                }}>
                <Navbar />
                <TodoList />
                </div>
                <Footer />
            </div>
        </>
    )
}