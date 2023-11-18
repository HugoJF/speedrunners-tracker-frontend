'use client'

import {Component, ReactNode} from "react";
import {createPortal} from "react-dom";

type Props = {
    children: ReactNode;
}

export class Portal extends Component<Props> {
    el: HTMLElement;

    constructor(props: any) {
        super(props);

        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.getElementById('portal')?.appendChild(this.el);
    }

    componentWillUnmount() {
        document.getElementById('portal')?.removeChild(this.el);
    }

    render() {
        return createPortal(
            this.props.children,
            this.el
        );
    }
}
