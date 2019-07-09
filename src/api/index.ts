import { apiCreator } from './config';

export const getTelArea = (tel: string) => {
  return apiCreator().get('cc/json/mobile_tel_segment.htm', { params: { tel } } );
}