import {FC, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useSprints} from "../../queries/useSprints.tsx";
import {useCreateMatch} from "../../mutations/create-match.tsx";
import {CreateSprintForm} from "./create-sprint-form.tsx";
import {Modal} from "../modal.tsx";
import {ModalBody} from "../modal-body.tsx";
import {Select} from "../select.tsx";
import {FieldErrors} from "../field-errors.tsx";
import {maps} from "../../utils/map.ts";
import {ModalFooter} from "../modal-footer.tsx";
import {ButtonGroup} from "../button-group.tsx";
import {Button} from "../button.tsx";

type ComponentProps = {
    onCreate?: Promise<void>;
    initialSelectedSprintId?: string;
    match?: Match;
}
type Props = ModalProps & ComponentProps;

type FormData = {
    sprint_id: string;
    p1_score: number;
    p2_score: number;
    map: string; // TODO proper type
}
// TODO remove
const scores = [0, 1, 2, 3];

export const CreateMatchForm: FC<Props> = ({
                                               initialSelectedSprintId,
                                               visible,
                                               onClose,
                                               match,
                                           }) => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors}
    } = useForm<FormData>({
        defaultValues: {
            ...match,
            sprint_id: initialSelectedSprintId,
        }
    });
    const sprints = useSprints();
    const createMatch = useCreateMatch();
    const [sprintModalVisible, setSprintModalVisible] = useState(false);
    const selectedSprint = sprints.data?.data?.find(sprint => sprint.id === watch('sprint_id'))

    useEffect(() => {
        if (initialSelectedSprintId) {
            setValue('sprint_id', initialSelectedSprintId)
        }
    }, [initialSelectedSprintId])

    function handleOnClose() {
        if (onClose) {
            onClose();
        }
    }

    async function handleMatchCreate(data: FormData) {
        await createMatch.mutateAsync(data)
        handleOnClose();
    }

    return <>
        <CreateSprintForm
            visible={sprintModalVisible}
            onClose={() => setSprintModalVisible(false)}
        />
        <Modal
            visible={visible}
            header="Creating new match"
            onClose={handleOnClose}
        >
            <form onSubmit={handleSubmit(handleMatchCreate)}>
                <ModalBody>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Sprint</label>
                        {/*TODO validation*/}
                        <Select
                            {...register('sprint_id')}
                        >
                            <option>Please select sprint...</option>
                            {sprints.data.data?.map(sprint => <option
                                key={sprint.id}
                                value={sprint.id}
                            >
                                {sprint.name} ({sprint.id})
                            </option>)}
                        </Select>
                        <FieldErrors error={errors.sprint_id}/>
                        <a
                            className="text-gray-700 text-right text-sm underline cursor-pointer"
                            onClick={() => setSprintModalVisible(true)}
                        >
                            Create new sprint
                        </a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Score</label>
                        <div className="flex justify-between items-center">
                            {/*TODO select for p1 score*/}
                            {/*TODO validation*/}
                            <Select {...register('p1_score', {
                                valueAsNumber: true,
                                min: 0,
                                max: 3
                            })}>
                                {scores.map(score => <option key={score}
                                                             value={score}>{score}</option>)}
                            </Select>
                            <h3>
                                <span>{selectedSprint?.p1_name ?? 'Player 1'}</span>
                                <span
                                    className="mx-3 text-blue-600 font-mono font-bold">vs</span>
                                <span>{selectedSprint?.p2_name ?? 'Player 2'}</span>
                            </h3>
                            {/*TODO select for p2 score*/}
                            {/*TODO validation*/}
                            <Select {...register('p2_score', {
                                valueAsNumber: true,
                                min: 0,
                                max: 3
                            })}>
                                {scores.map(score => <option key={score}
                                                             value={score}>{score}</option>)}
                            </Select>
                        </div>
                        <FieldErrors error={errors.p1_score}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Map selection</label>
                        {/*TODO validation*/}
                        <Select {...register('map', {required: true})}>
                            {Object.entries(maps).map(([key, value]) => <option
                                key={key} value={key}>{value}</option>)}
                        </Select>
                        <FieldErrors error={errors.map}/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ButtonGroup>
                        {/*TODO loadnig state*/}
                        <Button as="button" size="sm" color="secondary"
                                onClick={handleOnClose}>Close</Button>
                        <Button as="button" size="sm" color="primary"
                                type="submit">Create</Button>
                        {/*TODO figure out how to change actions*/}
                        {/*<Button size="sm" color="primary" onClick={handleOnCreateMore}>Create more</Button>*/}
                    </ButtonGroup>
                </ModalFooter>
            </form>
        </Modal>
    </>
}
