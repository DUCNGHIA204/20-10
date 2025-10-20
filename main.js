
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  // Danh sách câu chúc
const wishes = [
  "Chúc bạn luôn xinh đẹp như những đóa hoa đêm nay – nhẹ nhàng nhưng rực rỡ theo cách riêng của mình.",
  "Mong rằng nụ cười sẽ luôn là món trang sức quý giá nhất trên khuôn mặt bạn – và nó sẽ không bao giờ phai.",
  "Bạn không cần trở thành người hoàn hảo – chỉ cần luôn hạnh phúc là đã đủ tuyệt vời rồi.",
  "Chúc bạn luôn được yêu thương không chỉ trong hôm nay – mà là mọi ngày.",
  "Cảm ơn vì đã hiện diện trong thế giới này – bởi chỉ cần bạn tồn tại thôi cũng khiến mọi thứ tươi đẹp hơn.",
  "Mọi giấc mơ của bạn đều xứng đáng được lấp lánh như bầu trời đêm nay – và mình tin bạn sẽ chạm được hết.",
  "Chúc bạn mãi là phiên bản rạng rỡ nhất của chính mình – duy nhất, đặc biệt và không thể thay thế."
];

// Lấy HTML container
const wishElement = document.querySelector('.womens-day-wishes');

// ======== HIỆU ỨNG FADE NHỊP TIM ========

function startFadeEffect() {
  let index = 0;
  function showNext() {
    wishElement.textContent = wishes[index];
    wishElement.classList.remove('slide-in-horizontal');
    wishElement.classList.add('fade-in-heartbeat');

    setTimeout(() => {
      wishElement.classList.remove('fade-in-heartbeat');
      index = (index + 1) % wishes.length;
      showNext();
    }, 10000);
  }
  showNext();
}

// ======== HIỆU ỨNG SLIDE NGANG ========

function startSlideEffect() {
  let index = 0;
  function showNext() {
    wishElement.textContent = wishes[index];
    wishElement.classList.remove('fade-in-heartbeat');
    wishElement.classList.add('slide-in-horizontal');

    setTimeout(() => {
      wishElement.classList.remove('slide-in-horizontal');
      index = (index + 1) % wishes.length;
      showNext();
    }, 10000);
  }
  showNext();
}

// ======= CHỌN 1 TRONG 2 HIỆU ỨNG =======

startFadeEffect();       // 🌫 Fade nhịp tim
// startSlideEffect();   // ➡️ Slide ngang
