"use strict";(self.webpackChunkweb_music_score_org=self.webpackChunkweb_music_score_org||[]).push([["1192"],{9770(e,n,t){t.r(n),t.d(n,{metadata:()=>o,default:()=>h,frontMatter:()=>c,contentTitle:()=>l,toc:()=>v,assets:()=>d});var o=JSON.parse('{"id":"events","title":"Events","description":"Version 6.4.x","source":"@site/versioned_docs/version-v6/090-events.md","sourceDirName":".","slug":"/events","permalink":"/docs/v6/events","draft":false,"unlisted":false,"tags":[],"version":"v6","sidebarPosition":90,"frontMatter":{"sidebar_position":90},"sidebar":"docSidebar","previous":{"title":"Programmatic Playback","permalink":"/docs/v6/create-controls/progr-playback"},"next":{"title":"General MIDI","permalink":"/docs/v6/gm"}}'),r=t(4848),i=t(8453),s=t(5751);let a=[{name:"Event Handling In Plain JavaScript",code:`
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
}`}],c={sidebar_position:90},l="Events",d={},v=[{value:"Version 6.4.x",id:"version-64x",level:2},{value:"Version 6.3.x and Earlier",id:"version-63x-and-earlier",level:2},{value:"Live Example",id:"live-example",level:2}];function u(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"events",children:"Events"})}),"\n",(0,r.jsx)(n.h2,{id:"version-64x",children:"Version 6.4.x"}),"\n",(0,r.jsx)(n.p,{children:"Version 6.4.x has some event handling."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'function onScoreEvent(event: Score.ScoreEvent) {\r\n    // Event type can be "enter", "leave" or "click"\r\n    console.log(`Event type:   ${event.type}`);\r\n\r\n    // Is it ScoreStaffEvent?\r\n    if (Score.ScoreStaffEvent.is(event)) {\r\n        console.log("ScoreStaffEvent");\r\n\r\n        // Some note event variables.\r\n        console.log(`Note name:    ${event.noteName}`);\r\n        console.log(`Diatonic id:  ${event.diatonicId}`);\r\n        console.log(`Accidental:   ${event.accidental}`);\r\n        console.log(`Chromatic id: ${event.chromaticId}`);\r\n        console.log(`MIDI number:  ${event.midiNumber}`);\r\n\r\n        // You can play clicked note.\r\n        if(event.type === "click") {\r\n            // With note name.\r\n            Audio.playNote(event.noteName);\r\n            // Or with midi number.\r\n            Audio.playNote(event.midiNumber);\r\n        }\r\n\r\n        // Hilight the staff position on the view.\r\n        const staffPos = { staff: event.staff, diatonicId: event.diatonicId }\r\n        event.view.hilightStaffPos(event.type === "leave" ? undefined : staffPos);\r\n    }\r\n\r\n    // Is it ScoreObjectEevent?\r\n    if (Score.ScoreObjectEvent.is(event)) {\r\n        console.log("ScoreObjectEvent");\r\n\r\n        // Event has object stack from root to top in hierarchy.\r\n        console.log(`Object stack: ${event.objects.map(o => o.name).join(" -> ")}`);\r\n\r\n        // Easily use top object.\r\n        console.log(`Top object: ${event.topObjects.name}`);\r\n\r\n        // Find objects.\r\n        const measure = event.findObject(obj => obj.name === "Measure");\r\n\r\n        // Hilight objects on the view.\r\n        event.view.hilightObject(event.type === "leave" ? undefined : event.topObject);\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"version-63x-and-earlier",children:"Version 6.3.x and Earlier"}),"\n",(0,r.jsx)(n.p,{children:"Versions 6.3.x and earlier also have some event handling but they are undocumented.\r\nEvents for 6.4.x required update after internal changes."}),"\n",(0,r.jsx)(n.h2,{id:"live-example",children:"Live Example"}),"\n",(0,r.jsx)(s.r,{code:a})]})}function h(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5751(e,n,t){t.d(n,{r:()=>v});var o,r=t(4848),i=t(6540),s=t(923),a=t(85),c=t(9526);async function l(){let[e,n,o,r,i,s,a,c]=await Promise.all([t.e("6743").then(t.bind(t,5690)),Promise.all([t.e("6743"),t.e("8933"),t.e("7381"),t.e("7762")]).then(t.bind(t,3721)),Promise.all([t.e("6743"),t.e("8933"),t.e("7381"),t.e("3575")]).then(t.bind(t,1978)),Promise.all([t.e("8933"),t.e("7792")]).then(t.bind(t,8500)),Promise.all([t.e("6743"),t.e("8933"),t.e("7381"),t.e("730"),t.e("8116")]).then(t.bind(t,2175)),Promise.all([t.e("6743"),t.e("7381")]).then(t.bind(t,4388)),Promise.all([t.e("6743"),t.e("8933"),t.e("7381"),t.e("730")]).then(t.bind(t,9041)),Promise.all([t.e("6743"),t.e("8933"),t.e("7381"),t.e("730"),t.e("4931")]).then(t.bind(t,3774))]);return{Core:e,Audio:n,AudioCG:o,AudioSynth:r,ReactUI:i,Theory:s,Score:a,Pieces:c}}function d(e){let[n,a]=i.useState(e.entry.code);return(0,r.jsx)(c.A,{children:()=>{let[c,d]=i.useState(null);if(i.useEffect(()=>{l().then(e=>{e.Audio.stop(),d(e)})},[]),!c)return(0,r.jsx)("div",{children:"Loading..."});let{Core:v,Audio:u,AudioCG:h,AudioSynth:f,ReactUI:m,Score:p,Theory:b,Pieces:g}=c;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Q,{language:"jsx",code:n,scope:{Core:v,Audio:u,AudioCG:h,AudioSynth:f,Score:p,Theory:b,Pieces:g,ReactUI:m,React:o||(o=t.t(i,2))},children:[(0,r.jsx)(s.w,{onChange:n=>{e.onEdit&&e.onEdit(n),a(n),u.stop()}}),(0,r.jsx)(s.p1,{}),(0,r.jsx)("br",{}),(0,r.jsx)(s.pA,{})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["\u2139\uFE0F Runs on ",(0,r.jsx)("code",{children:v.getLibInfo()}),"."]})]})}})}function v(e){let[n,t]=i.useState(0),o=(0,a.M)(e.code),s=o[n];return(0,r.jsxs)(r.Fragment,{children:[o.length>1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("select",{value:n,onChange:e=>t(Number(e.target.value)),className:"select",children:o.map((e,n)=>(0,r.jsx)("option",{value:n,children:e.name},n))}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}):null,(0,r.jsx)(d,{entry:s},n)]})}}}]);