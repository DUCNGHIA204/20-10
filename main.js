
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  /* ================== WOMEN'S DAY WISHES (Logic JS: Fade & Slide) ================== */

/*
  Cấu trúc:
  - wishes: mảng câu chúc
  - startFadeEffect(): hiệu ứng mặc định (fade 2s -> giữ 8s)
  - startSlideEffect(): hiệu ứng slide ngang (vào 2s -> giữ 8s -> nhẹ kết thúc)
  - Thay đổi hiệu ứng: bỏ comment startSlideEffect() hoặc startFadeEffect()
*/

const wishes = [
  "Chúc bạn luôn xinh đẹp như những đóa hoa đêm nay – nhẹ nhàng nhưng rực rỡ theo cách riêng của mình ❤️",
  "Mong rằng nụ cười sẽ luôn là món trang sức quý giá nhất trên khuôn mặt bạn – và nó sẽ không bao giờ phai.",
  "Bạn không cần trở thành người hoàn hảo – chỉ cần luôn hạnh phúc là đã đủ tuyệt vời rồi 💖",
  "Chúc bạn luôn được yêu thương không chỉ trong hôm nay – mà là mọi ngày.",
  "Cảm ơn vì đã hiện diện trong thế giới này – bởi chỉ cần bạn tồn tại thôi cũng khiến mọi thứ tươi đẹp hơn 💝",
  "Mọi giấc mơ của bạn đều xứng đáng được lấp lánh như bầu trời đêm nay – và mình tin bạn sẽ chạm được hết.",
  "Chúc bạn mãi là phiên bản rạng rỡ nhất của chính mình – duy nhất, đặc biệt và không thể thay thế ❤️"
];

// selector container
const wishElement = document.querySelector('.womens-day-wishes');

if (!wishElement) {
  console.warn('Không tìm thấy .womens-day-wishes trong DOM. Vui lòng thêm <div class="womens-day-wishes"></div> vào index.html');
}

// helper: retrigger animation by removing & forcing reflow before add class
function triggerAnimation(el, className) {
  if (!el) return;
  el.classList.remove(className);
  // force reflow to allow re-adding the class (retrigger)
  void el.offsetWidth;
  el.classList.add(className);
}

/* ================= Fade Effect (mặc định) ================= */
function startFadeEffect() {
  if (!wishElement) return;
  let idx = 0;

  function showNext() {
    wishElement.textContent = wishes[idx];
    // đảm bảo xóa class slide nếu có
    wishElement.classList.remove('slide-in-horizontal');
    // retrigger fade animation
    triggerAnimation(wishElement, 'fade-in-heartbeat');

    // sau 10s (10000ms) show next
    setTimeout(() => {
      // remove class để sẵn sàng cho lần sau (không bắt buộc vì triggerAnimation xử lý)
      wishElement.classList.remove('fade-in-heartbeat');
      idx = (idx + 1) % wishes.length;
      showNext();
    }, 10000);
  }

  showNext();
}

/* ================= Slide Effect ================= */
function startSlideEffect() {
  if (!wishElement) return;
  let idx = 0;

  function showNext() {
    wishElement.textContent = wishes[idx];
    // đảm bảo xóa class fade nếu có
    wishElement.classList.remove('fade-in-heartbeat');
    // retrigger slide animation
    triggerAnimation(wishElement, 'slide-in-horizontal');

    setTimeout(() => {
      wishElement.classList.remove('slide-in-horizontal');
      idx = (idx + 1) % wishes.length;
      showNext();
    }, 10000);
  }

  showNext();
}

/* ========== Chọn hiệu ứng ========== */
/* Mặc định: startFadeEffect() */
// Nếu muốn thử Slide, comment dòng startFadeEffect() và bỏ comment startSlideEffect()

startFadeEffect();
// startSlideEffect();
