import { useEffect, useRef } from 'react'
export default function Ads() {
    const atOptions = {
        key: '8f6286b85a45a7f0b714bbe826213e91',
        format: 'iframe',
        height: 50,
        width: 320,
        params: {},
    }
    const banner = useRef<HTMLDivElement>

    

    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center" ref={banner}>a</div>
}