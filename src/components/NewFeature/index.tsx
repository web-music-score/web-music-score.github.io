import React from "react";

type NewFeatureProps = {
    since: string;
    children: React.ReactNode;
};

function NewFeature({ since, children }: NewFeatureProps) {
    if (since.startsWith("v")) since = since.substring(1);
    return (
        <blockquote>
            <strong>
                New Feature (v{since})
            </strong>
            {': '}{children}
        </blockquote>
    );
}

export default NewFeature;