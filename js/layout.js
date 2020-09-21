//헤더
var header = document.getElementById('header');
if (header) {
    var headerH = header.clientHeight;
    document.body.style.paddingTop = headerH + "px";
}
if (document.querySelector('.top_prev')) {
    document.querySelector('.top_prev').addEventListener("click", function () {
        history.back();
    });
}

//로그인 로딩 창
var loginLoad = document.getElementById('loading');
window.onload = function () {
    setTimeout(function () {
        if (loginLoad) {
            loginLoad.classList.add('done');
        }
    }, 1000);
}

//약관 모두 동의 체크박스 제어
var checkAll = document.getElementById('checkAll');
var policy = document.querySelectorAll('.policy .checkbox');
var policyInput = document.querySelectorAll('.policy input');

function policyCheck() {
    for (var i = 0; i < policyInput.length; i++) {
        policyInput[i].checked = checkAll.checked;
    }
}

if (policy) {
    for (var i = 0; i < policy.length; i++) {
        policy[i].addEventListener("click", function () {
            checkAll.checked = false;
        });
    }
}