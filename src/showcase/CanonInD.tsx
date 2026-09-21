import { createCanonInD } from "web-music-score-v7/pieces";
import ViewSong from "./ViewSong";

export default function CanonInDDemo(props: {}) {
    return <ViewSong doc={createCanonInD()} />
}
