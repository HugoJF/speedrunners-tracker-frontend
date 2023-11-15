import React, {FC, useEffect} from "react";
import {Select} from "@/components/select";
import {Modal} from "@/components/modal";
import {ModalBody} from "@/components/modal-body";
import {ModalFooter} from "@/components/modal-footer";
import {ButtonGroup} from "@/components/button-group";
import {Button} from "@/components/button";
import {useForm} from "react-hook-form";
import {FieldErrors} from "@/components/field-errors";
import {maps} from "@/utils/map";
import {useSprint} from "@/queries/useSprint";
import {useUpdateMatch} from "@/mutations/update-match";

type ComponentProps = {
    onUpdate?: Promise<void>;
    match: Match;
}
type Props = ModalProps & ComponentProps;

type FormData = {
    p1_score: number;
    p2_score: number;
    map: string; // TODO proper type
}
// TODO remove
const scores = [0, 1, 2, 3];

export const UpdateMatchForm: FC<Props> = ({
    visible,
    onClose,
    match,
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<FormData>({
        defaultValues: match,
    });

    console.log({match})
    const sprint = useSprint(match?.sprint_id);
    const updateMatch = useUpdateMatch();

    useEffect(() => {
        reset(match);
    }, [match])

    function handleOnClose() {
        if (onClose) {
            onClose();
        }
    }

    async function handleMatchCreate(data: FormData) {
        await updateMatch.mutateAsync({
            id: match.id,
            ...data
        })
        handleOnClose();
    }

    return <>
        <Modal
            visible={visible}
            header="Creating new match"
            onClose={handleOnClose}
        >
            <form onSubmit={handleSubmit(handleMatchCreate)}>
                <ModalBody>
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
                                <span>{sprint.data?.data.p1_name ?? 'Player 1'}</span>
                                <span
                                    className="mx-3 text-blue-600 font-mono font-bold">vs</span>
                                <span>{sprint.data?.data?.p2_name ?? 'Player 2'}</span>
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
