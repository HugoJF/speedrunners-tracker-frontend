import React, {FC} from "react";
import {Modal} from "@/components/modal";
import {useCreateSprint} from "@/mutations/create-sprint";
import {ModalBody} from "@/components/modal-body";
import {ModalFooter} from "@/components/modal-footer";
import {ButtonGroup} from "@/components/button-group";
import {Button} from "@/components/button";

type ComponentProps = {}
type Props = ModalProps & ComponentProps;

export const SprintForm: FC<Props> = ({open, onClose}) => {
    const createSprint = useCreateSprint();

    async function handleMatchCreation() {
        // TODO connect to RHF
        await createSprint.mutateAsync({
            name: new Date().toISOString(),
            goal: 5,
            p1_name: 'de_nerd',
            p2_name: 'chase',
        })
    }

    function handleOnClose() {
        onClose?.();
    }

    async function handleOnCreate() {
        await handleMatchCreation();
        onClose?.();
    }

    return <Modal
        open={open}
        header={<h2 className="text-lg font-medium">Creating new sprint</h2>}
        onClose={onClose}
    >
        <ModalBody>

            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">Sprint name</label>
                {/*TODO*/}
                <input
                    id="name"
                    className="px-4 py-2 bg-white border rounded"
                    type="text"
                />
                {/*TODO errors*/}
                {/*<p className="text-sm text-red-600 font-medium">{{this.errors.name}}</p>*/}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="p1_name" className="font-medium">Player 1 name</label>
                {/*TODO*/}
                <input
                    id="p1_name"
                    type="text"
                    className="px-4 py-2 bg-white border rounded"
                />
                {/*TODO errors*/}
                {/*<p className="text-sm text-red-600 font-medium">{{this.errors.p1_name}}</p>*/}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="p2_name" className="font-medium">Player 2 name</label>
                {/*TODO*/}
                <input
                    id="p2_name"
                    type="text"
                    className="px-4 py-2 bg-white border rounded"
                />
                {/*TODO errors*/}
                {/*<p className="text-sm text-red-600 font-medium">{{this.errors.p2_name}}</p>*/}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="goal" className="font-medium">Sprint goal</label>
                {/*TODO*/}
                <input
                    id="goal"
                    type="number"
                    className="px-4 py-2 bg-white border rounded"
                />
                {/*TODO errors*/}
                {/*<p className="text-sm text-red-600 font-medium">{{this.errors.goal}}</p>*/}
            </div>
        </ModalBody>
        <ModalFooter>
            <ButtonGroup>
                <Button size="sm" color="secondary" onClick={handleOnClose}>Close</Button>
                <Button size="sm" color="primary" onClick={handleOnCreate}>Create</Button>
            </ButtonGroup>
        </ModalFooter>
    </Modal>
}
