import React, {FC, useEffect, useState} from "react";
import {Select} from "@/components/select";
import {Modal} from "@/components/modal";
import {useCreateMatch} from "@/mutations/create-match";
import {SprintForm} from "@/components/modals/sprint-form";
import {ModalBody} from "@/components/modal-body";
import {ModalFooter} from "@/components/modal-footer";
import {ButtonGroup} from "@/components/button-group";
import {Button} from "@/components/button";

type ComponentProps = {
    onCreate?: Promise<void>;
    sprints: Sprint[],
    initialSelectedSprintId?: string;
}
type Props = ModalProps & ComponentProps;

// TODO remove
const scores = [0, 1, 2, 3];

export const MatchForm: FC<Props> = ({sprints, initialSelectedSprintId = null, open, onClose}) => {
    const createMatch = useCreateMatch();
    const [sprintModalVisible, setSprintModalVisible] = useState(false);
    const [selectedSprintId, setSelectedSprintId] = useState<null | string>(initialSelectedSprintId);

    useEffect(() => {
        setSelectedSprintId(initialSelectedSprintId)
    }, [initialSelectedSprintId])

    const selectedSprint = sprints.find(sprint => sprint.id === selectedSprintId);

    async function handleMatchCreation() {
        // TODO connect to RHF
        if (!selectedSprintId) {
            return;
        }

        const score = Math.round(Math.random() * 3);
        const winner = Math.random() > 0.5;

        await createMatch.mutateAsync({
            sprint_id: selectedSprintId,
            map: 'cassino',
            p1_score: winner ? 3 : score,
            p2_score: !winner ? 3 : score,
        })
    }

    function handleOnClose() {
        if (onClose) {
            onClose();
        }
    }

    function handleOnCreate() {
        handleMatchCreation();
    }

    async function handleOnCreateMore() {
        await handleMatchCreation();
        onClose?.();
    }

    return <Modal
        open={open}
        header={<h2 className="text-lg font-medium">Creating new match</h2>}
        onClose={onClose}
    >
        <ModalBody>

            <SprintForm
                open={sprintModalVisible}
                onClose={() => setSprintModalVisible(false)}
            />
            <div className="flex flex-col gap-2">
                <label className="font-medium">Sprint</label>
                <Select onChange={(e) => setSelectedSprintId(e.target.value)}>
                    <option selected={!selectedSprintId}>Please select sprint...</option>
                    {sprints.map(sprint => <option
                        key={sprint.id}
                        value={sprint.id}
                        selected={sprint.id === selectedSprintId}
                    >
                        {sprint.name} ({sprint.id})
                    </option>)}
                </Select>
                {/*TODO errors*/}
                {/*TODO implement*/}
                {/*<p className="text-sm text-red-600 font-medium">{{this.errors.sprint_id}}</p>*/}
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
                    <Select>
                        {scores.map(score => <option key={score} value={score}>{score}</option>)}
                    </Select>
                    <h2>
                        <span>{selectedSprint?.p1_name ?? 'Player 1'}</span>
                        <span className="mx-3 text-blue-600 font-mono font-bold">vs</span>
                        <span>{selectedSprint?.p2_name ?? 'Player 2'}</span>
                    </h2>
                    {/*TODO select for p2 score*/}
                    <Select>
                        {scores.map(score => <option key={score} value={score}>{score}</option>)}
                    </Select>
                </div>
                {/*TODO errors*/}
                {/*<p className="text-sm text-red-600 font-medium">{{this.errors.global}}</p>*/}
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Map selection</label>
                {/*TODO maps*/}
                <Select>
                    <option key="silo" value="silo">Silo</option>
                </Select>
                {/*TODO errors*/}
                {/*<p className="text-sm text-red-600 font-medium">{{this.errors.map}}</p>*/}
            </div>
        </ModalBody>
        <ModalFooter>
            <ButtonGroup>
                <Button size="sm" color="secondary" onClick={handleOnClose}>Close</Button>
                <Button size="sm" color="secondary" onClick={handleOnCreate}>Create</Button>
                <Button size="sm" color="primary" onClick={handleOnCreateMore}>Create more</Button>
            </ButtonGroup>
        </ModalFooter>
    </Modal>
}
