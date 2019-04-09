import Glider from './packages/Glider/index';
import GliderSlide from './packages/GliderSlide/index';

const components = [
  Glider,
  GliderSlide,
];

const install = (Vue) => {
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.1.0-beta.0',
  install,
  Glider,
  GliderSlide,
};
