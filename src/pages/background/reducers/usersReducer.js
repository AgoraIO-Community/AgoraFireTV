

export default function usersReducer(state={ registredUsers: []}, action) {
  switch(action.type) {
    case "USERS_SET_ACTIVE":
      state =  {...state, activeId: action.payload}
      break

    case "USERS_REFRESH_FULFILLED":
      const registredUsers = action.payload.map( (item) => {
        return {
          icon: item.icon,
          title: item.email,
          id: item.id,
        }
      })
      state =  {...state, registredUsers}
      break
  }

  return state
}
