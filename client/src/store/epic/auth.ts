import {combineEpics, Epic, ofType} from 'redux-observable'
import {Observable, switchMap, of, catchError} from 'rxjs'
import {
  errorLoginAction,
  setUserDataAction
} from '@store/actions/auth'
import {UserApiService} from '@services/UserApiService'
import {
  AUTH_ACTION_TYPES,
  ErrorLoginAction,
  GetUserInfoAction,
  LoginAction,
  SetUserDataAction
} from '@store/actions/model/auth'

export class AuthEpicFactory {
  constructor() {}

  create() {
    return combineEpics(this.login, this.getUserInfo)
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

  getUserInfo: Epic = (action$: Observable<GetUserInfoAction>): Observable<SetUserDataAction | ErrorLoginAction> => {
    return action$.pipe(
      ofType(AUTH_ACTION_TYPES.GET_SESSION_INFO),
      switchMap((action) => {
        console.log('DATA', action)
        return UserApiService.getUserInfo()
          .pipe(
            switchMap(data => {
              return of(setUserDataAction(data))
            }),
            catchError(error => {
              console.log(123)
              return of(errorLoginAction(error.message))
            })
          )
        }
      )
    )
  }
}
