import 'server-only';

import { headers } from 'next/headers';

import { getParam } from './getParam';

interface BaseData {
  countryCode: string;
  provinceCode: string | null;
  serverIp: string | null;
  userAgent: string | null;
}

interface DataWithDate extends BaseData {
  date: number;
}

export function getServerData(): Promise<BaseData>;

export function getServerData(
  searchParams: Promise<Record<string, string | string[] | undefined>>,
): Promise<DataWithDate>;

export async function getServerData(
  searchParams?: Promise<Record<string, string | string[] | undefined>>,
): Promise<BaseData | DataWithDate> {
  const headerList = await headers();
  const countryCode = headerList.get('x-vercel-ip-country') ?? 'US';
  const provinceCode = headerList.get('x-vercel-ip-country-region');
  const serverIp = headerList.get('x-vercel-ip');
  const userAgent = headerList.get('user-agent');
  let date = Date.now();

  // allow overriding the date when not in production
  if (searchParams && process.env.VERCEL_ENV !== 'production') {
    const parameters = await searchParams;
    const dateOverrideParameter = getParam(parameters.date);
    if (dateOverrideParameter) {
      date = Date.parse(dateOverrideParameter);
    }
  }

  return { countryCode, provinceCode, date, serverIp, userAgent };
};
