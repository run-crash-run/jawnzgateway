import { IComment } from 'app/shared/model/jawnzapp/comment.model';

export interface IProduct {
  id?: string;
  description?: string;
  comments?: IComment[];
}

export class Product implements IProduct {
  constructor(public id?: string, public description?: string, public comments?: IComment[]) {}
}
