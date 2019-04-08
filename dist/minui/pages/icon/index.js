export default Page({
  data: {
    '__code__': {
      readme: '<h1 class="md-h1">wxc-icon</h1><blockquote>\n<p>MinUI \u5C0F\u7A0B\u5E8F\u7EC4\u4EF6 - \u56FE\u6807</p>\n</blockquote>\n<h2 class="md-h2">Install</h2><code class="lang-bash md-code"><span class="hljs-variable">$ </span>min install <span class="hljs-variable">@minui</span>/wxc-icon</code><h2 class="md-h2">API</h2><h3 class="md-h3">Icon\u3010props\u3011</h3><table class="md-table">\n    <tr class="md-tr">\n<th class="md-th">\u5C5E\u6027</th>\n<th class="md-th">\u63CF\u8FF0</th>\n</tr>\n\n    <tr class="md-tr">\n<td class="md-td">type</td>\n<td class="md-td">[\u5FC5\u586B] icon \u7C7B\u578B</td>\n</tr>\n<tr class="md-tr">\n<td class="md-td">size</td>\n<td class="md-td">[\u53EF\u9009] icon \u5B57\u53F7\uFF0C\u9ED8\u8BA4\u503C 22\uFF08\u5355\u4F4D rpx\uFF09</td>\n</tr>\n<tr class="md-tr">\n<td class="md-td">color</td>\n<td class="md-td">[\u53EF\u9009] icon \u989C\u8272\uFF0C\u9ED8\u8BA4 #333</td>\n</tr>\n\n  </table><h2 class="md-h2">Link</h2><table class="md-table">\n    <tr class="md-tr">\n<th class="md-th"></th>\n<th class="md-th">\u5730\u5740</th>\n</tr>\n\n    <tr class="md-tr">\n<td class="md-td"></td>\n<td class="md-td">icon \u7EC4\u4EF6\u6587\u6863 <br class="md-br"> <a href="https://meili.github.io/min/docs/minui/index.html#icon" class="md-a">https://meili.github.io/min/docs/minui/index.html#icon</a><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"></td>\n<td class="md-td">icon \u7EC4\u4EF6\u6E90\u7801 <br class="md-br"> <a href="https://github.com/meili/minui/tree/master/packages/wxc-icon" class="md-a">https://github.com/meili/minui/tree/master/packages/wxc-icon</a><br class="md-br"></td>\n</tr>\n<tr class="md-tr">\n<td class="md-td"></td>\n<td class="md-td">MinUI \u7EC4\u4EF6\u5E93 <br class="md-br"> <a href="https://github.com/meili/minui" class="md-a">https://github.com/meili/minui</a> <br class="md-br"></td>\n</tr>\n\n  </table><h2 class="md-h2">Preview</h2><p><img src="https://s10.mogucdn.com/mlcdn/c45406/171107_1ab45l563alfj6jkeeij1jf0k06h0_480x480.jpg_225x999.jpg" alt="icon"></p>\n<h2 class="md-h2">ChangeLog</h2><h4 class="md-h4">v1.0.6\uFF082018.01.09\uFF09</h4><ul>\n<li>update API</li>\n</ul>\n<h4 class="md-h4">v1.0.2\uFF082017.11.02\uFF09</h4><ul>\n<li>update .npmignore</li>\n</ul>\n<h4 class="md-h4">v1.0.1\uFF082017.10.24\uFF09</h4><ul>\n<li>\u521D\u59CB\u7248\u672C</li>\n</ul>\n',
      demoDefault: '<code class="lang-html md-code"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span><br/><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"icon_list"</span>&gt;</span><br/><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">wx:for</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{icons}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span> <span class="hljs-attr">wx:for-item</span>=<span class="hljs-string">"icon"</span> <span class="hljs-attr">wx:key</span>=<span class="hljs-string">"index"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"icon_item_demo"</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">wxc-icon</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"</span></span></span><span class="hljs-template-variable">{{icon}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-string">"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wxc-icon</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;<span class="hljs-name">text</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"icon_type"</span>&gt;</span></span><span class="hljs-template-variable">{{icon}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">text</span>&gt;</span><br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><br/><span class="md--tab"></span><span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span><br/><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"><br/><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {<br/><span class="md--tab"></span><span class="hljs-attr">config</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attr">usingComponents</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'wxc-icon\'</span>: <span class="hljs-string">\'@minui/wxc-icon\'</span><br/><span class="md--tab"></span><span class="md--tab"></span>}<br/><span class="md--tab"></span>},<br/><span class="md--tab"></span><span class="hljs-attr">data</span>: {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attr">icons</span>: [<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'yes\'</span>, <span class="hljs-string">\'check\'</span>, <span class="hljs-string">\'help\'</span>, <span class="hljs-string">\'no\'</span>, <span class="hljs-string">\'warning\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'add\'</span>, <span class="hljs-string">\'close\'</span>, <span class="hljs-string">\'star\'</span>, <span class="hljs-string">\'star-active\'</span>, <span class="hljs-string">\'more\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'right\'</span>, <span class="hljs-string">\'arrow-left\'</span>, <span class="hljs-string">\'arrow-right\'</span>, <span class="hljs-string">\'arrow-up\'</span>, <span class="hljs-string">\'arrow-down\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'minus\'</span>, <span class="hljs-string">\'cart\'</span>, <span class="hljs-string">\'home\'</span>, <span class="hljs-string">\'search\'</span>, <span class="hljs-string">\'search-square\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'camera\'</span>, <span class="hljs-string">\'scan\'</span>, <span class="hljs-string">\'corcer-l\'</span>, <span class="hljs-string">\'corcer-r\'</span>, <span class="hljs-string">\'alipay\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'yen\'</span>, <span class="hljs-string">\'mogujie\'</span>, <span class="hljs-string">\'group\'</span>, <span class="hljs-string">\'pintuan\'</span>, <span class="hljs-string">\'share\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'notice\'</span>, <span class="hljs-string">\'shop\'</span>, <span class="hljs-string">\'delete\'</span>, <span class="hljs-string">\'comment\'</span>, <span class="hljs-string">\'edit\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'feedback\'</span>, <span class="hljs-string">\'location\'</span>, <span class="hljs-string">\'address\'</span>, <span class="hljs-string">\'after-sales\'</span>, <span class="hljs-string">\'footprint\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'weixin\'</span>, <span class="hljs-string">\'top\'</span>, <span class="hljs-string">\'purse\'</span>, <span class="hljs-string">\'unreceived\'</span>, <span class="hljs-string">\'truck\'</span>,<br/><span class="md--tab"></span><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-string">\'rate\'</span>, <span class="hljs-string">\'coupon\'</span>, <span class="hljs-string">\'message\'</span>,<span class="hljs-string">\'clear\'</span><br/><span class="md--tab"></span><span class="md--tab"></span>]<br/><span class="md--tab"></span>},<br/><span class="md--tab"></span><span class="hljs-attr">methods</span>: {}<br/>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br/><br/><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css"><br/><span class="md--tab"></span><span class="hljs-selector-class">.icon_list</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">overflow</span>: hidden;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">text-align</span>: center;<br/><span class="md--tab"></span>}<br/><span class="md--tab"></span><span class="hljs-selector-class">.icon_item_demo</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">width</span>: <span class="hljs-number">20%</span>;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">float</span>: left;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">10</span>rpx;<br/><span class="md--tab"></span>}<br/><span class="md--tab"></span><span class="hljs-selector-class">.icon_type</span> {<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">display</span>: block;<br/><span class="md--tab"></span><span class="md--tab"></span><span class="hljs-attribute">font-size</span>: <span class="hljs-number">22</span>rpx;<br/><span class="md--tab"></span>}<br/></span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span><br/></span></code>'
    }
  },
  onShareAppMessage: function () {
    return {
      title: '图标 - MinUI小程序组件库',
      path: '/pages/icon/index'
    };
  }
});