"use strict";(self.webpackChunkweb_music_score_org=self.webpackChunkweb_music_score_org||[]).push([["6847"],{5990(e,n,t){t.r(n),t.d(n,{metadata:()=>o,default:()=>f,frontMatter:()=>a,contentTitle:()=>l,toc:()=>v,assets:()=>d});var o=JSON.parse('{"id":"events","title":"Events","description":"Some event handling is possible.","source":"@site/docs/090-events.md","sourceDirName":".","slug":"/events","permalink":"/docs/v7/events","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":90,"frontMatter":{"sidebar_position":90},"sidebar":"docSidebar","previous":{"title":"Programmatic Playback","permalink":"/docs/v7/create-controls/progr-playback"},"next":{"title":"General MIDI","permalink":"/docs/v7/gm"}}'),r=t(4848),i=t(8453),c=t(7282);let s=[{name:"Event Handling In Plain JavaScript",code:`
function ExampleCode() {
    // This example requires use of useEffect() because of React environment.
    // In real world, the HTML elements need to be declared before using them in JavaScript.
    React.useEffect(() => {
        const doc = new Score.DocumentBuilder()
            .setScoreConfiguration({ type: "staff", clef: "G", minNote: "E3", maxNote: "E6" })
            .setKeySignature("C Major")
            .addNote(0, ["C4", "E4", "G4", "C5"], "4n")
            .addMeasure()
            .addChord(0, ["C4", "E4", "G4", "C5"], "1n", { arpeggio: "up" })
            .getDocument();

        function onScoreEvent(event) {
            if (Score.ScoreEvent.is(event)) {
                console.log("ScoreEvent type = '" + event.type + "'");
            }

            if (Score.ScoreStaffEvent.is(event)) {
                event.view.hilightStaffPos(event.type === "leave" ? undefined : event);

                if(event.type === "click")
                    Audio.playNote(event.noteName);
            }

            if (Score.ScoreObjectEvent.is(event)) {
                event.view.hilightObject(event.type === "leave" ? undefined : event.topObject);
            }
        }

        const view = new Score.WmsView();
        
        view.setCanvas("canvasId");
        view.setDocument(doc);
        view.setScoreEventListener(onScoreEvent);

        view.draw();
    }, []);

    return <canvas id="canvasId"></canvas>;
}`},{name:"Event Handling With React",code:`
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setScoreConfiguration("treble")
        .setKeySignature("C Major")
        .addNote(0, ["C4", "E4", "G4", "C5"], "4n")
        .addMeasure()
        .addChord(0, ["C4", "E4", "G4", "C5"], "1n", { arpeggio: "up" })
        .getDocument();

    function onScoreEvent(event) {
        if (Score.ScoreEvent.is(event)) {
            console.log("ScoreEvent type = '" + event.type + "'");
        }

        if (Score.ScoreStaffEvent.is(event)) {
            event.view.hilightStaffPos(event.type === "leave" ? undefined : event);

            if(event.type === "click")
                Audio.playNote(event.midiNumber);
        }

        if (Score.ScoreObjectEvent.is(event)) {
            event.view.hilightObject(event.type === "leave" ? undefined : event.topObject);
        }
    }

    return <ReactUI.WmsView doc={doc} onScoreEvent={onScoreEvent} />;
}`}],a={sidebar_position:90},l="Events",d={},v=[{value:"Live Example",id:"live-example",level:2}];function u(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"events",children:"Events"})}),"\n",(0,r.jsx)(n.p,{children:"Some event handling is possible."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'function onScoreEvent(event: Score.ScoreEvent) {\r\n    // Event type can be "enter", "leave" or "click"\r\n    console.log(`Event type:   ${event.type}`);\r\n\r\n    // Is it ScoreStaffEvent?\r\n    if (Score.ScoreStaffEvent.is(event)) {\r\n        console.log("ScoreStaffEvent");\r\n\r\n        // Some note event variables.\r\n        console.log(`Note name:    ${event.noteName}`);\r\n        console.log(`Diatonic id:  ${event.diatonicId}`);\r\n        console.log(`Accidental:   ${event.accidental}`);\r\n        console.log(`Chromatic id: ${event.chromaticId}`);\r\n        console.log(`MIDI number:  ${event.midiNumber}`);\r\n\r\n        // You can play clicked note.\r\n        if(event.type === "click") {\r\n            // With note name.\r\n            Audio.playNote(event.noteName);\r\n            // Or with midi number.\r\n            Audio.playNote(event.midiNumber);\r\n        }\r\n\r\n        // Hilight the staff position on the view.\r\n        const staffPos = { staff: event.staff, diatonicId: event.diatonicId }\r\n        event.view.hilightStaffPos(event.type === "leave" ? undefined : staffPos);\r\n    }\r\n\r\n    // Is it ScoreObjectEevent?\r\n    if (Score.ScoreObjectEvent.is(event)) {\r\n        console.log("ScoreObjectEvent");\r\n\r\n        // Event has object stack from root to top in hierarchy.\r\n        console.log(`Object stack: ${event.objects.map(o => o.name).join(" -> ")}`);\r\n\r\n        // Easily use top object.\r\n        console.log(`Top object: ${event.topObjects.name}`);\r\n\r\n        // Find objects.\r\n        const measure = event.findObject(obj => obj.name === "Measure");\r\n\r\n        // Hilight objects on the view.\r\n        event.view.hilightObject(event.type === "leave" ? undefined : event.topObject);\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"live-example",children:"Live Example"}),"\n",(0,r.jsx)(c.r,{code:s})]})}function f(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7282(e,n,t){t.d(n,{r:()=>v});var o,r=t(4848),i=t(6540),c=t(923),s=t(85),a=t(9526);async function l(){let[e,n,o,r,i,c]=await Promise.all([t.e("8040").then(t.bind(t,8923)),Promise.all([t.e("8040"),t.e("4818"),t.e("9171")]).then(t.bind(t,6462)),Promise.all([t.e("8040"),t.e("4818"),t.e("9171"),t.e("5099"),t.e("5851")]).then(t.bind(t,6838)),Promise.all([t.e("8040"),t.e("4818")]).then(t.bind(t,8793)),Promise.all([t.e("8040"),t.e("4818"),t.e("9171"),t.e("5099")]).then(t.bind(t,486)),Promise.all([t.e("8040"),t.e("4818"),t.e("9171"),t.e("5099"),t.e("80")]).then(t.bind(t,2515))]);return{Core:e,Audio:n,ReactUI:o,Theory:r,Score:i,Pieces:c}}function d(e){let[n,s]=i.useState(e.entry.code);return(0,r.jsx)(a.A,{children:()=>{let[a,d]=i.useState(null);if(i.useEffect(()=>{l().then(e=>{d(e)})},[]),!a)return(0,r.jsx)("div",{children:"Loading..."});let{Core:v,Audio:u,ReactUI:f,Score:p,Theory:m,Pieces:h}=a;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Q,{language:"jsx",code:n,scope:{Core:v,Audio:u,Score:p,Theory:m,Pieces:h,ReactUI:f,React:o||(o=t.t(i,2))},children:[(0,r.jsx)(c.w,{onChange:n=>{e.onEdit&&e.onEdit(n),s(n),u.stop()}}),(0,r.jsx)(c.p1,{}),(0,r.jsx)("br",{}),(0,r.jsx)(c.pA,{})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["\u2139\uFE0F Runs on ",(0,r.jsx)("code",{children:v.getLibInfo()}),"."]})]})}})}function v(e){let[n,t]=i.useState(0),o=(0,s.M)(e.code),c=o[n];return(0,r.jsxs)(r.Fragment,{children:[o.length>1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("select",{value:n,onChange:e=>t(Number(e.target.value)),className:"select",children:o.map((e,n)=>(0,r.jsx)("option",{value:n,children:e.name},n))}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}):null,(0,r.jsx)(d,{entry:c},n)]})}}}]);