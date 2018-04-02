$(function() {
	var data = [{
		action: "#",
		menuname: "人事架构",
		icon: "fa-user",
		nodes: [{
			action: "employeeManagement.html",
			menuname: "员工管理",
			icon: "fa-user",
			nodes: []
		}]
	},{
		action: "#",
		menuname: "权限管理",
		icon: "fa-user",
		nodes: [ {
			action: "passwordManagement.html",
			menuname: "密码管理",
			icon: "fa-user",
			nodes: []
		}]
	},
	{
		action: "#",
		menuname: "用户管理",
		icon: "fa-user",
		nodes: [{
			action: "employeeManagement.html",
			menuname: "员工管理",
			icon: "fa-user",
			nodes: []
		}]
	},
	{
		action: "#",
		menuname: "区域管理",
		icon: "fa-user",
		nodes: [{
			action: "largeAreaManagement.html",
			menuname: "大区域管理",
			icon: "fa-user",
			nodes: []
		}]
	},{
		action: "#",
		menuname: "订单管理",
		icon: "fa-user",
		nodes: [{
			action: "orderManagement.html",
			menuname: "订单管理",
			icon: "fa-user",
			nodes: []
		},{
			action: "productsManagement.html",
			menuname: "产品管理",
			icon: "fa-user",
			nodes: []
		},{
			action: "vendorsManagement.html",
			menuname: "经销商管理",
			icon: "fa-user",
			nodes: []
		}]
	},
	{
		action: "#",
		menuname: "短信管理",
		icon: "fa-user",
		nodes: [ {
			action: "smsManagement.html",
			menuname: "短信管理",
			icon: "fa-user",
			nodes: []
		}]
	}];

	sideMenu = data;
	// sideMenu =sideMenu1;
	$.each(sideMenu, function(i, item) {
		if(item.nodes.length > 0) {
			$('#side-menu').append(
				"<li>" +
				"<a href='#' class='waves-effect'>" + "<i class='mdi mdi-av-timer fa-fw " + item.icon + " '></i> <span class='hide-menu'>" + item.menuname +
				"<span class='fa arrow'></span></span></a>" +
				"<ul class='nav nav-second-level' id='nav" + i + "'>" + "</ul>" +
				"</li>"
			);
			$.each(item.nodes, function(j, item1) {

				//console.log(item1)
				if(item1.nodes.length > 0) {

					$('#nav' + i).append(
						"<li>" +
						"<a href='#' class='waves-effect'><i class='mdi mdi-checkbox-multiple-marked-outline fa-fw " + item1.icon + "'></i><span class='hide-menu'>" + item1.menuname + "<span class='fa arrow'></span></span></a>" +
						"<ul class='nav nav-third-level' id='navthird" + (i + j) + "'>" + "</ul>" +
						"</li>"
					);
					$.each(item1.nodes, function(k, value) {
						if(value.nodes.length > 0) {} else {
							$('#navthird' + (i + j)).append(
								"<li>" +
								"<a  href='" + value.action + "'><i class=' mdi mdi-format-color-fill fa-fw " + value.icon + "'></i><span class='hide-menu'>" + value.menuname + "</span></a>" +
								"</li>"
							);
						}

					});

				} else {
					$('#nav' + i).append(
						"<li>" +
						"<li><a href='" + item1.action + "'><i class='mdi mdi-format-color-fill fa-fw " + item1.icon + "'></i><span class='hide-menu'>" + item1.menuname + "</span></a>" +
						"</li>"
					);
				}

			});

		} else {
			$('#side-menu').append(
				"<li>" +
				"<a  href='" + item.action + "'><i class=' mdi mdi-format-color-fill fa-fw " + item.icon + "'></i><span class='hide-menu'>" + item.menuname + "</span></a>" +
				"</li>"

			);

		}
	});
	//					//ajax  异步延迟加载外部js	
	//					document.body.appendChild(element3);
	//					document.body.appendChild(element4);

	//				} else {
	////					alert(data.stateMsg, "rgb(250, 27, 92)");
	//				}
	//			}
	//		});

	//保持左侧菜单
	var url = window.location;
	// var element = $('ul.nav a').filter(function() {
	//     return this.href == url;
	// }).addClass('active').parent().parent().addClass('in').parent();
	var element = $('ul.nav a').filter(function() {
		console.log(this.href);
		console.log(this.href == url);
		return this.href == url;
	}).addClass('active').parent();

	while(true) {

		var flag = element.parent().parent().parent().parent().is('li') //true 三级 菜单  f 二级菜单
		console.log("几级 t3  f2" + flag);

		//二级菜单  element .parent().p.p.p = div
		if(element.is('li') && flag == false) {
			element = element.addClass('active').parent().addClass('in').siblings('a').addClass('active');
			break;
		} else {
			element = element.addClass('active').parent().addClass('in').parent().parent().addClass('in').siblings('a').addClass('active');
			break;
		}
	}

}) //ready end