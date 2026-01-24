import { createFrereJacques } from "web-music-score-v6/pieces";
import ViewSong from "./ViewSong";

export default function FrereJacquesDemo(props: {}) {
    return <ViewSong doc={createFrereJacques()} />
}
