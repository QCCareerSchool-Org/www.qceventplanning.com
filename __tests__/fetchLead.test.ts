import { isErrorResult, isSuccessResult } from 'generic-result-type';

import { fetchLead, fetchLeadFromString } from '@/lib/fetchLead';
import type { UUID } from '@/lib/uuid';

const validLeadId: UUID = '123e4567-e89b-12d3-a456-426614174000';

const lead = {
  leadId: validLeadId,
  emailAddress: 'test@example.com',
  telephoneNumber: '15551234567',
  firstName: 'Test',
  lastName: 'User',
  city: 'Toronto',
  countryCode: 'CA',
  provinceCode: 'ON',
  ip: '127.0.0.1',
  created: 1740000000000,
};

describe('fetchLead', () => {
  const fetchMock = jest.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    global.fetch = fetchMock;
  });

  it('returns a success result when the API returns a valid lead', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => Promise.resolve(lead),
    } as Response);

    const result = await fetchLead(validLeadId);

    expect(fetchMock).toHaveBeenCalledWith(
      'https://leads.qccareerschool.com/leads/123e4567-e89b-12d3-a456-426614174000',
    );
    expect(isSuccessResult(result)).toBe(true);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.value).toEqual(lead);
    }
  });

  it('returns a failure result when the response is not ok', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
    } as Response);

    const result = await fetchLead(validLeadId);

    expect(isErrorResult(result)).toBe(true);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.message).toBe('Unable to fetch lead');
    }
  });

  it('returns a failure result when the API payload is not a lead', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => Promise.resolve({ leadId: validLeadId }),
    } as Response);

    const result = await fetchLead(validLeadId);

    expect(isErrorResult(result)).toBe(true);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.message).toBe('Unexpected response');
    }
  });

  it('returns a failure result when fetch rejects', async () => {
    fetchMock.mockRejectedValue(Error('network down'));

    const result = await fetchLead(validLeadId);

    expect(isErrorResult(result)).toBe(true);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.message).toBe('network down');
    }
  });
});

describe('fetchLeadFromString', () => {
  const fetchMock = jest.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    global.fetch = fetchMock;
  });

  it('returns a failure result for an invalid UUID without calling fetch', async () => {
    const result = await fetchLeadFromString('not-a-uuid');

    expect(fetchMock).not.toHaveBeenCalled();
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.message).toBe('Invalid lead id');
    }
  });

  it('delegates to fetchLead for a valid UUID string', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => Promise.resolve(lead),
    } as Response);

    const result = await fetchLeadFromString(validLeadId);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(isSuccessResult(result)).toBe(true);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.value).toEqual(lead);
    }
  });
});
