import { test, expect } from '@playwright/test';

test('API PUT Request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: { // Changed 'data' to 'json'
            "name": "Saran",
            "job": "Sr.SDET"
        }
    });
    expect(response.status()).toBe(200);
    console.log(response.status());

    const text = await response.text();
    expect(text).toContain('Saran');
    console.log(text);

    const jsonResponse = await response.json(); // Store JSON response in a variable
    console.log(jsonResponse);
});
