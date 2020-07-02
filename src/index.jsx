import rax, { createElement, useCallback, useState, useEffect } from "rax";
import View from "rax-view";
import Slider from "rax-slider";
import { screenHeight } from "universal-device";
import { px2rpx } from "universal-unit-tool";

import "./index.css";

const height = px2rpx(screenHeight);

const TabPanel = ({ addReachBottomListener, removeReachBottomListener }) => {
  const [tabList, setTabList] = useState([
    "第一个 Tab",
    "第二个 Tab",
    "第三个 Tab",
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [list, setList] = useState([...Array(50).keys()]);

  const handleChange = useCallback((evt) => {
    setActiveIndex(evt.index);
  }, []);

  const loadMore = useCallback((evt) => {
    setList([...list, ...Array(50).keys()])
    console.log("可以加载更多数据了~");
  }, []);

  useEffect(() => {
    // 在 Rax 项目中，可以通过 addNativeEventListener 直接监听，而不需要从 props 中获取，此处该组件 demo 预览在原生项目中，故在另外实现一套事件监听
    addReachBottomListener(loadMore);
    return () => {
      removeReachBottomListener(loadMore);
    };
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
          <View className="list">
            <View x-for={(item, index) in list}>{index}</View>
          </View>
        </Slider.Item>
        <Slider.Item>
          <View className="list">2</View>
        </Slider.Item>
        <Slider.Item>
          <View className="list">3</View>
        </Slider.Item>
      </Slider>
    </View>
  );
};

export default TabPanel;
