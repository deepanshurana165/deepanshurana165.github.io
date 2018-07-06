function deleter(ele) {
    $(ele).closest('li').remove();
}

function move(ele){
    var classs = $(ele).attr('class');
    var prevSibling = ele.parentElement.previousSibling;
    var currentSibling = ele.parentElement;
    var nextSibling = ele.parentElement.nextSibling;
    if (classs === 'up' && prevSibling) {
        $(prevSibling).insertAfter($(currentSibling));
    }
    if (classs === 'down' && nextSibling) {
        $(currentSibling).insertAfter($(nextSibling));
    }
}

function check(ele){
    var ele_class = $(ele).attr('class');
    if (ele_class==='unchecked') {
        $(ele).addClass('checked').removeClass('unchecked');
        $(ele).siblings('span').css("text-decoration", "line-through");
    }else{
        $(ele).addClass('unchecked').removeClass('checked');
        $(ele).siblings('span').css("text-decoration", "none");
    }
}

$(function () {
        var input = $('input');
        var button = $('.add-button');
        var list = $('.list');

        button.click(function () {
                var value = input.val();
                if (value) {
                    input.val("");
                    list.append(
                        `<li>
                        <span>${value}</span>
                        <button class="del" onclick="deleter(this)">Delete</button>
                        <button class="up" onclick="move(this)">^</button>
                        <button class="down" onclick="move(this)">v</button>
                        <button class="unchecked" onclick="check(this)">X</button>
                        </li>`
                    )
                }
            }
        );
    }
);