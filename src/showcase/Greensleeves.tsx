import { createGreensleeves } from "web-music-score-v6/pieces";
import ViewSong from "./ViewSong";

export default function GreensleevesDemo(props: {}) {
    return <ViewSong doc={createGreensleeves()} />
}
