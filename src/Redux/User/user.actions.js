import { Usertypes } from './user.types'

export const setCurrentUser = user => ({
    type: Usertypes.SET_CURRENT_USER,
    payload: user
})