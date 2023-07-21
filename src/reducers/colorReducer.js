const abc =  (state,action)=>
{
    switch (action.type) {
        case 'red':
            console.log(action)
            return {
                colorname:'red'
            }
           
        case 'green':
            return {
                colorname:'green'
            }
                
    
        default:
            break;
    }
}
export default  abc;