
var contextPath = "http://192.168.31.247:8090"; 
$('#testtable').bootstrapTable({
			url : contextPath + "/smsMessage/selectAllSmsMessage",
			pagination : true,
			smartDisplay:false,
			idField : "id",
			singleSelect : true,
// 			clickToSelect : true,
			sidePagination : "server",
			queryParams : function(params) {
				params.size=params.pageSize, // 页面大小  
				params.page=params.pageNumber, // 页码  
				params.sender = $("#sender").val(); //查询条件
				params.status = $("#status").val(); //查询条件
				params.type = $("#type").val(); //查询条件
				return params;
			},
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
				}]
		

});