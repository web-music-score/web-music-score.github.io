import { createAndanteByDiabelli } from "web-music-score-v7/pieces";
import ViewSong from "./ViewSong";

export default function AndanteByDiabelliDemo(props: {}) {
    return <ViewSong doc={createAndanteByDiabelli()} />
}
