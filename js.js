function recommendMenu(foodType) {
    let menuList = [];
    switch (foodType) {
      case "한식":
        menuList = ["불고기", "된장찌개", "김치찌개", "삼겹살", "갈비탕"];
        break;
      case "중식":
        menuList = ["짜장면", "짬뽕", "탕수육", "양장피", "팔보채"];
        break;
      case "양식":
        menuList = ["스테이크", "파스타", "그라탕", "샐러드", "오므라이스"];
        break;
      case "일식":
        menuList = ["초밥", "돈부리", "우동", "라멘", "오니기리"];
        break;
      default:
        console.log("올바른 음식 종류를 입력해주세요.");
        return;
    }
    const randomIndex = Math.floor(Math.random() * menuList.length);
    const recommendedMenu = menuList[randomIndex];
    console.log(`오늘의 추천 메뉴는 ${recommendedMenu}입니다!`);
  }
  recommendMenu("한식");