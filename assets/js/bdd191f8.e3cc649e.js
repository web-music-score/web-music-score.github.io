"use strict";(self.webpackChunkweb_music_score_org=self.webpackChunkweb_music_score_org||[]).push([["2541"],{4590(e,t,r){r.r(t),r.d(t,{metadata:()=>n,default:()=>m,frontMatter:()=>d,contentTitle:()=>i,toc:()=>u,assets:()=>l});var n=JSON.parse('{"id":"create-doc/use-repeat","title":"Use Repeat","description":"You can repeat builder actions given number of times using repeat function.","source":"@site/docs/060-create-doc/210-use-repeat.md","sourceDirName":"060-create-doc","slug":"/create-doc/use-repeat","permalink":"/docs/create-doc/use-repeat","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":210,"frontMatter":{"sidebar_position":210},"sidebar":"docSidebar","previous":{"title":"Add Connective","permalink":"/docs/create-doc/add-connective"},"next":{"title":"Element Position","permalink":"/docs/create-doc/element-pos"}}'),s=r(4848),a=r(8453),o=r(7159);let c=`
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .repeat(2, b1 => {
            b1.repeat(3, b2 => {
            b1.addMeasure();
                b2.addNote(0, "C4", "8n");
                b2.addNote(0, "E4", "8n");
                b2.addRest(0, "4n");
            })
            b1.endRow();
        })
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`,d={sidebar_position:210},i="Use Repeat",l={},u=[{value:"Live Example",id:"live-example",level:2}];function p(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"use-repeat",children:"Use Repeat"})}),"\n",(0,s.jsxs)(t.p,{children:["You can repeat builder actions given number of times using ",(0,s.jsx)(t.code,{children:"repeat"})," function."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'builder.repeat(2, b => {\r\n    b.addNote(0, "C4", "8n");\r\n    b.addNote(0, "E4", "8n");\r\n    b.addRest(0, "4n");\r\n});\n'})}),"\n",(0,s.jsx)(t.h2,{id:"live-example",children:"Live Example"}),"\n",(0,s.jsx)(o.r,{code:c})]})}function m(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},7159(e,t,r){r.d(t,{r:()=>j});var n,s=r(4848),a=r(6540),o=r(923),c=r(5690),d=r(3721),i=r(1978),l=r(8500),u=r(9041),p=r(4388),m=r(3774),h=r(2175),x=r(9526);function b(e){let[t,b]=a.useState(e.entry.code),j=t=>{e.onEdit&&e.onEdit(t),b(t),d.stop()};return(0,s.jsx)(x.A,{children:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.Q,{language:"jsx",code:t,scope:{Core:c,Audio:d,AudioCG:i,AudioSynth:l,Score:u,Theory:p,Pieces:m,ReactUI:h,React:n||(n=r.t(a,2))},children:[(0,s.jsx)(o.w,{onChange:j}),(0,s.jsx)(o.p1,{}),(0,s.jsx)("br",{}),(0,s.jsx)(o.pA,{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["\u2139\uFE0F Runs on ",(0,s.jsx)("code",{children:c.getLibInfo()}),"."]})]})})}function j(e){var t;let[r,n]=a.useState(0),o=(Array.isArray(t=e.code)?t:[t]).map((e,t,r)=>{if("string"==typeof e){let n=r.length>1?"Example "+(t+1):"",s=""===n?e.trim():`// ${n}
${e.trim()}`;return{name:n,code:s}}{let t=e.name.trim(),r=""===t?e.code.trim():`// ${t}
${e.code.trim()}`;return{name:t,code:r}}}),c=o[r];return(0,s.jsxs)(s.Fragment,{children:[o.length>1?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("select",{value:r,onChange:e=>n(Number(e.target.value)),className:"select",children:o.map((e,t)=>(0,s.jsx)("option",{value:t,children:e.name},t))}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}):null,(0,s.jsx)(b,{entry:c},r)]})}}}]);