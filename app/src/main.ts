import { createApp } from 'vue';
import App from './App.vue';
import { vuetify } from './plugins/vuetify';
import { router, installCameraRouteSync } from './router';
// KaTeX stylesheet for notebook math (the markdown pipeline renders to KaTeX HTML).
import 'katex/dist/katex.min.css';

const app = createApp(App).use(vuetify).use(router);

// Bind navigation → camera (and focus-on-arrival). Installed before the first
// navigation resolves so a deep link snaps the camera into place before mount —
// no fly from origin, and no flash during the first-frame canvas crossfade.
installCameraRouteSync(router);

router.isReady().then(() => app.mount('#app'));
