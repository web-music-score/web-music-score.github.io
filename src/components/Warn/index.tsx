import Hint from "../Hint"

export interface WarnProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
}

export default function Warn({ children, icon }: WarnProps) {
    return <Hint icon={icon ?? "⚠️"}>{children}</Hint>;
}
