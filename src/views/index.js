import React,{Component} from 'react';

import getGithubInfo  from '../api/newAxios';

import { Input } from 'antd';
import sty from './index.scss'
const Search = Input.Search;
export default class extends Component {
    constructor(props) {
		super(props);
		this.state = {
			data: []
		};
    }
    componentDidMount(){
      
        getGithubInfo('bailicangdu').then( ( data ) => {
            console.log( data );
            // 更新state数据
            // this.setState({
            //   bio: data.bio,
            //   repos: data.repos
            // })
          });
    }

    componentWillReceiveProps(){

    }


    render(){
        return(
            <div className={sty.searchWrap}>
                <Search
                    placeholder="Please enter the username"
                    onSearch={value => console.log(value)}
                    enterButton
                />
            </div>
        )
    }

}