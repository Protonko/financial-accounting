import {combineEpics, Epic, ofType} from 'redux-observable'
import {Observable, switchMap, of, catchError} from 'rxjs'
import {
  errorLoginAction,
  setUserDataAction
} from '@store/actions/auth'
import {UserApiService} from '@services/UserApiService'
import {AUTH_ACTION_TYPES, ErrorLoginAction, LoginAction, SetUserDataAction} from '@store/actions/model/auth'

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
