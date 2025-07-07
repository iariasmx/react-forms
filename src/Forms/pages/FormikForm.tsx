import {MainLayout} from "../../pages/MainLayout.tsx";
import '../css/styles.css'

export const FormikForm = () => {
    return (
        <MainLayout>
            <h1>Formik Básico</h1>
            <hr/>
            <form noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName"/>
                <span>First Name is required</span>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName"/>
                <span>Last Name is required</span>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
                <span>Email is required</span>
                <span>Is not a valid email</span>

                <button type="submit">Submit</button>
            </form>
        </MainLayout>
    );
};