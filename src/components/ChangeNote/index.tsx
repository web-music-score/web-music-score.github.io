type ChangeNoteProps = {
    since: string;
    type?: 'change' | 'deprecated' | 'breaking';
    from: string;
    to: string;
    simpleRename?: boolean;
};

const labelMap = {
    change: 'Change',
    deprecated: 'Deprecated',
    breaking: 'Breaking change',
};

export function ChangeNote({
    since,
    type = 'change',
    from,
    to,
    simpleRename
}: ChangeNoteProps) {
    return (
        <blockquote>
            <strong>
                {labelMap[type]} (v{since}):
            </strong>{' '}
            <code>{to}</code> replaces <code>{from}</code>.
            {type === 'deprecated' && (
                <>
                    <br />
                    <code>{from}</code> is deprecated and will be removed in a future major release.
                    {simpleRename && (
                        <>
                            <br />
                            Existing code can be migrated by renaming <code>{from}</code> to <code>{to}</code>.
                        </>
                    )}
                </>
            )}
        </blockquote>
    );
}

export function DeprecatedRename(props: Omit<ChangeNoteProps, 'type'>) {
  return <ChangeNote {...props} type="deprecated" />;
}

