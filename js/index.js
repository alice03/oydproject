function f_hidecol(btnname) {
	if (btnname == 'debit'){
		var colnumb = 3;
	}
	if (btnname == 'credit'){
		var colnumb = 4;
	}
   
    var tbl = document.getElementById("tableid");
    if (tbl != null) {
       
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].style.display = "";
                if (j == colnumb)
                    tbl.rows[i].cells[j].style.display = "none";
            }
        }
    }

}
