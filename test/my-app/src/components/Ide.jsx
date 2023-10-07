import { useState , useEffect } from "react";
import Edit from "./Editor";
import { javascript } from '@codemirror/lang-javascript';
import {html} from '@codemirror/lang-html'
import {css} from '@codemirror/lang-css'
import {ViewColumnsIcon} from '@heroicons/react/24/solid'

const Ide = (props)=>{
    
    const [java , setJava] = useState("console.log('hello world!');");
    const [cssVal , setCss] = useState("h1 { color: red; }");
    const [htmlval , setHtml] = useState("<h1>hello world!</h1>");
    const [doc , setDoc] = useState("")    

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDoc(`
            <html>
                <head>
                    <style>${cssVal}</style>
                </head>
                <body>
                    ${htmlval}
                    <script>${java}</script>
                </body>
            </html>
            `)
        },250)
        return ()=>clearTimeout(timeout)

    },[java , cssVal , htmlval])

    return (
    <div className="w-screen h-screen flex flex-col ">

        <div className="p-2 bg-slate-600 text-white">
            playground
        </div>
        
        <div className="p-2 bg-slate-900">

            <div className="text-white border-b-2 mb-2 flex justify-between">
                <div>
                    <button className={`px-2 mb-1 ${activeTab == 0 && 'border-b-2 '}`} onClick={() => handleTabClick(0)}>JavaScript</button>
                    <button className={`px-2 ${activeTab == 1 && 'border-b-2 '}`} onClick={() => handleTabClick(1)}>html</button>
                    <button className={`px-2 ${activeTab == 2 && 'border-b-2 '}`} onClick={() => handleTabClick(2)}>css</button>
                </div> 
                <ViewColumnsIcon className="h-5 w-5 inline-block " />

            </div>

            {activeTab === 0 && 
                <Edit value={java} onChange={setJava} extension={[javascript({ jsx: true })]} title='JavaScript ' />
            }
            {activeTab === 1 && 
                <Edit value={cssVal} onChange={setCss} extension={[css()]}  title="css"/>
            }
            {activeTab === 2 && 
                <Edit value={htmlval} onChange={setHtml} extension={[html()]} title="html" />
            }
            
            <div>

            </div>
        </div>

        <div  className="grow  ">
            <iframe 
                srcDoc={doc}
                title="ide"
                sandbox="allow-scripts"
                className="w-full h-full"
            />
        </div>
    </div>
    )
}


export default Ide;