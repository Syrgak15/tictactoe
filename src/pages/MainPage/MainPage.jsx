
import style from './MainPage.modules.css'
import TablePage from "../TablePage/TablePage";

function MainPage(props) {
    return (
        <div className='mainPage'>
            <div className="mainWrapper">
                <h1 className='mainTitle'>React Tic Tac Toe</h1>
                <TablePage/>
            </div>

        </div>
    );
}

export default MainPage;