import getAllWidgets from "./require";
// 如果你只需要打包组件的话，而忽略属性面板
const widgets = getAllWidgets(true).components;

export { widgets };

export default {
  widgets
};
