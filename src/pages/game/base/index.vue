<template>
  <div>
    <t-card class="list-card-container" :bordered="false">
      <t-table
        :data="data"
        :columns="COLUMNS"
        :row-key="rowKey"
        vertical-align="top"
        :hover="true"
        :pagination="pagination"
        :loading="dataLoading"
        :header-affixed-top="headerAffixedTop"
        @page-change="rehandlePageChange"
        @change="rehandleChange"
      >
        <template #op="slotProps">
          <t-space>
            <t-link theme="primary" @click="handleClickDetail()"> {{ $t('pages.gameBase.detail') }}</t-link>
            <t-link theme="primary" @click="handleClickDetail()"> {{ $t('pages.gameBase.start') }}</t-link>
            <t-link theme="danger" @click="handleClickDelete(slotProps)"> {{ $t('pages.gameBase.stop') }}</t-link>
          </t-space>
        </template>
        <template #more="slotProps">
          <t-space>
            <t-link theme="danger" @click="handleClickRefund(slotProps)"> {{ $t('pages.gameBase.refund') }}</t-link>
          </t-space>
        </template>
      </t-table>
    </t-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GameBase',
};
</script>

<script setup lang="ts">
import { Avatar, PrimaryTableCol, Progress, TableRowData } from 'tdesign-vue-next';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { getMyContainerList } from '@/api/game';
import { prefix } from '@/config/global';
import { t } from '@/locales';
import { useSettingStore } from '@/store';

const store = useSettingStore();

const progressColor = (percentage: number): string => {
  if (percentage < 50) {
    return '#13ce66';
  }
  if (percentage < 80) {
    return '#e6a23c';
  }
  return '#ff4949';
};

const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  {
    // @ts-ignore
    title: t('pages.gameBase.gameIcon'),
    colKey: 'Container.Game.PicUrl',
    width: 100,
    align: 'center',
    cell: (h, { row }) => {
      return h(Avatar, {
        size: 'default',
        image: row.Container.Game.PicUrl,
      });
    },
  },
  { title: t('pages.gameBase.gameName'), colKey: 'Container.Game.Name', ellipsis: true, align: 'center' },
  {
    title: t('pages.gameBase.gameCpu'),
    ellipsis: true,
    colKey: 'Container.Status.CPURatio',
    align: 'center',
    cell: (h, { row }) => {
      return h(Progress, {
        percentage: row.Container.Status.CPURatio * 100,
        color: progressColor(row.Container.Status.CPURatio * 100),
      });
    },
  },
  {
    title: t('pages.gameBase.gameMemory'),
    ellipsis: true,
    colKey: 'Container.Status.MemUsed',
    align: 'center',
    cell: (h, { row }) => {
      return h(Progress, {
        percentage: Number((row.Container.Status.MemUsed / row.Container.Status.MemLimit).toFixed(2)) * 100,
        color: progressColor(Number((row.Container.Status.MemUsed / row.Container.Status.MemLimit).toFixed(2)) * 100),
      });
    },
  },
  {
    title: t('pages.gameBase.operation'),
    colKey: 'op',
    align: 'center',
  },
  {
    title: t('pages.gameBase.more'),
    colKey: 'more',
    width: 80,
    align: 'center',
  },
];

const data = ref([]);

const pagination = ref({
  defaultPageSize: 20,
  total: 100,
  defaultCurrent: 1,
});

const dataLoading = ref(false);
const fetchData = async () => {
  dataLoading.value = true;
  try {
    const res = await getMyContainerList();
    data.value = res;
    pagination.value = {
      ...pagination.value,
      total: res.length,
    };
  } catch (e) {
    console.log(e);
  } finally {
    dataLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});

const confirmVisible = ref(false);

const router = useRouter();

const rowKey = 'index';

const rehandlePageChange = (curr: unknown, pageInfo: unknown) => {
  console.log('分页变化', curr, pageInfo);
};

const rehandleChange = (changeParams: unknown, triggerAndData: unknown) => {
  console.log('统一Change', changeParams, triggerAndData);
};

const handleClickDetail = () => {
  router.push('/detail/base');
};

const handleClickDelete = (row: { rowIndex: any }) => {
  confirmVisible.value = true;
};

const handleClickRefund = (row: { rowIndex: any }) => {
  console.log('退款', row);
};

const headerAffixedTop = computed(
  () =>
    ({
      offsetTop: store.isUseTabsRouter ? 48 : 0,
      container: `.${prefix}-layout`,
    }) as any,
);
</script>

<style lang="less" scoped>
.payment-col {
  display: flex;

  .trend-container {
    display: flex;
    align-items: center;
    margin-left: var(--td-comp-margin-s);
  }
}

.list-card-container {
  padding: var(--td-comp-paddingTB-xxl) var(--td-comp-paddingLR-xxl);

  :deep(.t-card__body) {
    padding: 0;
  }
}

.left-operation-container {
  display: flex;
  align-items: center;
  margin-bottom: var(--td-comp-margin-xxl);

  .selected-count {
    display: inline-block;
    margin-left: var(--td-comp-margin-l);
    color: var(--td-text-color-secondary);
  }
}

.search-input {
  width: 360px;
}
</style>
