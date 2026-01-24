import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface HintProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
}

export default function Hint({ children, icon }: HintProps) {
    return (
        <div className={clsx(styles.hint)}>
            <span className={styles.icon}>{icon ?? '💡'}</span>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
