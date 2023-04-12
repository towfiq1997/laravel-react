import React, { useEffect } from 'react';


export default function HelloReact() {
    const sendreq = async () => {
        const req = await fetch("/api/test");
        const result = await req.json();
        if (result) {
            console.log(result);
        }

    }
    useEffect(() => {
        sendreq();
    })
    return (


        <></>
    );
}
const rootelm = document.getElementById('reactpush');
const root = createRoot(rootelm);

if (document.getElementById('reactpush')) {
    root.render(
        <BrowserRouter>
            <HelloReact />
        </BrowserRouter>
    );
}