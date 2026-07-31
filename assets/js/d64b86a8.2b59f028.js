"use strict";(self.webpackChunkweb_music_score_org=self.webpackChunkweb_music_score_org||[]).push([["6847"],{6999(e,n,t){t.r(n),t.d(n,{metadata:()=>r,default:()=>f,frontMatter:()=>s,contentTitle:()=>l,toc:()=>v,assets:()=>d});var r=JSON.parse('{"id":"events","title":"Events","description":"Version 6.4.x","source":"@site/docs/090-events.md","sourceDirName":".","slug":"/events","permalink":"/docs/events","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":90,"frontMatter":{"sidebar_position":90},"sidebar":"docSidebar","previous":{"title":"Programmatic Playback","permalink":"/docs/create-controls/progr-playback"},"next":{"title":"General MIDI","permalink":"/docs/gm"}}'),o=t(4848),i=t(8453),c=t(7159);let a=[{name:"Event Handling In Plain JavaScript",code:`
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
}`}],s={sidebar_position:90},l="Events",d={},v=[{value:"Version 6.4.x",id:"version-64x",level:2},{value:"Version 6.3.x and Earlier",id:"version-63x-and-earlier",level:2},{value:"Live Example",id:"live-example",level:2}];function u(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"events",children:"Events"})}),"\n",(0,o.jsx)(n.h2,{id:"version-64x",children:"Version 6.4.x"}),"\n",(0,o.jsx)(n.p,{children:"Version 6.4.x has some event handling."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'function onScoreEvent(event: Score.ScoreEvent) {\r\n    // Event type can be "enter", "leave" or "click"\r\n    console.log(`Event type:   ${event.type}`);\r\n\r\n    // Is it ScoreStaffEvent?\r\n    if (Score.ScoreStaffEvent.is(event)) {\r\n        console.log("ScoreStaffEvent");\r\n\r\n        // Some note event variables.\r\n        console.log(`Note name:    ${event.noteName}`);\r\n        console.log(`Diatonic id:  ${event.diatonicId}`);\r\n        console.log(`Accidental:   ${event.accidental}`);\r\n        console.log(`Chromatic id: ${event.chromaticId}`);\r\n        console.log(`MIDI number:  ${event.midiNumber}`);\r\n\r\n        // You can play clicked note.\r\n        if(event.type === "click") {\r\n            // With note name.\r\n            Audio.playNote(event.noteName);\r\n            // Or with midi number.\r\n            Audio.playNote(event.midiNumber);\r\n        }\r\n\r\n        // Hilight the staff position on the view.\r\n        const staffPos = { staff: event.staff, diatonicId: event.diatonicId }\r\n        event.view.hilightStaffPos(event.type === "leave" ? undefined : staffPos);\r\n    }\r\n\r\n    // Is it ScoreObjectEevent?\r\n    if (Score.ScoreObjectEvent.is(event)) {\r\n        console.log("ScoreObjectEvent");\r\n\r\n        // Event has object stack from root to top in hierarchy.\r\n        console.log(`Object stack: ${event.objects.map(o => o.name).join(" -> ")}`);\r\n\r\n        // Easily use top object.\r\n        console.log(`Top object: ${event.topObjects.name}`);\r\n\r\n        // Find objects.\r\n        const measure = event.findObject(obj => obj.name === "Measure");\r\n\r\n        // Hilight objects on the view.\r\n        event.view.hilightObject(event.type === "leave" ? undefined : event.topObject);\r\n    }\r\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"version-63x-and-earlier",children:"Version 6.3.x and Earlier"}),"\n",(0,o.jsx)(n.p,{children:"Versions 6.3.x and earlier also have some event handling but they are undocumented.\r\nEvents for 6.4.x required update after internal changes."}),"\n",(0,o.jsx)(n.h2,{id:"live-example",children:"Live Example"}),"\n",(0,o.jsx)(c.r,{code:a})]})}function f(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},7159(e,n,t){t.d(n,{r:()=>g});var r,o=t(4848),i=t(6540),c=t(923),a=t(5690),s=t(3721),l=t(1978),d=t(8500),v=t(9041),u=t(4388),f=t(3774),p=t(2175),m=t(9526);function h(e){let[n,h]=i.useState(e.entry.code),g=n=>{e.onEdit&&e.onEdit(n),h(n),s.stop()};return(0,o.jsx)(m.A,{children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c.Q,{language:"jsx",code:n,scope:{Core:a,Audio:s,AudioCG:l,AudioSynth:d,Score:v,Theory:u,Pieces:f,ReactUI:p,React:r||(r=t.t(i,2))},children:[(0,o.jsx)(c.w,{onChange:g}),(0,o.jsx)(c.p1,{}),(0,o.jsx)("br",{}),(0,o.jsx)(c.pA,{})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["\u2139\uFE0F Runs on ",(0,o.jsx)("code",{children:a.getLibInfo()}),"."]})]})})}function g(e){var n;let[t,r]=i.useState(0),c=(Array.isArray(n=e.code)?n:[n]).map((e,n,t)=>{if("string"==typeof e){let r=t.length>1?"Example "+(n+1):"",o=""===r?e.trim():`// ${r}
${e.trim()}`;return{name:r,code:o}}{let n=e.name.trim(),t=""===n?e.code.trim():`// ${n}
${e.code.trim()}`;return{name:n,code:t}}}),a=c[t];return(0,o.jsxs)(o.Fragment,{children:[c.length>1?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("select",{value:t,onChange:e=>r(Number(e.target.value)),className:"select",children:c.map((e,n)=>(0,o.jsx)("option",{value:n,children:e.name},n))}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]}):null,(0,o.jsx)(h,{entry:a},t)]})}}}]);