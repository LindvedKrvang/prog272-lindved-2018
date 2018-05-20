const unknown = 'unknown';
export default class MockServer {
    getAddresses = () => {
        return [
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
    };
}
// const addresses = [
//     {
//         firstName: unknown,
//         lastName: unknown,
//         street: unknown,
//         city: unknown,
//         state: unknown,
//         zip: unknown,
//         phone: unknown,
//         fax: unknown,
//         tollFree: unknown
//     },
//     {
//         firstName: 'Patty',
//         lastName: 'Murray',
//         street: '154 Russel Senate Office Building',
//         city: 'Washington',
//         state: 'D.C.',
//         zip: '20510',
//         phone: '(202) 224-2621',
//         fax: '(202) 224-0238',
//         tollFree: '(866) 481-9186'
//     }
// ];
