<template>
  <div>
    <t-loading :loading="loading" fullscreen />
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
            <t-avatar :image="cardData.PicUrl" />
          </div>
        </t-col>
        <t-col class="contract" :md="12" :lg="6" :xl="4" :xxl="3">
          <div class="contract-title">
            {{ $t('pages.gameDetail.gameInfo.gameName') }}
          </div>
          <div class="contract-detail">
            {{ cardData.Name }}
          </div>
        </t-col>
        <t-col class="contract" :md="12" :lg="6" :xl="4" :xxl="3">
          <div class="contract-title">
            {{ $t('pages.gameDetail.gameInfo.gameStatus') }}
          </div>
          <div class="contract-detail">
            <t-tag theme="success">
              {{ $t(`pages.gameDetail.gameInfo.gameStatusValue.${cardData.IsEnabled ? 1 : 0}`) }}
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
            <t-col v-for="[key, value] in Object.entries(formConfig)" :key="key" :md="12" :lg="6" :xl="4" :xxl="3">
              <t-form-item :label="value.Unit ? `${value.Label}(${value.Unit})` : value.Label" :name="key">
                <div v-if="value.DomType === 'input'">
                  <t-input
                    v-model="formData[key]"
                    :default-value="value.Default"
                    :style="{ width: '322px' }"
                    :placeholder="`请输入${value.Label}`"
                  />
                </div>
                <div v-if="value.DomType === 'inputNumber'">
                  <t-input-number
                    v-model="formData[key]"
                    theme="normal"
                    :default-value="value.Default"
                    :style="{ width: '322px' }"
                    :min="value.Min"
                    :max="value.Max"
                    :placeholder="`请输入${value.Label}`"
                  />
                </div>
                <div v-if="value.DomType === 'select'">
                  <t-select
                    v-model="formData[key]"
                    :style="{ width: '322px' }"
                    :default-input-value="value.Default"
                    :placeholder="`请选择${value.Label}`"
                    clearable
                  >
                    <t-option
                      v-for="(item, index) in value.Options"
                      :key="index"
                      :value="item.Value"
                      :label="item.Label"
                    >
                      {{ item.Label }}
                    </t-option>
                  </t-select>
                </div>
                <div v-if="value.DomType === 'switch'">
                  <div :style="{ width: '322px' }">
                    <t-switch v-model="formData[key]" :default-value="value.Default" />
                  </div>
                </div>
                <div v-if="value.DomType === 'slider'">
                  <t-slider
                    v-model="formData[key]"
                    :default-value="value.Default"
                    :style="{ width: '322px' }"
                    :min="value.Min"
                    :max="value.Max"
                  />
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
import { useRoute, useRouter } from 'vue-router';

import { getContainerDetail } from '@/api/game';
import type { ConfigFieldModel } from '@/api/model/gameModel';

const route = useRoute();
const router = useRouter();

const cardData = ref<Record<string, any>>({});
const formData = ref<Record<string, any>>({});
const loading = ref<boolean>(true);

const FORM_RULES = ref<Record<string, FormRule[]>>({});
const formConfig = ref<Record<string, ConfigFieldModel>>({});

const onReset = () => {
  MessagePlugin.warning('取消配置');
};

const onSubmit = (ctx: SubmitContext) => {
  console.log(formData.value);
  if (ctx.validateResult === true) {
    MessagePlugin.success('新建成功');
  }
};

const init = () => {
  const id = route.query.id as string;

  if (!id) {
    MessagePlugin.error('缺少必要参数, 请前往游戏列表页重新选择');
    router.push({
      name: 'GameBase',
    });
    return;
  }

  getContainerDetail(id)
    .then((res) => {
      cardData.value.Name = res.Game.Name;
      cardData.value.PicUrl = res.Game.PicUrl;
      cardData.value.IsEnabled = res.Game.IsEnabled;

      formConfig.value = res.Game.ConfigFields;

      Object.entries(res.Game.ConfigFields).forEach(([key, value]) => {
        FORM_RULES.value[key] = [
          {
            required: true,
            message: `请输入${value.Label}`,
            type: 'error',
          },
        ];
      });
    })
    .finally(() => {
      loading.value = false;
    });
};

init();
</script>

<style lang="less" scoped>
@import './index.less';
</style>
