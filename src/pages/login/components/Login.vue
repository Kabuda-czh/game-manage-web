<template>
  <t-form
    ref="form"
    :class="['item-container', `login-${type}`]"
    :data="formData"
    :rules="FORM_RULES"
    label-width="0"
    @submit="onSubmit"
  >
    <template v-if="type === 'password'">
      <t-form-item name="account">
        <t-input v-model="formData.account" size="large" :placeholder="`${$t('pages.login.input.account')}`">
          <template #prefix-icon>
            <t-icon name="user" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="password">
        <t-input
          v-model="formData.password"
          size="large"
          :type="showPsw ? 'text' : 'password'"
          clearable
          :placeholder="`${$t('pages.login.input.password')}`"
        >
          <template #prefix-icon>
            <t-icon name="lock-on" />
          </template>
          <template #suffix-icon>
            <t-icon :name="showPsw ? 'browse' : 'browse-off'" @click="showPsw = !showPsw" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="captcha">
        <t-input
          v-model="formData.captcha"
          size="large"
          :placeholder="`${$t('pages.login.input.captcha')}`"
          clearable
        />
        <t-image :src="captcha" style="margin-left: 0.5rem; cursor: pointer" @click="getCaptcha" />
      </t-form-item>

      <div class="check-container remember-pwd">
        <t-checkbox>{{ $t('pages.login.remember') }}</t-checkbox>
        <span class="tip">{{ $t('pages.login.forget') }}</span>
      </div>
    </template>

    <t-form-item v-if="type !== 'qrcode'" class="btn-container">
      <t-button block size="large" type="submit"> {{ $t('pages.login.signIn') }} </t-button>
    </t-form-item>
  </t-form>
</template>

<script setup lang="ts">
import cloneDeep from 'lodash/cloneDeep';
import type { FormInstanceFunctions, FormRule, SubmitContext } from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { t } from '@/locales';
import { useUserStore } from '@/store';

const userStore = useUserStore();

const INITIAL_DATA = {
  account: '',
  password: '',
  captcha: '',
  checked: false,
};

const FORM_RULES: Record<string, FormRule[]> = {
  // @ts-ignore
  account: [{ required: true, message: t('pages.login.required.account'), type: 'error' }],
  password: [{ required: true, message: t('pages.login.required.password'), type: 'error' }],
  captcha: [{ required: true, message: t('pages.login.required.captcha'), type: 'error' }],
  verifyCode: [{ required: true, message: t('pages.login.required.verification'), type: 'error' }],
};

const type = ref('password');

const form = ref<FormInstanceFunctions>();
const formData = ref({ ...INITIAL_DATA });
const captcha = ref('');
const showPsw = ref(false);

const router = useRouter();
const route = useRoute();

const onSubmit = async (ctx: SubmitContext) => {
  if (ctx.validateResult === true) {
    try {
      const loginData = cloneDeep(formData.value);
      await userStore.login(loginData);

      MessagePlugin.success('登录成功');
      const redirect = route.query.redirect as string;
      const redirectUrl = redirect ? decodeURIComponent(redirect) : '/dashboard';
      router.push(redirectUrl);
    } catch (e) {
      console.log(e);
      MessagePlugin.error(e.message);
    }
  }
};

const getCaptcha = () => {
  userStore.getCaptcha().then((res) => {
    captcha.value = res;
  });
};

getCaptcha();
</script>

<style lang="less" scoped>
@import '../index.less';
</style>
