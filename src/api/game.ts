import type { ContainerListResult } from '@/api/model/gameModel';
import { request } from '@/utils/request';

const Api = {
  MyContainerList: '/game/my-container-list',
  ContainerDetail: '/game/container-detail',
};

export function getMyContainerList() {
  return request.get<ContainerListResult[]>({
    url: Api.MyContainerList,
  });
}

export function getContainerDetail(containerid: string) {
  return request.get<any>({
    url: `${Api.ContainerDetail}/${containerid}`,
  });
}
