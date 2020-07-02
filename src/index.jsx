import { createElement, useCallback, useState } from "rax";
import View from "rax-view";
import Text from "rax-text";
import Slider from "rax-slider";
import ScrollView from "rax-scrollview";
import { screenHeight } from "universal-device";
import { px2rpx } from "universal-unit-tool";

import "./index.css";

const height = px2rpx(screenHeight) - 240;

const MyComponent = () => {
  const [tabList, setTabList] = useState([
    "第一个 Tab",
    "第二个 Tab",
    "第三个 Tab",
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = useCallback((evt) => {
    setActiveIndex(evt.index);
  }, []);
  return (
    <View>
      <View className="tab-container">
        <View
          x-for={(tab, index) in tabList}
          x-class={{
            "tab-item": true,
            "tab-active-item": activeIndex === index,
          }}
        >
          {tab}
        </View>
      </View>
      <Slider
        index={activeIndex}
        showsPagination={false}
        onChange={handleChange}
        width="750"
        height={height}
      >
        <Slider.Item>
          <ScrollView style={{ height: `${height}rpx` }} className="list">
            1
          </ScrollView>
        </Slider.Item>
        <Slider.Item>
          <ScrollView style={{  height: `${height}rpx` }} className="list">2</ScrollView>
        </Slider.Item>
        <Slider.Item>
          <ScrollView style={{  height: `${height}rpx` }} className="list">3</ScrollView>
        </Slider.Item>
      </Slider>
    </View>
  );
};

export default MyComponent;
