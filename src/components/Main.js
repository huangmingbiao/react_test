require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
//var ReactTransitionGroup = React.addons.TransitionGroup;

//图片数据
var imageDatas = require('../data/imageData.json');

//获取图片路径信息，自执行函数
imageDatas = (function getImageURL(imageDatasArr) {
	for (var i = 0, j = imageDatasArr.length; i < j; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

var reactTestMain = React.createClass({
	render: function() {
		return (
			<section className="stage">sd
				<section className='img-sec'>
					
				</section>
				<nav className="controller-nav">
				</nav>
			</section>
		)
	}
})

export default reactTestMain;