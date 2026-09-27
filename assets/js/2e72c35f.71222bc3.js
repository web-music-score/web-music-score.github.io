"use strict";(self.webpackChunkweb_music_score_org=self.webpackChunkweb_music_score_org||[]).push([["9829"],{7453(e,n,t){t.r(n),t.d(n,{metadata:()=>a,default:()=>h,frontMatter:()=>d,contentTitle:()=>l,toc:()=>u,assets:()=>v});var a=JSON.parse('{"id":"create-view/plain-js","title":"Plain JavaScript","description":"Use WmsView","source":"@site/docs/070-create-view/plain-js.md","sourceDirName":"070-create-view","slug":"/create-view/plain-js","permalink":"/docs/v7/create-view/plain-js","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30},"sidebar":"docSidebar","previous":{"title":"Custom HTML Element","permalink":"/docs/v7/create-view/custom-element"},"next":{"title":"JSX/TSX React","permalink":"/docs/v7/create-view/react"}}'),s=t(4848),i=t(8453),r=t(7282);let c=`
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
}`;t(4461);var o=t(9757);let d={sidebar_position:30},l="Plain JavaScript",v={},u=[{value:"Use WmsView",id:"use-wmsview",level:2},{value:"Live Example",id:"live-example",level:2}];function m(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"plain-javascript",children:"Plain JavaScript"})}),"\n",(0,s.jsx)(n.h2,{id:"use-wmsview",children:"Use WmsView"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// Create view.\r\nconst view = new Score.WmsView();\r\n\r\n// Set canvas using canvas element id\r\n// Have <canvas id="canvasId"></canvas> in you HTML page\r\nview.setCanvas("canvasId");\r\n\r\n// Or create canvas manually\r\n// Do not forget to append canvas to HTML page!\r\nconst canvas = document.createElement("canvas");\r\nview.setCanvas(canvas);\r\n\r\n// Set document\r\nconst doc = new Score.DocumentBuilder().getdocument();\r\nview.setDocument(doc);\r\n\r\n// Set zoom (optional)\r\nview.setZoom(1.5);\r\n\r\n// Set staff size, the distance between bottom and top staff lines (optional)\r\nview.setStaffSize("40px");\r\n\r\n// Render view\r\nview.draw();\n'})}),"\n",(0,s.jsx)(o.A,{children:'Using staff size with units "cm", "mm", "in", etc. can give unpredictable result depending on device.'}),"\n",(0,s.jsx)(n.h2,{id:"live-example",children:"Live Example"}),"\n",(0,s.jsx)(r.r,{code:c})]})}function h(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},4461(e,n,t){t.d(n,{A:()=>i});var a=t(4848);t(6540);var s=t(4164);function i({children:e,icon:n}){return(0,a.jsxs)("div",{className:(0,s.A)("hint_M8wi"),children:[(0,a.jsx)("span",{className:"icon_S8Po",children:n??"\u{1F4A1}"}),(0,a.jsx)("div",{className:"content_vBYW",children:e})]})}},7282(e,n,t){t.d(n,{r:()=>v});var a,s=t(4848),i=t(6540),r=t(923),c=t(85),o=t(9526);async function d(){let[e,n,a,s,i,r]=await Promise.all([t.e("8040").then(t.bind(t,8923)),Promise.all([t.e("8040"),t.e("4818"),t.e("9171")]).then(t.bind(t,6462)),Promise.all([t.e("8040"),t.e("4818"),t.e("9171"),t.e("5099"),t.e("5851")]).then(t.bind(t,6838)),Promise.all([t.e("8040"),t.e("4818")]).then(t.bind(t,8793)),Promise.all([t.e("8040"),t.e("4818"),t.e("9171"),t.e("5099")]).then(t.bind(t,486)),Promise.all([t.e("8040"),t.e("4818"),t.e("9171"),t.e("5099"),t.e("80")]).then(t.bind(t,2515))]);return{Core:e,Audio:n,ReactUI:a,Theory:s,Score:i,Pieces:r}}function l(e){let[n,c]=i.useState(e.entry.code);return(0,s.jsx)(o.A,{children:()=>{let[o,l]=i.useState(null);if(i.useEffect(()=>{d().then(e=>{l(e)})},[]),!o)return(0,s.jsx)("div",{children:"Loading..."});let{Core:v,Audio:u,ReactUI:m,Score:h,Theory:p,Pieces:w}=o;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.Q,{language:"jsx",code:n,scope:{Core:v,Audio:u,Score:h,Theory:p,Pieces:w,ReactUI:m,React:a||(a=t.t(i,2))},children:[(0,s.jsx)(r.w,{onChange:n=>{e.onEdit&&e.onEdit(n),c(n),u.stop()}}),(0,s.jsx)(r.p1,{}),(0,s.jsx)("br",{}),(0,s.jsx)(r.pA,{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["\u2139\uFE0F Runs on ",(0,s.jsx)("code",{children:v.getLibInfo()}),"."]})]})}})}function v(e){let[n,t]=i.useState(0),a=(0,c.M)(e.code),r=a[n];return(0,s.jsxs)(s.Fragment,{children:[a.length>1?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("select",{value:n,onChange:e=>t(Number(e.target.value)),className:"select",children:a.map((e,n)=>(0,s.jsx)("option",{value:n,children:e.name},n))}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}):null,(0,s.jsx)(l,{entry:r},n)]})}},9757(e,n,t){t.d(n,{A:()=>i});var a=t(4848),s=t(4461);function i({children:e,icon:n}){return(0,a.jsx)(s.A,{icon:n??"\u26A0\uFE0F",children:e})}}}]);