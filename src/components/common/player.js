/*
 * @Author: liulicheng
 * @Github: https://github.com/johbarca
 * @Date: 2019-10-17 09:44:19
 * @LastEditors: liulicheng
 * @LastEditTime: 2019-10-17 09:57:12
 */
import Player from 'griffith'

const sources = {
	hd: {
		play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018hd.mp4',
	},

	sd: {
		play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018sd.mp4',
	},
}


render(<Player sources={sources} />)