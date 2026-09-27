"use strict";(self.webpackChunkweb_music_score_org=self.webpackChunkweb_music_score_org||[]).push([["2659"],{9623(e,n,a){a.r(n),a.d(n,{metadata:()=>d,default:()=>u,frontMatter:()=>o,contentTitle:()=>l,toc:()=>p,assets:()=>c});var d=JSON.parse('{"id":"create-doc/add-span","title":"Add Span","description":"Span is annotation with length (extension line/hairpin).","source":"@site/docs/060-create-doc/190-add-span.md","sourceDirName":"060-create-doc","slug":"/create-doc/add-span","permalink":"/docs/v7/create-doc/add-span","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":190,"frontMatter":{"sidebar_position":190},"sidebar":"docSidebar","previous":{"title":"Add Annotation","permalink":"/docs/v7/create-doc/add-annotation"},"next":{"title":"Add Connective","permalink":"/docs/v7/create-doc/add-connective"}}'),s=a(4848),t=a(8453),i=a(7282);let r=`
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addMeasure()
        .setTempo(120)
        .addNote(0, "C4", "4n").addSpan("cresc.", span => span.infinity())
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addNote(0, "C4", "4n").addSpan("fff")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addSpan(">", span => span.infinity())
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addNote(0, "C4", "4n").addSpan("p")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addSpan("accel.", span => span.infinity())
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addNote(0, "C4", "4n").addAnnotation("a tempo")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addSpan("accel.", span => span.beats(4))
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4", "C4"], "4n")

        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`,o={sidebar_position:190},l="Add Span",c={},p=[{value:"Examples",id:"examples",level:2},{value:"Live Example",id:"live-example",level:2}];function h(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"add-span",children:"Add Span"})}),"\n",(0,s.jsx)(n.p,{children:"Span is annotation with length (extension line/hairpin)."}),"\n",(0,s.jsxs)(n.p,{children:["Function ",(0,s.jsx)(n.code,{children:"addSpan()"})," is very similar to ",(0,s.jsx)(n.code,{children:"addAnnotation()"}),", it only has extra ",(0,s.jsx)(n.code,{children:"spanBuilder"})," arg."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'builder.addSpan("dim.", span => {\r\n    // Add span length by noteLength * noteCount (1 if omitted).\r\n    span.notes(noteLength, noteCount?);\r\n    // Add span length by number of beats.\r\n    span.beats(beatCount);\r\n    // Add span length by number of measures.\r\n    span.measures(measureCount);\r\n    // Set span length to infinity (as long as possible).\r\n    span.infinity();\r\n    // Hide span.\r\n    span.hide();\r\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Add span, length is 2 whole notes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'builder.addSpan("<", span => span.notes("1n", 2));\n'})}),"\n",(0,s.jsx)(n.p,{children:"Add span, length is 2 beats:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'builder.addSpan("<", span => span.beats(2));\n'})}),"\n",(0,s.jsx)(n.p,{children:"Add hidden span, length is 3 measures:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'builder.addSpan("<", span => span.measures(3).hide());\n'})}),"\n",(0,s.jsx)(n.p,{children:"Add span, length is as long as possible:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'builder.addSpan("<", span => span.infinity());\n'})}),"\n",(0,s.jsx)(n.h2,{id:"live-example",children:"Live Example"}),"\n",(0,s.jsx)(i.r,{code:r})]})}function u(e={}){let{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7282(e,n,a){a.d(n,{r:()=>p});var d,s=a(4848),t=a(6540),i=a(923),r=a(85),o=a(9526);async function l(){let[e,n,d,s,t,i]=await Promise.all([a.e("8040").then(a.bind(a,8923)),Promise.all([a.e("8040"),a.e("4818"),a.e("9171")]).then(a.bind(a,6462)),Promise.all([a.e("8040"),a.e("4818"),a.e("9171"),a.e("5099"),a.e("5851")]).then(a.bind(a,6838)),Promise.all([a.e("8040"),a.e("4818")]).then(a.bind(a,8793)),Promise.all([a.e("8040"),a.e("4818"),a.e("9171"),a.e("5099")]).then(a.bind(a,486)),Promise.all([a.e("8040"),a.e("4818"),a.e("9171"),a.e("5099"),a.e("80")]).then(a.bind(a,2515))]);return{Core:e,Audio:n,ReactUI:d,Theory:s,Score:t,Pieces:i}}function c(e){let[n,r]=t.useState(e.entry.code);return(0,s.jsx)(o.A,{children:()=>{let[o,c]=t.useState(null);if(t.useEffect(()=>{l().then(e=>{c(e)})},[]),!o)return(0,s.jsx)("div",{children:"Loading..."});let{Core:p,Audio:h,ReactUI:u,Score:x,Theory:m,Pieces:j}=o;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.Q,{language:"jsx",code:n,scope:{Core:p,Audio:h,Score:x,Theory:m,Pieces:j,ReactUI:u,React:d||(d=a.t(t,2))},children:[(0,s.jsx)(i.w,{onChange:n=>{e.onEdit&&e.onEdit(n),r(n),h.stop()}}),(0,s.jsx)(i.p1,{}),(0,s.jsx)("br",{}),(0,s.jsx)(i.pA,{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["\u2139\uFE0F Runs on ",(0,s.jsx)("code",{children:p.getLibInfo()}),"."]})]})}})}function p(e){let[n,a]=t.useState(0),d=(0,r.M)(e.code),i=d[n];return(0,s.jsxs)(s.Fragment,{children:[d.length>1?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("select",{value:n,onChange:e=>a(Number(e.target.value)),className:"select",children:d.map((e,n)=>(0,s.jsx)("option",{value:n,children:e.name},n))}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}):null,(0,s.jsx)(c,{entry:i},n)]})}}}]);