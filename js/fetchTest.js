usuarios = []

fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users =>{

    //     users.forEach(user => {
    //         usuarios.push(user.email)
    //         document.write(user.email+"<br>")
            

    // })

    for(var i = 0; i< users.length; i++){
        
        usuarios.push(users[i].email)
        document.write(users[i].email+"<br>")
       

    }
    console.log(usuarios)

})