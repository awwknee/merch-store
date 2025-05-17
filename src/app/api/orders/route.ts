import { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

let orders: any[] = []; // temporarilt stored on server but should also put this into database latterrrrrrrrrrrrr

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, items } = body;

  if (!email || !items || !Array.isArray(items)) {
    return new Response(JSON.stringify({ error: 'Invalid order data' }), {
      status: 400
    });
  }

  const total = items.reduce((sum: number, item: any) => {
    const product = mockProducts.find(p => p.id === item.id);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);

  const newOrder = {
    id: uuidv4(),
    email,
    items,
    total,
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);

  return new Response(JSON.stringify(newOrder), { status: 201 });
}

// Simulate product data lookup from database MAKE DATABASE AHHHHHHHHHHHHHHHHHHHH
const mockProducts = [
    { id: '1', name: 'Key Chain', price: 15, stock: 20 },
    { id: '2', name: 'Sticker Sheet', price: 10, stock: 0 }
];