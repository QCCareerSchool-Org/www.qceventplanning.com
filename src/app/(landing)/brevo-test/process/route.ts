import * as brevo from '@getbrevo/brevo';
import { z, ZodError } from 'zod';
import { zfd } from 'zod-form-data';

export const dynamic = 'force-dynamic'; // defaults to auto

const schema = zfd.formData({
  firstName: zfd.text(z.string().max(191).optional()),
  lastName: zfd.text(z.string().max(191).optional()),
  emailAddress: zfd.text(z.string().email()),
  emailOptIn: zfd.checkbox(),
  countryCode: zfd.text(z.string().length(2).optional()),
});

const listIds = [ 2 ];

export const POST = async (request: Request): Promise<Response> => {
  try {
    const { firstName, emailAddress, emailOptIn, countryCode } = await schema.parseAsync(await request.formData());

    const apiInstance = new brevo.ContactsApi();
    apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY ?? '');

    const result = await apiInstance.createContact({
      email: emailAddress,
      listIds: emailOptIn ? listIds : undefined,
      updateEnabled: true,
      attributes: {
        FIRSTNAME: firstName,
        COUNTRY_CODE: countryCode?.toLocaleUpperCase(),
      },
    });

    if (result.response.complete) {
      //
    }

    return Response.json({ firstName, emailAddress, emailOptIn });
  } catch (err) {
    if (err instanceof ZodError) {
      return Response.json({ message: 'Invalid request', errors: err.errors }, { status: 400 });
    }
    if (err instanceof Error) {
      console.log(err.message);
    }
    return Response.json({ message: 'Unknown error' }, { status: 500 });
  }
};
