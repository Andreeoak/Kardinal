export interface Card {
  id: number;
  title: string;
  description: string;
  priority?: 'normal' | 'high' | 'urgent'; // optional for backward compatibility
}

export interface List{
  id: number
  title: string
  cards: Card[]
}
