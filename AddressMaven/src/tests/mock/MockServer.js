const unknown = 'unknown';

// This class should implement an interface and that interface should also be implemented by LindvedServer.js.
export default class MockServer {
    addresses = [
        {
            _id: unknown,
            _rev: unknown,
            firstName: unknown,
            lastName: unknown,
            street: unknown,
            city: unknown,
            state: unknown,
            zip: unknown,
            phone: unknown,
            website: unknown,
            email: unknown,
            contact: unknown
        },
        {
            _id: 123456789,
            _rev: 9876654321,
            firstName: 'Patty',
            lastName: 'Murray',
            street: '154 Russel Senate Office Building',
            city: 'Washington',
            state: 'D.C.',
            zip: '20510',
            phone: '(202) 224-2621',
            website: 'some.website.org',
            email: 'some@email.org',
            contact: 'someContact'
        }
    ];

    getAddresses = updateCaller => {
        updateCaller(this.addresses);
    };

    mockFetch() {
        global.fetch = jest.fn().mockImplementation(() => {
            const promise = new Promise(resolve => {
                resolve({
                    ok: true,
                    json: function() {
                        return this.addresses;
                    }
                });
            });
            return promise;
        });
    }
}
