import { Moment } from 'moment';
import { IProduct } from 'app/shared/model/jawnzapp/product.model';

export interface IComment {
  id?: string;
  text?: string;
  created?: Moment;
  parent?: IComment;
  product?: IProduct;
}

export class Comment implements IComment {
  constructor(public id?: string, public text?: string, public created?: Moment, public parent?: IComment, public product?: IProduct) {}
}
