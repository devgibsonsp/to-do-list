// Author: Steven Gibson
// File: main.js

// ID of item to be added to list as task
var itemID = 0;

/* Purpose: Adds tasks to list and formats them correctly */
function todoList() {


	if(document.getElementById("todoInput").value != "") {
        
		// Getting the item text
		var item = document.getElementById("todoInput").value;
        
		// Edit button
		var edit = document.createElement('button');
		edit.setAttribute("class","link");
		edit.id = "editBtn " + itemID;
        edit.onclick = function() { editTask(edit.id); };  // Linking button to editTask function
		edit.appendChild(document.createTextNode("edit"));
        
        // Box for task in list
        var labelTextBox = document.createElement('input');
        labelTextBox.setAttribute("class","taskItem");
        labelTextBox.value = item;
        labelTextBox.id = "lbl " + itemID;
        labelTextBox.onkeyup = function() { FilterInput (event, edit.id); };
        labelTextBox.readOnly = true;
        
        // Checkbox label for custom checkbox
        var cbLbl = document.createElement('label');
        cbLbl.setAttribute("class","container");
        var checkMark = document.createElement('span');
        checkMark.setAttribute("class","checkmark");
        
		// Creating a checkbox
		var checkbox = document.createElement('input');
        checkbox.id = "cb " + itemID;
		checkbox.type = "checkbox";
        checkbox.onclick = function () { completeTask(labelTextBox.id)};

        cbLbl.appendChild(checkbox);
        cbLbl.appendChild(checkMark);

		// Grouping the delete | edit buttons together
		var buttonGroup = document.createElement('span');
		buttonGroup.setAttribute("class","buttonGrp");
        
		// Delete button
		var del = document.createElement('button');
		del.setAttribute("class","link");
		del.id = "delBtn " + itemID;
        del.onclick = function() { deleteTask(del.id); };
		del.appendChild(document.createTextNode("delete"));
		
		var group = document.createElement('div');
        
        buttonGroup.setAttribute('style', 'color:#5f9bff;');
        // Setting up nodes
		group.appendChild(cbLbl);
		group.appendChild(labelTextBox);
		group.appendChild(buttonGroup);
		buttonGroup.appendChild(edit);
		buttonGroup.appendChild(document.createTextNode(" | "));
		buttonGroup.appendChild(del);
		
		document.getElementById("todoList").appendChild(group);

		document.getElementById("todoInput").value = "";
        
        // Incrementing the item ID
        itemID++;
	}

}

//----------------------------------------------------------------------------

/* Purpose: Allows existing tasks to be edited after clicking associated edit button */
function editTask(id) {
    var lblTextBox = document.getElementById("lbl " + id.split(" ")[1]);
    if(lblTextBox.style.border != "inset") {
        lblTextBox.readOnly = false;
        lblTextBox.style.border = "inset";
    }
    else {
        lblTextBox.readOnly = true;
        lblTextBox.style.border = "none";
    }
}

//----------------------------------------------------------------------------

/* Purpose: Deletes tasks after clicking associated delete button */
function deleteTask(id) {
    var taskToDel = document.getElementById("delBtn " + id.split(" ")[1]);
    taskToDel.parentNode.parentNode.parentNode.removeChild(taskToDel.parentNode.parentNode);
}

//----------------------------------------------------------------------------

/* Purpose: Crosses out tasks that have been completed after click */
function completeTask(id) {
    var taskToComp = document.getElementById("lbl " + id.split(" ")[1]);
    
    if(taskToComp.style.textDecoration != "line-through")
        taskToComp.style.textDecoration = "line-through";
    else
        taskToComp.style.textDecoration = "none";
}

//----------------------------------------------------------------------------

/* Purpose: Filters key input to detect enter key strokes */
function FilterInput (event, id) {
    var keyCode = ('which' in event) ? event.which : event.keyCode;
        if(keyCode == 13 && id != "todoInput")
            editTask(id);
        else if(keyCode == 13)
            todoList();
}      










































/*



		

		
		var itemGroup = document.createElement('div');
	
		var editSpan = document.createElement('span');
		editSpan.appendChild(document.createTextNode("edit"));
		
		var editDelete = document.createElement('span');
		editDelete.appendChild(document.createTextNode("delete"));
		
		// Creating the checkbox label
		var cbLabel = document.createElement('label');
		cbLabel.setAttribute("class","container");
		
		// Creating a checkbox
		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.name = "name";
		checkbox.value = "value";
		checkbox.id = "id";

		cbLabel.appendChild(document.createTextNode(item));
		cbLabel.appendChild(editSpan);
		cbLabel.appendChild(editDelete);
		
		



		
		// Appending new list element
		document.getElementById("todoList").appendChild(itemGroup);
		
		itemGroup.appendChild(cbLabel);
		cbLabel.appendChild(checkbox);
		
		
	*/