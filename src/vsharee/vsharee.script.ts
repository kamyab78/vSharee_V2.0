import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { authToken } from '../scripts/storage';
import { setAuth, setUserData } from '../redux/actions';
import { AuthStatus, UserData } from '../interface';
import { get, responseValidator } from '../scripts/api';
import { APIPath } from '../data';

export const vShareeInitialize = (dispatch: Dispatch<AnyAction>) => {
    getUser(dispatch);
};

const getUser = (dispatch: Dispatch<AnyAction>) => {
    if (!authToken.get()) {
        dispatch(setAuth(AuthStatus.isInValid));
    } else {
        get<UserData[]>(APIPath.user.myInfo).then((res) => {
            if (responseValidator(res.status) && res.data) {
                dispatch(setUserData(res.data[0]));
                dispatch(setAuth(AuthStatus.isValid));
            } else {
                authToken.remove();
                dispatch(setAuth(AuthStatus.isInValid));
            }
        });
    }
};
