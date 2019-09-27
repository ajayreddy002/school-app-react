import { authenticationService } from "../_services/authService";
import swal from 'sweetalert';

export function handleResponse(response: any) {
        if (response.status !== 200) {
            if ([401, 403].indexOf(response.status) !== -1) {
                swal({
                    title: 'Unauthorized',
                    text: 'Unauthorized',
                    icon: "error",
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                       authenticationService.logout();
                    }
                });
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
            }

            const error = (response.data && response.data.message) || response.statusText;
            return Promise.reject(error);
        }

        return response.data;
}