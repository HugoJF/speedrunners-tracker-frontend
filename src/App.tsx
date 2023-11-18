import {RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {router} from "./router.tsx";
import {Providers} from "./providers.tsx";

function App() {
    return <Providers>
        <Suspense fallback={<>Loading...</>}>
            <RouterProvider router={router}/>
        </Suspense>
    </Providers>
}

export default App
