/** The basic structure of a recipe */
export interface Recipe {

   /** Id from persistance. Also used as a key for react */
   readonly id?: number;
   readonly title: string;
   readonly description: string;
}