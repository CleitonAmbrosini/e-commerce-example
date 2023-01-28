import axios from 'axios';

describe('API tests', () => {
  it('Should return order total value', async () => {
    const { data } = await axios.post('http://localhost:3000/orderPreview', {
      cpf: '471.418.290-08',
      orderItems: [
        { id: 1, quantity: 1 },
        { id: 2, quantity: 2 },
      ],
    });

    expect(data.total).toBe(104.5);
  });
});
