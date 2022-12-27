const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");
// 각각 쿼리셀렉터로 가져온다음 그것을 클릭했을 때 이벤트를 밑에다가 등록해줬고 그 함수를 중간에다 정리
function calculator() {
    const fieldValue = document.querySelector("#field_value"); // 희망 입력칸
    let timeValue = document.querySelector("#time_value"); // 시간 입력칸
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == ""){ // 만약 필드벨류가 빈칸이라면
        alert('입력되지 않았습니다.'); // 입력되지 않았다는 경고창 설정
        fieldValue.focus(); // 입력되지 않았을 때 입력되지 않은 창을 바로 알 수 있게 필드 벨류에 포커스
        return false;
    } else if(timeValue.value == ""){
        alert('입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if(timeValue_int > 24){
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    } // 여기를 다 지나 왔다는 것은 올바른 값을 입력했다는 것
    result.style.display = 'none';
    loading.style.display = 'flex'; // 그럼 로딩되는 화면이 먼저 나옴

    setTimeout(function(){
        loading.style.dispaly = 'none';
        result.style.display = 'flex'; // 위와 정 반대로됨
        fieldResult.innerText = fieldValue.value; // 필드리절트에 텍스트를 넣겠다, 필드벨류의 벨류값을
        timeResult.innerText = parseInt((10000/timeValue_int), 10); // 타임리절트에도 텍스트를 넣겠다 , 소수점자리는 뺴고 나눈값을 출력 = 10진수로
    }, 1800); // ms이므로 1.8초 뒤에 실행이 됨
}

function openModal(){ // 모달을 클릭하게 되면
    modal.style.display = 'flex';
}

function closeModal(){ // 클로즈 모달을 하게 되면
    modal.style.display = 'none';
}

window.onclick = function (event) { // 훈련하러 가기를 눌러서 모달이 오픈되었을 때 클로즈버튼 말고 우측 바탕을 눌러도 창이 닫히게 하는 이벤트를 추가
    if(event.target == modal) { // 만약에 이벤트 타겟이 모달이라면(윈도우를 클릭했을때라는 얘기임)
        closeModal();
    }
}

function copyUrl(){ //URL을 카피하는 소스코드, 일련의 절차들을 구글에서 검색 후 그대로 넣어주면됨
    let url = window.location.href; // 윈도우 로케이션 href를 값으로 받아서 카피하는 소스코드
    let tmp = document.createElement('input'); // 템프값을 가상의 엘리먼트로 만들고

    document.body.appendChild(tmp); // 그 엘리먼트를 바디에 추가
    tmp.value = url; // 바디에 url을 잠시 벨류로 복사해두고
    tmp.select(); // 그걸 선택하게 해서
    document.execCommand("copy"); // 카피하는 구조
    document.body.removeChild(tmp); // 마지막에 그 요소를 지우게됨

    alert("URL이 복사되었습니다");

}

shareButton.addEventListener('click', copyUrl); // 해당 버튼을 클릭했을 때의 발생하는 이벤트를 추가함
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);
