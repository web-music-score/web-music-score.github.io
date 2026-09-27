"use strict";(self.webpackChunkweb_music_score_org=self.webpackChunkweb_music_score_org||[]).push([["5907"],{3411(n,e,a){a.r(e),a.d(e,{metadata:()=>d,default:()=>A,frontMatter:()=>l,contentTitle:()=>c,toc:()=>p,assets:()=>u});var d=JSON.parse('{"id":"create-doc/add-annotation","title":"Add Annotation","description":"See API Reference for Score.AnnotationGroup for list of annotation groups.","source":"@site/docs/060-create-doc/150-add-annotation.md","sourceDirName":"060-create-doc","slug":"/create-doc/add-annotation","permalink":"/docs/v7/create-doc/add-annotation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":150,"frontMatter":{"sidebar_position":150},"sidebar":"docSidebar","previous":{"title":"Add Lyrics","permalink":"/docs/v7/create-doc/add-lyrics"},"next":{"title":"Add Span","permalink":"/docs/v7/create-doc/add-span"}}'),t=a(4848),o=a(8453),r=a(7282);let i=`
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setTempo(80)
        .addNote(0, "C4", "4n").addAnnotation("fff")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n").addAnnotation("ppp")
        .addNote(0, "C4", "4n")
        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("cresc.")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n").addAnnotation("fff")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("accel.")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n").addAnnotation("a tempo")
        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("rit.")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n").addAnnotation("a tempo")
        
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;var s=a(4461);let l={sidebar_position:150},c="Add Annotation",u={},p=[{value:"Live Example",id:"live-example",level:2}];function m(n){let e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"add-annotation",children:"Add Annotation"})}),"\n",(0,t.jsxs)(s.A,{children:["See API Reference for ",(0,t.jsx)(e.code,{children:"Score.AnnotationGroup"})," for list of annotation groups."]}),"\n",(0,t.jsxs)(s.A,{children:["See API Reference for ",(0,t.jsx)(e.code,{children:"Score.AnnotationKind"})," for list of annotation kinds."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'// Add annotation\r\nbuilder.addAnnotation("fff");\r\n\r\n// Some common annotations are:\r\n// Dynamics: "ppp", "pp", "p", "mp", "mf", "f", "ff", "fff", "cresc.", "decresc.", "dim."\r\n// Tempo: "accel.", "rit.", "a tempo"\r\n\r\n// Add annotation to given annotation group\r\nbuilder.addAnnotation("accel.", "tempo");\r\n\r\n// Add fermata\r\nbuilder.addAnnotation("fermata");\r\n// Add fermata to right bar line\r\nbuilder.addAnnotation("fermata", { anchor: "rightBarLine" });\r\n\r\n// Add label examples\r\nbuilder.addAnnotation("C4", "pitchLabel");\r\nbuilder.addAnnotation("Am", "chordLabel");\r\n\r\n// Add articulation examples\r\nbuilder.addAnnotation("staccato");\r\nbuilder.addAnnotation("accent");\r\n\r\n// Add navigation examples\r\nbuilder.addAnnotation("D.C. al Fine");\r\nbuilder.addAnnotation("D.C. al Coda");\r\nbuilder.addAnnotation("D.S. al Fine");\r\nbuilder.addAnnotation("D.S. al Coda");\r\nbuilder.addAnnotation("Coda");\r\nbuilder.addAnnotation("toCoda");\r\nbuilder.addAnnotation("Segno");\r\nbuilder.addAnnotation("Fine");\r\nbuilder.addAnnotation("startRepeat");\r\nbuilder.addAnnotation("endRepeat", { playCount: 2 });\r\nbuilder.addAnnotation("ending", { playNumbers: [1, 2]});\n'})}),"\n",(0,t.jsx)(e.h2,{id:"live-example",children:"Live Example"}),"\n",(0,t.jsx)(r.r,{code:i})]})}function A(n={}){let{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(m,{...n})}):m(n)}},4461(n,e,a){a.d(e,{A:()=>o});var d=a(4848);a(6540);var t=a(4164);function o({children:n,icon:e}){return(0,d.jsxs)("div",{className:(0,t.A)("hint_M8wi"),children:[(0,d.jsx)("span",{className:"icon_S8Po",children:e??"\u{1F4A1}"}),(0,d.jsx)("div",{className:"content_vBYW",children:n})]})}},7282(n,e,a){a.d(e,{r:()=>u});var d,t=a(4848),o=a(6540),r=a(923),i=a(85),s=a(9526);async function l(){let[n,e,d,t,o,r]=await Promise.all([a.e("8040").then(a.bind(a,8923)),Promise.all([a.e("8040"),a.e("4818"),a.e("9171")]).then(a.bind(a,6462)),Promise.all([a.e("8040"),a.e("4818"),a.e("9171"),a.e("5099"),a.e("5851")]).then(a.bind(a,6838)),Promise.all([a.e("8040"),a.e("4818")]).then(a.bind(a,8793)),Promise.all([a.e("8040"),a.e("4818"),a.e("9171"),a.e("5099")]).then(a.bind(a,486)),Promise.all([a.e("8040"),a.e("4818"),a.e("9171"),a.e("5099"),a.e("80")]).then(a.bind(a,2515))]);return{Core:n,Audio:e,ReactUI:d,Theory:t,Score:o,Pieces:r}}function c(n){let[e,i]=o.useState(n.entry.code);return(0,t.jsx)(s.A,{children:()=>{let[s,c]=o.useState(null);if(o.useEffect(()=>{l().then(n=>{c(n)})},[]),!s)return(0,t.jsx)("div",{children:"Loading..."});let{Core:u,Audio:p,ReactUI:m,Score:A,Theory:h,Pieces:f}=s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.Q,{language:"jsx",code:e,scope:{Core:u,Audio:p,Score:A,Theory:h,Pieces:f,ReactUI:m,React:d||(d=a.t(o,2))},children:[(0,t.jsx)(r.w,{onChange:e=>{n.onEdit&&n.onEdit(e),i(e),p.stop()}}),(0,t.jsx)(r.p1,{}),(0,t.jsx)("br",{}),(0,t.jsx)(r.pA,{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("p",{children:["\u2139\uFE0F Runs on ",(0,t.jsx)("code",{children:u.getLibInfo()}),"."]})]})}})}function u(n){let[e,a]=o.useState(0),d=(0,i.M)(n.code),r=d[e];return(0,t.jsxs)(t.Fragment,{children:[d.length>1?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("select",{value:e,onChange:n=>a(Number(n.target.value)),className:"select",children:d.map((n,e)=>(0,t.jsx)("option",{value:e,children:n.name},e))}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]}):null,(0,t.jsx)(c,{entry:r},e)]})}}}]);