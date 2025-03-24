import { test, expect } from '@playwright/test';

test('API POST Request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: { // Changed 'data' to 'json'
            "name": "Saran",
            "job": "SDET"
        }
    });
    expect(response.status()).toBe(201);
    console.log(response.status());

    const text = await response.text();
    expect(text).toContain('Saran');
    console.log(text);

    const jsonResponse = await response.json(); // Store JSON response in a variable
    console.log(jsonResponse);
});
