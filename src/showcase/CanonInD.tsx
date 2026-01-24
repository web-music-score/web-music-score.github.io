import { createCanonInD } from "web-music-score-v6/pieces";
import ViewSong from "./ViewSong";

export default function CanonInDDemo(props: {}) {
    return <ViewSong doc={createCanonInD()} />
}
