import { test, expect } from '@playwright/test';
import credentials from '../testdata/credentials.json'
import booking from '../testdata/bookingdata.json'
import updated from '../testdata/updated.json'

test('API testing with Playwright', async ({ request }) => {

    let url = 'https://restful-booker.herokuapp.com'
    // API call to authenticate and get a token
    const r1 = await request.post(`${url}/auth`, {
        data: {
            username: credentials.username,
            password: credentials.password
        }
    })
    // Assert authentication response
    test.expect(r1.status()).toBe(200);
    const token = await r1.json();
    test.expect(token).toHaveProperty('token');
    console.log(token);

    //API to get booking ids
    let r2 = await request.get(`${url}/booking`);
    test.expect(r2.status()).toBe(200);
    const bookingIds = await r2.json();
    test.expect(Array.isArray(bookingIds)).toBeTruthy();
    console.log(bookingIds);

    // API to create a new booking
    let r3 = await request.post(`${url}/booking`, {
        data: {
            "firstname": booking.firstname,
            "lastname": booking.lastname,
            "totalprice": booking.totalprice,
            "depositpaid": booking.depositpaid,
            "bookingdates": booking.bookingdates,
            "additionalneeds": booking.additionalneeds
        }
    });
    test.expect(r3.status()).toBe(200);
    const newBooking = await r3.json();
    test.expect(newBooking).toHaveProperty('bookingid');
    test.expect(newBooking).toHaveProperty('booking');
    console.log(newBooking);

    //API to update the booking
    let r4 = await request.put(`${url}/booking/${newBooking.bookingid}`, {
        data: {
            "firstname": updated.firstname,
            "lastname": updated.lastname,
            "totalprice": updated.totalprice,
            "depositpaid": updated.depositpaid,
            "bookingdates": updated.bookingdates,
            "additionalneeds": updated.additionalneeds
        },
        headers: {
            Cookie: `token=${token.token}`
        }
    });
    test.expect(r4.status()).toBe(200);
    const updatedBooking = await r4.json();
    test.expect(updatedBooking.firstname).toBe(updated.firstname);
    test.expect(updatedBooking.lastname).toBe(updated.lastname);
    console.log(updatedBooking);

    //API to get the updated booking
    let r5 = await request.get(`${url}/booking/${newBooking.bookingid}`);
    test.expect(r5.status()).toBe(200);
    const getUpdatedBooking = await r5.json();
    test.expect(getUpdatedBooking.firstname).toBe(updated.firstname);
    test.expect(getUpdatedBooking.lastname).toBe(updated.lastname);
    console.log(getUpdatedBooking);

})
