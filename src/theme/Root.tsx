import { useEffect } from "react";
import { initClarity } from "../analytics/clarity";

const WMS_CLARITY_ID = "v1aw2dgkm7";

export default function Root({ children }) {
    useEffect(() => {
        initClarity(WMS_CLARITY_ID);
    }, []);

  return <>{children}</>;
}
