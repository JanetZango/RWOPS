import { Injectable } from '@angular/core';
import { apiUrl, buildVersion } from './config';





@Injectable()
export class ConfigService {
    private _apiUrl = apiUrl;
    private _buildVersion = buildVersion;
    constructor() { }
    get apiUrl(): string {
        return this._apiUrl;
    }
    get buildVersion(): string {
        return this._buildVersion;
    }
}
