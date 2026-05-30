import{c as s,O as n,i,m as e}from"./chunks/framework.BWIk71Uc.js";const g=JSON.parse('{"title":"Spring Cloud Alibaba 2025 微服务组件原理与实战","description":"","frontmatter":{},"headers":[],"relativePath":"notes/spring/spring-cloud-alibaba/index.md","filePath":"notes/spring/spring-cloud-alibaba/index.md","lastUpdated":1779811183000}'),l={name:"notes/spring/spring-cloud-alibaba/index.md"};function p(t,a,r,c,o,d){return n(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1779811183000"},[...a[0]||(a[0]=[e(`<h1 id="spring-cloud-alibaba-2025-微服务组件原理与实战" tabindex="-1">Spring Cloud Alibaba 2025 微服务组件原理与实战 <a class="header-anchor" href="#spring-cloud-alibaba-2025-微服务组件原理与实战" aria-label="Permalink to “Spring Cloud Alibaba 2025 微服务组件原理与实战”">​</a></h1><blockquote><p>教学版本建议：</p><ul><li>JDK：17+</li><li>Spring Boot：3.5.0</li><li>Spring Cloud：2025.0.0</li><li>Spring Cloud Alibaba：2025.0.0.0</li><li>Nacos：3.0.3</li><li>Sentinel：1.8.9</li><li>Spring Cloud OpenFeign：4.3.x</li><li>Spring Cloud Gateway：4.3.x</li></ul></blockquote><h2 id="学习路线" tabindex="-1">学习路线 <a class="header-anchor" href="#学习路线" aria-label="Permalink to “学习路线”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1. 微服务架构认知</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>2. 项目搭建与版本选择</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>3. Nacos 服务注册与发现</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>4. Nacos 配置中心</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>5. OpenFeign 声明式调用</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>6. Sentinel 限流熔断</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>7. Spring Cloud Gateway 网关</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>8. 全链路上下文透传</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>9. 综合实战</span></span></code></pre></div><h2 id="笔记目录" tabindex="-1">笔记目录 <a class="header-anchor" href="#笔记目录" aria-label="Permalink to “笔记目录”">​</a></h2><ul><li><a href="/notes/spring/spring-cloud-alibaba/microservice-architecture.html">微服务架构认知</a> - 单体与微服务对比，微服务带来的问题</li><li><a href="/notes/spring/spring-cloud-alibaba/project-setup.html">项目搭建与版本</a> - 版本选择、父工程搭建、环境准备</li><li><a href="/notes/spring/spring-cloud-alibaba/nacos-discovery.html">Nacos 服务注册与发现</a> - 服务注册、发现、namespace 与 group</li><li><a href="/notes/spring/spring-cloud-alibaba/nacos-config.html">Nacos 配置中心</a> - 配置管理、动态刷新、共享配置</li><li><a href="/notes/spring/spring-cloud-alibaba/openfeign.html">OpenFeign 声明式调用</a> - Feign 接口、参数传递、超时配置</li><li><a href="/notes/spring/spring-cloud-alibaba/sentinel.html">Sentinel 限流熔断</a> - 限流规则、熔断降级、Feign 整合</li><li><a href="/notes/spring/spring-cloud-alibaba/gateway.html">Spring Cloud Gateway</a> - 路由配置、过滤器、跨域处理</li><li><a href="/notes/spring/spring-cloud-alibaba/context-passing.html">全链路上下文透传</a> - Header 透传、ThreadLocal、Feign 拦截器</li><li><a href="/notes/spring/spring-cloud-alibaba/practice.html">综合实战</a> - 完整项目搭建与测试</li><li><a href="/notes/spring/spring-cloud-alibaba/faq.html">常见问题排查</a> - 问题排查清单</li><li><a href="/notes/spring/spring-cloud-alibaba/review.html">复习提纲</a> - 核心知识点总结</li></ul><h2 id="最终实战架构" tabindex="-1">最终实战架构 <a class="header-anchor" href="#最终实战架构" aria-label="Permalink to “最终实战架构”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nacos-server</span></span>
<span class="line"><span>sentinel-dashboard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gateway-service      网关服务，端口 9000</span></span>
<span class="line"><span>order-service        订单服务，端口 8081</span></span>
<span class="line"><span>stock-service        库存服务，端口 8082</span></span></code></pre></div><p>调用链路：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>浏览器 / Postman</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>gateway-service</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>order-service</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>OpenFeign</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>stock-service</span></span></code></pre></div><h2 id="一句话总结" tabindex="-1">一句话总结 <a class="header-anchor" href="#一句话总结" aria-label="Permalink to “一句话总结”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Nacos 解决服务在哪里和配置在哪里；</span></span>
<span class="line"><span>OpenFeign 解决服务之间怎么优雅调用；</span></span>
<span class="line"><span>Sentinel 解决流量过大和下游故障时如何保护系统；</span></span>
<span class="line"><span>Gateway 解决微服务统一入口、路由、过滤、鉴权和上下文透传；</span></span>
<span class="line"><span>全链路上下文透传解决一次请求在多个服务之间如何保持身份、租户和追踪信息一致。</span></span></code></pre></div>`,12)])])}const b=s(l,[["render",p]]);export{g as __pageData,b as default};
