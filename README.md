<!--
 * @Description:
 * @Author: zhanghao
 * @Date: 2022-10-31 15:59:10
 * @LastEditTime: 2023-02-22 14:33:29
 * @LastEditors: zhanghao
-->
# 神笔马良

> 打印模板通用设计器

## 项目结构

TODO:

## 启动方式

1. report-designer 和 magix-composer 安装依赖
```
yarn
```

2.
在项目根目录启动开发调试
```
yarn watch
```

3. 启动调试服务器
需要全局装个 `anwhere`, 其实不装也行, 随便用别的serve 之类的服务都可以
```
yarn server
```

4. 调试页面
启动服务后浏览器会自动打开 `http://localhost:8888`, 这个页面使用的是 dist 下的 js
调试模板设计页面访问`http://localhost:8888/index-debug.html`
调试模板设计页面访问`http://localhost:8888/print-debug.html`
类似`http://localhost:8888/print-debug.html?puppeteer=0&orders=JH230203000011&scene=18&warehouseCode=W0A8&warehouseName=%E7%A6%8F%E5%BB%BA%E4%BC%81%E4%B8%9A%E8%B4%AD22`


## 项目说明

```sql
alter table maliang_print_template_relation
	add tag json default null comment '标签数组格式默认是空';
```

url 参数支持

| 参数      | 说明              |   |   |   |
|-----------|-------------------|---|---|---|
| `orders`  | 订单号,用逗号拼接, 抽象出来的数据组织维度， 一定要用orders作为key |   |   |   |
| `scene`   | 场景              |   |   |   |
| puppeteer | 自助打印静默打印  |   |   |   |
