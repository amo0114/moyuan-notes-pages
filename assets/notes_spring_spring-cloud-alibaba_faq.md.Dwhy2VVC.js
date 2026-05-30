import{c as s,O as n,i as e,m as i}from"./chunks/framework.BWIk71Uc.js";const g=JSON.parse('{"title":"常见问题与排查清单","description":"","frontmatter":{},"headers":[],"relativePath":"notes/spring/spring-cloud-alibaba/faq.md","filePath":"notes/spring/spring-cloud-alibaba/faq.md","lastUpdated":1779811183000}'),p={name:"notes/spring/spring-cloud-alibaba/faq.md"};function l(t,a,r,c,h,d){return n(),e("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1779811183000"},[...a[0]||(a[0]=[i(`<h1 id="常见问题与排查清单" tabindex="-1">常见问题与排查清单 <a class="header-anchor" href="#常见问题与排查清单" aria-label="Permalink to “常见问题与排查清单”">​</a></h1><h2 id="_10-1-nacos-看不到服务" tabindex="-1">10.1 Nacos 看不到服务 <a class="header-anchor" href="#_10-1-nacos-看不到服务" aria-label="Permalink to “10.1 Nacos 看不到服务”">​</a></h2><p>检查：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1. 服务是否启动成功</span></span>
<span class="line"><span>2. nacos server-addr 是否正确</span></span>
<span class="line"><span>3. spring.application.name 是否配置</span></span>
<span class="line"><span>4. namespace 是否正确</span></span>
<span class="line"><span>5. group 是否正确</span></span>
<span class="line"><span>6. Nacos 是否开启鉴权</span></span>
<span class="line"><span>7. 服务和 Nacos 网络是否连通</span></span></code></pre></div><hr><h2 id="_10-2-feign-调用失败" tabindex="-1">10.2 Feign 调用失败 <a class="header-anchor" href="#_10-2-feign-调用失败" aria-label="Permalink to “10.2 Feign 调用失败”">​</a></h2><p>检查：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1. 是否加了 @EnableFeignClients</span></span>
<span class="line"><span>2. @FeignClient name 是否等于服务名</span></span>
<span class="line"><span>3. 服务提供者是否注册到 Nacos</span></span>
<span class="line"><span>4. 请求路径是否一致</span></span>
<span class="line"><span>5. 参数注解是否写完整</span></span>
<span class="line"><span>6. 请求方法 GET/POST 是否一致</span></span>
<span class="line"><span>7. 是否超时</span></span>
<span class="line"><span>8. 是否被 Sentinel 限流或熔断</span></span></code></pre></div><hr><h2 id="_10-3-sentinel-控制台看不到服务" tabindex="-1">10.3 Sentinel 控制台看不到服务 <a class="header-anchor" href="#_10-3-sentinel-控制台看不到服务" aria-label="Permalink to “10.3 Sentinel 控制台看不到服务”">​</a></h2><p>检查：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1. 是否引入 spring-cloud-starter-alibaba-sentinel</span></span>
<span class="line"><span>2. dashboard 地址是否正确</span></span>
<span class="line"><span>3. 服务是否访问过接口</span></span>
<span class="line"><span>4. Sentinel 懒加载，必须先产生流量</span></span>
<span class="line"><span>5. spring.application.name 是否配置</span></span></code></pre></div><hr><h2 id="_10-4-sentinel-限流不生效" tabindex="-1">10.4 Sentinel 限流不生效 <a class="header-anchor" href="#_10-4-sentinel-限流不生效" aria-label="Permalink to “10.4 Sentinel 限流不生效”">​</a></h2><p>检查：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1. 配置的资源是否是当前访问的接口</span></span>
<span class="line"><span>2. QPS 是否真的超过阈值</span></span>
<span class="line"><span>3. 是否配置在正确的服务上</span></span>
<span class="line"><span>4. 服务是否重启导致规则丢失</span></span>
<span class="line"><span>5. 是否被网关转发后路径发生变化</span></span></code></pre></div><hr><h2 id="_10-5-gateway-路由失败" tabindex="-1">10.5 Gateway 路由失败 <a class="header-anchor" href="#_10-5-gateway-路由失败" aria-label="Permalink to “10.5 Gateway 路由失败”">​</a></h2><p>检查：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1. Gateway 是否引入了正确 starter</span></span>
<span class="line"><span>2. Gateway WebFlux 项目是否误引入 spring-boot-starter-web</span></span>
<span class="line"><span>3. uri 是否使用 lb://服务名</span></span>
<span class="line"><span>4. 服务名是否在 Nacos 中存在</span></span>
<span class="line"><span>5. Path 断言是否匹配</span></span>
<span class="line"><span>6. StripPrefix 或 RewritePath 是否写错</span></span>
<span class="line"><span>7. 新版本 Gateway 属性前缀是否正确</span></span></code></pre></div><hr><h2 id="_10-6-上下文透传失败" tabindex="-1">10.6 上下文透传失败 <a class="header-anchor" href="#_10-6-上下文透传失败" aria-label="Permalink to “10.6 上下文透传失败”">​</a></h2><p>检查：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1. Gateway 是否成功添加 Header</span></span>
<span class="line"><span>2. 下游服务是否能读取 Header</span></span>
<span class="line"><span>3. Servlet Filter 是否执行</span></span>
<span class="line"><span>4. ThreadLocal 是否及时 clear</span></span>
<span class="line"><span>5. Feign RequestInterceptor 是否生效</span></span>
<span class="line"><span>6. 是否经过异步线程导致 ThreadLocal 丢失</span></span>
<span class="line"><span>7. 是否被网关或服务过滤掉 Header</span></span></code></pre></div>`,24)])])}const b=s(p,[["render",l]]);export{g as __pageData,b as default};
