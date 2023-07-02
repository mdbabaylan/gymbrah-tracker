import { useRouteError } from "react-router-dom";
import GymBrahNavBar from './Gymbrahnavbar';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <GymBrahNavBar />
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>

    );
}