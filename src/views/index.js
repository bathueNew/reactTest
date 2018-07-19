import React, { Component } from 'react';

import getGithubInfo from '../api/newAxios';
import {DateFormat} from '../components/dateFormate'
import {Api} from '../api';
import axios from "../api/secondAxios"
import { Input, message, Table, Icon, Divider,Button } from 'antd';
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
	getPage = () => {
		let params = {
			pageSize:20,
			pageIndex:1,
		}
		axios.get('Dns/v3/DnsWeb/GetScienceTipPages',params).then(res=>{
			console.log(res)
		})
		// console.log(Api)
		// Api.GetScienceTipPages({
		// 	pageSize:20,
		// 	pageIndex:1,
		// 	token:'201e0f66171b470b85fb2f7203aa6fae'
		// }).then(res=>{
		// 	console.log(res)
		// })
	}
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
				<Button type="primary" onClick={this.getPage}>点击</Button>
				<Search placeholder="Please enter the username" onSearch={(value) => this.getVal(value)} enterButton />
				{/* <Table columns={columns} dataSource={data} /> */}
			</div>
		);
	}
}
