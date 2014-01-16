$(document).ready(function() {
	$('#addBtn-container').css('width', $('#t1').width());

	$('#addBtn').click(function() {
		$('#addBtn-container').fadeToggle("fast", "linear", function() {
			$('#addEntity').fadeToggle("fast", "linear");
		});
	});
	
	$('#cancelAddBtn').click(function(e){
		e.preventDefault();
		$('#addEntity').fadeToggle("fast", "linear", function() {
			$('#addBtn-container').fadeToggle("fast", "linear");
		});
	});
	
	$('.editDeptBtn').click(function() {
//		$('#t1 .activeEditDept').fadeOut("fast","linear",function(){
//			$('#t1 .activeEditDept .cancelDeptEditBtn').click();
//		});
		var deptNum = $(this).val();
		$('#deptRow'+deptNum).fadeToggle("fast","linear",function(){
//			$(this).addClass("activeEditDept");
			$('#editDeptRow'+deptNum).fadeToggle("fast","linear");
		});
		
		$('#editDeptRow'+deptNum+' .editDeptName').val($('#deptRow'+deptNum+' .deptName').data('value'));
		$('#editDeptRow'+deptNum+' .editDeptParent').val($('#deptRow'+deptNum+' .deptParent').data('value'));
	});
	
	$('.cancelDeptEditBtn').click(function(e){
		e.preventDefault();
		var deptNum = $(this).val();
		$('#editDeptRow'+deptNum).fadeToggle("fast","linear",function(){
			$('#deptRow'+deptNum).fadeToggle("fast","linear");
		});
		
		$('#editDeptRow'+deptNum+' .editDeptName').val("");
		$('#editDeptRow'+deptNum+' .editDeptParent').val("");
	});
	
	$('.removeDeptBtn').click(function(){	
		$.ajax({
			type: "POST",
			url: "depts",
			data: {
				_method: "delete",
				id: $(this).val()
			},
			success: function(){
				window.location.href="depts";
			}
		});
	});
	
	$('.saveDeptBtn').click(function(){
		var deptNum = $(this).val();
		var deptName = $('#editDeptRow'+deptNum+' .editDeptName').val();
		var parentId = $('#editDeptRow'+deptNum+' .editDeptParent').val();
		
		$.ajax({
			type: "POST",
			url: "depts",
			data: {
					_method: "put",
					id: deptNum,
					name: deptName, 
					parentId: parentId
				  },
			success: function(){
				window.location.href="depts";
			}
		});
	});
});
