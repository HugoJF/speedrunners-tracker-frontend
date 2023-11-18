import {FC, useEffect} from "react";
import useLocalStorage from "use-local-storage";
import {useCreateSprint} from "../../mutations/create-sprint.tsx";
import {useForm} from "react-hook-form";
import {Modal} from "../modal.tsx";
import {ModalBody} from "../modal-body.tsx";
import {Input} from "../input.tsx";
import {FieldErrors} from "../field-errors.tsx";
import {ModalFooter} from "../modal-footer.tsx";
import {ButtonGroup} from "../button-group.tsx";
import {Button} from "../button.tsx";

type FormData = {
    name: string;
    p1_name: string;
    p2_name: string;
    goal: number;
}

export const CreateSprintForm: FC<ModalProps> = ({visible, onClose}) => {
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
        visible={visible}
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
