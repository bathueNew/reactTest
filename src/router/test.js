import { AsyncComponent } from '../components';

const first = AsyncComponent(() => import('../views/index')); 
const second = AsyncComponent(() => import('../views/test/index')); 
const parentPath = '/test';
export default 
[
    {
        path:`${parentPath}/first`,
        exact:true,
        component:first
    }, 

    {
        path:`${parentPath}/second`,
        exact:true,
        component:second
    }, 
]