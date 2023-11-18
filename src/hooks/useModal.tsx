import {FC, useState} from "react";

type ModalFC<T extends ModalProps> = FC<T>;
type ExtraModalProps<T> = Omit<T, keyof ModalProps>;

export const useModal = <ComponentType, ComponentProps = ComponentType extends ModalFC<infer Props> ? ExtraModalProps<Props> : never>() => {
    const [visible, setVisible] = useState(false);
    const [props, setProps] = useState<ComponentProps>();

    function open() {
        setVisible(true);
    }

    function openWith(props: ComponentProps) {
        setProps(props);
        setVisible(true);
    }

    function onClose() {
        setVisible(false);
    }

    const modalProps: ComponentProps = {
        visible,
        onClose,
        ...props as ComponentProps,
    };

    return {
        open,
        openWith,
        props: modalProps
    }
}
