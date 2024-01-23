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
  },
  DayTimeSpeedRate: {
    type: 'number',
    label: '白天时间流速',
    unit: '倍',
  },
  NightTimeSpeedRate: {
    type: 'number',
    label: '夜晚时间流速',
    unit: '倍',
  },
  ExpRate: {
    type: 'number',
    label: '经验倍率',
    unit: '倍',
  },
  PalCaptureRate: {
    type: 'number',
    label: '捕捉倍率',
    unit: '倍',
  },
  PalSpawnNumRate: {
    type: 'number',
    label: '刷新倍率',
    unit: '倍',
  },
  PalDamageRateAttack: {
    type: 'number',
    label: '帕鲁攻击倍率',
    unit: '倍',
  },
  PalDamageRateDefense: {
    type: 'number',
    label: '帕鲁防御倍率',
    unit: '倍',
  },
  PlayerDamageRateAttack: {
    type: 'number',
    label: '玩家攻击倍率',
    unit: '倍',
  },
  PlayerDamageRateDefense: {
    type: 'number',
    label: '玩家防御倍率',
    unit: '倍',
  },
  PlayerStomachDecreaceRate: {
    type: 'number',
    label: '玩家饥饿倍率',
    unit: '倍',
  },
  PlayerStaminaDecreaceRate: {
    type: 'number',
    label: '玩家体力倍率',
    unit: '倍',
  },
  PlayerAutoHPRegeneRate: {
    type: 'number',
    label: '玩家自动回血倍率',
    unit: '倍',
  },
  PlayerAutoHpRegeneRateInSleep: {
    type: 'number',
    label: '玩家睡觉回血倍率',
    unit: '倍',
  },
  PalStomachDecreaceRate: {
    type: 'number',
    label: '帕鲁饥饿倍率',
    unit: '倍',
  },
  PalStaminaDecreaceRate: {
    type: 'number',
    label: '帕鲁体力倍率',
    unit: '倍',
  },
  PalAutoHPRegeneRate: {
    type: 'number',
    label: '帕鲁自动回血倍率',
    unit: '倍',
  },
  PalAutoHpRegeneRateInSleep: {
    type: 'number',
    label: '帕鲁睡觉回血倍率',
    unit: '倍',
  },
  BuildObjectDamageRate: {
    type: 'number',
    label: '建筑物损坏倍率',
    unit: '倍',
  },
  BuildObjectDeteriorationDamageRate: {
    type: 'number',
    label: '建筑物腐蚀倍率',
    unit: '倍',
  },
  CollectionDropRate: {
    type: 'number',
    label: '采集掉落倍率',
    unit: '倍',
  },
  CollectionObjectHpRate: {
    type: 'number',
    label: '采集物体血量倍率',
    unit: '倍',
  },
  CollectionObjectRespawnSpeedRate: {
    type: 'number',
    label: '采集物体刷新倍率',
    unit: '倍',
  },
  EnemyDropItemRate: {
    type: 'number',
    label: '敌人掉落倍率',
    unit: '倍',
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
  },
  bEnablePlayerToPlayerDamage: {
    type: 'switch',
    label: '玩家间伤害',
  },
  bEnableFriendlyFire: {
    type: 'switch',
    label: '友军伤害',
  },
  bEnableInvaderEnemy: {
    type: 'switch',
    label: '入侵敌人',
  },
  bActiveUNKO: {
    type: 'switch',
    label: 'UNKO',
  },
  bEnableAimAssistPad: {
    type: 'switch',
    label: '手柄自动瞄准',
  },
  bEnableAimAssistKeyboard: {
    type: 'switch',
    label: '键盘自动瞄准',
  },
  DropItemMaxNum: {
    type: 'number',
    label: '掉落物品最大数量',
    unit: '个',
  },
  DropItemMaxNum_UNKO: {
    type: 'number',
    label: 'UNKO掉落物品最大数量',
    unit: '个',
  },
  BaseCampMaxNum: {
    type: 'number',
    label: '基地最大数量',
    unit: '个',
  },
  BaseCampWorkerMaxNum: {
    type: 'number',
    label: '基地工人最大数量',
    unit: '个',
  },
  DropItemAliveMaxHours: {
    type: 'number',
    label: '掉落物品最大存活时间',
    unit: '小时',
  },
  bAutoResetGuildNoOnlinePlayers: {
    type: 'switch',
    label: '自动重置公会无在线玩家',
  },
  AutoResetGuildTimeNoOnlinePlayers: {
    type: 'number',
    label: '公会无在线玩家自动重置时间',
    unit: '小时',
  },
  GuildPlayerMaxNum: {
    type: 'number',
    label: '公会最大玩家数量',
    unit: '个',
  },
  PalEggDefaultHatchingTime: {
    type: 'number',
    label: '帕鲁蛋默认孵化时间',
    unit: '小时',
  },
  WorkSpeedRate: {
    type: 'number',
    label: '工作速度倍率',
    unit: '倍',
  },
  bIsMultiplay: {
    type: 'switch',
    label: '多人游戏',
  },
  bIsPvP: {
    type: 'switch',
    label: 'PVP',
  },
  bCanPickupOtherGuildDeathPenaltyDrop: {
    type: 'switch',
    label: '可拾取其他公会死亡惩罚物品',
  },
  bEnableNonLoginPenalty: {
    type: 'switch',
    label: '非登录惩罚',
  },
  bEnableFastTravel: {
    type: 'switch',
    label: '快速旅行',
  },
  bIsStartLocationSelectByMap: {
    type: 'switch',
    label: '地图选择开始位置',
  },
  bExistPlayerAfterLogout: {
    type: 'switch',
    label: '退出后角色存在',
  },
  bEnableDefenseOtherGuildPlayer: {
    type: 'switch',
    label: '防御其他公会玩家',
  },
  CoopPlayerMaxNum: {
    type: 'number',
    label: '合作玩家最大数量',
    unit: '个',
  },
  ServerPlayerMaxNum: {
    type: 'number',
    label: '服务器玩家最大数量',
    unit: '个',
  },
  ServerName: {
    type: 'text',
    label: '服务器名称',
  },
  ServerDescription: {
    type: 'text',
    label: '服务器描述',
  },
  AdminPassword: {
    type: 'text',
    label: '管理员密码',
  },
  ServerPassword: {
    type: 'text',
    label: '服务器密码',
  },
  PublicPort: {
    type: 'number',
    label: '公共端口',
  },
  PublicIP: {
    type: 'text',
    label: '公共IP',
  },
  RCONEnabled: {
    type: 'switch',
    label: 'RCON开启',
  },
  RCONPort: {
    type: 'number',
    label: 'RCON端口',
  },
  Region: {
    type: 'text',
    label: '地区',
  },
  bUseAuth: {
    type: 'switch',
    label: '使用验证',
  },
  BanListURL: {
    type: 'text',
    label: '黑名单URL',
  },
};

type FormOptionType = Array<{ label: string; value: string }>;

type FormConfigType<T extends 'text' | 'number' | 'select' | 'switch' | 'date' = any> = {
  type: T;
  label: string;
  unit?: string;
  options?: T extends 'select' ? FormOptionType : undefined;
};
