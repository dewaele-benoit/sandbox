async function fetchUser() {
    try {
        const user = await fetch("https://jsonplaceholder.typicode.com/users/1")
        dispatch(user)
    } catch (e) {
        dispatch
    }

}