const unknown = 'unknown';

// This class should implement an interface and that interface should also be implemented by LindvedServer.js.
export default class MockServer {
    addresses = [
        {
            firstName: unknown,
            lastName: unknown,
            street: unknown,
            city: unknown,
            state: unknown,
            zip: unknown,
            phone: unknown,
            fax: unknown,
            tollFree: unknown
        },
        {
            firstName: 'Patty',
            lastName: 'Murray',
            street: '154 Russel Senate Office Building',
            city: 'Washington',
            state: 'D.C.',
            zip: '20510',
            phone: '(202) 224-2621',
            fax: '(202) 224-0238',
            tollFree: '(866) 481-9186'
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
