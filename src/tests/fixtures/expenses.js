import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

export const alternateExpenses = [{
    id: '4',
    description: 'Chocolate Bar',
    note: '',
    amount: 200,
    createdAt: 0
},{
    id: '5',
    description: 'Clothes',
    note: '',
    amount: 8000,
    createdAt: moment(0).subtract(10, 'days').valueOf()
},{
    id: '6',
    description: 'Bus Pass',
    note: '',
    amount: 15000,
    createdAt: moment(0).add(10, 'days').valueOf()
}];