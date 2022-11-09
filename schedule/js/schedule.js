document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: "UTC",
    initialView: "dayGridMonth", // 홈페이지에서 다른 형태의 view를 확인할  수 있다.
    events: [
      // 일정 데이터 추가 , DB의 event를 가져오려면 JSON 형식으로 변환해 events에 넣어주면된다.
      {
        title: "13:00~17:00(김**)",
        start: "2022-04-04",
        end: "2022-04-04",
      },

      {
        title: "11:00~12:30(배**)",
        start: "2022-04-13",
        end: "2022-04-13",
      },

      {
        title: "16:30~18:00(김**)",
        start: "2022-04-13",
        end: "2022-04-13",
      },

      {
        title: "14:00~17:00(한국**)",
        start: "2022-04-14",
        end: "2022-04-14",
      },

      {
        title: "11:00~13:00(고려**)",
        start: "2022-04-22",
        end: "2022-04-22",
      },

      {
        title: "10:00~15:00(상명**)",
        start: "2022-04-26",
        end: "2022-04-26",
      },
      

      {
        title: "10:00~12:00(상명**)",
        start: "2022-04-27",
        end: "2022-04-27",
      },
      

      {
        title: "11:00~12:00(윤**)",
        start: "2022-04-30",
        end: "2022-04-30",
      },

      {
        title: "11:00~12:00(상명**)",
        start: "2022-05-05",
        end: "2022-05-05",
      },
    ],
    editable: true, // false로 변경 시 draggable 작동 x
  });
  calendar.render();
});
