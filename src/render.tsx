import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
// import state from "./components/redux/State";
import {addPost} from './components/redux/State';

// export type PostType={
//     id:number
//     message:string
//     likesCount:number
// }
// export type DialogType={
//     id:number
//     name:string
// }
// export type MessageType={
//     id:number
//     message:string
// }



export let rerenderEntireTree=(state: any)=> {

    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                {/*<Route path={'/Hello'} />*/}
                <App state={state}  addPost={addPost}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
