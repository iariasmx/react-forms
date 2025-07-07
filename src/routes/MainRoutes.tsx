import {Route, Routes} from "react-router";
import {FormikForm} from "../Forms/pages/FormikForm.tsx";
import {Index} from "../Home/pages/Index.tsx";

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path="forms" element={<FormikForm />} />
        </Routes>
    );
};