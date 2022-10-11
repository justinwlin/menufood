import "./App.css";
import { useState } from "react";
import "./index.css";
import axios from "axios";
function App() {
  const [category, setCategory] = useState("");
  const [food, setFood] = useState("");
  const updateCategory = (e) => {
    e.preventDefault();
    let choseCategory = e.target.name;
    setCategory(e.target.name);

    // 日常
    const daily_menu = {
      1: "肯德基",
      2: "麦当劳",
      3: "百利家",
      4: "螺狮粉",
      5: "炒酸奶",
      6: "麻辣烫",
      7: "云吞面",
      8: "西多士",
      9: "茶餐厅",
      10: "酸菜鱼",
      11: "椰子鸡",
      12: "茶泡饭",
      13: "泰国菜",
      14: "鲍师傅",
      15: "小炒牛肉",
      16: "钵钵鸡",
      17: "麻辣拌",
      18: "米线",
      19: "新疆炒米粉",
      20: "吉野家",
      21: "披萨",
      22: "臭豆腐",
      23: "烤冷面",
      24: "烧烤",
      25: "滑蛋饭",
      26: "小龙虾",
      27: "蛙蛙",
      28: "寿司",
      29: "牛肉面",
      30: "卤肉饭",
      31: "猪脚饭",
      32: "肘子饭",
      33: "大盘鸡",
      34: "烤猪蹄",
      35: "拌面",
      36: "点心",
    };

    // 早餐
    const breakfast_menu = {
      1: "JPG",
      2: "tims",
      3: "肯德基",
      4: "麦当劳",
      5: "华夫饼",
      6: "luckin",
      7: "肠粉",
      8: "卤蛋",
      9: "包子",
      10: "贝果",
      11: "司康",
      12: "牛肉面",
      13: "烧卖",
      14: "虾饺",
    };

    // 下午茶
    const afternoontea_meanu = {
      1: "芋圆西米露",
      2: "柠檬茶",
      3: "鲜芋仙",
      4: "豆乳盒子",
      5: "芒果酸奶慕斯",
      6: "蛋挞",
      7: "关东煮",
      8: "一点点",
      9: "沪上阿姨",
      10: "凑凑",
      11: "乌龙拿铁",
      12: "烤布蕾奶茶",
      13: "茉酸奶",
      14: "甘草水果",
      15: "霸王茶姬",
      16: "鲜奶茶",
      17: "益禾堂",
      18: "茶百道",
      19: "书亦烧仙草",
      20: "三得利",
    };

    let menuChoice = "";
    if (choseCategory == "Daily") {
      menuChoice = daily_menu;
    } else if (choseCategory == "Breakfast") {
      menuChoice = breakfast_menu;
    } else if (choseCategory == "Afternoon Tea") {
      menuChoice = afternoontea_meanu;
    }
    setFood(chooseDish(menuChoice));
  };

  function chooseDish(menu) {
    let length = Object.keys(menu).length;
    let menu_key = Math.floor(Math.random() * length + 1);
    let dish = menu[menu_key];
    return dish;
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold m-5">{category}</h1>
            <p className="font-medium	">Food to eat: {food}</p>
            <form className="form-inline my-2 my-lg-0">
              <div className="btn-group" data-toggle="buttons">
                <button
                  className="btn btn-primary"
                  name="Breakfast"
                  onClick={updateCategory}
                >
                  Breakfast
                </button>
                <button
                  className="btn btn-primary"
                  name="Daily"
                  onClick={updateCategory}
                >
                  Daily
                </button>
                <button
                  className="btn btn-primary"
                  name="Afternoon Tea"
                  onClick={updateCategory}
                >
                  Afternoon tea
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
