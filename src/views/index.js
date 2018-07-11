import React, { Component } from 'react';

import getGithubInfo from '../api/newAxios';
import {DateFormat} from '../components/dateFormate'
import { Input, message, Table, Icon, Divider } from 'antd';
import sty from './index.scss';
const Search = Input.Search;
export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			username: ''
		};
	}
	componentDidMount() {}
	
	// componentWillReceiveProps(nextProps, nextState) {
	// 	if (nextState) {

	// 	}
    // }
    

	serachInfo = (username) => {
		username = username.trim();
		if (username) {
			getGithubInfo(username).then((data) => {
                console.log(data);
                if(data && data.repos){
                    this.setState({
                        data:data.repos
                    })
                }
				
			});
		} else {
			message.info('请输入用户名', 2);
		}
	};
	getVal = (v) => {
		// this.setState({
		//     username:v
		// },function(){
		//     this.serachInfo(v)
		// })
		this.serachInfo(v);
	};

	render() {
        const {data} = this.state;
        // console.log(data)
		const columns = [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
				render: (text) => <a href="javascript:;">{text}</a>
			},
			{
				title: 'Description',
				dataIndex: 'description',
				key: 'desc'
			},
			{
				title: 'Owner',
				dataIndex: 'owner.login',
				key: 'owner.id'
			},
			{
				title: 'Stars',
				dataIndex: 'stars',
				key: 'Stars'
			},
			{
				title: 'created_at',
				dataIndex: 'created_at',
                key: 'etc',
                render: (text) => <a href="javascript:;">{DateFormat(text)}</a>
			}
		];
		

		return (
			<div className={sty.searchWrap}>
				<Search placeholder="Please enter the username" onSearch={(value) => this.getVal(value)} enterButton />
				<Table columns={columns} dataSource={data} />
			</div>
		);
	}
}
