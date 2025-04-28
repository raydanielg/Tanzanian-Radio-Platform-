export interface RadioStation {
  changeuuid: string;
  stationuuid: string;
  name: string;
  url: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  tags: string;
  country: string;
  countrycode: string;
  language: string;
  votes: number;
  lastchangetime: string;
  codec: string;
  bitrate: number;
  clickcount: number;
  clicktrend: number;
  ssl_error: number;
  geo_lat: null | number;
  geo_long: null | number;
  has_extended_info: boolean;
}