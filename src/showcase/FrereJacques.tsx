import { createFrereJacques } from "web-music-score-v7/pieces";
import ViewSong from "./ViewSong";

export default function FrereJacquesDemo(props: {}) {
    return <ViewSong doc={createFrereJacques()} />
}
