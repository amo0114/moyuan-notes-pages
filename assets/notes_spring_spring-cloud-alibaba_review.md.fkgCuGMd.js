import{c as s,O as n,i as e,m as i}from"./chunks/framework.BWIk71Uc.js";const g=JSON.parse('{"title":"复习提纲","description":"","frontmatter":{},"headers":[],"relativePath":"notes/spring/spring-cloud-alibaba/review.md","filePath":"notes/spring/spring-cloud-alibaba/review.md","lastUpdated":1779811183000}'),p={name:"notes/spring/spring-cloud-alibaba/review.md"};function l(t,a,c,r,h,d){return n(),e("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1779811183000"},[...a[0]||(a[0]=[i(`<h1 id="复习提纲" tabindex="-1">复习提纲 <a class="header-anchor" href="#复习提纲" aria-label="Permalink to “复习提纲”">​</a></h1><h2 id="_11-1-nacos-discovery-复习点" tabindex="-1">11.1 Nacos Discovery 复习点 <a class="header-anchor" href="#_11-1-nacos-discovery-复习点" aria-label="Permalink to “11.1 Nacos Discovery 复习点”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Nacos Discovery 是服务注册与发现组件。</span></span>
<span class="line"><span>服务启动时注册到 Nacos。</span></span>
<span class="line"><span>消费者通过服务名发现服务实例。</span></span>
<span class="line"><span>服务实例可以多副本部署。</span></span>
<span class="line"><span>调用时通过负载均衡选择一个实例。</span></span>
<span class="line"><span>namespace 和 group 可以做环境与分组隔离。</span></span></code></pre></div><hr><h2 id="_11-2-nacos-config-复习点" tabindex="-1">11.2 Nacos Config 复习点 <a class="header-anchor" href="#_11-2-nacos-config-复习点" aria-label="Permalink to “11.2 Nacos Config 复习点”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Nacos Config 是配置中心。</span></span>
<span class="line"><span>配置可以从本地 application.yml 转移到 Nacos。</span></span>
<span class="line"><span>DataId 通常是 服务名-环境.yml。</span></span>
<span class="line"><span>Spring Boot 2.4+ 推荐用 spring.config.import。</span></span>
<span class="line"><span>@RefreshScope 可以实现动态刷新。</span></span>
<span class="line"><span>共享配置适合放公共配置。</span></span></code></pre></div><hr><h2 id="_11-3-openfeign-复习点" tabindex="-1">11.3 OpenFeign 复习点 <a class="header-anchor" href="#_11-3-openfeign-复习点" aria-label="Permalink to “11.3 OpenFeign 复习点”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>OpenFeign 是声明式 HTTP 客户端。</span></span>
<span class="line"><span>通过 @FeignClient 声明远程服务。</span></span>
<span class="line"><span>通过 @EnableFeignClients 开启扫描。</span></span>
<span class="line"><span>Feign 底层会生成代理对象。</span></span>
<span class="line"><span>调用接口方法时会发起 HTTP 请求。</span></span>
<span class="line"><span>Feign 可以结合 Nacos 做服务发现。</span></span>
<span class="line"><span>Feign 可以结合 Sentinel 做降级。</span></span></code></pre></div><hr><h2 id="_11-4-sentinel-复习点" tabindex="-1">11.4 Sentinel 复习点 <a class="header-anchor" href="#_11-4-sentinel-复习点" aria-label="Permalink to “11.4 Sentinel 复习点”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Sentinel 是流量治理组件。</span></span>
<span class="line"><span>核心概念是资源和规则。</span></span>
<span class="line"><span>资源可以是接口、方法、Feign 调用。</span></span>
<span class="line"><span>规则包括流控、熔断、热点、系统、授权。</span></span>
<span class="line"><span>QPS 限流表示每秒最多通过多少请求。</span></span>
<span class="line"><span>熔断可以按照慢调用比例、异常比例、异常数触发。</span></span>
<span class="line"><span>Sentinel Dashboard 默认懒加载，需要先访问接口。</span></span>
<span class="line"><span>Dashboard 手动配置的规则默认不持久化。</span></span></code></pre></div><hr><h2 id="_11-5-gateway-复习点" tabindex="-1">11.5 Gateway 复习点 <a class="header-anchor" href="#_11-5-gateway-复习点" aria-label="Permalink to “11.5 Gateway 复习点”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Gateway 是微服务统一入口。</span></span>
<span class="line"><span>核心是 Route、Predicate、Filter。</span></span>
<span class="line"><span>Route 表示路由规则。</span></span>
<span class="line"><span>Predicate 判断请求是否匹配。</span></span>
<span class="line"><span>Filter 可以修改请求和响应。</span></span>
<span class="line"><span>lb://服务名 表示通过注册中心负载均衡调用。</span></span>
<span class="line"><span>Spring Cloud 2025 推荐使用 gateway-server-webflux 新 starter 和新属性前缀。</span></span>
<span class="line"><span>Gateway 是 WebFlux 响应式应用，不要混用 Servlet Web。</span></span></code></pre></div><hr><h2 id="_11-6-上下文透传复习点" tabindex="-1">11.6 上下文透传复习点 <a class="header-anchor" href="#_11-6-上下文透传复习点" aria-label="Permalink to “11.6 上下文透传复习点”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>上下文透传是把请求上下文沿调用链传递。</span></span>
<span class="line"><span>常见 Header 有 X-Request-Id、X-User-Id、X-Tenant-Id、Authorization。</span></span>
<span class="line"><span>Gateway 负责生成或校验上下文。</span></span>
<span class="line"><span>下游服务通过 Filter 解析 Header。</span></span>
<span class="line"><span>Feign 通过 RequestInterceptor 继续传递 Header。</span></span>
<span class="line"><span>ThreadLocal 必须在 finally 中 clear。</span></span>
<span class="line"><span>不要无脑信任客户端传来的用户身份 Header。</span></span></code></pre></div><hr><h2 id="_12-一句话总结" tabindex="-1">12. 一句话总结 <a class="header-anchor" href="#_12-一句话总结" aria-label="Permalink to “12. 一句话总结”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Nacos 解决服务在哪里和配置在哪里；</span></span>
<span class="line"><span>OpenFeign 解决服务之间怎么优雅调用；</span></span>
<span class="line"><span>Sentinel 解决流量过大和下游故障时如何保护系统；</span></span>
<span class="line"><span>Gateway 解决微服务统一入口、路由、过滤、鉴权和上下文透传；</span></span>
<span class="line"><span>全链路上下文透传解决一次请求在多个服务之间如何保持身份、租户和追踪信息一致。</span></span></code></pre></div>`,21)])])}const b=s(p,[["render",l]]);export{g as __pageData,b as default};
