export interface ContainerListResult {
  Container: ContainerModel;
  User: any;
}

export interface ContainerModel {
  ContainerId: string;
  ContainerName: string;
  Game: GameModel;
  GameConfig: GameConfigModel[];
  IsEnabled: boolean;
  Server: any;
  State: number;
  Status: StatusModel;
}

interface GameModel {
  AddTime: Date;
  AddedByUser: any;
  ConfigFields: Record<string, ConfigFieldModel>;
  ConfigFilePath: string;
  ConfigFileSchema: number;
  GameId: string;
  IsEnabled: boolean;
  Name: string;
  PicUrl: string;
}

interface GameConfigModel {
  Key: string;
  Value: number;
}

interface StatusModel {
  CPUCount: number;
  CPURatio: number;
  FinishedTime: Date;
  IPAddress: string;
  ImageName: string;
  LastStatus: any;
  MemLimit: number;
  MemUsed: number;
  PortForward: any;
  StartedTime: Date;
  StartupCommand: any;
}

interface IConfigFieldModelBase {
  Label: string;
  Show?: boolean;
  Unit?: string;
}

interface IConfigFieldModelInput extends IConfigFieldModelBase {
  DomType: 'input';
  Default: string | number;
}

interface IConfigFieldModelInputNumber extends IConfigFieldModelBase {
  DomType: 'inputNumber';
  Default: number;
  Min?: number;
  Max?: number;
  Step?: number;
}

type FormOptionType = Array<{ Label: string; Value: string }>;
interface IConfigFieldModelSelect extends IConfigFieldModelBase {
  DomType: 'select';
  Default: string;
  Options: FormOptionType;
}

interface IConfigFieldModelSwitch extends IConfigFieldModelBase {
  DomType: 'switch';
  Default: boolean;
}

interface IConfigFieldModelSlider extends IConfigFieldModelBase {
  DomType: 'slider';
  Default: number | number[];
  Min?: number;
  Max?: number;
  Step?: number;
}

export type ConfigFieldModel =
  | IConfigFieldModelInput
  | IConfigFieldModelInputNumber
  | IConfigFieldModelSelect
  | IConfigFieldModelSwitch
  | IConfigFieldModelSlider;
