module.exports= (apiClient)=>({
    login: async ({email,password})=>{
        const{
            data:{token,user},
        }= await apiClient.post('/auth/login',{
            email,
            password,
        });
        localStorage.setItem(process.env.REACT_APP_TOKEN_LOCAL_STORAGE_KEY, token);
        return user;

    },
    signup:  async ({email,password})=>{
        const{
            data:{token,user},
        }= await apiClient.post('/api/users',{
            email,
            password,
        });
        localStorage.setItem(process.env.REACT_APP_TOKEN_LOCAL_STORAGE_KEY, token);
        return user;},
    logout: ()=>
    localStorage.removeItem(process.env.REACT_APP_TOKEN_LOCAL_STORAGE_KEY),
});