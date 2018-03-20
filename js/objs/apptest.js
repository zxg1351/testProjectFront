var webname = "http://192.168.31.247:8090"; //20
var data ={};
$(function() {

	initDataGrid();

});

function initDataGrid() {
	
	var param = {};
		param.size = 15; //页面显示记录条数，在页面显示每页显示多少项的时候
//		param.start = data.start; //开始的记录序号
		param.page = 0; //当前页码
	//	console.log(param);

	//查询条件  获取
	param.sender = $("#sender").val(); //查询条件
	param.status = $("#status").val(); //查询条件
	param.type = $("#type").val(); //查询条件
	//创建bootstaptable
	$('#testtable').bootstrapTable({
		ajax: function(data, callback, settings) {
			console.log(data)
			$.ajax({
				type: "GET",
				url: webname + '/smsMessage/selectAllSmsMessage',
				contentType: "application/json;charset=utf-8",
				dataType: "json",
				data: param,
				success: function(result) {
					console.log(result)
					console.log(result.content)
					console.log("总数:+totalElements："+result.totalElements)
					console.log("页数:+totalPages："+result.totalPages)
//					      var result = result.data.details;
//              var total = str.data.total;
                data.total=result.totalElements;
                data.rows=result.totalPages;
					$('#testtable').bootstrapTable('load', result.content);
				},
				error: function() {
					alert("错误");
				}
			});
		},
//		async:false,/**/
		striped:true,
		singleSelect: true,
		clickToSelect: true,
		//      sortName: "create_time",  
		//      sortOrder: "desc",  
		pageSize: 10,
		pageNumber: 1,
		pageList: "[10, 25, 50, 100, All]",
		showToggle: false,
		showRefresh: false,
		showColumns: false,
		search: false,
		pagination: true,
		checkboxHeader:true,//设置 false 将在列头隐藏全选复选框。
		paginationPreText: "上一页",//	指定分页条中上一页按钮的图标或文字。
		paginationNextText: "下一页",//指定分页条中下一页按钮的图标或文字。
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
		}],

	});

}
// $(document).on('keydown', function (event) {
//      // 键盘翻页事件
//      var e = event || window.event || arguments.callee.caller.arguments[0];
//      if (e && e.keyCode == 38 || e && e.keyCode == 37) {//上,左
//          // 上一页
//          $('.page-pre').click()
//      }
//      if (e && e.keyCode == 40 || e && e.keyCode == 39) {//下,右
//          // 下一页
//          $('.page-next').click()
//      }
//
//  })