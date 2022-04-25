import Router from "next/router";

function envioES(){
    Router.push('/es');
}
function envioEN(){
    Router.push('/en-US/');
}


export default function ListaDesplegable() {
    return (
            <select className="form-select block w-24            
            py-3.5
            px-1
            text-xs
            font-sans
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300            
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:outline-none">
                <option onClick={envioEN} selected>ENGLISH</option>
                <option onClick={envioES}>ESPAÑOL</option>
            </select>
    );
  }