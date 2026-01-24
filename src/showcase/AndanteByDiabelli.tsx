import { createAndanteByDiabelli } from "web-music-score-v6/pieces";
import ViewSong from "./ViewSong";

export default function AndanteByDiabelliDemo(props: {}) {
    return <ViewSong doc={createAndanteByDiabelli()} />
}
