"use strict";(self.webpackChunkweb_music_score_org=self.webpackChunkweb_music_score_org||[]).push([["9066"],{540(e,n,d){d.r(n),d.d(n,{metadata:()=>t,default:()=>h,frontMatter:()=>r,contentTitle:()=>l,toc:()=>x,assets:()=>c});var t=JSON.parse('{"id":"create-doc/add-extension","title":"Add Extension","description":"Adds extension line to previously added element (label, annotation).","source":"@site/versioned_docs/version-v6/060-create-doc/190-add-extension.md","sourceDirName":"060-create-doc","slug":"/create-doc/add-extension","permalink":"/docs/v6/create-doc/add-extension","draft":false,"unlisted":false,"tags":[],"version":"v6","sidebarPosition":190,"frontMatter":{"sidebar_position":190},"sidebar":"docSidebar","previous":{"title":"Add Label","permalink":"/docs/v6/create-doc/add-label"},"next":{"title":"Add Connective","permalink":"/docs/v6/create-doc/add-connective"}}'),s=d(4848),a=d(8453),i=d(5751);let o=`
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
}`,r={sidebar_position:190},l="Add Extension",c={},x=[{value:"Examples",id:"examples",level:2},{value:"Live Example",id:"live-example",level:2}];function u(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"add-extension",children:"Add Extension"})}),"\n",(0,s.jsx)(n.p,{children:"Adds extension line to previously added element (label, annotation)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builder.addExtension(ext => {\r\n    // Add extension length by noteLength * noteCount (1 if omitted).\r\n    ext.notes(noteLength, noteCount?);\r\n    // Add extension length by number of beats (since v6.5.0).\r\n    ext.beats(beatCount);\r\n    // Add extension length by number of measures.\r\n    ext.measures(measureCount);\r\n    // Set as extension long as possible.\r\n    ext.infinity();\r\n    // Hide extension line.\r\n    ext.hide();\r\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Add extension line, length is 2 whole notes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'builder.addExtension(ext => ext.notes("1n", 2));\n'})}),"\n",(0,s.jsx)(n.p,{children:"Add extension line, length is 2 beats (since v6.5.0):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builder.addExtension(ext => ext.beats(2));\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add extension line, length is 3 measures, hidden:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builder.addExtension(ext => ext.measures(3).hide());\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add extension line, length is 1 measure + 1 eigth note:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'builder.addExtension(ext => ext.measures(1).notes("8n"));\n'})}),"\n",(0,s.jsx)(n.p,{children:"Add extension line, length is as long as possible:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builder.addExtension(ext => ext.infinity());\r\nbuilder.addExtension();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"live-example",children:"Live Example"}),"\n",(0,s.jsx)(i.r,{code:o})]})}function h(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5751(e,n,d){d.d(n,{r:()=>x});var t,s=d(4848),a=d(6540),i=d(923),o=d(85),r=d(9526);async function l(){let[e,n,t,s,a,i,o,r]=await Promise.all([d.e("6743").then(d.bind(d,5690)),Promise.all([d.e("6743"),d.e("8933"),d.e("7381"),d.e("7762")]).then(d.bind(d,3721)),Promise.all([d.e("6743"),d.e("8933"),d.e("7381"),d.e("3575")]).then(d.bind(d,1978)),Promise.all([d.e("8933"),d.e("7792")]).then(d.bind(d,8500)),Promise.all([d.e("6743"),d.e("8933"),d.e("7381"),d.e("730"),d.e("8116")]).then(d.bind(d,2175)),Promise.all([d.e("6743"),d.e("7381")]).then(d.bind(d,4388)),Promise.all([d.e("6743"),d.e("8933"),d.e("7381"),d.e("730")]).then(d.bind(d,9041)),Promise.all([d.e("6743"),d.e("8933"),d.e("7381"),d.e("730"),d.e("4931")]).then(d.bind(d,3774))]);return{Core:e,Audio:n,AudioCG:t,AudioSynth:s,ReactUI:a,Theory:i,Score:o,Pieces:r}}function c(e){let[n,o]=a.useState(e.entry.code);return(0,s.jsx)(r.A,{children:()=>{let[r,c]=a.useState(null);if(a.useEffect(()=>{l().then(e=>{e.Audio.stop(),c(e)})},[]),!r)return(0,s.jsx)("div",{children:"Loading..."});let{Core:x,Audio:u,AudioCG:h,AudioSynth:m,ReactUI:p,Score:b,Theory:j,Pieces:g}=r;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.Q,{language:"jsx",code:n,scope:{Core:x,Audio:u,AudioCG:h,AudioSynth:m,Score:b,Theory:j,Pieces:g,ReactUI:p,React:t||(t=d.t(a,2))},children:[(0,s.jsx)(i.w,{onChange:n=>{e.onEdit&&e.onEdit(n),o(n),u.stop()}}),(0,s.jsx)(i.p1,{}),(0,s.jsx)("br",{}),(0,s.jsx)(i.pA,{})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["\u2139\uFE0F Runs on ",(0,s.jsx)("code",{children:x.getLibInfo()}),"."]})]})}})}function x(e){let[n,d]=a.useState(0),t=(0,o.M)(e.code),i=t[n];return(0,s.jsxs)(s.Fragment,{children:[t.length>1?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("select",{value:n,onChange:e=>d(Number(e.target.value)),className:"select",children:t.map((e,n)=>(0,s.jsx)("option",{value:n,children:e.name},n))}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}):null,(0,s.jsx)(c,{entry:i},n)]})}}}]);