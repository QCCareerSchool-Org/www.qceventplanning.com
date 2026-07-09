<?php
require 'vendor/autoload.php';

use Symfony\Component\HttpClient\HttpClient;

$basePath = "https://{$_ENV['ACTIVE_CAMPAIGN_ACCOUNT']}.api-us1.com/api/3";
$apiToken = $_ENV['ACTIVE_CAMPAIGN_API_TOKEN'];

function acAddStudent(string $emailAddress, string $firstName, string $lastName, string $telephoneNumber, string $countryCode, ?string $provinceCode, string $city): bool
{
        $contact = [
                'email' => $emailAddress,
                'firstName' => $firstName,
                'lastName' => $lastName,
                'phone' => $telephoneNumber,
                'fieldValues' => [
                        [ 'field' => '2', 'value' => $countryCode ],
                        [ 'field' => '3', 'value' => $provinceCode ],
                        [ 'field' => '4', 'value' => $city ],
                ],
        ];

        $contactResult = acPostContactSync($contact);
        if (isset($contactResult['error'])) {
                return false;
        }

        $contactId = $contactResult['contact']['id'];

        $contactTag = [ 'contact' => $contactId, 'tag' => '38' ];

        $contactTagResult = acPostContactTags($contactTag);
        if (isset($contactTagResult['error'])) {
                return false;
        }

        // 1 SUBSCRIBED
        // 2 UNSUBSCRIBED
        $contactList = [ 'contact' => $contactId, 'list' => '37', 'status' => '1' ];

        $contactListResult = acPostContactLists($contactList);
        if (isset($contactListResult['error'])) {
                return false;
        }

        return true;
}


function acPostContactSync(array $contact)
{
        $payload = [ 'contact' => $contact ];
        return acRequest('POST', '/contact/sync', $payload);
}

function acPostContactTags(array $contactTag)
{
        $payload = [ 'contactTag' => $contactTag ];
        return acRequest('POST', '/contactTags', $payload);
}

function acPostContactLists(array $contactList)
{
        $payload = [ 'contactList' => $contactList ];
        return acRequest('POST', '/contactLists', $payload);
}

function acRequest(string $method, string $path, array $payload)
{
        global $basePath, $apiToken;

        $url = "$basePath$path";

        $client = HttpClient::create();

        try {
                $response = $client->request($method, $url, [
                        'json' => $payload,
                        'headers' => [
                                'Content-Type' => 'application/json',
                                'Api-Token' => $apiToken
                        ],
                ]);

                $data = $response->toArray();

        } catch (TransportExceptionInterface $e) {
                // Network-level issues (DNS failure, connection timeout, server offline)
                error_log('Network error: ' . $e->getMessage());
                $data = [ 'error' => 'API is currently unreachable.' ];

        } catch (HttpExceptionInterface $e) {
                // Server responded with an error code (4xx or 5xx)
                error_log('API responded with status code: ' . $e->getResponse()->getStatusCode());
                $data = [ 'error' => 'The external service returned an error.' ];

        } catch (\Throwable $e) {
                // Catch-all for absolutely anything else (JSON decoding failures, syntax errors, etc.)
                error_log('Unexpected fatal error: ' . $e->getMessage());
                $data = [ 'error' => 'An unexpected error occurred.' ];
        }

        return $data;
}
                                                                                