import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class PanasonicEoliaService {
  private client;
  private atkn: string | null = null;
  private userId: string;
  private password: string;

  constructor(
    private readonly httpService: HttpService,
    @Inject('PANASONIC_EOLIA_CONFIG') config: any,
  ) {
    this.userId = config.userId;
    this.password = config.password;

    const options: AxiosRequestConfig = {
      baseURL: config.host ?? 'https://app.rac.apws.panasonic.com',
      headers: {
        'User-Agent': config.userAgent ?? 'aurimasniekis/eoalia-client v1.0',
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept-Language': 'en-us',
      },
    };

    this.client = this.httpService.axiosRef;
    this.client.defaults.baseURL = options.baseURL;
    this.client.defaults.headers = options.headers;

    this.client.interceptors.request.use(
      (requestConfig) => {
        if (this.atkn) {
          requestConfig.headers.Cookie = this.atkn;
        }

        requestConfig.headers['X-Eolia-Date'] = new Date()
          .toLocaleString('sv', { timeZoneName: 'short' })
          .split(' ')
          .slice(0, 2)
          .join('T');

        return requestConfig;
      },
    );

    this.client.interceptors.response.use(
      (response) => {
        if (response.headers['set-cookie'] && response.headers['set-cookie'].length > 0) {
          this.atkn = response.headers['set-cookie'][0].split(';')[0];
        }

        return response;
      },
      (error) => {
        if (error.response.status === 401 || (error.response.status === 400 && !this.atkn)) {
          return this.login(this.userId, this.password).then(() => {
            return this.client.request(error.config);
          });
        }

        return Promise.reject(error);
      },
    );
  }

  async authCheck() {
    const url = '/eolia/v2/auth/login';
    const body = { easy: {} };

    const response = await this.client.post(url, body);

    return response.data;
  }

  async login(id: string, pass: string, terminalType = 3, nextEasy = true) {
    const url = '/eolia/v2/auth/login';
    const body = {
      idpw: {
        id,
        pass,
        terminal_type: terminalType,
        next_easy: nextEasy,
      },
    };

    const response = await this.client.post(url, body);

    if (response.headers['set-cookie'] && response.headers['set-cookie'].length > 0) {
      this.atkn = response.headers['set-cookie'][0].split(';')[0];
    }

    return response.data;
  }

  async logout() {
    const url = '/eolia/v2/auth/logout';

    const response = await this.client.post(url);
    this.atkn = null; // Clear the atkn after logout
    return response.data;
  }

  async productFunctions(productCode: string) {
    const url = `/eolia/v2/products/${productCode}/functions`;

    const response = await this.client.get(url);
    return response.data;
  }

  async devices() {
    const url = '/eolia/v2/devices';

    const response = await this.client.get(url);
    return response.data;
  }

  async deviceStatus(deviceId: string) {
    const url = `/eolia/v2/devices/${deviceId}/status`;

    const response = await this.client.get(url);
    return response.data;
  }

  async deviceUpdate(deviceId: string, body: any) {
    const url = `/eolia/v2/devices/${deviceId}/status`;

    const response = await this.client.put(url, body);
    return response.data;
  }

  async setOperationMode(deviceId: string, mode: string) {
    const status = await this.deviceStatus(deviceId);
    status.operation_mode = mode;

    return this.deviceUpdate(deviceId, status);
  }
}

export const OperationMode = {
  OFF: 'Off',
  AUTO: 'Auto',
  COOLING: 'Cooling',
  HEATING: 'Heating',
  COOL_DEHUMIDIFYING: 'CoolDehumidifying',
  BLAST: 'Blast',
};
