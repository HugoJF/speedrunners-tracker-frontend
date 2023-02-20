type HasId = {
    id: string;
}
type Timestamps = {
    created_at: string;
    updated_at: string;
}

type SprintComputed = HasId & Timestamps & {
    p1_score: number;
    p2_score: number;
};
type SprintProperties = {
    name: string;
    goal: number;
    p1_name: string;
    p2_name: string;
}
type Sprint = SprintComputed & SprintProperties;

type MatchComputed = HasId & Timestamps;
type MatchProperties = {
    sprint_id: string;
    map: string; // TODO type
    p1_score: number;
    p2_score: number;
}
type Match = MatchComputed & MatchProperties;

interface ModalProps {
    open?: boolean;
    onClose?: () => void;
}

// https://stackoverflow.com/questions/53050011/remove-null-or-undefined-from-properties-of-a-type
type NonNullable<T> = Exclude<T, null | undefined>;
