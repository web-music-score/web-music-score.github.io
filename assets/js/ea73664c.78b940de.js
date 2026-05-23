"use strict";(self.webpackChunkweb_music_score_org=self.webpackChunkweb_music_score_org||[]).push([["713"],{8513(e,n,d){d.r(n),d.d(n,{metadata:()=>t,default:()=>m,frontMatter:()=>r,contentTitle:()=>l,toc:()=>x,assets:()=>c});var t=JSON.parse('{"id":"create-doc/add-extension","title":"Add Extension","description":"Adds extension line to previously added element (label, annotation).","source":"@site/docs/060-create-doc/190-add-extension.md","sourceDirName":"060-create-doc","slug":"/create-doc/add-extension","permalink":"/docs/create-doc/add-extension","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":190,"frontMatter":{"sidebar_position":190},"sidebar":"docSidebar","previous":{"title":"Add Label","permalink":"/docs/create-doc/add-label"},"next":{"title":"Add Connective","permalink":"/docs/create-doc/add-connective"}}'),s=d(4848),a=d(8453),o=d(7159);let i=`
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addMeasure()
        .setTempo(120)
        .addNote(0, "C4", "4n").addAnnotation("dynamics", "cresc.").addExtension()
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addNote(0, "C4", "4n").addAnnotation("dynamics", "fff")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("dynamics", "dim.").addExtension()
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addNote(0, "C4", "4n").addAnnotation("dynamics", "p")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("tempo", "accel.").addExtension()
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addNote(0, "C4", "4n").addAnnotation("tempo", "a tempo")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("tempo", "accel.").addExtension(ext => ext.notes("4n", 5))
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4", "C4"], "4n")

        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`,r={sidebar_position:190},l="Add Extension",c={},x=[{value:"Examples",id:"examples",level:2},{value:"Live Example",id:"live-example",level:2}];function u(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"add-extension",children:"Add Extension"})}),"\n",(0,s.jsx)(n.p,{children:"Adds extension line to previously added element (label, annotation)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builder.addExtension(ext => {\r\n    // Add extension length by noteLength * noteCount (1 if omitted).\r\n    ext.notes(noteLength, noteCount?);\r\n    // Add extension length by number of measures.\r\n    ext.measures(measureCount);\r\n    // Set as extension long as possible.\r\n    ext.infinity();\r\n    // Hide extension line.\r\n    ext.hide();\r\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Add extension line, length is 2 whole notes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'builder.addExtension(ext => ext.notes("1n", 2));\n'})}),"\n",(0,s.jsx)(n.p,{children:"Add extension line, length is 3 measures, hidden:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builder.addExtension(ext => ext.measures(3).hide());\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add extension line, length is 1 measure + 1 eigth note:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'builder.addExtension(ext => ext.measures(1).notes("8n"));\n'})}),"\n",(0,s.jsx)(n.p,{children:"Add extension line, length is as long as possible:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builder.addExtension(ext => ext.infinity());\r\nbuilder.addExtension();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"live-example",children:"Live Example"}),"\n",(0,s.jsx)(o.r,{code:i})]})}function m(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7159(e,n,d){d.d(n,{r:()=>g});var t,s=d(4848),a=d(6540),o=d(923),i=d(5690),r=d(3721),l=d(1978),c=d(8500),x=d(9041),u=d(4388),m=d(3774),h=d(2175),p=d(9526);function j(e){let[n,j]=a.useState(e.entry.code),g=n=>{e.onEdit&&e.onEdit(n),j(n),r.stop()};return(0,s.jsx)(p.A,{children:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.Q,{language:"jsx",code:n,scope:{Core:i,Audio:r,AudioCG:l,AudioSynth:c,Score:x,Theory:u,Pieces:m,ReactUI:h,React:t||(t=d.t(a,2))},children:[(0,s.jsx)(o.w,{onChange:g}),(0,s.jsx)(o.p1,{}),(0,s.jsx)("br",{}),(0,s.jsx)(o.pA,{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["\u2139\uFE0F Runs on ",(0,s.jsx)("code",{children:i.getLibInfo()}),"."]})]})})}function g(e){var n;let[d,t]=a.useState(0),o=(Array.isArray(n=e.code)?n:[n]).map((e,n,d)=>{if("string"==typeof e){let t=d.length>1?"Example "+(n+1):"",s=""===t?e.trim():`// ${t}
${e.trim()}`;return{name:t,code:s}}{let n=e.name.trim(),d=""===n?e.code.trim():`// ${n}
${e.code.trim()}`;return{name:n,code:d}}}),i=o[d];return(0,s.jsxs)(s.Fragment,{children:[o.length>1?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("select",{value:d,onChange:e=>t(Number(e.target.value)),className:"select",children:o.map((e,n)=>(0,s.jsx)("option",{value:n,children:e.name},n))}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}):null,(0,s.jsx)(j,{entry:i},d)]})}}}]);