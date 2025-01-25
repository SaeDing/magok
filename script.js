// img 폴더에 있는 파일명 리스트
const imageFiles = [
  "우주인 3단 마딜.png",
  "보루 변신 물딜.png",
  "그린딩딩 물딜.png",
  "슈퍼시바 마딜.png",
  "빅토리어스 마딜.png",
  "미믹 물딜.png",
  "눈보라 예티 변신 마딜.png",
  "돌팔이 마딜.png",
  "죽음의 기사 물딜.png",
  "라이양 마딜.png",
  "라이양 변신 마딜.png",
  "캔드리 물딜.png",
  "눈보라 예티 마딜.png",
  "해골룡 변신 마딜.png",
  "로큰롤스 마딜.png",
  "메카 좀비 마딜.png",
  "메카콩 마딜.png",
  "미라씨 물딜.png",
  "개굴 단장 변신 마딜.png",
  "빅헤드 물딜.png",
  "새싹이 물딜.png",
  "샤키 물딜.png",
  "선인장 건맨 물딜.png",
  "스리슬쩍냥 물딜.png",
  "크레이지 핫도그 물딜.png",
  "스시 선생 물딜.png",
  "식빵 복서 물딜.png",
  "악마 토끼 마딜.png",
    "캔드리 물딜.png",
  "역병의사 마딜.png",
  "오우거 전사 물딜.png",
  "오크라이더 물딜.png",
  "잭 오 마딜.png",
  "잭 오 변신 마딜.png",
  "전투 달팽이 물딜.png",
  "전투 달팽이 변신 물딜.png",
  "카우보이 밥 물딜.png",
  "데드베어 마딜.png",
  "보루 물딜.png",
  "드라큐 마딜.png",
  "드라큐 변신 마딜.png",
  "크레이지 핫도그 변신 물딜.png",
  "포크몬 물딜.png",
  "프랑키 물딜.png",
  "할로윈퀸 마딜.png",
  "해골 궁수 물딜.png",
  "해골룡 마딜.png",
  "꼬꼬질라 물딜.png",
  "개굴 단장 마딜.png",
  "우주인 1단 마딜.png",
  "우주인 2단 마딜.png"
];

const imageContainer = document.getElementById("image-container");
const dropZones = document.querySelectorAll(".drop-zone");
const resetButton = document.getElementById("reset-button");
const saveButton = document.getElementById("save-button");

let selectedImage = null; // 선택된 이미지 URL 저장 변수

// 유닛 클릭 시 선택 처리 및 배경색 변경
imageFiles.forEach(file => {
  const img = document.createElement("img");
  img.src = `img/${file}`;
  img.alt = file;
  img.draggable = false; // 드래그 비활성화

  img.addEventListener("click", () => {
    // 이미 선택된 유닛을 다시 클릭했을 경우, 색상 원래대로 되돌리기
    if (img.style.backgroundColor === "lightpink") {
      img.style.backgroundColor = ""; // 배경색 초기화
      selectedImage = null; // 선택된 이미지 URL 초기화

      // 드롭존 숨기기 및 스타일 초기화 (단, 이미지가 있는 드롭존은 건드리지 않음)
      dropZones.forEach(zone => {
        const zoneImage = zone.querySelector("img");
        zone.style.border = "none"; // 테두리선 제거
        zone.style.backgroundColor = "rgba(0, 0, 0, 0)"; // 배경색을 투명으로 설정
        
        // 드롭존에 이미지가 없다면 스타일 초기화
        if (!zoneImage) {
          zone.style.visibility = "hidden"; // 드롭존 숨기기
          zone.style.border = "none"; // 테두리 선 제거
          
          zone.style.backgroundColor = "rgba(0, 0, 0, 0)"; // 배경색 투명으로 설정
        }
      });

      return; // 이미 선택된 유닛을 다시 클릭하면 종료
    }

    // 기존 선택된 유닛 초기화
    document.querySelectorAll(".image-container img").forEach(image => {
        image.style.backgroundColor = ""; // 배경색 초기화
    });

    // 클릭한 유닛 선택 및 배경색 변경
    img.style.backgroundColor = "lightpink";
    selectedImage = img.src; // 선택된 이미지 URL 저장

    // 드롭존 표시
    dropZones.forEach(zone => {
        zone.style.visibility = "visible";
        zone.style.border = "2px dashed rgba(150, 150, 150, 0.8)"; // 시각적 강조
        zone.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // 배경색 보이게 함
    });
  });

  imageContainer.appendChild(img);
});


// 드롭존 클릭 시 선택된 이미지 추가
dropZones.forEach(zone => {
  // 드롭존 클릭 시 선택된 이미지 추가
  zone.addEventListener("click", () => {
      if (selectedImage) {
          // 기존 이미지 제거
          if (zone.querySelector("img")) {
              zone.querySelector("img").remove();
          }

          // 새로운 이미지 추가
          const img = document.createElement("img");
          img.src = selectedImage;
          img.alt = "dropped-image";
          img.style.width = "130%";
          img.style.height = "130%";

          zone.appendChild(img);

          // 선택 상태 초기화
          document.querySelectorAll(".image-container img").forEach(image => {
              image.style.backgroundColor = ""; // 배경색 초기화
          });
          selectedImage = null; // 선택된 이미지 초기화

          // 드롭존 스타일 초기화
          dropZones.forEach(zone => {
              zone.style.border = "none"; // 테두리선 제거
              zone.style.backgroundColor = "rgba(0, 0, 0, 0)"; // 배경색을 투명으로 설정
          });
      }
  });

  // 드롭존 더블 클릭 시 이미지 제거
  zone.addEventListener("dblclick", () => {
      const img = zone.querySelector("img");
      if (img) {
          img.remove(); // 이미지 제거
      }
  });
});


resetButton.addEventListener("click", () => {
  dropZones.forEach(zone => {
    zone.innerHTML = ""; // 드롭존 비우기
    zone.style.visibility = "hidden";
    zone.style.border = "0.2px dashed rgba(102, 102, 102, 0.3)";
    zone.style.backgroundColor = "rgba(200, 200, 200, 0.7)";
  });

  // 선택 상태 초기화
  document.querySelectorAll(".image-container img").forEach(image => {
    image.style.backgroundColor = ""; // 배경색 초기화
  });
  selectedImage = null; // 선택 상태 초기화

  // wave와 gold 입력값 초기화
  const waveInput = document.getElementById("wave");
  const goldInput = document.getElementById("gold");
  waveInput.value = "";
  goldInput.value = "";

  // wave와 gold 값 초기화
  const waveGoldDisplay = document.getElementById("wave-gold-display");
  waveGoldDisplay.textContent = ""; // 텍스트 초기화
});


saveButton.addEventListener("click", () => {
  const waveInput = document.getElementById("wave");
  const goldInput = document.getElementById("gold");
  const waveValue = waveInput.value.trim();
  const goldValue = goldInput.value.trim();

  // wave와 gold 값이 있을 경우에만 표시
  let displayText = "";
  if (waveValue) {
    displayText += `WAVE: ${waveValue}`;
  }
  if (goldValue) {
    if (displayText) displayText += " | "; // WAVE 뒤에 구분자 추가
    displayText += `Gold: ${goldValue}`;
  }

  // wave와 gold 값을 표시할 위치에 텍스트 삽입
  const waveGoldDisplay = document.getElementById("wave-gold-display");
  waveGoldDisplay.textContent = displayText;

  // 텍스트 색상을 흰색으로 강제 설정
  waveGoldDisplay.style.color = 'white';  // 흰색으로 설정

  // map-container의 크기 가져오기
  const mapContainer = document.getElementById("map-container");
  const mapWidth = mapContainer.offsetWidth;
  const mapHeight = mapContainer.offsetHeight;

  // waveGoldDisplay 위치 설정 (중앙에서 50px 내려오기)
  waveGoldDisplay.style.position = 'absolute';  // 위치를 절대값으로 설정
  waveGoldDisplay.style.top = `${(mapHeight / 2) - 50}px`; // mapContainer의 중간에서 50px 내려옴
  waveGoldDisplay.style.left = `${(mapWidth / 2) - (waveGoldDisplay.offsetWidth / 2)}px`; // 가로 중앙으로 위치

  // 텍스트 크기와 위치 조정
  waveGoldDisplay.style.transform = 'translateX(-50%)'; // 정확히 가운데로 위치시킴

  html2canvas(mapContainer, {
    scrollX: 0, // 스크롤 방지
    scrollY: 0,
    windowWidth: document.documentElement.offsetWidth, // 현재 뷰포트 크기 기준
    windowHeight: document.documentElement.offsetHeight,
    scale: 2, // 고해상도 출력
    useCORS: true, // 외부 이미지 CORS 지원
    allowTaint: true,  // tainted 상태에서도 캡처 허용
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "map.png";
    link.href = canvas.toDataURL(); // 캡처한 이미지 URL을 다운로드 링크로 설정
    link.click();

    // 다운로드 후 텍스트를 초기화
    waveGoldDisplay.textContent = "";
  });
});





const base64Image = 'data:image/png;base64,...';  // Base64로 변환된 이미지
const imgElement = document.createElement('img');
imgElement.src = base64Image;
document.body.appendChild(imgElement);


