import {combineEpics, Epic, ofType} from 'redux-observable'
import {Observable, switchMap, of, catchError} from 'rxjs'
import {
  AUTH_ACTION_TYPES,
  errorLoginAction,
  setUserDataAction,
  LoginAction,
  ErrorLoginAction,
  SetUserDataAction
} from '@store/actions/auth'
import {UserApiService} from '@services/UserApiService'

export class AuthEpicFactory {
  constructor() {}

  create() {
    return combineEpics(this.login)
  }

  login: Epic = (action$: Observable<LoginAction>): Observable<SetUserDataAction | ErrorLoginAction> => {
    return action$.pipe(
      ofType(AUTH_ACTION_TYPES.LOGIN),
      switchMap(action =>
        UserApiService.login(action.payload)
          .pipe(
            switchMap(data => of(setUserDataAction(data))),
            catchError(error => of(errorLoginAction(error.message)))
          )
      )
    )
  }
}
