# Steps 步骤条

## 组件类型

在TDesign中，拥有两种不同类型的步骤条：横向步骤条、竖向步骤条

### 横向步骤条

### 横向只读步骤条

使用场景：常用于表单页，展示线性流程，且不能随意切回/跳过步骤

::: demo demos/index
:::

## 横向可操作步骤条

使用场景：常用于表单页，展示线性流程，且步骤支持随意切回/跳过

::: demo demos/click
:::

## 横向带图标可操作

使用场景：常用于表单页，展示线性流程，且步骤支持随意切回/跳过

::: demo demos/icon
:::

## 竖向步骤条

### 竖向基础展示

::: demo demos/vertical
:::

### 竖向自定义内容

::: demo demos/content
:::

## API

### Steps Props
名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
current | String / Number | - | 当前步骤。支持语法糖 | N
defaultCurrent | String / Number | - | 当前步骤。非受控属性 | N
layout | String | horizontal | 步骤条方向，有两种：横向和纵向。可选项：horizontal/vertical | N
options | Array | - | 步骤条数据列表（作用和 StepItem 效果一样）。TS 类型：`Array<TdStepItemProps>` | N
readonly | Boolean | false | 是否只读 | N
theme | String | default | 步骤条风格。可选项：default/dot | N
onChange | Function |  | 当前步骤发生变化时触发。`(current: string | number, previous: string | number, context?: { e?: MouseEvent }) => {}` | N

### Steps Events
名称 | 参数 | 描述
-- | -- | --
change | `(current: string | number, previous: string | number, context?: { e?: MouseEvent })` | 当前步骤发生变化时触发


### StepItem Props
名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot / Function | '' | 步骤描述。TS 类型：`string | TNode`。[通用类型定义](/tdesign-mobile-vue/blob/develop/src/common.ts) | N
icon | Boolean / Slot / Function | true | 图标，默认显示内置图标，也可以自定义图标。TS 类型：`boolean | TNode`。[通用类型定义](/tdesign-mobile-vue/blob/develop/src/common.ts) | N
status | String | default | 当前步骤的状态。可选项：default/process/finish/error。TS 类型：`StepStatus`。[详细类型定义](/tdesign-mobile-vue/tree/develop/src/steps/type.ts) | N
title | String / Slot / Function | '' | 标题。TS 类型：`string | TNode`。[通用类型定义](/tdesign-mobile-vue/blob/develop/src/common.ts) | N