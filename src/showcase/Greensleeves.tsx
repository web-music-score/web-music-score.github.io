import { createGreensleeves } from "web-music-score-v7/pieces";
import ViewSong from "./ViewSong";

export default function GreensleevesDemo(props: {}) {
    return <ViewSong doc={createGreensleeves()} />
}
