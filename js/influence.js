var $usersDiv = $('.users'),
	i,
	user,
	userGroup = []

for (i = 0; i < users.length; ++i) {
	user = users[i];
	$usersDiv.append(
		'<div class="user panel panel-default">'
		+	'<div class="panel-body row panel-row">'
		+		'<div class="col-xs-1">'
		+			'<span class="user-ranking label label-info">' + (i+1) + '</span>'						
		+		'</div>'
		+		'<div class="user-avatar col-xs-2">'
		+			'<img src="'+ user['avatar'] +'" />'
		+		'</div>'
		+		'<div class="user-content col-xs-3">'
		+			'<div class="user-info">'
		+				'<a class="user-name" target="_blank" href="http://weibo.com/u/' + user['id'] + '">' + user['name'] + '</a>'
		+				'<span class="user-gender ' + ( user['gender'] === '\u0001' ? 'male' : 'female' ) + '"></span>'
		+				'<span class="user-location">' + user['location'] + '</span>'
		+				''
		+			'</div>'
		+			( $.trim(user['description']) !== '' ? ('<div class="line">简介：<span class="user-desc">' + user['description'] + '</span></div>') : '' )
		+			'<div class="line">'
		+				'标签：<span class="user-tags"><a>' + user['tags'].slice(0, 10).join('</a>&nbsp;&nbsp;<a>') +'</a></span>'
		+			'</div>'
		+			'<div class="user-social line">'
		+				'<span>'
		+					'关注 <a>' + user['nrFollowings'] + '</a>' 
		+				'</span>'
		+				'<span>'
		+					'粉丝 <a>' + user['nrFollowers'] + '</a>'
		+				'</span>'
		+				'<span>'
		+					'微博 <a>' + user['nrWeibos'] + '</a>'
		+				'</span>'
		+			'</div>	'					
		+		'</div>'
		+		'<div class="user-content col-xs-4">'
		+			'<a class="btn btn-default btn-xs btn-sim"><span class="glyphicon glyphicon-user"></span></a>'
		+		'</div>'
		+	'</div>'
		+ '</div>'
	);

	if ($.inArray('百度', user['tags']) != -1 ) {
		userGroup.push(user);
	}
}
userGroup.push(users[90]);
userGroup.shift();

var popContent = '';

for (i = 0; i < userGroup.length; ++i) {
	user = userGroup[i];
	popContent += '<div class="pop-user">'
		+ 	'<div class="pop-avatar">'
		+		'<img src="'+ user['avatar'] +'" />'
		+ 	'</div>'
		+	'<div class="pop-name">'
		+		'<a target="_blank" href="http://weibo.com/u/' + user['id'] + '"><nobr>' + user['name'] + '</nobr></a>'
		+	'</div>'
		+ '</div>';
}

$('.btn-sim').popover({
	'container': 'body',
	'html': true,
	'title': '他所在的群体',
	'content': popContent
});