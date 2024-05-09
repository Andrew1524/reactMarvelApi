import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages';
import AppHeader from "../appHeader/AppHeader";


const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                        <Route exact path="/comics/:comicId">
                            <SingleComicPage/>
                        </Route>
                        <Route path="*">
                            <Page404/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )

    // syntax for react-router-dom v6
    // return (
    //     <Router>
    //         <div className="app">
    //             <AppHeader/>
    //             <main>
    //                 <Routes>
    //                     <Route exact path="/" element={<MainPage/>}/>    
    //                     <Route exact path="/comics" element={<ComicsPage/>}/>
    //                 </Routes>
    //             </main>
    //         </div>
    //     </Router>
    // )
}

export default App;


// import AppHeader from "../appHeader/AppHeader";
// import { MainPage, ComicsPage } from "../pages";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

// const App = () => {
//     return (
//        <Router>
//             <div className="app">
//                 <AppHeader/>
//                 <main>
//                     <Routes>
//                         <Route path="/" element={<MainPage/>}/>
//                         <Route path="/comics" element={<ComicsPage/>}/>
//                     </Routes>
//                 </main>
//             </div>
//        </Router>
//     )
// }

// export default App;