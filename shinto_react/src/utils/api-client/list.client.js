module.exports= (apiClient) =>({
    getAll:()=> apiClient.get('/list'),
    addList:(list)=> apiClient.post('/list',{data:list}),
    getList:(listId) => apiClient.get(`/list${listId}`),
    updateList: (listId,list) =>
    apiClient.put(`/list/${listId}`,{data:list}),
    deleteList: (listId) => apiClient.delete(`/list/${listId}`),
})