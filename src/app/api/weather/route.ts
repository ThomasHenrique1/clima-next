/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';

const API_KEY = '577f94e725c3490c956132819251302';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');
  const days = searchParams.get('days') || '1'; // Padrão para 1 dia

  if (!location) {
    return NextResponse.json({ error: 'Localização não fornecida' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=8&lang=pt`
    );
    const data = await response.json();

    if (data.error) {
      return NextResponse.json({ error: 'Local não encontrado' }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar dados do clima' }, { status: 500 });
  }
}