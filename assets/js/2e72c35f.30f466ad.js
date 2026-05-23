"use strict";(self.webpackChunkweb_music_score_org=self.webpackChunkweb_music_score_org||[]).push([["9829"],{1264(e,n,r){r.r(n),r.d(n,{metadata:()=>t,default:()=>h,frontMatter:()=>l,contentTitle:()=>u,toc:()=>m,assets:()=>v});var t=JSON.parse('{"id":"create-view/plain-js","title":"Plain JavaScript","description":"Use WmsView","source":"@site/docs/070-create-view/plain-js.md","sourceDirName":"070-create-view","slug":"/create-view/plain-js","permalink":"/docs/create-view/plain-js","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30},"sidebar":"docSidebar","previous":{"title":"Custom HTML Element","permalink":"/docs/create-view/custom-element"},"next":{"title":"JSX/TSX React","permalink":"/docs/create-view/react"}}'),a=r(4848),s=r(8453),i=r(3945),c=r(7159);let o=`
function ExampleCode() {
    // This example requires use of useEffect() because of React environment.
    // In real world, the HTML elements need to be declared before using them in JavaScript.
    React.useEffect(() => {
        const doc = new Score.DocumentBuilder()
            .setScoreConfiguration("treble")
            .setTimeSignature("3/4")
            .addNote(0, ["C4", "E4", "G4"], "4n")
            .addMeasure()
            .addChord(0, ["C4", "E4", "G4"], "2.", { arpeggio: true })
            .getDocument();

        const view = new Score.WmsView();
        
        const canvas = document.getElementById("canvasId");

        view.setCanvas(canvas);
        view.setDocument(doc);
        view.setZoom(1.2);

        view.draw();
    }, []);

    return (
        <div id="divId">
            <canvas id="canvasId"></canvas>
        </div>
    );
}`;r(4461);var d=r(9757);let l={sidebar_position:30},u="Plain JavaScript",v={},m=[{value:"Use WmsView",id:"use-wmsview",level:2},{value:"Live Example",id:"live-example",level:2}];function p(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"plain-javascript",children:"Plain JavaScript"})}),"\n",(0,a.jsx)(n.h2,{id:"use-wmsview",children:"Use WmsView"}),"\n",(0,a.jsx)(i.U,{since:"6.1.0",from:"Score.MRenderContext",to:"Score.WmsView",simpleRename:!0}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'// Create view.\r\nconst view = new Score.WmsView();\r\n\r\n// Set canvas using canvas element id\r\n// Have <canvas id="canvasId"></canvas> in you HTML page\r\nview.setCanvas("canvasId");\r\n\r\n// Or create canvas manually\r\n// Do not forget to append canvas to HTML page!\r\nconst canvas = document.createElement("canvas");\r\nview.setCanvas(canvas);\r\n\r\n// Set document\r\nconst doc = new Score.DocumentBuilder().getdocument();\r\nview.setDocument(doc);\r\n\r\n// Deprecated (see Paint section): set paint\r\nconst paint = new Score.Paint();\r\nview.setPaint(paint);\r\n\r\n// Set zoom (optional)\r\nview.setZoom(1.5);\r\n\r\n// Set staff size, the distance between bottom and top staff lines (optional)\r\nview.setStaffSize("40px");\r\n\r\n// Render view\r\nview.draw();\n'})}),"\n",(0,a.jsx)(d.A,{children:'Using staff size with units "cm", "mm", "in", etc. can give unpredictable result depending on device.'}),"\n",(0,a.jsx)(n.h2,{id:"live-example",children:"Live Example"}),"\n",(0,a.jsx)(c.r,{code:o})]})}function h(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},3945(e,n,r){r.d(n,{U:()=>i});var t=r(4848);let a={change:"Change",deprecated:"Deprecated",breaking:"Breaking change"};function s({since:e,type:n="change",from:r,to:i,simpleRename:c}){return(0,t.jsxs)("blockquote",{children:[(0,t.jsxs)("strong",{children:[a[n]," (v",e,"):"]})," ",(0,t.jsx)("code",{children:i})," replaces ",(0,t.jsx)("code",{children:r}),".","deprecated"===n&&(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)("code",{children:r})," is deprecated and will be removed in a future major release.",c&&(0,t.jsxs)(t.Fragment,{children:[" ","Existing code can be migrated by renaming ",(0,t.jsx)("code",{children:r})," to ",(0,t.jsx)("code",{children:i}),"."]})]})]})}function i(e){return(0,t.jsx)(s,{...e,type:"deprecated"})}},4461(e,n,r){r.d(n,{A:()=>s});var t=r(4848);r(6540);var a=r(4164);function s({children:e,icon:n}){return(0,t.jsxs)("div",{className:(0,a.A)("hint_M8wi"),children:[(0,t.jsx)("span",{className:"icon_S8Po",children:n??"\u{1F4A1}"}),(0,t.jsx)("div",{className:"content_vBYW",children:e})]})}},7159(e,n,r){r.d(n,{r:()=>j});var t,a=r(4848),s=r(6540),i=r(923),c=r(5690),o=r(3721),d=r(1978),l=r(8500),u=r(9041),v=r(4388),m=r(3774),p=r(2175),h=r(9526);function x(e){let[n,x]=s.useState(e.entry.code),j=n=>{e.onEdit&&e.onEdit(n),x(n),o.stop()};return(0,a.jsx)(h.A,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.Q,{language:"jsx",code:n,scope:{Core:c,Audio:o,AudioCG:d,AudioSynth:l,Score:u,Theory:v,Pieces:m,ReactUI:p,React:t||(t=r.t(s,2))},children:[(0,a.jsx)(i.w,{onChange:j}),(0,a.jsx)(i.p1,{}),(0,a.jsx)("br",{}),(0,a.jsx)(i.pA,{})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("p",{children:["\u2139\uFE0F Runs on ",(0,a.jsx)("code",{children:c.getLibInfo()}),"."]})]})})}function j(e){var n;let[r,t]=s.useState(0),i=(Array.isArray(n=e.code)?n:[n]).map((e,n,r)=>{if("string"==typeof e){let t=r.length>1?"Example "+(n+1):"",a=""===t?e.trim():`// ${t}
${e.trim()}`;return{name:t,code:a}}{let n=e.name.trim(),r=""===n?e.code.trim():`// ${n}
${e.code.trim()}`;return{name:n,code:r}}}),c=i[r];return(0,a.jsxs)(a.Fragment,{children:[i.length>1?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("select",{value:r,onChange:e=>t(Number(e.target.value)),className:"select",children:i.map((e,n)=>(0,a.jsx)("option",{value:n,children:e.name},n))}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]}):null,(0,a.jsx)(x,{entry:c},r)]})}},9757(e,n,r){r.d(n,{A:()=>s});var t=r(4848),a=r(4461);function s({children:e,icon:n}){return(0,t.jsx)(a.A,{icon:n??"\u26A0\uFE0F",children:e})}}}]);