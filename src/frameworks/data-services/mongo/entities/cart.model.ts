import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Customer } from './customer.model';
import { Transaction } from './transaction.model'

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop()
  products: Product[];
  @Prop()
  paymentTransaction: Transaction;
  @Prop()
  total: number;
  @Prop()
  customer: Customer;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
