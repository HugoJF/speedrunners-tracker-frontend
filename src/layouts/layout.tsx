import {FC, PropsWithChildren, Suspense} from "react";
import {Navbar} from "../components/navbar.tsx";
import {RootContainer} from "../components/root-container.tsx";
import {Outlet} from "react-router-dom";

export const Layout: FC<PropsWithChildren> = () => {
    return <>
        <Navbar/>
        <RootContainer>
            <Suspense fallback={<>Loading...</>}>
                <Outlet/>
            </Suspense>
        </RootContainer>
    </>
}
