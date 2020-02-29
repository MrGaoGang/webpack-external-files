import endsWith from "lodash/endsWith";
/**
 * 加载组件和组件的属性面板
 * @param {*} ignoreProps
 */
export default function(ignoreProps = false) {
  let components = [],
    propComponents = [];
  const requireAll = context => context.keys().map(context);

  const component = require.context("./packages", true, /\.vue$/);

  requireAll(component).forEach(file => {
    let item = file.default;
    if (endsWith(item.name, "prop") && !ignoreProps) {
      propComponents.push({
        key: item.name,
        value: item
      });
    } else if (!endsWith(item.name, "prop") && item.name) {
      components.push({
        key: item.name,
        value: item
      });
    }
  });

  return { components, propComponents };
}
