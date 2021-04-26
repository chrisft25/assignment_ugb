const username = ["admin","tester","designteam","csteam"]
const password = ["admin123","tester123","design123","csteam123"]

module.exports = {

    login = (user,pass)=>{
        
        let user_index = username.indexOf(user)
        let response = {
            error: true,
            message: "Username or Password is incorrect",
            data:{}
        }

        if(user_index!=-1){
            if(pass===password[user_index]){
                let user_token = Buffer.from(`${user}-${pass}-${Date.now()}`).toString('base64')
                response = {
                    error: false,
                    message: "Successful login",
                    data:{
                        token: user_token
                    }
                }
            }
        }
        
        return response
    }
}