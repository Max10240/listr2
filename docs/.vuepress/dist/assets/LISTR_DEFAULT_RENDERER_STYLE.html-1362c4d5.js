import { _ as o, W as a, X as l, Y as e, $ as t, Z as r, a2 as s, D as d } from './framework-4c9bc095.js'
const i = {},
  _ = e(
    'h1',
    { id: 'variable-listr-default-renderer-style', tabindex: '-1' },
    [e('a', { class: 'header-anchor', href: '#variable-listr-default-renderer-style', 'aria-hidden': 'true' }, '#'), t(' Variable: LISTR_DEFAULT_RENDERER_STYLE')],
    -1
  ),
  c = e('code', null, 'Const', -1),
  L = e('strong', null, 'LISTR_DEFAULT_RENDERER_STYLE', -1),
  h = e('code', null, 'ListrLoggerOptionStyle', -1),
  u = e('code', null, 'ListrDefaultRendererLogLevels', -1),
  E = e('h4', { id: 'defined-in', tabindex: '-1' }, [e('a', { class: 'header-anchor', href: '#defined-in', 'aria-hidden': 'true' }, '#'), t(' Defined in')], -1),
  R = e('p', null, 'src/renderer/default/renderer.constants.ts:21', -1)
function f(p, T) {
  const n = d('RouterLink')
  return (
    a(),
    l('div', null, [
      _,
      e('p', null, [
        t('• '),
        c,
        t(),
        L,
        t(': '),
        r(n, { to: '/api/types/ListrLoggerOptionStyle.html' }, { default: s(() => [h]), _: 1 }),
        t('<'),
        r(n, { to: '/api/enums/ListrDefaultRendererLogLevels.html' }, { default: s(() => [u]), _: 1 }),
        t('>')
      ]),
      E,
      R
    ])
  )
}
const m = o(i, [
  ['render', f],
  ['__file', 'LISTR_DEFAULT_RENDERER_STYLE.html.vue']
])
export { m as default }
