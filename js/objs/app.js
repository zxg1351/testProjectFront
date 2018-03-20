var webname = "http://192.168.31.247:8090"; //20

$(function() {

	initDataGrid();

});

function initDataGrid() {
	var param = {};
//	param.size = data.length; //页面显示记录条数，在页面显示每页显示多少项的时候
//	param.start = data.start; //开始的记录序号
//	param.page = (data.start / data.length); //当前页码
//	//console.log(param);
//
//	//查询条件  获取
//	param.applyStatus = $("#applyStatus").val();
//	param.employeeName = $("#name").val(); //查询条件
//	param.departmentName = $("#departmentName").val(); //查询条件
//	param.positionName = $("#positionName").val(); //查询条件
	//创建bootstaptable
	$('#testtable').bootstrapTable({

		method: 'GET',
		contentType: "application/x-www.form-urlencoded",
		dataType: "json",
		url: webname + '/smsMessage/selectAllSmsMessage',
		queryParams: function(params) {
			return {
				size: params.pageSize, // 页面大小  
				page: params.pageNumber, // 页码  
				sender: $("#sender").val(),
				status: $("#status").val(),
				type: $("#type").val()
			}
		},
		pagination: true, //显示分页条，页码，条数等
		striped: true, //隔行变色
		pageNumber: 1, //首页页码
		pageSize: 10, //分页，页面数据条数
		uniqueId: "id", //Indicate an unique identifier for each row  
		sidePagination: "server", //在服务器分页
		//			height:50px,
		toolbar: "#toolbar", //工具栏  
		columns: [{
			checkbox: "true",
			field: "box"
		}, {
			title: "ID",
			field: "id",
			visible: false
		}, {
			title: "接收人",
			field: "receiver"
		}, {
			title: "发送者",
			field: "sender"
		}, {
			title: "发送内容",
			field: "content"
		}, {
			title: "短信标题",
			field: "title"

			//          {
			//              title : "手机",  
			//              field : "phone"  
			//          }, {  
			//              title : "邮箱",  
			//              field : "email"  
			//          }, {  
			//              title : "状态",  
			//              field : "states"  
			//          }, {  
			//              title : "创建时间",  
			//              field : "created_at",  
			//              sortable : true  
		}],
		search: false, //搜索  
		searchOnEnterKey: true,
		showRefresh: true, //刷新  
		showToggle: true //  
	});

}

//function queryParam(params) {
//	var param = {
//
//		size: params.pageSize, // 页面大小  
//		page: params.pageNumber, // 页码  
//		sender:$("#sender").val(),
//		status:$("#status").val(),
//		type:$("#type").val()
//
//		//              limit : this.limit, 
//		//              offset : this.offset, 
//		//              pageNumber : this.pageNumber,  
//		//              pageSize : this.pageSize  
//	};
//	return param;
//}