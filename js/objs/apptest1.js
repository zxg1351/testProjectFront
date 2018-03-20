var webname = "http://192.168.31.247:8090"; //20

$(function() {

	initDataGrid();

});

function initDataGrid() {

	//创建bootstaptable
	$('#testtable').bootstrapTable({

		striped:true,  
        height:500,
        pagination: true,  
        sidePagination:"server",    //这里设置为服务端分页模式
        pageList: [10, 20, 30, 50],
        onPageChange:pageChange,
        onClickRow:clickRow

	}).bootstrapTable('load',getData(pageNum,pageSize))

}

function getData(pageNum,pageSize){
    var datas = {
//      "from":startTime,
//      "end":endTime,
//      "pageNum":pageNum,
//      "pageSize":pageSize
size: params.pageSize, // 页面大小  
				page: params.pageNumber, // 页码  
				sender: $("#sender").val(),
				status: $("#status").val(),
				type: $("#type").val()
    }
    var data = {};
    $.ajax({
        type: "get",
        url: webname + '/smsMessage/selectAllSmsMessage',
        cache: false,
        data:datas,
        async:false,
        dataType:"json",
        success: function (str) {
        	
        	console.log(str)
//          if(str.result == true){
//              var result = str.data.details;
//              var total = str.data.total;
//              data.total=total;
//              data.rows=result;
//          }else{
//              alert('系统忙，请稍候重试！');
//          }
        },
        error: function (result) {
            alert('系统忙，请稍候重试！');
        }
    })
    return data;
}

