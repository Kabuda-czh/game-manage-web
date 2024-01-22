// 应该于后端传入
export const PalFormConfig: Record<string, FormConfigType> = {
  Difficulty: {
    type: 'select',
    label: '难度',
    options: [
      { label: '简单', value: 'Easy' },
      { label: '普通', value: 'Normal' },
      { label: '困难', value: 'Hard' },
      { label: '无限', value: 'Infinite' },
    ],
    span: 6,
  },
  DayTimeSpeedRate: {
    type: 'number',
    label: '白天时间流速',
    unit: '倍',
    span: 6,
  },
  NightTimeSpeedRate: {
    type: 'number',
    label: '夜晚时间流速',
    unit: '倍',
    span: 6,
  },
  ExpRate: {
    type: 'number',
    label: '经验倍率',
    unit: '倍',
    span: 6,
  },
  PalCaptureRate: {
    type: 'number',
    label: '捕捉倍率',
    unit: '倍',
    span: 6,
  },
  PalSpawnNumRate: {
    type: 'number',
    label: '刷新倍率',
    unit: '倍',
    span: 6,
  },
  PalDamageRateAttack: {
    type: 'number',
    label: '帕鲁攻击倍率',
    unit: '倍',
    span: 6,
  },
  PalDamageRateDefense: {
    type: 'number',
    label: '帕鲁防御倍率',
    unit: '倍',
    span: 6,
  },
  PlayerDamageRateAttack: {
    type: 'number',
    label: '玩家攻击倍率',
    unit: '倍',
    span: 6,
  },
  PlayerDamageRateDefense: {
    type: 'number',
    label: '玩家防御倍率',
    unit: '倍',
    span: 6,
  },
  PlayerStomachDecreaceRate: {
    type: 'number',
    label: '玩家饥饿倍率',
    unit: '倍',
    span: 6,
  },
  PlayerStaminaDecreaceRate: {
    type: 'number',
    label: '玩家体力倍率',
    unit: '倍',
    span: 6,
  },
  PlayerAutoHPRegeneRate: {
    type: 'number',
    label: '玩家自动回血倍率',
    unit: '倍',
    span: 6,
  },
  PlayerAutoHpRegeneRateInSleep: {
    type: 'number',
    label: '玩家睡觉回血倍率',
    unit: '倍',
    span: 6,
  },
  PalStomachDecreaceRate: {
    type: 'number',
    label: '帕鲁饥饿倍率',
    unit: '倍',
    span: 6,
  },
  PalStaminaDecreaceRate: {
    type: 'number',
    label: '帕鲁体力倍率',
    unit: '倍',
    span: 6,
  },
  PalAutoHPRegeneRate: {
    type: 'number',
    label: '帕鲁自动回血倍率',
    unit: '倍',
    span: 6,
  },
  PalAutoHpRegeneRateInSleep: {
    type: 'number',
    label: '帕鲁睡觉回血倍率',
    unit: '倍',
    span: 6,
  },
  BuildObjectDamageRate: {
    type: 'number',
    label: '建筑物损坏倍率',
    unit: '倍',
    span: 6,
  },
  BuildObjectDeteriorationDamageRate: {
    type: 'number',
    label: '建筑物腐蚀倍率',
    unit: '倍',
    span: 6,
  },
  CollectionDropRate: {
    type: 'number',
    label: '采集掉落倍率',
    unit: '倍',
    span: 6,
  },
  CollectionObjectHpRate: {
    type: 'number',
    label: '采集物体血量倍率',
    unit: '倍',
    span: 6,
  },
  CollectionObjectRespawnSpeedRate: {
    type: 'number',
    label: '采集物体刷新倍率',
    unit: '倍',
    span: 6,
  },
  EnemyDropItemRate: {
    type: 'number',
    label: '敌人掉落倍率',
    unit: '倍',
    span: 6,
  },
  DeathPenalty: {
    type: 'select',
    label: '死亡惩罚',
    options: [
      { label: '全部', value: 'All' },
      { label: '经验', value: 'Exp' },
      { label: '金钱', value: 'Money' },
      { label: '物品', value: 'Item' },
      { label: '无', value: 'None' },
    ],
    span: 6,
  },
  bEnablePlayerToPlayerDamage: {
    type: 'switch',
    label: '玩家间伤害',
    span: 6,
  },
  bEnableFriendlyFire: {
    type: 'switch',
    label: '友军伤害',
    span: 6,
  },
  bEnableInvaderEnemy: {
    type: 'switch',
    label: '入侵敌人',
    span: 6,
  },
  bActiveUNKO: {
    type: 'switch',
    label: 'UNKO',
    span: 6,
  },
  bEnableAimAssistPad: {
    type: 'switch',
    label: '手柄自动瞄准',
    span: 6,
  },
  bEnableAimAssistKeyboard: {
    type: 'switch',
    label: '键盘自动瞄准',
    span: 6,
  },
  DropItemMaxNum: {
    type: 'number',
    label: '掉落物品最大数量',
    unit: '个',
    span: 6,
  },
  DropItemMaxNum_UNKO: {
    type: 'number',
    label: 'UNKO掉落物品最大数量',
    unit: '个',
    span: 6,
  },
  BaseCampMaxNum: {
    type: 'number',
    label: '基地最大数量',
    unit: '个',
    span: 6,
  },
  BaseCampWorkerMaxNum: {
    type: 'number',
    label: '基地工人最大数量',
    unit: '个',
    span: 6,
  },
  DropItemAliveMaxHours: {
    type: 'number',
    label: '掉落物品最大存活时间',
    unit: '小时',
    span: 6,
  },
  bAutoResetGuildNoOnlinePlayers: {
    type: 'switch',
    label: '自动重置公会无在线玩家',
    span: 6,
  },
  AutoResetGuildTimeNoOnlinePlayers: {
    type: 'number',
    label: '公会无在线玩家自动重置时间',
    unit: '小时',
    span: 6,
  },
  GuildPlayerMaxNum: {
    type: 'number',
    label: '公会最大玩家数量',
    unit: '个',
    span: 6,
  },
  PalEggDefaultHatchingTime: {
    type: 'number',
    label: '帕鲁蛋默认孵化时间',
    unit: '小时',
    span: 6,
  },
  WorkSpeedRate: {
    type: 'number',
    label: '工作速度倍率',
    unit: '倍',
    span: 6,
  },
  bIsMultiplay: {
    type: 'switch',
    label: '多人游戏',
    span: 6,
  },
  bIsPvP: {
    type: 'switch',
    label: 'PVP',
    span: 6,
  },
  bCanPickupOtherGuildDeathPenaltyDrop: {
    type: 'switch',
    label: '可拾取其他公会死亡惩罚物品',
    span: 6,
  },
  bEnableNonLoginPenalty: {
    type: 'switch',
    label: '非登录惩罚',
    span: 6,
  },
  bEnableFastTravel: {
    type: 'switch',
    label: '快速旅行',
    span: 6,
  },
  bIsStartLocationSelectByMap: {
    type: 'switch',
    label: '地图选择开始位置',
    span: 6,
  },
  bExistPlayerAfterLogout: {
    type: 'switch',
    label: '退出后角色存在',
    span: 6,
  },
  bEnableDefenseOtherGuildPlayer: {
    type: 'switch',
    label: '防御其他公会玩家',
    span: 6,
  },
  CoopPlayerMaxNum: {
    type: 'number',
    label: '合作玩家最大数量',
    unit: '个',
    span: 6,
  },
  ServerPlayerMaxNum: {
    type: 'number',
    label: '服务器玩家最大数量',
    unit: '个',
    span: 6,
  },
  ServerName: {
    type: 'text',
    label: '服务器名称',
    span: 6,
  },
  ServerDescription: {
    type: 'text',
    label: '服务器描述',
    span: 6,
  },
  AdminPassword: {
    type: 'text',
    label: '管理员密码',
    span: 6,
  },
  ServerPassword: {
    type: 'text',
    label: '服务器密码',
    span: 6,
  },
  PublicPort: {
    type: 'number',
    label: '公共端口',
    span: 6,
  },
  PublicIP: {
    type: 'text',
    label: '公共IP',
    span: 6,
  },
  RCONEnabled: {
    type: 'switch',
    label: 'RCON开启',
    span: 6,
  },
  RCONPort: {
    type: 'number',
    label: 'RCON端口',
    span: 6,
  },
  Region: {
    type: 'text',
    label: '地区',
    span: 6,
  },
  bUseAuth: {
    type: 'switch',
    label: '使用验证',
    span: 6,
  },
  BanListURL: {
    type: 'text',
    label: '黑名单URL',
    span: 6,
  },
};

type FormOptionType = Array<{ label: string; value: string }>;

type FormConfigType<T extends 'text' | 'number' | 'select' | 'switch' | 'date' = any> = {
  type: T;
  label: string;
  unit?: string;
  options?: T extends 'select' ? FormOptionType : undefined;
  span?: number;
};
