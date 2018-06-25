function addtask() {
    if (document.getElementById("user_input").value) {
        document.getElementById('task-entry').innerHTML +=
            "<p class=\"card-text\" ><input type='checkbox'><label class='strikethrough'><span class='text'> "
            + document.getElementById("user_input").value + "</span></label></p>";
    }
    document.getElementById("user_input").value="";
}