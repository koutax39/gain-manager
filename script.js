document.addEventListener("DOMContentLoaded", () => {
  console.log("アプリが起動しました！");
  // 今後ここに記録やカレンダー機能などを追加していきます
});
document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("calendar");
  const calendarTitle = document.getElementById("calendar-title");

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-11

  const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月",
                      "7月", "8月", "9月", "10月", "11月", "12月"];
  calendarTitle.textContent = `${year}年${monthNames[month]}`;

  const firstDay = new Date(year, month, 1).getDay(); // 曜日（0=日）
  const lastDate = new Date(year, month + 1, 0).getDate();

  // 空白を入れる（前月の分）
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.classList.add("day");
    calendar.appendChild(empty);
  }

  // 日付を生成
  for (let date = 1; date <= lastDate; date++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = date;

    // 今後、クリックで詳細入力画面へ移行予定
    dayCell.addEventListener("click", () => {
      alert(`${year}/${month + 1}/${date} をタップしました`);
    });

    calendar.appendChild(dayCell);
  }
});
