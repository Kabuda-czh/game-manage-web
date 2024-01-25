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
  ConfigFields: any;
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
