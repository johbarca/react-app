/*
 * @Author: liulicheng
 * @Github: https://github.com/johbarca
 * @Date: 2019-06-24 21:45:50
 * @LastEditors: liulicheng
 * @LastEditTime: 2019-10-17 10:30:39
 */
import React, { Component } from 'react'
import Player from 'griffith'
import url from '../../static/01.mp4'
const sources = {
	hd: {
        play_url: url,
        bitrate: 100,
        duration:100,
        format: 'mp4',
        height: 900,
        width: 1600,
        size: 500
	},

	// sd: {
	// 	play_url: {url},
	// },
}

export default class Main extends Component {
	render() {
		return (
			<div>
				<Player id="1" title="test" cover="../../static/logo.png" duration={100} sources={sources} />
			</div>
		)
	}
}
