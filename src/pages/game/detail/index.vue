<template>
  <div>
    <t-card class="game-info-list" :title="$t('pages.gameDetail.gameInfo.title')" :bordered="false">
      <t-row
        class="content"
        justify="space-between"
        :gutter="[
          { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
          { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
        ]"
      >
        <t-col class="contract" :md="12" :lg="6" :xl="4" :xxl="3">
          <div class="contract-title">
            {{ $t('pages.gameDetail.gameInfo.gameIcon') }}
          </div>
          <div class="contract-detail">
            <t-avatar :src="''" />
          </div>
        </t-col>
        <t-col class="contract" :md="12" :lg="6" :xl="4" :xxl="3">
          <div class="contract-title">
            {{ $t('pages.gameDetail.gameInfo.gameName') }}
          </div>
          <div class="contract-detail">
            {{ '游戏名称1' }}
          </div>
        </t-col>
        <t-col class="contract" :md="12" :lg="6" :xl="4" :xxl="3">
          <div class="contract-title">
            {{ $t('pages.gameDetail.gameInfo.gameStatus') }}
          </div>
          <div class="contract-detail">
            <t-tag theme="success">
              {{ $t(`pages.gameDetail.gameInfo.gameStatusValue.${1}`) }}
            </t-tag>
          </div>
        </t-col>
        <t-col class="contract" :md="12" :lg="6" :xl="4" :xxl="3">
          <div class="contract-title">
            {{ $t('pages.gameDetail.gameInfo.operation') }}
          </div>
          <div class="contract-detail">
            <t-space>
              <t-link theme="primary"> {{ $t('pages.gameBase.start') }}</t-link>
              <t-link theme="danger"> {{ $t('pages.gameBase.stop') }}</t-link>
            </t-space>
          </div>
        </t-col>
      </t-row>
    </t-card>
    <t-form
      ref="form"
      class="base-form"
      :data="formData"
      :rules="FORM_RULES"
      label-align="top"
      :label-width="100"
      @reset="onReset"
      @submit="onSubmit"
    >
      <div class="form-basic-container">
        <div class="form-basic-item">
          <div class="form-basic-container-title">{{ $t('pages.gameDetail.form.title') }}</div>
          <!-- 动态表单 -->
          <t-row
            :gutter="[
              { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
              { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
            ]"
          >
            <t-col v-for="[key, value] in Object.entries(PalFormConfig)" :key="key" :md="12" :lg="6" :xl="4" :xxl="3">
              <t-form-item :label="value.unit ? `${value.label}(${value.unit})` : value.label" :name="key">
                <div v-if="['input', 'number', 'text'].includes(value.type)">
                  <t-input v-model="formData[key]" :style="{ width: '322px' }" :placeholder="`请输入${value.label}`" />
                </div>
                <div v-if="['select'].includes(value.type)">
                  <t-select
                    v-model="formData[key]"
                    :style="{ width: '322px' }"
                    class="demo-select-base"
                    :placeholder="`请选择${value.label}`"
                    clearable
                  >
                    <t-option
                      v-for="(item, index) in value.options"
                      :key="index"
                      :value="item.value"
                      :label="item.label"
                    >
                      {{ item.label }}
                    </t-option>
                  </t-select>
                </div>
                <div v-if="['switch'].includes(value.type)">
                  <div :style="{ width: '322px' }">
                    <t-switch v-model="formData[key]" />
                  </div>
                </div>
              </t-form-item>
            </t-col>
          </t-row>
          <t-row :style="{ marginTop: '2rem' }">
            <t-col :span="12">
              <div style="display: flex; justify-content: center; align-items: center">
                <t-space size="small">
                  <t-button theme="primary" type="submit">
                    {{ $t('pages.gameDetail.form.submit') }}
                  </t-button>
                  <t-button theme="default" variant="base" type="reset">
                    {{ $t('pages.gameDetail.form.reset') }}
                  </t-button>
                </t-space>
              </div>
            </t-col>
          </t-row>
        </div>
      </div>
    </t-form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GameDetail',
};
</script>

<script setup lang="ts">
import type { FormRule, SubmitContext } from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';

import { PalFormConfig } from './config';

const formData = ref<Record<string, any>>({});

const FORM_RULES = ref<Record<string, FormRule[]>>({});

const onReset = () => {
  MessagePlugin.warning('取消配置');
};

const onSubmit = (ctx: SubmitContext) => {
  if (ctx.validateResult === true) {
    MessagePlugin.success('新建成功');
  }
};

const init = () => {
  // 生成表单校验规则, TODO: 应该从后端获取到对应的表单动态值之后再生成
  Object.entries(PalFormConfig).forEach(([key, value]) => {
    FORM_RULES.value[key] = [
      {
        required: true,
        message: `请输入${value.label}`,
        type: 'error',
      },
    ];
  });
};

init();
</script>

<style lang="less" scoped>
@import './index.less';
</style>
