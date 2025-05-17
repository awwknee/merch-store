export function GET() {
    const products = [
      { id: '1', name: 'Key Chain', price: 15, stock: 20 },
      { id: '2', name: 'Sticker Sheet', price: 10, stock: 0 }

      // make database instead sdklkljsdflj pain, use amazon dynamodb, it's FREE
    ];
    return Response.json(products);
}