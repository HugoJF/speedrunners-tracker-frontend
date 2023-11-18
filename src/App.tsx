import {RouterProvider} from "react-router-dom";
import {Providers} from "./providers.tsx";
import {Suspense} from "react";
import {router} from "./router.tsx";

function App() {
    return <Providers>
        <Suspense fallback={<>Loading...</>}>
            <RouterProvider router={router}/>
        </Suspense>
    </Providers>
}

export default App
