export default function helloWorldStore(state, action){
    switch(action.type){
        case 'init':
            return {
                stringName: 'helloworld'
                }
    default: 
        return state
    }
}