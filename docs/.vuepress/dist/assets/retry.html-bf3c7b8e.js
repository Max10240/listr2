import { _ as r, W as u, X as d, Z as a, a2 as e, a4 as k, Y as s, $ as n, a5 as i, D as t } from './framework-4c9bc095.js'
const v = {},
  b = s(
    'p',
    null,
    [n('If you want to retry a task that had failed a couple of times more, you can use the '), s('code', null, 'retry'), n(' property in the '), s('code', null, 'Task'), n('.')],
    -1
  ),
  h = s('a', { href: 'https://github.com/cenk1cenk2/listr2/issues/303', target: '_blank' }, '#303', -1),
  m = { class: 'hint-container info' },
  g = s('p', { class: 'hint-container-title' }, 'Example', -1),
  y = { href: 'https://github.com/cenk1cenk2/listr2/tree/master/examples/task-retry.example.ts', target: '_blank', rel: 'noopener noreferrer' },
  w = i(
    `<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Ctx</span> <span class="token punctuation">{</span>
  output<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> tasks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Listr<span class="token operator">&lt;</span>Ctx<span class="token operator">&gt;</span></span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Some type errors&#39;</span><span class="token punctuation">,</span>
      task<span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> task<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
        task<span class="token punctuation">.</span>output <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>

        <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;This type can not be assigned to type with, oh noes&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      retry<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    concurrent<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    exitOnError<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">await</span> tasks<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="retry-event" tabindex="-1"><a class="header-anchor" href="#retry-event" aria-hidden="true">#</a> Retry Event</h2>`,
    3
  ),
  f = s('code', null, 'task.isRetrying()', -1),
  _ = s('code', null, 'count', -1),
  x = s('code', null, '0', -1),
  E = s('code', null, 'withError', -1),
  R = i(
    `<h3 id="retry-count" tabindex="-1"><a class="header-anchor" href="#retry-count" aria-hidden="true">#</a> Retry Count</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> tasks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Listr</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Some thing with errors&#39;</span><span class="token punctuation">,</span>
      task<span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> task<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> retry <span class="token operator">=</span> task<span class="token punctuation">.</span><span class="token function">isRetrying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>retry<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          task<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;This means I am retrying.&#39;</span>
          task<span class="token punctuation">.</span>output <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">&#39;I am self aware that I am retrying for the %dth time.&#39;</span><span class="token punctuation">,</span> retry<span class="token punctuation">.</span>count <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;This type can not be assigned to type with, oh noes&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      retry<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> exitOnError<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">await</span> tasks<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="last-error" tabindex="-1"><a class="header-anchor" href="#last-error" aria-hidden="true">#</a> Last Error</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> tasks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Listr</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Some thing with errors&#39;</span><span class="token punctuation">,</span>
      task<span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> task<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> retry <span class="token operator">=</span> task<span class="token punctuation">.</span><span class="token function">isRetrying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>retry<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>retry<span class="token punctuation">.</span>error <span class="token operator">===</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Something&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            task<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;I will process the task further.&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;This type can not be assigned to type with, oh noes&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      retry<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> exitOnError<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">await</span> tasks<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="renderer" tabindex="-1"><a class="header-anchor" href="#renderer" aria-hidden="true">#</a> Renderer</h2><ul><li>When retrying, the task title will be reset to the original task title.</li></ul><h3 id="default-renderer" tabindex="-1"><a class="header-anchor" href="#default-renderer" aria-hidden="true">#</a> Default Renderer</h3><details class="hint-container details"><summary>Details</summary><p>@include(../api/interfaces/DefaultRendererOptions.md{190-202})</p></details>`,
    8
  )
function I(L, T) {
  const p = t('FontIcon'),
    o = t('Badge'),
    c = t('ExternalLinkIcon'),
    l = t('RouterLink')
  return (
    u(),
    d('div', null, [
      b,
      a(o, null, { default: e(() => [a(p, { icon: 'mdi:tag-text-outline' }), n('v3.4.0')]), _: 1 }),
      a(o, { type: 'warning' }, { default: e(() => [a(p, { icon: 'mdi:github' }), h]), _: 1 }),
      k(' more '),
      s('div', m, [g, s('p', null, [n('You can find the related examples '), s('a', y, [n('here'), a(c)]), n('.')])]),
      w,
      s('p', null, [
        n('Retrying is self-aware, and you can access the task if it is retrying via '),
        f,
        n('. It will either return an object '),
        a(l, { to: '/api/interfaces/ListrTaskRetry.html' }, { default: e(() => [n('with given interface')]), _: 1 }),
        n(' where the '),
        _,
        n(' will be '),
        x,
        n(' for not repeating tasks, and '),
        E,
        n(' is the last encountered error if retrying.')
      ]),
      R
    ])
  )
}
const B = r(v, [
  ['render', I],
  ['__file', 'retry.html.vue']
])
export { B as default }
