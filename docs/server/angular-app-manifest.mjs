
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/the-craft/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/the-craft"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 499, hash: 'dc93f95308ce2b0aaf43c3ea07f1e41229f9f8b09ac6cf238dd04fc568e069c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '89b5dca74c40e1c8bbae46943452438ae1679fbc7b6b33684cc95f75455db8d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20837, hash: '1f7266f5f3715201a92399b83d55fb9df171ded57afe0d5a851364273d417d2c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
