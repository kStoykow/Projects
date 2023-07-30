import { FailedFetchIcon } from "./FailedFetchIcon/FailedFetchIcon";
import { NoContentIcon } from "./NoContentIcon/NoContentIcon";
import { NoUsersIcon } from "./NoUsersIcon/NoUsersIcon";
import { SpinnerIcon } from "./SpinnerIcon/SpinnerIcon";

export const FeedbackIcons = () => {
    return (
        <div className="loading-shade">
            <SpinnerIcon />
            <NoUsersIcon />
            <NoContentIcon />
            <FailedFetchIcon />
        </div>
    );
}