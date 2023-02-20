import React, {FC, useEffect} from "react";
import {Modal} from "@/components/modal";
import {useCreateSprint} from "@/mutations/create-sprint";
import {ModalBody} from "@/components/modal-body";
import {ModalFooter} from "@/components/modal-footer";
import {ButtonGroup} from "@/components/button-group";
import {Button} from "@/components/button";
import {useForm} from "react-hook-form";
import {FieldErrors} from "@/components/field-errors";
import {Input} from "@/components/input";
import useLocalStorage from "use-local-storage";

type ComponentProps = {}
type Props = ModalProps & ComponentProps;

type FormData = {
    name: string;
    p1_name: string;
    p2_name: string;
    goal: number;
}

export const SprintForm: FC<Props> = ({open, onClose}) => {
    const [p1Name, setP1Name] = useLocalStorage('p1_name', '');
    const [p2Name, setP2Name] = useLocalStorage('p2_name', '');
    const [goal, setGoal] = useLocalStorage('goal', '');

    const createSprint = useCreateSprint();
    const {register, handleSubmit, watch, formState: {errors}} = useForm<FormData>({
        defaultValues: {
            p1_name: p1Name,
            p2_name: p2Name,
            goal: Number(goal),
        },
    });

    useEffect(() => {
        setP1Name(watch('p1_name'))
        setP2Name(watch('p2_name'))
        setGoal(String(watch('goal')))
    }, [watch('p1_name'), watch('p2_name'), watch('goal')])

    async function handleSprintCreation(data: FormData) {
        await createSprint.mutateAsync(data);
        handleOnClose();
    }

    function handleOnClose() {
        onClose?.();
    }

    return <Modal
        open={open}
        header="Creating new sprint"
        onClose={onClose}
    >
        <form onSubmit={handleSubmit(handleSprintCreation)}>
            <ModalBody>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium">Sprint name</label>
                    <Input
                        id="name"
                        type="text"
                        {...register('name', {required: true, minLength: 1})}
                    />
                    <FieldErrors error={errors.name}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="p1_name" className="font-medium">Player 1 name</label>
                    <Input
                        type="text"
                        {...register('p1_name', {required: true, minLength: 1})}
                    />
                    <FieldErrors error={errors.p1_name}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="p2_name" className="font-medium">Player 2 name</label>
                    <Input
                        type="text"
                        {...register('p2_name', {required: true, minLength: 1})}
                    />
                    <FieldErrors error={errors.p2_name}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="goal" className="font-medium">Sprint goal</label>
                    <Input
                        type="number"
                        {...register('goal', {required: true, valueAsNumber: true, min: 1})}
                    />
                    <FieldErrors error={errors.goal}/>
                </div>
            </ModalBody>
            <ModalFooter>
                <ButtonGroup>
                    <Button as="button" size="sm" color="secondary" onClick={handleOnClose}>Close</Button>
                    <Button as="button" size="sm" color="primary" type="submit">Create</Button>
                </ButtonGroup>
            </ModalFooter>
        </form>
    </Modal>
}
