import { useDispatch } from "react-redux";

import { actions } from "../slices/auth";
import { AuthState } from "../types/auth";

import useStoreSelector from "./useStoreSelector";

// == Login Hook Function == //
export function useLogin() {
  const dispatch = useDispatch();
  return (payload: AuthState) => dispatch(actions.login(payload));
}

// == Logout Hook Function == //
export function useLogout() {
  const dispatch = useDispatch();
  return () => dispatch(actions.logout());
}

// == Use Token Hook Function == //
export function useToken() {
  return useStoreSelector(({ auth }) => auth.token);
}

// == Check Auth status Hook Function == //
export function useIsAuthenticated() {
  return !!useToken();
}
