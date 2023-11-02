const likeHandler = (todo,setTodo,id) => {
    let {title,liked,writtenBy,body} = todo;
    liked = !liked;
    fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/update-like/${id}`,{method:"PUT",headers:{"Content-Type" : "application/json"},body:JSON.stringify({title,liked,writtenBy,body})})
    .then(res => {
        return res.json();
    })
    .then(data => {
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-todo/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data)
            setTodo(data.data);
        })
        
    }).catch (err => {
        console.log("some error occuured")
    })
}

export default likeHandler;