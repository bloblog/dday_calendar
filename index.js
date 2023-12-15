// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
    {"number" : 1, "message" : "23.11.11 지우공룡 저리가!"},
    {"number" : 2, "message" : "23.02.12 맘마 시렁"},
    {"number" : 3, "message" : "23.02.21 짜자잔"},
    {"number" : 4, "message" : "23.02.24 우와!!!"},
    {"number" : 5, "message" : "23.03.11 오모낫"},
    {"number" : 6, "message" : "23.03.19 TV는 신기해"},
    {"number" : 7, "message" : "23.03.26 놀이터를 구경해요"},
    {"number" : 8, "message" : "23.04.30 넘어져도 괜찮아요"},
    {"number" : 9, "message" : "23.05.09 전화받을 사람?"},
    {"number" : 10, "message" : "23.06.04 한끼 뚝딱"},
    {"number" : 11, "message" : "23.06.04 용용아 달려~"},
    {"number" : 12, "message" : "23.06.03 모래가 따끈따끈"},
    {"number" : 13, "message" : "23.06.15 팔을 다쳐도 씩씩한 규민"},
    {"number" : 14, "message" : "23.07.24 졸...려..."},
    {"number" : 15, "message" : "23.07.31 스마일~"},
    {"number" : 16, "message" : "23.08.12 나는 가끔 사색에 잠긴ㄷr"},
    {"number" : 17, "message" : "23.08.26 사탕 념념"},
    {"number" : 18, "message" : "23.09.23 브이vV"},
    {"number" : 19, "message" : "23.09.30 브라키오사우르스야 우리집에 가자"},
    {"number" : 20, "message" : "23.01.23 방구의 힘으로!!"},
    {"number" : 21, "message" : "23.09.29 규민이 절 받으세요~"},
    {"number" : 22, "message" : "22.11.19 케이크 시러!!"},
    {"number" : 23, "message" : "23.04.19 올라가지마시오 그게 뭔데"},
    {"number" : 24, "message" : "22.12.31 다들 즐거운 연말 보내세요~"}
];
