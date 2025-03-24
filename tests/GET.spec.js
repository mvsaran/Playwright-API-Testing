import {test,expect} from '@playwright/test';

test('API GET Request', async ({request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    console.log(response.status());
    const text = await response.text();
    expect(text).toContain('Janet');
    console.log(text);
    console.log(await response.json());
    
});
