import Router from "next/router";


export default function DesplgMobile() {
    return(
        <ul className="list-none
        px-6
        font-sans
        text-xs
        leading-8
        w-full">
            <li className="bg-gray-300"><a className="ml-3" href="/en-US">ENGLISH</a></li>
            <li><a className="ml-3" href="/es">ESPAÑOL</a></li>
        </ul>
    );
}