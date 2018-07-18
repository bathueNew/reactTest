import React from 'react';
import test from './test' 

const routers =[
    {
        path: '/',
        exact: true,
        component: () => <div>首页</div>
      },
      ...test, 
]
export default routers